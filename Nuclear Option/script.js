
// --- FILTERING LOGIC ---
const activeFilters = { cat: [], guid: [], tgt: [], compat: 'all' };

const groupsOrder = ['a2a', 'a2g', 'bomb', 'gun', 'spec', 'surf'];

// Get translated group titles
function getGroupTitle(key) {
    return typeof t === 'function' ? t('group.' + key) : {
        a2a: "РАКЕТЫ ВОЗДУХ-ВОЗДУХ",
        a2g: "РАКЕТЫ ВОЗДУХ-ЗЕМЛЯ",
        bomb: "БОМБОВОЕ ВООРУЖЕНИЕ",
        gun: "СТРЕЛКОВОЕ ПУШЕЧНОЕ",
        spec: "СПЕЦИАЛЬНОЕ / ЯДЕРНОЕ",
        surf: "НАЗЕМНОЕ ПВО / ПРО"
    }[key];
}
const groupColors = {
    a2a: "text-blue-400 border-blue-900 bg-blue-900/10",
    a2g: "text-emerald-400 border-emerald-900 bg-emerald-900/10",
    bomb: "text-yellow-400 border-yellow-900 bg-yellow-900/10",
    gun: "text-gray-400 border-gray-700 bg-gray-800/20",
    spec: "text-purple-400 border-purple-900 bg-purple-900/10",
    surf: "text-red-400 border-red-900 bg-red-900/10"
};

function toggleFilterPanel() {
    document.getElementById('filter-panel').classList.toggle('hidden');
}

function toggleChip(group, value, btn) {
    const idx = activeFilters[group].indexOf(value);
    if (idx > -1) { activeFilters[group].splice(idx, 1); btn.classList.remove('active'); }
    else { activeFilters[group].push(value); btn.classList.add('active'); }
    
    if(group === 'cat') updateTargetFilterState();
    runFilters();
}

function updateTargetFilterState() {
    const tgtBtns = document.querySelectorAll('.filter-chip[data-tgt]');
    if (activeFilters.cat.length === 0) {
        tgtBtns.forEach(btn => btn.classList.remove('disabled'));
        return;
    }
    const validTargets = new Set();
    weapons.forEach(w => {
        if (activeFilters.cat.includes(w.cat)) {
            if(w.f_tgt) w.f_tgt.split(' ').forEach(t => validTargets.add(t));
        }
    });
    tgtBtns.forEach(btn => {
        const tVal = btn.getAttribute('data-tgt');
        let isValid = false;
        validTargets.forEach(vt => { if (vt.includes(tVal)) isValid = true; });
        if (isValid) {
            btn.classList.remove('disabled');
        } else {
            btn.classList.add('disabled');
            const idx = activeFilters.tgt.indexOf(tVal);
            if (idx > -1) {
                activeFilters.tgt.splice(idx, 1);
                btn.classList.remove('active');
            }
        }
    });
}

function resetFilters() {
    activeFilters.cat = []; activeFilters.guid = []; activeFilters.tgt = []; activeFilters.compat = 'all';
    document.querySelectorAll('.filter-chip').forEach(b => {
        b.classList.remove('active');
        b.classList.remove('disabled');
    });
    document.getElementById('compat-select').value = 'all';
    document.getElementById('search-input').value = '';
    runFilters();
}

