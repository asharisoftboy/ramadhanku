/**
 * RAMADHANKU - Juz Detail JavaScript
 * Features: Juz Navigation, Notes, Completion Toggle
 */

// ============================================
// SURAH DATA PER JUZ
// ============================================
const surahInJuz = {
    1: [
        { name: 'Al-Fatihah', arabic: 'الفاتحة', ayah: 7, type: 'Makkiyah' },
        { name: 'Al-Baqarah (1-141)', arabic: 'البقرة', ayah: 141, type: 'Madaniyah' }
    ],
    2: [
        { name: 'Al-Baqarah (142-252)', arabic: 'البقرة', ayah: 111, type: 'Madaniyah' }
    ],
    3: [
        { name: 'Al-Baqarah (253-286)', arabic: 'البقرة', ayah: 34, type: 'Madaniyah' },
        { name: 'Ali Imran (1-92)', arabic: 'آل عمران', ayah: 92, type: 'Madaniyah' }
    ],
    4: [
        { name: 'Ali Imran (93-200)', arabic: 'آل عمران', ayah: 108, type: 'Madaniyah' },
        { name: 'An-Nisa\' (1-23)', arabic: 'النساء', ayah: 23, type: 'Madaniyah' }
    ],
    5: [
        { name: 'An-Nisa\' (24-147)', arabic: 'النساء', ayah: 124, type: 'Madaniyah' }
    ],
    6: [
        { name: 'An-Nisa\' (148-176)', arabic: 'النساء', ayah: 29, type: 'Madaniyah' },
        { name: 'Al-Ma\'idah (1-81)', arabic: 'المائدة', ayah: 81, type: 'Madaniyah' }
    ],
    7: [
        { name: 'Al-Ma\'idah (82-120)', arabic: 'المائدة', ayah: 39, type: 'Madaniyah' },
        { name: 'Al-An\'am (1-110)', arabic: 'الأنعام', ayah: 110, type: 'Makkiyah' }
    ],
    8: [
        { name: 'Al-An\'am (111-165)', arabic: 'الأنعام', ayah: 55, type: 'Makkiyah' },
        { name: 'Al-A\'raf (1-87)', arabic: 'الأعراف', ayah: 87, type: 'Makkiyah' }
    ],
    9: [
        { name: 'Al-A\'raf (88-206)', arabic: 'الأعراف', ayah: 119, type: 'Makkiyah' }
    ],
    10: [
        { name: 'Al-A\'raf (207-206)', arabic: 'الأعراف', ayah: 1, type: 'Makkiyah' },
        { name: 'Al-Anfal', arabic: 'الأنفال', ayah: 75, type: 'Madaniyah' },
        { name: 'At-Taubah (1-40)', arabic: 'التوبة', ayah: 40, type: 'Madaniyah' }
    ],
    11: [
        { name: 'At-Taubah (41-129)', arabic: 'التوبة', ayah: 89, type: 'Madaniyah' },
        { name: 'Yunus (1-109)', arabic: 'يونس', ayah: 109, type: 'Makkiyah' }
    ],
    12: [
        { name: 'Hud', arabic: 'هود', ayah: 123, type: 'Makkiyah' },
        { name: 'Yusuf (1-52)', arabic: 'يوسف', ayah: 52, type: 'Makkiyah' }
    ],
    13: [
        { name: 'Yusuf (53-111)', arabic: 'يوسف', ayah: 59, type: 'Makkiyah' },
        { name: 'Ar-Ra\'d', arabic: 'الرعد', ayah: 43, type: 'Madaniyah' },
        { name: 'Ibrahim', arabic: 'إبراهيم', ayah: 52, type: 'Makkiyah' }
    ],
    14: [
        { name: 'Al-Hijr', arabic: 'الحجر', ayah: 99, type: 'Makkiyah' },
        { name: 'An-Nahl (1-128)', arabic: 'النحل', ayah: 128, type: 'Makkiyah' }
    ],
    15: [
        { name: 'Al-Isra\'', arabic: 'الإسراء', ayah: 111, type: 'Makkiyah' },
        { name: 'Al-Kahf (1-74)', arabic: 'الكهف', ayah: 74, type: 'Makkiyah' }
    ],
    16: [
        { name: 'Al-Kahf (75-110)', arabic: 'الكهف', ayah: 36, type: 'Makkiyah' },
        { name: 'Maryam', arabic: 'مريم', ayah: 98, type: 'Makkiyah' },
        { name: 'Thaha (1-135)', arabic: 'طه', ayah: 135, type: 'Makkiyah' }
    ],
    17: [
        { name: 'Thaha (136)', arabic: 'طه', ayah: 1, type: 'Makkiyah' },
        { name: 'Al-Anbiya\'', arabic: 'الأنبياء', ayah: 112, type: 'Makkiyah' },
        { name: 'Al-Hajj (1-78)', arabic: 'الحج', ayah: 78, type: 'Madaniyah' }
    ],
    18: [
        { name: 'Al-Mu\'minun', arabic: 'المؤمنون', ayah: 118, type: 'Makkiyah' },
        { name: 'An-Nur', arabic: 'النور', ayah: 64, type: 'Madaniyah' },
        { name: 'Al-Furqan (1-20)', arabic: 'الفرقان', ayah: 20, type: 'Makkiyah' }
    ],
    19: [
        { name: 'Al-Furqan (21-77)', arabic: 'الفرقان', ayah: 57, type: 'Makkiyah' },
        { name: 'Asy-Syu\'ara\'', arabic: 'الشعراء', ayah: 227, type: 'Makkiyah' },
        { name: 'An-Naml (1-55)', arabic: 'النمل', ayah: 55, type: 'Makkiyah' }
    ],
    20: [
        { name: 'An-Naml (56-93)', arabic: 'النمل', ayah: 38, type: 'Makkiyah' },
        { name: 'Al-Qashash', arabic: 'القصص', ayah: 88, type: 'Makkiyah' },
        { name: 'Al-\'Ankabut (1-45)', arabic: 'العنكبوت', ayah: 45, type: 'Makkiyah' }
    ],
    21: [
        { name: 'Al-\'Ankabut (46-69)', arabic: 'العنكبوت', ayah: 24, type: 'Makkiyah' },
        { name: 'Ar-Rum', arabic: 'الروم', ayah: 60, type: 'Makkiyah' },
        { name: 'Luqman', arabic: 'لقمان', ayah: 34, type: 'Makkiyah' },
        { name: 'As-Sajdah', arabic: 'السجدة', ayah: 30, type: 'Makkiyah' },
        { name: 'Al-Ahzab (1-30)', arabic: 'الأحزاب', ayah: 30, type: 'Madaniyah' }
    ],
    22: [
        { name: 'Al-Ahzab (31-73)', arabic: 'الأحزاب', ayah: 43, type: 'Madaniyah' },
        { name: 'Saba\'', arabic: 'سبأ', ayah: 54, type: 'Makkiyah' },
        { name: 'Fatir', arabic: 'فاطر', ayah: 45, type: 'Makkiyah' }
    ],
    23: [
        { name: 'Yasin', arabic: 'يس', ayah: 83, type: 'Makkiyah' },
        { name: 'As-Saffat', arabic: 'الصافات', ayah: 182, type: 'Makkiyah' },
        { name: 'Shad (1-83)', arabic: 'ص', ayah: 83, type: 'Makkiyah' }
    ],
    24: [
        { name: 'Shad (84-88)', arabic: 'ص', ayah: 5, type: 'Makkiyah' },
        { name: 'Az-Zumar', arabic: 'الزمر', ayah: 75, type: 'Makkiyah' },
        { name: 'Ghafir (1-40)', arabic: 'غافر', ayah: 40, type: 'Makkiyah' }
    ],
    25: [
        { name: 'Ghafir (41-85)', arabic: 'غافر', ayah: 45, type: 'Makkiyah' },
        { name: 'Fussilat', arabic: 'فصلت', ayah: 54, type: 'Makkiyah' },
        { name: 'Asy-Syura', arabic: 'الشورى', ayah: 53, type: 'Makkiyah' },
        { name: 'Az-Zukhruf (1-56)', arabic: 'الزخرف', ayah: 56, type: 'Makkiyah' }
    ],
    26: [
        { name: 'Az-Zukhruf (57-89)', arabic: 'الزخرف', ayah: 33, type: 'Makkiyah' },
        { name: 'Ad-Dukhan', arabic: 'الدخان', ayah: 59, type: 'Makkiyah' },
        { name: 'Al-Jatsiyah', arabic: 'الجاثية', ayah: 37, type: 'Makkiyah' },
        { name: 'Al-Ahqaf', arabic: 'الأحقاف', ayah: 35, type: 'Makkiyah' }
    ],
    27: [
        { name: 'Muhammad', arabic: 'محمد', ayah: 38, type: 'Madaniyah' },
        { name: 'Al-Fath', arabic: 'الفتح', ayah: 29, type: 'Madaniyah' },
        { name: 'Al-Hujurat', arabic: 'الحجرات', ayah: 18, type: 'Madaniyah' },
        { name: 'Qaf', arabic: 'ق', ayah: 45, type: 'Makkiyah' },
        { name: 'Adz-Dzariyat (1-30)', arabic: 'الذاريات', ayah: 30, type: 'Makkiyah' }
    ],
    28: [
        { name: 'Adz-Dzariyat (31-60)', arabic: 'الذاريات', ayah: 30, type: 'Makkiyah' },
        { name: 'At-Tur', arabic: 'الطور', ayah: 49, type: 'Makkiyah' },
        { name: 'An-Najm', arabic: 'النجم', ayah: 62, type: 'Makkiyah' },
        { name: 'Al-Qamar', arabic: 'القمر', ayah: 55, type: 'Makkiyah' },
        { name: 'Ar-Rahman', arabic: 'الرحمن', ayah: 78, type: 'Madaniyah' },
        { name: 'Al-Waqi\'ah (1-96)', arabic: 'الواقعة', ayah: 96, type: 'Makkiyah' }
    ],
    29: [
        { name: 'Al-Waqi\'ah (97)', arabic: 'الواقعة', ayah: 1, type: 'Makkiyah' },
        { name: 'Al-Hadid', arabic: 'الحديد', ayah: 29, type: 'Madaniyah' },
        { name: 'Al-Mujadilah', arabic: 'المجادلة', ayah: 22, type: 'Madaniyah' },
        { name: 'Al-Hasyr', arabic: 'الحشر', ayah: 24, type: 'Madaniyah' },
        { name: 'Al-Mumtahanah', arabic: 'الممتحنة', ayah: 13, type: 'Madaniyah' },
        { name: 'As-Saff', arabic: 'الصف', ayah: 14, type: 'Madaniyah' },
        { name: 'Al-Jumu\'ah', arabic: 'الجمعة', ayah: 11, type: 'Madaniyah' },
        { name: 'Al-Munafiqun', arabic: 'المنافقون', ayah: 11, type: 'Madaniyah' },
        { name: 'At-Taghabun', arabic: 'التغابن', ayah: 18, type: 'Madaniyah' },
        { name: 'Ath-Thalaq', arabic: 'الطلاق', ayah: 12, type: 'Madaniyah' },
        { name: 'At-Tahrim', arabic: 'التحريم', ayah: 12, type: 'Madaniyah' }
    ],
    30: [
        { name: 'Al-Mulk', arabic: 'الملك', ayah: 30, type: 'Makkiyah' },
        { name: 'Al-Qalam', arabic: 'القلم', ayah: 52, type: 'Makkiyah' },
        { name: 'Al-Haqqah', arabic: 'الحاقة', ayah: 52, type: 'Makkiyah' },
        { name: 'Al-Ma\'arij', arabic: 'المعارج', ayah: 44, type: 'Makkiyah' },
        { name: 'Nuh', arabic: 'نوح', ayah: 28, type: 'Makkiyah' },
        { name: 'Al-Jinn', arabic: 'الجن', ayah: 28, type: 'Makkiyah' },
        { name: 'Al-Muzzammil', arabic: 'المزمل', ayah: 20, type: 'Makkiyah' },
        { name: 'Al-Muddaththir', arabic: 'المدثر', ayah: 56, type: 'Makkiyah' },
        { name: 'Al-Qiyamah', arabic: 'القيامة', ayah: 40, type: 'Makkiyah' },
        { name: 'Al-Insan', arabic: 'الإنسان', ayah: 31, type: 'Madaniyah' },
        { name: 'Al-Mursalat', arabic: 'المرسلات', ayah: 50, type: 'Makkiyah' },
        { name: 'An-Naba\'', arabic: 'النبأ', ayah: 40, type: 'Makkiyah' },
        { name: 'An-Nazi\'at', arabic: 'النازعات', ayah: 46, type: 'Makkiyah' },
        { name: '\'Abasa', arabic: 'عبس', ayah: 42, type: 'Makkiyah' },
        { name: 'At-Takwir', arabic: 'التكوير', ayah: 29, type: 'Makkiyah' },
        { name: 'Al-Infitar', arabic: 'الإنفطار', ayah: 19, type: 'Makkiyah' },
        { name: 'Al-Muthaffifin', arabic: 'المطففين', ayah: 36, type: 'Makkiyah' },
        { name: 'Al-Insyiqaq', arabic: 'الإنشقاق', ayah: 25, type: 'Makkiyah' },
        { name: 'Al-Buruj', arabic: 'البروج', ayah: 22, type: 'Makkiyah' },
        { name: 'Ath-Thariq', arabic: 'الطارق', ayah: 17, type: 'Makkiyah' },
        { name: 'Al-A\'la', arabic: 'الأعلى', ayah: 19, type: 'Makkiyah' },
        { name: 'Al-Ghasyiyah', arabic: 'الغاشية', ayah: 26, type: 'Makkiyah' },
        { name: 'Al-Fajr', arabic: 'الفجر', ayah: 30, type: 'Makkiyah' },
        { name: 'Al-Balad', arabic: 'البلد', ayah: 20, type: 'Makkiyah' },
        { name: 'Asy-Syams', arabic: 'الشمس', ayah: 15, type: 'Makkiyah' },
        { name: 'Al-Lail', arabic: 'الليل', ayah: 21, type: 'Makkiyah' },
        { name: 'Adh-Dhuha', arabic: 'الضحى', ayah: 11, type: 'Makkiyah' },
        { name: 'Al-Insyirah', arabic: 'الشرح', ayah: 8, type: 'Makkiyah' },
        { name: 'At-Tin', arabic: 'التين', ayah: 8, type: 'Makkiyah' },
        { name: 'Al-\'Alaq', arabic: 'العلق', ayah: 19, type: 'Makkiyah' },
        { name: 'Al-Qadr', arabic: 'القدر', ayah: 5, type: 'Makkiyah' },
        { name: 'Al-Bayyinah', arabic: 'البينة', ayah: 8, type: 'Madaniyah' },
        { name: 'Az-Zalzalah', arabic: 'الزلزلة', ayah: 8, type: 'Madaniyah' },
        { name: 'Al-\'Adiyat', arabic: 'العاديات', ayah: 11, type: 'Makkiyah' },
        { name: 'Al-Qari\'ah', arabic: 'القارعة', ayah: 11, type: 'Makkiyah' },
        { name: 'At-Takatsur', arabic: 'التكاثر', ayah: 8, type: 'Makkiyah' },
        { name: 'Al-\'Asr', arabic: 'العصر', ayah: 3, type: 'Makkiyah' },
        { name: 'Al-Humazah', arabic: 'الهمزة', ayah: 9, type: 'Makkiyah' },
        { name: 'Al-Fil', arabic: 'الفيل', ayah: 5, type: 'Makkiyah' },
        { name: 'Quraisy', arabic: 'قريش', ayah: 4, type: 'Makkiyah' },
        { name: 'Al-Ma\'un', arabic: 'الماعون', ayah: 7, type: 'Makkiyah' },
        { name: 'Al-Kautsar', arabic: 'الكوثر', ayah: 3, type: 'Makkiyah' },
        { name: 'Al-Kafirun', arabic: 'الكافرون', ayah: 6, type: 'Makkiyah' },
        { name: 'An-Nasr', arabic: 'النصر', ayah: 3, type: 'Madaniyah' },
        { name: 'Al-Masad', arabic: 'المسد', ayah: 5, type: 'Makkiyah' },
        { name: 'Al-Ikhlas', arabic: 'الإخلاص', ayah: 4, type: 'Makkiyah' },
        { name: 'Al-Falaq', arabic: 'الفلق', ayah: 5, type: 'Makkiyah' },
        { name: 'An-Nas', arabic: 'الناس', ayah: 6, type: 'Makkiyah' }
    ]
};

