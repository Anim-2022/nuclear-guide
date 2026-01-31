// --- STORAGE MODULE ---
// Handles localStorage for saving/loading loadouts and URL sharing

const STORAGE_KEY = 'nuclearOptionLoadouts';

// Get all saved loadouts
function getSavedLoadouts() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Save current loadout
function saveCurrentLoadout(name) {
    console.log('[STORAGE] saveCurrentLoadout called with name:', name);
    if (!name || name.trim() === '') {
        alert(t('alert.enter_name'));
        return false;
    }
    
    const planeId = document.getElementById('plane-select').value;
    if (planeId === 'none') {
        alert(t('alert.select_carrier'));
        return false;
    }
    
    // Get all pylon selections
    const pylonSelects = document.querySelectorAll('#pylons-area select');
    const weapons = Array.from(pylonSelects).map(sel => sel.value);
    
    const loadout = {
        name: name.trim(),
        planeId: planeId,
        weapons: weapons,
        createdAt: new Date().toISOString()
    };
    
    const loadouts = getSavedLoadouts();
    
    // Check if name exists
    const existingIdx = loadouts.findIndex(l => l.name === loadout.name);
    if (existingIdx > -1) {
        const msg = t('alert.delete_loadout') + ' "' + name + '" ' + t('alert.overwrite_confirm');
        if (!confirm(msg)) {
            return false;
        }
        loadouts[existingIdx] = loadout;
    } else {
        loadouts.push(loadout);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loadouts));
    updateLoadoutsList();
    return true;
}

// Load a saved loadout
function loadSavedLoadout(name) {
    console.log('[STORAGE] loadSavedLoadout called with name:', name);
    const loadouts = getSavedLoadouts();
    const loadout = loadouts.find(l => l.name === name);
    
    if (!loadout) return false;
    
    // Set plane
    const planeSelect = document.getElementById('plane-select');
    planeSelect.value = loadout.planeId;
    loadPlane(); // Trigger plane load
    
    // Wait for pylons to render, then set weapons
    setTimeout(() => {
        const pylonSelects = document.querySelectorAll('#pylons-area select');
        loadout.weapons.forEach((weaponId, i) => {
            if (pylonSelects[i]) {
                pylonSelects[i].value = weaponId;
                // Trigger change event
                pylonSelects[i].dispatchEvent(new Event('change'));
            }
        });
    }, 100);
    
    return true;
}

// Show custom delete modal
function showDeleteModal(loadoutName) {
    console.log('[STORAGE] showDeleteModal called with name:', loadoutName);
    
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center opacity-0 transition-opacity duration-300';
    backdrop.onclick = () => closeModal(backdrop);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'bg-emerald-950 border-2 border-emerald-600 p-6 max-w-md w-full mx-4 shadow-[0_0_30px_rgba(16,185,129,0.5)] transform scale-95 opacity-0 transition-all duration-300';
    modal.onclick = (e) => e.stopPropagation();
    
    modal.innerHTML = `
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <i class="fas fa-exclamation-triangle text-red-500"></i>
            <span data-i18n="alert.delete_loadout">${t('alert.delete_loadout')}</span>
        </h3>
        <p class="text-emerald-200 mb-6">
            "${loadoutName}"?
        </p>
        <div class="flex gap-3 justify-end">
            <button id="cancel-delete" class="px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-600 transition">
                <span data-i18n="modal.cancel">${t('modal.cancel') || 'Отмена'}</span>
            </button>
            <button id="confirm-delete" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white border border-red-500 transition">
                <i class="fas fa-trash"></i>
                <span data-i18n="alert.delete_loadout">${t('alert.delete_loadout')}</span>
            </button>
        </div>
    `;
    
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    
    // Trigger animations
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        modal.classList.remove('scale-95', 'opacity-0');
        modal.classList.add('scale-100', 'opacity-100');
    });
    
    // Add event listeners
    document.getElementById('cancel-delete').onclick = () => {
        console.log('[STORAGE] Delete cancelled');
        closeModal(backdrop);
    };
    
    document.getElementById('confirm-delete').onclick = () => {
        console.log('[STORAGE] Delete confirmed for:', loadoutName);
        closeModal(backdrop);
        performDelete(loadoutName);
    };
}

// Close modal with animation
function closeModal(backdrop) {
    const modal = backdrop.querySelector('div');
    backdrop.classList.add('opacity-0');
    modal.classList.add('scale-95', 'opacity-0');
    modal.classList.remove('scale-100', 'opacity-100');
    
    setTimeout(() => backdrop.remove(), 300);
}

