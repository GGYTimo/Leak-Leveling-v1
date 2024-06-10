            // Lecture du son au démarrage
            document.addEventListener('DOMContentLoaded', () => {
            
                const startupSound = new Audio('song/My Audio.mp3');
            
                startupSound.play();
            });
            

document.addEventListener('DOMContentLoaded', () => {
    const initialQuests = [
        { name: "Faire 20 pompes", date: "2024-06-09", completed: false },
        { name: "Effectuer 50 jumping jacks", date: "2024-06-10", completed: false },
        { name: "Courir 1 kilomètre", date: "2024-06-11", completed: false },
        { name: "Faire une séance de yoga de 15 minutes", date: "2024-06-12", completed: false },
        { name: "Faire 30 squats", date: "2024-06-13", completed: false },
        { name: "Faire 10 burpees", date: "2024-06-14", completed: false },
        { name: "Faire 50 fentes", date: "2024-06-15", completed: false },
        { name: "Faire une séance de stretching de 10 minutes", date: "2024-06-16", completed: false },
        { name: "Chasser 10 gobelins", date: "2024-06-17", completed: false },
        { name: "Trouver un artefact rare", date: "2024-06-17", completed: false },
        { name: "Sauver le village de l'attaque", date: "2024-06-17", completed: false },
        { name: "Faire 20 pompes", date: "2024-06-18", completed: false },
        { name: "Effectuer 50 jumping jacks", date: "2024-06-18", completed: false },
        { name: "Courir 1 kilomètre", date: "2024-06-18", completed: false },
        { name: "Faire une séance de yoga de 15 minutes", date: "2024-06-19", completed: false },
        { name: "Faire 30 squats", date: "2024-06-19", completed: false },
        { name: "Faire 10 burpees", date: "2024-06-19", completed: false },
        { name: "Faire 50 fentes", date: "2024-06-20", completed: false },
        { name: "Faire une séance de stretching de 10 minutes", date: "2024-06-20", completed: false },
        { name: "Faire 50 jumping lunges", date: "2024-06-20", completed: false },
        { name: "Faire une séance de cardio de 20 minutes", date: "2024-06-21", completed: false },
        { name: "Faire une séance de renforcement musculaire ciblé sur les bras de 15 minutes", date: "2024-06-21", completed: false },
        { name: "Faire 3 séries de 10 pompes inversées", date: "2024-06-21", completed: false },
        { name: "Faire 50 sauts à la corde", date: "2024-06-22", completed: false },
        { name: "Faire une séance de méditation de gratitude de 10 minutes après le sport", date: "2024-06-22", completed: false },
        { name: "Faire une séance de tai-chi de 15 minutes", date: "2024-06-22", completed: false },
        { name: "Faire une séance de boxe de 20 minutes", date: "2024-06-23", completed: false },
        { name: "Faire 20 minutes de natation", date: "2024-06-23", completed: false },
        { name: "Faire 50 crunches obliques", date: "2024-06-23", completed: false },
        { name: "Faire une séance de renforcement musculaire pour le dos de 15 minutes", date: "2024-06-24", completed: false },
        { name: "Faire une séance de respiration profonde de 10 minutes après le sport", date: "2024-06-24", completed: false },
        { name: "Faire une séance de stretching dynamique de 15 minutes", date: "2024-06-24", completed: false },
        { name: "Faire 50 jumping squats", date: "2024-06-25", completed: false },
        { name: "Faire une séance de barre au sol de 20 minutes", date: "2024-06-25", completed: false },
        { name: "Faire une séance de cardio dance de 15 minutes", date: "2024-06-25", completed: false },
        { name: "Faire une séance de renforcement musculaire pour les jambes de 20 minutes", date: "2024-06-26", completed: false },
        { name: "Faire 50 jumping lunges", date: "2024-06-26", completed: false },
        { name: "Faire une séance de méditation de visualisation de 10 minutes après le sport", date: "2024-06-26", completed: false },
        { name: "Faire 20 burpees avec saut en hauteur", date: "2024-06-27", completed: false },
        { name: "Faire une séance de Zumba de 20 minutes", date: "2024-06-27", completed: false },
        { name: "Faire une séance de renforcement musculaire pour les fessiers de 15 minutes", date: "2024-06-27", completed: false },
        { name: "Faire 3 séries de 10 dips", date: "2024-06-28", completed: false },
        { name: "Faire une séance de cardio kickboxing de 20 minutes", date: "2024-06-28", completed: false },
        { name: "Faire 30 secondes de planche latérale de chaque côté", date: "2024-06-28", completed: false },
        { name: "Faire une séance de renforcement musculaire pour les abdominaux de 15 minutes", date: "2024-06-29", completed: false },
        { name: "Faire une séance de méditation de relaxation de 10 minutes après le sport", date: "2024-06-29", completed: false },
        { name: "Faire une séance de stretching spécifique pour les coureurs de 15 minutes", date: "2024-06-29", completed: false },
        { name: "Faire 50 fentes avec saut", date: "2024-06-30", completed: false },
        { name: "Faire une séance de renforcement musculaire pour les bras avec des poids légers de 20 minutes", date: "2024-06-30", completed: false },
        { name: "Faire une séance de Power Yoga de 20 minutes", date: "2024-06-30", completed: false },
        { name: "Faire une séance de méditation de marche de 10 minutes après le sport", date: "2024-07-01", completed: false },
        { name: "Chasser 10 gobelins", date: "2024-07-01", completed: false },
        { name: "Trouver un artefact rare", date: "2024-07-01", completed: false },
        { name: "Sauver le village de l'attaque", date: "2024-07-01", completed: false },
        { name: "Faire 20 pompes", date: "2024-07-02", completed: false },
        { name: "Effectuer 50 jumping jacks", date: "2024-07-02", completed: false },
        { name: "Courir 1 kilomètre", date: "2024-07-02", completed: false },
        { name: "Faire une séance de yoga de 15 minutes", date: "2024-07-03", completed: false },
        { name: "Faire 30 squats", date: "2024-07-03", completed: false },
        { name: "Faire 10 burpees", date: "2024-07-03", completed: false },
        { name: "Faire 50 fentes", date: "2024-07-04", completed: false },
        { name: "Faire une séance de stretching de 10 minutes", date: "2024-07-04", completed: false },
        { name: "Faire 50 jumping lunges", date: "2024-07-04", completed: false },
        { name: "Faire une séance de cardio de 20 minutes", date: "2024-07-05", completed: false },
        { name: "Faire une séance de renforcement musculaire ciblé sur les bras de 15 minutes", date: "2024-07-05", completed: false },
    ];

    const finishDayButton = document.getElementById('finish-day-button');
    const clickSound = document.getElementById('clickSound');

    finishDayButton.addEventListener('click', () => {
        const todayDate = getTodayDate();
        quests.forEach((quest, index) => {
            if (quest.date === todayDate && !quest.completed) {
                markQuestCompleted(index);
            }
        });
    });
    
    finishDayButton.addEventListener('click', () => {
        const todayDate = getTodayDate();
        quests.forEach((quest, index) => {
            if (quest.date === todayDate && !quest.completed) {
                markQuestCompleted(index);
            }
        });

    // Ajoute 0.50 point de niveau
    level += 0.50;
    saveLevel(level);
    renderLevel(level);

    // Désactive le bouton après avoir été cliqué
    finishDayButton.disabled = true;

    clickSound.play();
});
    

const initialStats = {
    strength: 10,
    agility: 8,
    intelligence: 7
};

const initialLevel = 1;
const levelUpThreshold = 3;
const pointsPerLevel = 5;

// Fonction pour gérer la modification des statistiques avec la touche "C"
function handleC() {
    stats.strength += 0.25;
    stats.agility += 0.25;
    stats.intelligence += 0.25;
    saveStats(stats);
    renderStats(stats);

    // Augmente le nombre de quêtes accomplies
    stats.questsCompleted = (stats.questsCompleted || 0) + 1;
}

// Fonction pour gérer la modification des statistiques avec la touche "A"
function handleA() {
    stats.strength -= 0.25;
    stats.agility -= 0.25;
    stats.intelligence -= 0.25;
    saveStats(stats);
    renderStats(stats);

    // Diminue le nombre de quêtes accomplies
    stats.questsCompleted = Math.max(0, (stats.questsCompleted || 0) - 1);
}


    function getTodayDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${year}-${month}-${day}`;
    }

    function getCurrentTimestamp() {
        return new Date().getTime();
    }

    function loadQuests() {
        const storedQuests = localStorage.getItem('quests');
        return storedQuests ? JSON.parse(storedQuests) : initialQuests;
    }

    function saveQuests(quests) {
        localStorage.setItem('quests', JSON.stringify(quests));
    }

    function loadStats() {
        const storedStats = localStorage.getItem('stats');
        return storedStats ? JSON.parse(storedStats) : initialStats;
    }

    function saveStats(stats) {
        localStorage.setItem('stats', JSON.stringify(stats));
    }

    function loadLevel() {
        const storedLevel = localStorage.getItem('level');
        return storedLevel ? parseInt(storedLevel) : initialLevel;
    }

function saveLevel(level) {
    localStorage.setItem('level', level.toString());
}

    function loadLastQuestTimestamp() {
        const lastQuestTimestamp = localStorage.getItem('lastQuestTimestamp');
        return lastQuestTimestamp ? parseInt(lastQuestTimestamp) : 0;
    }

    function saveLastQuestTimestamp(timestamp) {
        localStorage.setItem('lastQuestTimestamp', timestamp.toString());
    }

    function loadLastStatsUpdateTimestamp() {
        const lastStatsUpdateTimestamp = localStorage.getItem('lastStatsUpdateTimestamp');
        return lastStatsUpdateTimestamp ? parseInt(lastStatsUpdateTimestamp) : 0;
    }

    function saveLastStatsUpdateTimestamp(timestamp) {
        localStorage.setItem('lastStatsUpdateTimestamp', timestamp.toString());
    }

    function resetQuests() {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const timeoutDuration = midnight.getTime() - new Date().getTime() + 60000; // Ajoute une minute de délai

        setTimeout(() => {
            localStorage.removeItem('quests');
            location.reload();
        }, timeoutDuration);
    }

    resetQuests();

    function addDailyQuest(quests) {
        const currentTimestamp = getCurrentTimestamp();
        const lastQuestTimestamp = loadLastQuestTimestamp();

        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (currentTimestamp - lastQuestTimestamp >= twentyFourHours) {
            const todayDate = getTodayDate();
            const newQuest = { name: `Nouvelle quête du ${todayDate}`, date: todayDate, completed: false };
            quests.push(newQuest);
            saveQuests(quests);
            saveLastQuestTimestamp(currentTimestamp);
        }
    }

    function markQuestCompleted(index) {
        quests[index].completed = true;
        stats.strength += 0.25;
        stats.agility += 0.25;
        stats.intelligence += 0.25;

        const levelExperience = parseInt(localStorage.getItem('levelExperience')) || 0;
        const newExperience = levelExperience + 1;
        localStorage.setItem('levelExperience', newExperience.toString());
        renderExperience();

        setTimeout(() => {
            quests.splice(index, 1);
            saveQuests(quests);
            renderQuests(quests);
        }, 5 * 60 * 1000);

        if (Math.floor(stats.strength / levelUpThreshold) >= 3 &&
            Math.floor(stats.agility / levelUpThreshold) >= 3 &&
            Math.floor(stats.intelligence / levelUpThreshold) >= 3) {
            levelUp();
        }

        // Mettre à jour le nombre de quêtes accomplies
        stats.questsCompleted = (stats.questsCompleted || 0) + 1;

        saveQuests(quests);
        saveStats(stats);
        renderQuests(quests);
        renderStats(stats);
        renderExperience();
    }

    function markQuestUndo(index) {
        console.log('Quête avant l\'annulation :', quests[index]);
        if (quests[index].completed) {
            stats.strength -= 0.25;
            stats.agility -= 0.25;
            stats.intelligence -= 0.25;

            const levelExperience = parseInt(localStorage.getItem('levelExperience')) || 0;
            const newExperience = levelExperience - 1;
            localStorage.setItem('levelExperience', newExperience.toString());
            renderExperience();
        }

        quests[index].completed = false;

        console.log('Quête après l\'annulation :', quests[index]);

        saveQuests(quests);
        saveStats(stats);
        renderQuests(quests);
        renderStats(stats);
    }

    function levelUp() {
        const currentLevel = loadLevel();
        const newLevel = currentLevel + 1;
        saveLevel(newLevel);
        stats.strength += 0.5;
        stats.agility += 0.5;
        stats.intelligence += 0.5;
        saveStats(stats);
        renderStats(stats);
        alert(`Félicitations ! Vous avez atteint le niveau ${newLevel} ! Vos statistiques ont été améliorées.`);
    }
    

    function renderQuests(quests) {
        const questList = document.getElementById('quests');
        questList.innerHTML = '';

        const todayDate = getTodayDate();

        const filteredQuests = quests.filter(quest => quest.date === todayDate);

        filteredQuests.forEach((quest) => {
            const questItem = document.createElement('li');
            questItem.textContent = quest.name;
            questList.appendChild(questItem);

            // Si la quête est accomplie, barrer le texte
            if (quest.completed) {
                questItem.style.textDecoration = "line-through";
            }
        });
    }

    function renderStats(stats) {
        const statsList = document.getElementById('stats-list');
        statsList.innerHTML = '';
        for (let stat in stats) {
            const statItem = document.createElement('li');
            statItem.textContent = `${stat}: ${stats[stat]}`;
            statsList.appendChild(statItem);
        }
    }

    function renderLevel(level) {
        const levelInfo = document.getElementById('level-info');
        levelInfo.textContent = `Niveau actuel: ${level}`;
    }

    function renderExperience() {
        const levelExperience = parseInt(localStorage.getItem('levelExperience')) || 0;
        const experienceInfo = document.getElementById('experience-info');
        experienceInfo.textContent = `Expérience: ${levelExperience}`;
    }

    function updateStatsEveryTwelveHours() {
        const currentTimestamp = getCurrentTimestamp();
        const lastStatsUpdateTimestamp = loadLastStatsUpdateTimestamp();

        const twelveHours = 12 * 60 * 60 * 1000;

        if (currentTimestamp - lastStatsUpdateTimestamp >= twelveHours) {
            stats.strength += 0.25;
            stats.agility += 0.25;
            stats.intelligence += 0.25;
            saveStats(stats);
            renderStats(stats);
            saveLastStatsUpdateTimestamp(currentTimestamp);
        }

        setTimeout(updateStatsEveryTwelveHours, twelveHours);
    }

    let quests = loadQuests();
    let stats = loadStats();
    let level = loadLevel();
    renderLevel(level);

    renderQuests(quests);
    renderStats(stats);
    renderLevel(level);
    renderExperience();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'c' || event.key === 'C') {
            handleC();
        } else if (event.key === 'a' || event.key === 'A') {
            handleA();
        }
    });

    updateStatsEveryTwelveHours();

    const addQuestButton = document.getElementById('add-quest');
    addQuestButton.addEventListener('click', () => {
        addDailyQuest(quests);
        renderQuests(quests);
    });

});