// ============================================
// LOCAL STORAGE (Shared with main script)
// ============================================
const Storage = {
    KEY: 'ramadhan_progress',
    
    get() {
        const data = localStorage.getItem(this.KEY);
        return data ? JSON.parse(data) : { completed: [], notes: {} };
    },
    
    set(data) {
        localStorage.setItem(this.KEY, JSON.stringify(data));
    },
    
    isJuzCompleted(juz) {
        const data = this.get();
        return data.completed.includes(parseInt(juz));
    },
    
    toggleJuz(juz) {
        const data = this.get();
        const juzNum = parseInt(juz);
        const index = data.completed.indexOf(juzNum);
        
        if (index > -1) {
            data.completed.splice(index, 1);
        } else {
            data.completed.push(juzNum);
        }
        
        this.set(data);
        return index === -1;
    },
    
    saveNotes(juz, notes) {
        const data = this.get();
        data.notes[juz] = notes;
        this.set(data);
    },
    
    getNotes(juz) {
        const data = this.get();
        return data.notes[juz] || '';
    }
};

// ============================================
// URL PARAMS
// ============================================
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ============================================
// UI FUNCTIONS
// ============================================
function showToast(message, icon = 'fa-check-circle') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('i');
    
    toastMessage.textContent = message;
    toastIcon.className = `fas ${icon}`;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function updateJuzStatusUI(juz) {
    const isCompleted = Storage.isJuzCompleted(juz);
    const statusEl = document.getElementById('juzStatus');
    const btnEl = document.getElementById('markCompleteBtn');
    
    if (isCompleted) {
        statusEl.innerHTML = '<i class="fas fa-check-circle"></i><span>Selesai</span>';
        statusEl.classList.add('completed');
        btnEl.classList.add('active');
        btnEl.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
        statusEl.innerHTML = '<i class="far fa-circle"></i><span>Belum Selesai</span>';
        statusEl.classList.remove('completed');
        btnEl.classList.remove('active');
        btnEl.innerHTML = '<i class="far fa-check-circle"></i>';
    }
}

