/* =========================================================
   SMART CLUB ENSEM
   WHAT WE DO PAGE
========================================================= */


// =========================================================
// MOBILE MENU
// =========================================================

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");


    if (mobileMenu.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});



// Close mobile menu after clicking a link

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});



// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



// =========================================================
// SMALL TECH CARD MOVEMENT
// =========================================================

const techCard =
    document.querySelector(".tech-card");


if (techCard) {

    techCard.addEventListener("mousemove", event => {

        const rect =
            techCard.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateY =
            (x - centerX) / 35;

        const rotateX =
            (centerY - y) / 35;


        techCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    techCard.addEventListener("mouseleave", () => {

        techCard.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

}
// =========================================================
// LANGUAGE SYSTEM
// =========================================================

const translations = {

    en: {

        pageTitle:
            "What We Do | Smart Club ENSEM",

        home:
            "Home",

        about:
            "About Us",

        whatWeDo:
            "What We Do",

        projects:
            "Projects",

        events:
            "Events",

        joinUs:
            "Join Us",

        joinSmartClub:
            "Join Smart Club",

        joinSmartClubArrow:
            "Join Smart Club →",

        openNavigation:
            "Open navigation",

        pageNumber:
            "03 / SMART CLUB",

        whatWeDoLabel:
            "WHAT WE DO",

        heroTitle:
            "LEARN.<br>BUILD.<br><span>INNOVATE.</span>",

        heroDescription:
            "Smart Club is built around one idea: learning becomes more powerful when we turn knowledge into real projects.",

        exploreGoals:
            "Explore Our Goals ↓",

        upcomingActivities:
            "Upcoming Activities",

        smartClubSystem:
            "SMART CLUB SYSTEM",

        activeStatus:
            "● ACTIVE",

        ideasImpact:
            "IDEAS → IMPACT",

        learn:
            "LEARN",

        create:
            "CREATE",

        share:
            "SHARE",

        ourVision:
            "OUR VISION",

        visionTitle:
            "More than a club.<br><span>A space to experiment.</span>",

        visionTextOne:
            "Smart Club is a new ENSEM student initiative. Our objective is to create an environment where students can discover technologies, develop practical skills and transform ideas into engineering projects.",

        visionTextTwo:
            "Through formations, workshops, technical challenges, projects and events, we want students from different engineering backgrounds to learn from each other and build together.",

        ourGoals:
            "OUR GOALS",

        goalsTitle:
            "What we want to <span>build.</span>",

        goalsDescription:
            "Four areas that define the direction of Smart Club.",

        digitalTransformation:
            "DIGITAL TRANSFORMATION",

        digitalizationTitle:
            "Digitalization",

        digitalizationDescription:
            "Discover how digital tools can improve industrial processes, organization, productivity and decision-making.",

        webDevelopment:
            "Web Development",

        databases:
            "Databases",

        industrialData:
            "Industrial Data",

        digitalTools:
            "Digital Tools",

        engineeringCategory:
            "ENGINEERING",

        engineeringTitle:
            "Engineering & Automation",

        engineeringDescription:
            "Move from theory to practice by exploring electronics, automation, control systems and intelligent industrial technologies.",

        automation:
            "Automation",

        electronics:
            "Electronics",

        ideaToPrototype:
            "FROM IDEA TO PROTOTYPE",

        innovationTitle:
            "Innovation & Projects",

        innovationDescription:
            "Encourage members to identify problems, develop ideas and transform them into prototypes and collaborative projects.",

        prototyping:
            "Prototyping",

        teamProjects:
            "Team Projects",

        challenges:
            "Challenges",

        problemSolving:
            "Problem Solving",

        learnTogether:
            "LEARN TOGETHER",

        

        formationsDescription:
            "Practical learning sessions designed to introduce members to useful technologies and strengthen their technical skills.",

        programming:
            "Programming",

        technicalSkills:
            "Technical Skills",

        ourMethod:
            "OUR METHOD",

        methodTitle:
            "From curiosity<br>to <span>creation.</span>",

        discoverStep:
          "Discover",

        discoverDescription:
            "Explore a technology, problem or new idea.",

        learnStep:
            "Learn",

        learnDescription:
    "Develop skills through formations and workshops.",


        buildStep:
            "Build",

        buildDescription:
    "Apply knowledge through practical projects.",

        shareStep:
            "Share",

        shareDescription:
    "Present results and inspire other students.",

        learnWithSmartClub:
            "LEARN WITH SMART CLUB",

        formationsTitle:
    "Formations & Workshops", 

        upcomingFormationsTitle:
     "Upcoming <span>formations.</span>",

    formationsWorkshopsTitle:
    "Formations & Workshops",

        formationsHeadingDescription:
            "Technical sessions and workshops planned by Smart Club.",

        nextFormation:
            "NEXT FORMATION",

        date:
            "DATE",

        formationNumber:
            "SMART CLUB FORMATION #01",

        firstFormationTitle:
    "First formation coming soon.",

    ensemLocation:
    "⌖ ENSEM",

        firstFormationDescription:
            "The first Smart Club technical formation will be announced here.",

        timeTba:
            "◷ Time: TBA",

        openToMembers:
            "◎ Open to members",

        plannedTopics:
            "PLANNED TOPICS",

        arduinoElectronics:
            "Arduino & Electronics",

        arduinoTopics:
    "Hardware • Sensors • Projects",

         webDevelopmentTopics:
    "HTML • CSS • JavaScript",

        automationTopics:
    "PLC • Control • Industry 4.0",

        industrialAutomation:
            "Industrial Automation",

        smartCalendar:
            "SMART CALENDAR",

        scheduleTitle:
    "What's <span>next?</span>",

        scheduleHeadingDescription:
    "Follow upcoming formations, workshops and Smart Club events.",

        activity:
            "ACTIVITY",

        type:
            "TYPE",

        status:
            "STATUS",

        launchEvent:
    "Smart Club Launch",

        eventType:
            "EVENT",

        planned:
            "PLANNED",

        firstTechnicalFormation:
            "First Technical Formation",

        topicToBeAnnounced:
            "Topic to be announced",

        formationType:
            "FORMATION",

        workshopOne:
    "Smart Workshop #01",

        workshopType:
            "WORKSHOP",

        scheduleNote:
            "Schedule will be updated as new activities are announced.",

        ctaSmall:
    "YOU DON'T HAVE TO BE AN EXPERT.",

        ctaTitle:
    "You just need to be <span>curious.</span>",

    smartClub:
    "SMART CLUB",

ensemFullName:
    "École Nationale Supérieure<br>d'Électricité et de Mécanique",

copyright:
    "© 2026 Smart Club • ENSEM",

        ctaDescription:
            "Learn new skills, meet other engineering students and turn your ideas into projects with Smart Club.",

        footerSlogan:
            "Digital Minds. Real Impact.",

        studentClubOf:
            "STUDENT CLUB OF",

        followSmartClub:
            "FOLLOW SMART CLUB",

        footerBottomSlogan:
            "Digital Minds. <span>Real Impact.</span>"

    },


    fr: {

        pageTitle:
            "Nos activités | Smart Club ENSEM",

        home:
            "Accueil",

        about:
            "À propos",

        whatWeDo:
            "Nos activités",

        projects:
            "Projets",

        events:
            "Événements",

        joinUs:
            "Nous rejoindre",

        joinSmartClub:
            "Rejoindre Smart Club",

        joinSmartClubArrow:
            "Rejoindre Smart Club →",

        openNavigation:
            "Ouvrir le menu de navigation",

        pageNumber:
            "03 / SMART CLUB",

        whatWeDoLabel:
            "NOS ACTIVITÉS",

        heroTitle:
            "APPRENDRE.<br>CRÉER.<br><span>INNOVER.</span>",

        heroDescription:
            "Smart Club repose sur une idée simple : l'apprentissage devient plus puissant lorsque nous transformons nos connaissances en projets concrets.",

        exploreGoals:
            "Découvrir nos objectifs ↓",

        upcomingActivities:
            "Activités à venir",

        smartClubSystem:
            "SYSTÈME SMART CLUB",

        activeStatus:
            "● ACTIF",

        ideasImpact:
            "IDÉES → IMPACT",

        learn:
            "APPRENDRE",

        create:
            "CRÉER",

        share:
            "PARTAGER",

        ourVision:
            "NOTRE VISION",

        visionTitle:
            "Plus qu'un club.<br><span>Un espace pour expérimenter.</span>",

        visionTextOne:
            "Smart Club est une nouvelle initiative étudiante de l'ENSEM. Notre objectif est de créer un environnement où les étudiants peuvent découvrir des technologies, développer des compétences pratiques et transformer leurs idées en projets d'ingénierie.",

        visionTextTwo:
            "Grâce aux formations, ateliers, défis techniques, projets et événements, nous souhaitons permettre aux étudiants de différentes filières d'ingénierie d'apprendre les uns des autres et de construire ensemble.",

        ourGoals:
            "NOS OBJECTIFS",

        goalsTitle:
            "Ce que nous voulons <span>construire.</span>",

        goalsDescription:
            "Quatre domaines qui définissent la direction de Smart Club.",

        digitalTransformation:
            "TRANSFORMATION NUMÉRIQUE",

        digitalizationTitle:
            "Digitalisation",

        digitalizationDescription:
            "Découvrez comment les outils numériques peuvent améliorer les processus industriels, l'organisation, la productivité et la prise de décision.",

        webDevelopment:
            "Développement web",

        databases:
            "Bases de données",

        industrialData:
            "Données industrielles",

        digitalTools:
            "Outils numériques",

        engineeringCategory:
            "INGÉNIERIE",

        engineeringTitle:
            "Ingénierie et automatisation",

        engineeringDescription:
            "Passez de la théorie à la pratique en explorant l'électronique, l'automatisation, les systèmes de contrôle et les technologies industrielles intelligentes.",

        automation:
            "Automatisation",

        electronics:
            "Électronique",

        ideaToPrototype:
            "DE L'IDÉE AU PROTOTYPE",

        innovationTitle:
            "Innovation et projets",

        innovationDescription:
            "Encourager les membres à identifier des problèmes, développer des idées et les transformer en prototypes et en projets collaboratifs.",

        prototyping:
            "Prototypage",

        teamProjects:
            "Projets d'équipe",

        challenges:
            "Défis",

        problemSolving:
            "Résolution de problèmes",

        learnTogether:
            "APPRENDRE ENSEMBLE",

        

        formationsDescription:
            "Des sessions d'apprentissage pratiques conçues pour faire découvrir aux membres des technologies utiles et renforcer leurs compétences techniques.",

        programming:
            "Programmation",

        technicalSkills:
            "Compétences techniques",

        ourMethod:
            "NOTRE MÉTHODE",

        methodTitle:
            "De la curiosité<br>à la <span>création.</span>",

        discoverStep:
            "Découvrir",

        discoverDescription:
            "Explorer une technologie, un problème ou une nouvelle idée.",

        learnStep:
            "Apprendre",

        learnDescription:
            "Développer ses compétences grâce aux formations et aux ateliers.",

        buildStep:
            "Construire",

        buildDescription:
            "Appliquer ses connaissances à travers des projets pratiques.",

        shareStep:
            "Partager",

        shareDescription:
            "Présenter les résultats et inspirer les autres étudiants.",

        learnWithSmartClub:
            "APPRENDRE AVEC SMART CLUB",

        upcomingFormationsTitle:
    "Prochaines <span>formations.</span>",

        formationsWorkshopsTitle:
    "Formations et ateliers",

        formationsHeadingDescription:
            "Sessions techniques et ateliers planifiés par Smart Club.",

        nextFormation:
            "PROCHAINE FORMATION",

        date:
            "DATE",

        formationNumber:
            "FORMATION SMART CLUB N°01",

        firstFormationTitle:
            "Première formation prochainement.",
        ensemLocation:
            "⌖ ENSEM",

        firstFormationDescription:
            "La première formation technique de Smart Club sera annoncée ici.",

        timeTba:
            "◷ Heure : à annoncer",

        openToMembers:
            "◎ Ouvert aux membres",

        plannedTopics:
            "THÈMES PRÉVUS",

        arduinoElectronics:
            "Arduino et électronique",

        arduinoTopics:
            "Matériel • Capteurs • Projets",
        
        webDevelopmentTopics:
    "HTML • CSS • JavaScript",

     automationTopics:
    "PLC • Control • Industry 4.0",

        industrialAutomation:
            "Automatisation industrielle",

        smartCalendar:
            "CALENDRIER SMART",

        scheduleTitle:
            "Quelle est la <span>suite ?</span>",

        scheduleHeadingDescription:
            "Suivez les prochaines formations, les ateliers et les événements de Smart Club.",

        activity:
            "ACTIVITÉ",

        type:
            "TYPE",

        status:
            "STATUT",

        launchEvent:
            "Lancement de Smart Club",

        eventType:
            "ÉVÉNEMENT",

        planned:
            "PLANIFIÉ",

        firstTechnicalFormation:
            "Première formation technique",

        topicToBeAnnounced:
            "Sujet à annoncer",

        formationType:
            "FORMATION",

        workshopOne:
            "Atelier Smart n°01",

        workshopType:
            "ATELIER",

        scheduleNote:
            "Le calendrier sera mis à jour dès que de nouvelles activités seront annoncées.",

        ctaSmall:
            "VOUS N'AVEZ PAS BESOIN D'ÊTRE UN EXPERT.",

        ctaTitle:
            "Vous devez simplement être <span>curieux.</span>",
        
        smartClub:
              "SMART CLUB",

        ensemFullName:
            "École Nationale Supérieure<br>d'Électricité et de Mécanique",

        copyright:
            "© 2026 Smart Club • ENSEM",

        ctaDescription:
            "Apprenez de nouvelles compétences, rencontrez d'autres étudiants en ingénierie et transformez vos idées en projets avec Smart Club.",

        footerSlogan:
            "Esprits numériques. Impact réel.",

        studentClubOf:
            "CLUB ÉTUDIANT DE",

        followSmartClub:
            "SUIVEZ SMART CLUB",

        footerBottomSlogan:
            "Esprits numériques. <span>Impact réel.</span>"

    }

};


// =========================================================
// APPLY LANGUAGE
// =========================================================

function applyLanguage(language) {

    const selectedLanguage =
        translations[language] || translations.en;


    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (selectedLanguage[key] !== undefined) {

                element.textContent =
                    selectedLanguage[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-html]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n-html");

            if (selectedLanguage[key] !== undefined) {

                element.innerHTML =
                    selectedLanguage[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-aria-label"
                );

            if (selectedLanguage[key] !== undefined) {

                element.setAttribute(
                    "aria-label",
                    selectedLanguage[key]
                );

            }

        });


    localStorage.setItem(
        "smartClubLanguage",
        language
    );


    const englishButton =
        document.getElementById("enBtn");

    const frenchButton =
        document.getElementById("frBtn");


    if (englishButton) {

        englishButton.classList.toggle(
            "active",
            language === "en"
        );

    }


    if (frenchButton) {

        frenchButton.classList.toggle(
            "active",
            language === "fr"
        );

    }

}


// =========================================================
// LOAD SAVED LANGUAGE
// =========================================================

const savedLanguage =
    localStorage.getItem(
        "smartClubLanguage"
    ) || "en";


applyLanguage(savedLanguage);


// =========================================================
// LANGUAGE BUTTONS
// =========================================================

const englishButton =
    document.getElementById("enBtn");

const frenchButton =
    document.getElementById("frBtn");


if (englishButton) {

    englishButton.addEventListener(
        "click",
        () => {

            applyLanguage("en");

        }
    );

}


if (frenchButton) {

    frenchButton.addEventListener(
        "click",
        () => {

            applyLanguage("fr");

        }
    );

}