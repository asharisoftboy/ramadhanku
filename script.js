/**
 * RAMADHANKU - Main JavaScript
 * Features: Countdown, Progress Tracking, LocalStorage
 */

// ============================================
// DATA JUZ AL-QUR'AN
// ============================================
const juzData = [
    { juz: 1, surah: ['Al-Fatihah', 'Al-Baqarah (1-141)'] },
    { juz: 2, surah: ['Al-Baqarah (142-252)'] },
    { juz: 3, surah: ['Al-Baqarah (253-286)', 'Ali Imran (1-92)'] },
    { juz: 4, surah: ['Ali Imran (93-200)', 'An-Nisa\' (1-23)'] },
    { juz: 5, surah: ['An-Nisa\' (24-147)'] },
    { juz: 6, surah: ['An-Nisa\' (148-176)', 'Al-Ma\'idah (1-81)'] },
    { juz: 7, surah: ['Al-Ma\'idah (82-120)', 'Al-An\'am (1-110)'] },
    { juz: 8, surah: ['Al-An\'am (111-165)', 'Al-A\'raf (1-87)'] },
    { juz: 9, surah: ['Al-A\'raf (88-206)'] },
    { juz: 10, surah: ['Al-A\'raf (207-206)', 'Al-Anfal', 'At-Taubah (1-40)'] },
    { juz: 11, surah: ['At-Taubah (41-129)', 'Yunus (1-109)'] },
    { juz: 12, surah: ['Hud', 'Yusuf (1-52)'] },
    { juz: 13, surah: ['Yusuf (53-111)', 'Ar-Ra\'d', 'Ibrahim'] },
    { juz: 14, surah: ['Al-Hijr', 'An-Nahl (1-128)'] },
    { juz: 15, surah: ['Al-Isra\'', 'Al-Kahf (1-74)'] },
    { juz: 16, surah: ['Al-Kahf (75-110)', 'Maryam', 'Thaha (1-135)'] },
    { juz: 17, surah: ['Thaha (136)', 'Al-Anbiya\'', 'Al-Hajj (1-78)'] },
    { juz: 18, surah: ['Al-Mu\'minun', 'An-Nur', 'Al-Furqan (1-20)'] },
    { juz: 19, surah: ['Al-Furqan (21-77)', 'Asy-Syu\'ara\'', 'An-Naml (1-55)'] },
    { juz: 20, surah: ['An-Naml (56-93)', 'Al-Qashash', 'Al-\'Ankabut (1-45)'] },
    { juz: 21, surah: ['Al-\'Ankabut (46-69)', 'Ar-Rum', 'Luqman', 'As-Sajdah', 'Al-Ahzab (1-30)'] },
    { juz: 22, surah: ['Al-Ahzab (31-73)', 'Saba\'', 'Fatir'] },
    { juz: 23, surah: ['Yasin', 'As-Saffat', 'Shad (1-83)'] },
    { juz: 24, surah: ['Shad (84-88)', 'Az-Zumar', 'Ghafir (1-40)'] },
    { juz: 25, surah: ['Ghafir (41-85)', 'Fussilat', 'Asy-Syura', 'Az-Zukhruf (1-56)'] },
    { juz: 26, surah: ['Az-Zukhruf (57-89)', 'Ad-Dukhan', 'Al-Jatsiyah', 'Al-Ahqaf'] },
    { juz: 27, surah: ['Muhammad', 'Al-Fath', 'Al-Hujurat', 'Qaf', 'Adz-Dzariyat (1-30)'] },
    { juz: 28, surah: ['Adz-Dzariyat (31-60)', 'At-Tur', 'An-Najm', 'Al-Qamar', 'Ar-Rahman', 'Al-Waqi\'ah (1-96)'] },
    { juz: 29, surah: ['Al-Waqi\'ah (97)', 'Al-Hadid', 'Al-Mujadilah', 'Al-Hasyr', 'Al-Mumtahanah', 'As-Saff', 'Al-Jumu\'ah', 'Al-Munafiqun', 'At-Taghabun', 'Ath-Thalaq', 'At-Tahrim'] },
    { juz: 30, surah: ['Al-Mulk', 'Al-Qalam', 'Al-Haqqah', 'Al-Ma\'arij', 'Nuh', 'Al-Jinn', 'Al-Muzzammil', 'Al-Muddaththir', 'Al-Qiyamah', 'Al-Insan', 'Al-Mursalat', 'An-Naba\'', 'An-Nazi\'at', '\'Abasa', 'At-Takwir', 'Al-Infitar', 'Al-Muthaffifin', 'Al-Insyiqaq', 'Al-Buruj', 'Ath-Thariq', 'Al-A\'la', 'Al-Ghasyiyah', 'Al-Fajr', 'Al-Balad', 'Asy-Syams', 'Al-Lail', 'Adh-Dhuha', 'Al-Insyirah', 'At-Tin', 'Al-\'Alaq', 'Al-Qadr', 'Al-Bayyinah', 'Az-Zalzalah', 'Al-\'Adiyat', 'Al-Qari\'ah', 'At-Takatsur', 'Al-\'Asr', 'Al-Humazah', 'Al-Fil', 'Quraisy', 'Al-Ma\'un', 'Al-Kautsar', 'Al-Kafirun', 'An-Nasr', 'Al-Masad', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas'] }
];

// ============================================
// LOCAL STORAGE FUNCTIONS
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
        return data.completed.includes(juz);
    },
    
    toggleJuz(juz) {
        const data = this.get();
        const index = data.completed.indexOf(juz);
        
        if (index > -1) {
            data.completed.splice(index, 1);
        } else {
            data.completed.push(juz);
        }
        
        this.set(data);
        return index === -1; // true if added, false if removed
    },
    
    saveNotes(juz, notes) {
        const data = this.get();
        data.notes[juz] = notes;
        this.set(data);
    },
    
    getNotes(juz) {
        const data = this.get();
        return data.notes[juz] || '';
    },
    
    reset() {
        localStorage.removeItem(this.KEY);
    },
    
    getStats() {
        const data = this.get();
        return {
            completed: data.completed.length,
            remaining: 30 - data.completed.length,
            percentage: Math.round((data.completed.length / 30) * 100)
        };
    }
};

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