function runFilters() {
    const compatVal = document.getElementById('compat-select').value;
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const tb = document.getElementById('db-body');
    const noRes = document.getElementById('no-results');
    tb.innerHTML = '';
    
    let filteredWeapons = weapons.filter(w => {
        if(w.id === 'none') return false;
        if (activeFilters.cat.length > 0 && !activeFilters.cat.includes(w.cat)) return false;
        if (activeFilters.guid.length > 0 && !activeFilters.guid.includes(w.f_guid)) return false;
        if (activeFilters.tgt.length > 0 && !activeFilters.tgt.some(t => w.f_tgt.includes(t))) return false;
        if (compatVal !== 'all' && !w.compat.includes('all') && !w.compat.includes(compatVal)) return false;
        if (searchVal !== '' && !(w.name + w.desc + w.targets).toLowerCase().includes(searchVal)) return false;
        return true;
    });

    if(filteredWeapons.length === 0) {
        noRes.classList.remove('hidden');
        return;
    } else {
        noRes.classList.add('hidden');
    }

    groupsOrder.forEach(gKey => {
        const groupItems = filteredWeapons.filter(w => w.cat === gKey);
        if(groupItems.length > 0) {
            const headerRow = document.createElement('tr');
            headerRow.className = "table-section-header";
            headerRow.innerHTML = `
                <td colspan="6" class="py-3 px-4 font-bold text-sm tracking-widest uppercase border-b border-emerald-900 ${groupColors[gKey]}">
                    <i class="fas fa-layer-group mr-2"></i> ${getGroupTitle(gKey)}
                </td>
            `;
            tb.appendChild(headerRow);

            groupItems.forEach(w => {
                const tr = document.createElement('tr');
                tr.className = "hover:bg-emerald-900/10 transition border-b border-emerald-900";
                
                let catBadge = "";
                if(w.cat==='a2a') catBadge = '<span class="px-2 py-1 bg-blue-900/30 text-blue-400 border border-blue-900 font-bold text-[10px]">AIR</span>';
                else if(w.cat==='a2g') catBadge = '<span class="px-2 py-1 bg-emerald-900/30 text-emerald-400 border border-emerald-900 font-bold text-[10px]">GND</span>';
                else if(w.cat==='bomb') catBadge = '<span class="px-2 py-1 bg-yellow-900/30 text-yellow-400 border border-yellow-900 font-bold text-[10px]">BOMB</span>';
                else if(w.cat==='spec') catBadge = '<span class="px-2 py-1 bg-purple-900/30 text-purple-400 border border-purple-900 font-bold text-[10px]">SPEC</span>';
                else if(w.cat==='gun') catBadge = '<span class="px-2 py-1 bg-gray-700/30 text-gray-400 border border-gray-600 font-bold text-[10px]">GUN</span>';
                else if(w.cat==='surf') catBadge = '<span class="px-2 py-1 bg-red-900/30 text-red-400 border border-red-900 font-bold text-[10px]">SAM</span>';

                // Get translated labels
                const compatLabel = typeof t === 'function' ? t('compat.label') : 'СОВМ:';
                const compatAll = typeof t === 'function' ? t('compat.all') : 'Все';
                const compatGround = typeof t === 'function' ? t('compat.ground_only') : 'Только наземное';
                
                let compatStr = "";
                if(w.compat.includes("none")) compatStr = compatGround;
                else if(w.compat.includes("all")) compatStr = compatAll;
                else {
                    compatStr = w.compat.map(c => {
                        if(planes[c]) return planes[c].name.split(' ')[0];
                        return c;
                    }).join(', ');
                }

                // Get translated weapon fields
                const wGuid = getWeaponField(w, 'guid');
                const wTargets = getWeaponField(w, 'targets');
                const wDesc = getWeaponField(w, 'desc');
                const wRange = w.rangeKey ? getWeaponField(w, 'range') : w.range;

                tr.innerHTML = `
                    <td class="font-bold text-emerald-50 whitespace-nowrap pl-4">${w.name}</td>
                    <td>${catBadge}</td>
                    <td class="text-xs text-teal-300 font-mono">${wGuid}</td>
                    <td class="text-xs text-emerald-300 font-mono">
                        <div><i class="fas fa-crosshairs text-[10px] w-4"></i> ${wRange}</div>
                        <div class="text-emerald-500"><i class="fas fa-bolt text-[10px] w-4"></i> ${w.speed}</div>
                    </td>
                    <td class="text-xs text-emerald-400 font-bold max-w-[150px] truncate" title="${wTargets}">${wTargets}</td>
                    <td class="text-xs text-emerald-500/70">
                        <div class="italic text-emerald-200 mb-1">${wDesc}</div>
                        <div class="text-[10px] text-emerald-700">${compatLabel} ${compatStr}</div>
                    </td>
                `;
                tb.appendChild(tr);
            });
        }
    });
}

