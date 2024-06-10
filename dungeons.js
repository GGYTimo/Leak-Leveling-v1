document.addEventListener('DOMContentLoaded', function() {
    // Charger le son
    const startupSound = new Audio('song/My Audio.mp3');

    // Jouer le son
    startupSound.play();

    const dungeonsContainer = document.getElementById('dungeons');
    const levelInfo = document.getElementById('level-info');
    const expInfo = document.getElementById('exp-info');

    let experience = 0;
    let level = 1;

    // Fonction pour récupérer la date de la dernière génération des donjons à partir du stockage local
    function getLastGeneratedDate() {
        return localStorage.getItem('lastGeneratedDate');
    }

    // Fonction pour sauvegarder la date de la dernière génération des donjons dans le stockage local
    function saveLastGeneratedDate() {
        localStorage.setItem('lastGeneratedDate', new Date().toISOString());
    }

    // Fonction pour générer les donjons
    function generateDungeons() {
        // Supprimer les donjons existants
        dungeonsContainer.innerHTML = '';

        // Donjons disponibles avec leurs quêtes
        const dungeons = [
            { 
                name: 'Dungeon 1', 
                quests: [
                    'Faire 50 pompes',
                    'Courir pendant 30 minutes',
                    'Faire 100 sauts à la corde'
                ]
            },
            { 
                name: 'Dungeon 2', 
                quests: [
                    'Faire 50 squats',
                    'Nager pendant 20 minutes',
                    'Faire 200 abdominaux'
                ]
            },
            { 
                name: 'Dungeon 3', 
                quests: [
                    'Faire 20 burpees',
                    'Faire du vélo pendant 45 minutes',
                    'Faire 150 fentes'
                ]
            }
            // Ajoutez plus de donjons avec leurs quêtes respectives ici
        ];

        // Créer une section pour chaque donjon
        dungeons.forEach((dungeon, index) => {
            const section = document.createElement('section');
            section.classList.add('dungeon');

            const heading = document.createElement('h2');
            heading.textContent = dungeon.name;

            const questList = document.createElement('ul');
            dungeon.quests.forEach(quest => {
                const questItem = document.createElement('li');
                questItem.textContent = quest;
                questList.appendChild(questItem);
            });

            const button = document.createElement('button');
            button.textContent = 'Valider';
            button.addEventListener('click', () => {
                completeQuest(index);
            });

            section.appendChild(heading);
            section.appendChild(questList);
            section.appendChild(button);

            dungeonsContainer.appendChild(section);
        });

        // Sauvegarder la date de la dernière génération des donjons
        saveLastGeneratedDate();
    }

    // Fonction pour accomplir une quête
    function completeQuest(dungeonIndex) {
        // Ajouter de l'expérience
        experience += 10;

        // Mettre à jour les informations sur l'expérience
        expInfo.textContent = `Quêtes Accomplies : ${experience}/100`;

        // Vérifier si le niveau doit être augmenté
        if (experience >= 100) {
            levelUp();
        }
    }

    // Fonction pour augmenter de niveau
    function levelUp() {
        // Augmenter le niveau
        level++;

        // Réinitialiser l'expérience
        experience = 0;

        // Mettre à jour les informations sur le niveau
        levelInfo.textContent = `Niveau actuel : ${level}`;
        expInfo.textContent = `Quêtes Accomplies : ${experience}/100`;
    }

    // Vérifier si les donjons doivent être générés à nouveau
    const lastGeneratedDate = getLastGeneratedDate();
    if (!lastGeneratedDate || isWeekPassed(new Date(lastGeneratedDate))) {
        generateDungeons();
    }

    // Fonction pour vérifier si une semaine s'est écoulée depuis la date donnée
    function isWeekPassed(lastGeneratedDate) {
        const oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000; // Nombre de millisecondes dans une semaine
        const currentTimestamp = new Date().getTime();
        const lastGeneratedTimestamp = lastGeneratedDate.getTime();
        return currentTimestamp - lastGeneratedTimestamp >= oneWeekMilliseconds;
    }
});