function updateProgress() {
    const stats = Storage.getStats();
    
    // Update text
    document.getElementById('progressText').textContent = 
        `${stats.completed} dari 30 Juz selesai`;
    document.getElementById('progressPercent').textContent = 
        `${stats.percentage}%`;
    document.getElementById('completedCount').textContent = 
        stats.completed;
    document.getElementById('remainingCount').textContent = 
        stats.remaining;
    
    // Update progress bar
    document.getElementById('progressFill').style.width = 
        `${stats.percentage}%`;
}

function renderJuzGrid() {
    const grid = document.getElementById('juzGrid');
    grid.innerHTML = '';
    
    juzData.forEach(item => {
        const isCompleted = Storage.isJuzCompleted(item.juz);
        
        const card = document.createElement('a');
        card.href = `juz.html?juz=${item.juz}`;
        card.className = `juz-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="juz-number-display">${item.juz}</div>
            <div class="juz-label-display">Juz</div>
            ${isCompleted ? '<div class="juz-progress">Selesai</div>' : ''}
        `;
        
        grid.appendChild(card);
    });
}

function setGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Selamat Datang';
    
    if (hour >= 4 && hour < 12) {
        greeting = 'Selamat Pagi';
    } else if (hour >= 12 && hour < 15) {
        greeting = 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        greeting = 'Selamat Sore';
    } else {
        greeting = 'Selamat Malam';
    }
    
    document.getElementById('greetingText').textContent = greeting;
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
    const idulFitriDate = new Date('2026-03-20T00:00:00').getTime();

    function updateCountdown() {
        const now = Date.now();
        const distance = idulFitriDate - now;

        if (distance <= 0) {
            document.getElementById('idulFitriDate').textContent = 'Selamat Idul Fitri!';
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", initCountdown);



// ============================================
// BACKGROUND STARS
// ============================================
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const starCount = 50;
    
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
// MODAL FUNCTIONS
// ============================================
function openModal() {
    document.getElementById('resetModal').classList.add('active');
}

function closeModal() {
    document.getElementById('resetModal').classList.remove('active');
}

function confirmReset() {
    Storage.reset();
    updateProgress();
    renderJuzGrid();
    closeModal();
    showToast('Progress berhasil direset', 'fa-undo');
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    setGreeting();
    createStars();
    initCountdown();
    updateProgress();
    renderJuzGrid();
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Export for global access
window.Storage = Storage;
window.openModal = openModal;
window.closeModal = closeModal;
window.confirmReset = confirmReset;
window.showToast = showToast;