function toggleComplete() {
    const juz = getUrlParam('juz') || 1;
    const isCompleted = Storage.toggleJuz(juz);
    
    updateJuzStatusUI(juz);
    showToast(isCompleted ? 'Juz ditandai selesai!' : 'Juz batal selesai');
}

function saveNotes() {
    const juz = getUrlParam('juz') || 1;
    const notes = document.getElementById('juzNotes').value;
    
    Storage.saveNotes(juz, notes);
    showToast('Catatan disimpan');
}

function renderSurahList(juz) {
    const list = document.getElementById('surahList');
    const surahs = surahInJuz[juz] || [];
    
    list.innerHTML = '';
    
    surahs.forEach((surah, index) => {
        const item = document.createElement('div');
        item.className = 'surah-item';
        item.innerHTML = `
            <div class="surah-info">
                <div class="surah-number">${index + 1}</div>
                <div>
                    <div class="surah-name-arabic">${surah.arabic}</div>
                    <div class="surah-name-latin">${surah.name}</div>
                </div>
            </div>
            <div class="surah-meta">
                <div class="surah-ayah">${surah.ayah} Ayat</div>
                <div class="surah-type">${surah.type}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

function updateNavigation(juz) {
    const juzNum = parseInt(juz);
    const prevJuz = juzNum > 1 ? juzNum - 1 : null;
    const nextJuz = juzNum < 30 ? juzNum + 1 : null;
    
    const prevBtn = document.getElementById('prevJuz');
    const nextBtn = document.getElementById('nextJuz');
    const prevName = document.getElementById('prevJuzName');
    const nextName = document.getElementById('nextJuzName');
    
    if (prevJuz) {
        prevBtn.href = `juz.html?juz=${prevJuz}`;
        prevName.textContent = `Juz ${prevJuz}`;
        prevBtn.style.visibility = 'visible';
    } else {
        prevBtn.style.visibility = 'hidden';
    }
    
    if (nextJuz) {
        nextBtn.href = `juz.html?juz=${nextJuz}`;
        nextName.textContent = `Juz ${nextJuz}`;
        nextBtn.style.visibility = 'visible';
    } else {
        nextBtn.style.visibility = 'hidden';
    }
}

// ============================================
// BACKGROUND STARS
// ============================================
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const starCount = 30;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.opacity = Math.random() * 0.5 + 0.3;
        starsContainer.appendChild(star);
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const juz = getUrlParam('juz') || 1;
    
    // Update page title
    document.title = `Juz ${juz} - RamadhanKu`;
    
    // Update header
    document.getElementById('headerJuzNumber').textContent = `Juz ${juz}`;
    document.getElementById('juzNumber').textContent = juz;
    
    // Load notes
    document.getElementById('juzNotes').value = Storage.getNotes(juz);
    
    // Update UI
    updateJuzStatusUI(juz);
    renderSurahList(juz);
    updateNavigation(juz);
    createStars();
    
    // Auto-save notes on input (debounced)
    let timeout;
    document.getElementById('juzNotes').addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            saveNotes();
        }, 1000);
    });
});

// Export functions
window.toggleComplete = toggleComplete;
window.saveNotes = saveNotes;
window.Storage = Storage;
window.showToast = showToast;