// Perform the actual deletion
function performDelete(name) {
    console.log('[STORAGE] performDelete called with name:', name);
    try {
        // Find and animate the element being deleted
        const container = document.getElementById('saved-loadouts-list');
        if (container) {
            const elements = Array.from(container.children);
            const targetElement = elements.find(el => {
                const button = el.querySelector('button[onclick*="loadSavedLoadout"]');
                return button && button.textContent.includes(name);
            });
            
            if (targetElement) {
                // Add slide-out animation
                targetElement.style.transition = 'all 0.3s ease-out';
                targetElement.style.transform = 'translateX(100%)';
                targetElement.style.opacity = '0';
                targetElement.style.maxHeight = targetElement.scrollHeight + 'px';
                
                // Wait for slide animation, then collapse
                setTimeout(() => {
                    targetElement.style.maxHeight = '0';
                    targetElement.style.padding = '0';
                    targetElement.style.margin = '0';
                    targetElement.style.border = 'none';
                }, 150);
            }
        }
        
        // Delete from storage after animation starts
        setTimeout(() => {
            let loadouts = getSavedLoadouts();
            console.log('[STORAGE] Current loadouts:', loadouts);
            
            const beforeCount = loadouts.length;
            loadouts = loadouts.filter(l => l.name !== name);
            const afterCount = loadouts.length;
            
            console.log('[STORAGE] Deleted count:', beforeCount - afterCount);
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(loadouts));
            
            // Refresh list after animation completes
            setTimeout(() => {
                updateLoadoutsList();
                console.log('[STORAGE] Delete successful!');
            }, 100);
        }, 400);
        
        return true;
    } catch (error) {
        console.error('[STORAGE] Delete failed:', error);
        return false;
    }
}

// Delete a saved loadout (now uses modal)
function deleteSavedLoadout(name) {
    console.log('[STORAGE] deleteSavedLoadout called with name:', name);
    showDeleteModal(name);
}

// Update the loadouts dropdown
function updateLoadoutsList() {
    console.log('[STORAGE] updateLoadoutsList called');
    const container = document.getElementById('saved-loadouts-list');
    if (!container) {
        console.warn('[STORAGE] Container not found!');
        return;
    }
    
    const loadouts = getSavedLoadouts();
    console.log('[STORAGE] Current loadouts count:', loadouts.length);
    
    if (loadouts.length === 0) {
        container.innerHTML = `<div class="text-emerald-700 text-xs p-2">${t('loadouts.empty')}</div>`;
        return;
    }
    
    container.innerHTML = loadouts.map(l => `
        <div class="flex items-center justify-between p-2 hover:bg-emerald-900/30 border-b border-emerald-900/50 group">
            <button onclick="loadSavedLoadout('${l.name.replace(/'/g, "\\'")}')" class="text-left flex-1 text-emerald-200 hover:text-white text-sm">
                <div class="font-bold">${l.name}</div>
                <div class="text-[10px] text-emerald-600">${planes[l.planeId]?.name || l.planeId}</div>
            </button>
            <button onclick="deleteSavedLoadout('${l.name.replace(/'/g, "\\'")}')" class="text-red-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition px-2">
                <i class="fas fa-trash text-xs"></i>
            </button>
        </div>
    `).join('');
}

// --- URL SHARING ---

// Generate shareable URL
function generateShareURL() {
    const planeId = document.getElementById('plane-select').value;
    if (planeId === 'none') {
        alert(t('alert.select_carrier'));
        return null;
    }
    
    const pylonSelects = document.querySelectorAll('#pylons-area select');
    const weapons = Array.from(pylonSelects).map(sel => sel.value);
    
    const params = new URLSearchParams();
    params.set('p', planeId);
    params.set('w', weapons.join(','));
    
    const url = window.location.origin + window.location.pathname + '?' + params.toString();
    return url;
}

// Copy share URL to clipboard
function copyShareURL() {
    const url = generateShareURL();
    if (!url) return;
    
    navigator.clipboard.writeText(url).then(() => {
        // Show feedback
        const btn = document.getElementById('share-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-check"></i> ${t('share.copied')}`;
        btn.classList.add('bg-emerald-600');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('bg-emerald-600');
        }, 2000);
    }).catch(() => {
        prompt(t('alert.copy_link'), url);
    });
}

// Load loadout from URL on page load
function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const planeId = params.get('p');
    const weaponsStr = params.get('w');
    
    if (!planeId || !weaponsStr) return false;
    
    // Set plane
    const planeSelect = document.getElementById('plane-select');
    if (!planes[planeId]) return false;
    
    planeSelect.value = planeId;
    loadPlane();
    
    // Wait for pylons to render, then set weapons
    const weapons = weaponsStr.split(',');
    setTimeout(() => {
        const pylonSelects = document.querySelectorAll('#pylons-area select');
        weapons.forEach((weaponId, i) => {
            if (pylonSelects[i]) {
                pylonSelects[i].value = weaponId;
                pylonSelects[i].dispatchEvent(new Event('change'));
            }
        });
    }, 100);
    
    return true;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('[STORAGE] Module initialized');
    // Try to load from URL first
    if (!loadFromURL()) {
        // Otherwise just update the loadouts list
        updateLoadoutsList();
    }
});
