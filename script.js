document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio de robotique chargé !");

    // Gestion de la langue
    const translations = {
        fr: {
            "nav-about": "À propos",
            "nav-education": "Éducation",
            "nav-experience": "Expérience",
            "nav-projects": "Projets",
            "nav-skills": "Compétences",
            "nav-certifications": "Certifications",
            "nav-contact": "Contact",
            "lang-toggle": "English",
            "hero-name": "François Mc Lloyd Nonnez",
            "hero-education": "Étudiant en Master Automatique et Robotique des Systèmes Intelligents à l’Université de Technologie de Compiègne",
            "action-hire": "Engagez-moi",
            "action-cv-fr": "Voir mon CV en français",
            "action-cv-en": "Voir mon CV en anglais",
            "about-title": "À propos de moi",
            "about-text-1": "Je m'appelle Francois Mc Lloyd Nonez, étudiant passionné par la robotique et les technologies intelligentes.",
            "about-text-2": "Je poursuis actuellement un Master en robotique, où je développe mes compétences en programmation, mécatronique et intelligence artificielle.",
            "about-text-3": "Ce portfolio est mon espace personnel où je partage mes projets, mes défis et mes réflexions. Chaque ligne de code, chaque capteur mal branché ou robot capricieux fait partie de mon apprentissage.",
            "about-text-4": "Je m’intéresse particulièrement aux robots autonomes, aux systèmes embarqués et à la robotique médicale, domaines dans lesquels je souhaite évoluer professionnellement.",
            "education-title": "Éducation",
            "education-text-1": "<strong>Université technologique de Compiègne</strong><br>(2025-2027)<br>M1 Automatique et robotique des systèmes intelligents.",
            "education-text-2": "<strong>Université de Lille</strong><br>(2022-2025)<br>Licence Electronique Energie Electrique et Automatique.",
            "education-text-3": "<strong>Université d'Etat D'Haiti Faculté des Sciences</strong><br>(2020-2022)<br>Classe préparatoire Maths Physique Chimie Informatique.",
            "education-univ-1": "Université technologique de Compiègne",
            "education-univ-2": "Université de Lille",
            "education-univ-3": "Université d'Etat D'Haiti Faculté des Sciences",
            "experience-title": "Expérience Professionnelle",
            "experience-job-1-title": "Membre Polyvalent d’Équipe",
            "experience-job-1-details": "<strong>Auchan Hypermarket Englos</strong><br>Février 2022 – Décembre 2024",
            "experience-job-1-desc-1": "Gestion de la relation client et résolution de problèmes techniques.",
            "experience-job-1-desc-2": "Collaboration en équipe pour optimiser les processus logistiques.",
            "experience-job-1-desc-3": "Développement de l’autonomie et de l’adaptabilité en environnement dynamique.",
            "experience-job-2-title": "Stage en Robotique",
            "experience-job-2-details": "<strong>Ingeniarius Lda</strong><br>Juin 2025 – Août 2025",
            "experience-job-2-desc-1": "Développement de logiciels pour la commande de robots et intégration de capteurs.",
            "experience-job-2-desc-2": "Utilisation de technologies comme ROS (Robot Operating System) et programmation en Python.",
            "experience-job-2-desc-3": "Application de techniques d'intelligence artificielle, y compris des algorithmes bio-inspirés et des machines à états finis, pour améliorer l'autonomie et l'intelligence des systèmes robotiques.",
            "projects-title": "Projets",
            "projects-text": "Détails sur mes projets à venir.",
            "skills-title": "Compétences",
            "category-programming": "Programmation",
            "skill-python": "Python c/c++ VHDL",
            "skill-matlab": "MATLAB/Simulink",
            "skill-web": "JS/HTML/CSS",
            "category-automation": "Outils d’automatisation",
            "skill-ros": "ROS/ROS2 CAO",
            "skill-gazebo": "Simulation Gazebo Ladder",
            "skill-urdf": "URDF rviz nav2",
            "category-embedded": "Systèmes embarqués",
            "skill-arduino": "Arduino",
            "skill-linux": "Linux pour la robotique",
            "skill-raspberry": "Raspberry",
            "category-data": "Analyse de données",
            "skill-ml": "Machine Learning",
            "skill-optimization": "Optimisation de processus",
            "certifications-title": "Certifications",
            "certification-ros2": "ROS2 Basics en 5 jours (Python)",
            "certification-issuer": "Délivré par The Construct",
            "certification-recipient": "Mc Lloyd Nonnez Francois",
            "contact-title": "Contact moi ",
            "contact-email-text": "Mon mail",
            "contact-phone-text": "+33644081419",
            "contact-location-text": "Location : France",
            "footer-copyright": "© 2025 Lloyd Robolojik. Tous droits réservés."
        },
        en: {
            "nav-about": "About",
            "nav-education": "Education",
            "nav-experience": "Experience",
            "nav-projects": "Projects",
            "nav-skills": "Skills",
            "nav-certifications": "Certifications",
            "nav-contact": "Contact",
            "lang-toggle": "Français",
            "hero-name": "François Mc Lloyd Nonnez",
            "hero-education": "Master’s Student in Automation and Robotics of Intelligent Systems at the University of Technology of Compiègne",
            "action-hire": "Hire Me",
            "action-cv-fr": "View my CV in French",
            "action-cv-en": "View my CV in English",
            "about-title": "About Me",
            "about-text-1": "My name is Francois Mc Lloyd Nonez, a student passionate about robotics and intelligent technologies.",
            "about-text-2": "I am currently pursuing a Master's degree in robotics, where I am developing my skills in programming, mechatronics, and artificial intelligence.",
            "about-text-3": "This portfolio is my personal space where I share my projects, challenges, and reflections. Every line of code, every miswired sensor, or temperamental robot is part of my learning journey.",
            "about-text-4": "I am particularly interested in autonomous robots, embedded systems, and medical robotics, fields in which I aim to grow professionally.",
            "education-title": "Education",
            "education-text-1": "<strong>University of Technology of Compiègne</strong><br>(2025-2027)<br>M1 Automatic and Robotics of Intelligent Systems.",
            "education-text-2": "<strong>University of Lille</strong><br>(2022-2025)<br>Bachelor's in Electronics, Energy, Electrical Engineering, and Automation.",
            "education-text-3": "<strong>State University of Haiti Faculty of Sciences</strong><br>(2020-2022)<br>Preparatory Class in Mathematics, Physics, Chemistry, and Computer Science.",
            "education-univ-1": "University of Technology of Compiègne",
            "education-univ-2": "University of Lille",
            "education-univ-3": "State University of Haiti Faculty of Sciences",
            "experience-title": "Professional Experience",
            "experience-job-1-title": "Versatile Team Member",
            "experience-job-1-details": "<strong>Auchan Hypermarket Englos</strong><br>February 2022 – December 2024",
            "experience-job-1-desc-1": "Customer relationship management and technical problem-solving.",
            "experience-job-1-desc-2": "Team collaboration to optimize logistical processes.",
            "experience-job-1-desc-3": "Development of autonomy and adaptability in a dynamic environment.",
            "experience-job-2-title": "Robotics Internship",
            "experience-job-2-details": "<strong>Ingeniarius Lda</strong><br>June 2025 – August 2025",
            "experience-job-2-desc-1": "Development of software for robot control and sensor integration.",
            "experience-job-2-desc-2": "Use of technologies such as ROS (Robot Operating System) and Python programming.",
            "experience-job-2-desc-3": "Application of artificial intelligence techniques, including bio-inspired algorithms and finite state machines, to enhance the autonomy and intelligence of robotic systems.",
            "projects-title": "Projects",
            "projects-text": "Details about my projects to come.",
            "skills-title": "Skills",
            "category-programming": "Programming",
            "skill-python": "Python c/c++ VHDL",
            "skill-matlab": "MATLAB/Simulink",
            "skill-web": "JS/HTML/CSS",
            "category-automation": "Automation Tools",
            "skill-ros": "ROS/ROS2 CAO",
            "skill-gazebo": "Simulation Gazebo Ladder",
            "skill-urdf": "URDF rviz nav2",
            "category-embedded": "Embedded Systems",
            "skill-arduino": "Arduino",
            "skill-linux": "Linux for Robotics",
            "skill-raspberry": "Raspberry",
            "category-data": "Data Analysis",
            "skill-ml": "Machine Learning",
            "skill-optimization": "Process Optimization",
            "certifications-title": "Certifications",
            "certification-ros2": "ROS2 Basics in 5 Days (Python)",
            "certification-issuer": "Issued by The Construct",
            "certification-recipient": "Mc Lloyd Nonnez Francois",
            "contact-title": "Contacte me",
            "contact-email-text": "My mail",
            "contact-phone-text": "+33644081419",
            "contact-location-text": "Location : France",
            "footer-copyright": "© 2025 Lloyd Robolojik. All rights reserved."
        }
    };

    const langToggle = document.getElementById("lang-toggle");
    let currentLang = "fr";

    function updateLanguage(lang) {
        console.log("Mise à jour de la langue vers :", lang);
        if (!translations[lang]) {
            console.error("Langue non prise en charge :", lang);
            return;
        }
        document.querySelectorAll("[data-lang]").forEach(element => {
            const key = element.getAttribute("data-lang");
            console.log("Traitement de la clé :", key);
            element.innerHTML = translations[lang][key] || "[Clé manquante: " + key + "]";
        });
        document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
            const key = element.getAttribute("data-lang-placeholder");
            element.placeholder = translations[lang][key] || "Enter text";
        });
        if (langToggle) {
            langToggle.innerHTML = translations[lang]["lang-toggle"] || "[Toggle Lang]";
        } else {
            console.error("Element #lang-toggle non trouvé!");
        }
        document.documentElement.lang = lang;
        currentLang = lang;
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            console.log("Bascule de langue déclenchée, langue actuelle :", currentLang);
            updateLanguage(currentLang === "fr" ? "en" : "fr");
        });
    } else {
        console.error("Element #lang-toggle non trouvé au chargement!");
    }

    // Initialiser en français
    console.log("Initialisation de la langue :", currentLang);
    updateLanguage("fr");
});