// --- CONFIGURATOR LOGIC ---
function loadPlane() {
    const pid = document.getElementById('plane-select').value;
    const pBox = document.getElementById('plane-img-container');
    const stats = document.getElementById('stats-box');
    const grid = document.getElementById('pylons-area');

    if(pid === 'none') {
        pBox.classList.add('hidden'); stats.classList.add('hidden');
        grid.innerHTML = '<div class="col-span-full py-20 text-center text-emerald-800 border-2 border-dashed border-emerald-900 bg-black/20"><i class="fas fa-fighter-jet text-4xl mb-4 opacity-50"></i><br>ВЫБЕРИТЕ НОСИТЕЛЬ</div>';
        return;
    }

    const p = planes[pid];
    pBox.classList.remove('hidden');
    stats.classList.remove('hidden');
    document.getElementById('val-max').innerText = p.max;
    
    // Set aircraft image with fade-in animation
    const planeImg = document.getElementById('plane-img');
    if(p.img) {
        planeImg.style.transition = 'opacity 0.3s ease-out';
        planeImg.style.opacity = '0';
        
        setTimeout(() => {
            planeImg.src = p.img;
            planeImg.alt = p.name;
            planeImg.onload = () => {
                planeImg.style.opacity = '1';
            };
        }, 150);
    }

    grid.innerHTML = '';
    window.currentLoadout = new Array(p.pylons.length).fill(0);

    p.pylons.forEach((cap, i) => {
        let opts = `<option value="none" data-mass="0">${t('config.empty')}</option>`;
        
        // Filter by pylonWeapons (exact pylon-specific) or fallback to mass+compat
        const pylonType = p.pylonTypes?.[i];
        const valid = weapons.filter(w => {
            if (w.id === 'none') return false;
            if (w.cat === 'surf' || w.cat === 'gun') return false;
            if (w.mass > cap) return false;
            
            // If pylonWeapons defined, use exact pylon-specific filtering
            if (p.pylonWeapons && p.pylonWeapons[i] !== undefined) {
                // Empty array = no weapons allowed (vehicle-only pylon)
                if (p.pylonWeapons[i].length === 0) return false;
                return p.pylonWeapons[i].includes(w.id);
            }
            
            // Fallback to aircraft compatibility (for any missing aircraft)
            return w.compat.includes('all') || w.compat.includes(pid);
        });
        
        const groups = { a2a:[], a2g:[], bomb:[], spec:[] };
        valid.forEach(w => { if(groups[w.cat]) groups[w.cat].push(w); });
        
        const labels = { 
            a2a: t('cat.a2a'), 
            a2g: t('cat.a2g'), 
            bomb: t('cat.bomb'), 
            spec: t('cat.spec') 
        };
        for(let k in groups) {
            if(groups[k].length) {
                opts += `<optgroup label="${labels[k]}">`;
                groups[k].forEach(w => {
                    opts += `<option value="${w.id}" data-mass="${w.mass}">${w.name} [${w.mass}kg]</option>`;
                });
                opts += `</optgroup>`;
            }
        }

        const pylonName = (p.pylonNames && p.pylonNames[i]) ? p.pylonNames[i] : `HARDPOINT ${i+1}`;
        
        // Check if this is a vehicle-only pylon
        const isVehicleOnly = pylonType === 'vehicle' || pylonType === 'forward';

        const div = document.createElement('div');
        div.className = 'pylon-slot p-3 border border-emerald-900 bg-emerald-900/10 opacity-0 transform translate-y-4 transition-all duration-300 ease-out';
        div.style.transitionDelay = `${i * 60}ms`;
        
        if (isVehicleOnly) {
            // Vehicle-only pylon - show text instead of dropdown
            div.innerHTML = `
                <div class="flex justify-between text-[10px] text-emerald-600 mb-2 uppercase tracking-wider">
                    <span class="text-emerald-400 font-bold"><i class="fas fa-caret-right"></i> ${pylonName}</span>
                    <span>MAX: ${cap}kg</span>
                </div>
                <div class="tac-select text-xs p-2 font-mono text-center text-amber-400 border border-amber-600/50 bg-amber-900/20">
                    <i class="fas fa-truck mr-1"></i>${t('pylons.vehiclesOnly')}
                </div>
            `;
        } else {
            div.innerHTML = `
                <div class="flex justify-between text-[10px] text-emerald-600 mb-2 uppercase tracking-wider">
                    <span class="text-emerald-400 font-bold"><i class="fas fa-caret-right"></i> ${pylonName}</span>
                    <span>MAX: ${cap}kg</span>
                </div>
                <select class="tac-select text-xs p-2 font-mono" onchange="updLoad(${i}, this, ${cap})">${opts}</select>
            `;
        }
        grid.appendChild(div);
        
        // Trigger animation
        requestAnimationFrame(() => {
            div.classList.remove('opacity-0', 'translate-y-4');
            div.classList.add('opacity-100', 'translate-y-0');
        });
    });
    
    // Smooth scroll to pylons section
    setTimeout(() => {
        const pylonsSection = document.querySelector('#config');
        if (pylonsSection) {
            pylonsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 200);
    
    // Update browser tab title
    document.title = `${p.name} | Nuclear Option: TACTICAL DB`;
    
    updStats(p.max);
}

function updLoad(idx, selectEl, limit) {
    const mass = parseInt(selectEl.options[selectEl.selectedIndex].getAttribute('data-mass'));
    window.currentLoadout[idx] = mass;
    
    if(mass > limit) {
        selectEl.classList.add('border-red-500', 'text-red-400');
    } else {
        selectEl.classList.remove('border-red-500', 'text-red-400');
    }

    const pid = document.getElementById('plane-select').value;
    if(planes[pid]) updStats(planes[pid].max);
}

function updStats(max) {
    const cur = window.currentLoadout.reduce((a,b)=>a+b, 0);
    document.getElementById('val-cur').innerText = cur;
    
    let pct = (cur/max)*100;
    const bar = document.getElementById('bar-load');
    const pctLbl = document.getElementById('pct-label');
    const warn = document.getElementById('warn-msg');

    pctLbl.innerText = Math.round(pct) + '%';
    
    if(cur > max) { 
        bar.style.width = '100%';
        bar.className = "h-full bg-red-500 transition-all duration-300 shadow-[0_0_10px_#ef4444]"; 
        warn.classList.remove('hidden'); 
        pctLbl.className = "text-red-500 font-bold";
    } else { 
        bar.style.width = pct + '%';
        bar.className = "h-full bg-emerald-500 transition-all duration-300 shadow-[0_0_10px_#10b981]"; 
        warn.classList.add('hidden'); 
        pctLbl.className = "text-emerald-600";
    }
}



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    runFilters();
});

