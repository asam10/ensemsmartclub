/* =========================================================
   SMART CLUB ENSEM
   WHAT WE DO PAGE
========================================================= */


// ==========================================================
// MOBILE MENU
// ==========================================================

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


function closeMobileMenu() {

    if (!menuBtn || !mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("open");

    menuBtn.textContent = "☰";

    menuBtn.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


function openMobileMenu() {

    if (!menuBtn || !mobileMenu) {
        return;
    }

    mobileMenu.classList.add("open");

    menuBtn.textContent = "✕";

    menuBtn.setAttribute(
        "aria-label",
        "Close navigation menu"
    );
}


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileMenu.classList.contains("open");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }
    );


    // Close menu when clicking a mobile link

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );

    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {
                    closeMobileMenu();
                }
            );
        }
    );


    // Close menu with Escape key

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("open")
            ) {
                closeMobileMenu();
            }
        }
    );
}



// ==========================================================
// NAVBAR SCROLL EFFECT
// ==========================================================

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}


// Run once when page loads

updateNavbar();


// Run when scrolling

window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);



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
/* =========================================================
   SMART CLUB — WHAT WE DO
   MAJESTIC NEURAL SYSTEM
   CHERRY RED + DARK GREY
   Paste at the VERY BOTTOM of what-we-do.js
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DEVICE / ACCESSIBILITY
    ===================================================== */

    const isMobile =
        window.matchMedia(
            "(max-width: 768px)"
        ).matches;


    const hasFinePointer =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



 /* =====================================================
       01 — PREMIUM SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.createElement("div");


    Object.assign(
        scrollProgress.style,
        {
            position: "fixed",

            top: "0",
            left: "0",

            width: "0%",
            height: "2px",

            zIndex: "99999",

            pointerEvents: "none",

            background:
                "linear-gradient(" +
                "90deg," +
                "#d60063," +
                "#ff2d83 42%," +
                "#8b5cf6 70%," +
                "#00d9ff" +
                ")",

            boxShadow:
                "0 0 16px rgba(255,45,131,.75)," +
                "0 0 28px rgba(0,217,255,.22)"
        }
    );


    document.body.appendChild(
        scrollProgress
    );


    function updateScrollProgress() {

        const maximum =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const progress =
            maximum > 0
                ? window.scrollY / maximum
                : 0;


        scrollProgress.style.width =
            Math.min(
                progress * 100,
                100
            ) + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );


    updateScrollProgress();




    /* =====================================================
       02 — STYLES FOR NEURAL POINTS + LINES
    ===================================================== */

    const majesticStyle =
        document.createElement("style");


    majesticStyle.textContent = `

        /* ================================================
           WHAT WE DO — NEURAL BACKGROUND
        ================================================= */

        .wwd-neural-host {
            position: relative !important;
            isolation: isolate;
        }


        .wwd-neural-field {
            position: absolute;

            inset: 0;

            width: 100%;
            height: 100%;

            overflow: hidden;

            pointer-events: none;

            z-index: 1;
        }


        .wwd-neural-host > *:not(.wwd-neural-field) {
            position: relative;

            z-index: 2;
        }


        /* ================================================
           NEURON / STAR
        ================================================= */

        .wwd-neural-node {

            width: 5px;
            height: 5px;

            position: absolute;

            display: block;

            border-radius: 50%;

            background:
                #b5002a;

            box-shadow:
    0 0 6px rgba(255, 0, 55, 1),
    0 0 14px rgba(220, 0, 48, 1),
    0 0 28px rgba(181, 0, 42, .95),
    0 0 50px rgba(181, 0, 42, .70),
    0 0 80px rgba(143, 0, 31, .40);

            opacity: .72;

            animation:
                wwdNeuronPulse
                3.2s
                ease-in-out
                infinite;
        }


        .wwd-neural-node.grey {

            width: 4px;
            height: 4px;

            background:
                #a0a2a8;

            box-shadow:
                0 0 5px rgba(200,200,205,.65),
                0 0 13px rgba(160,162,168,.28);

            opacity: .55;
        }


        .wwd-neural-node.small {

            width: 3px;
            height: 3px;

            opacity: .48;
        }


        .wwd-neural-node.large {

            width: 7px;
            height: 7px;

            box-shadow:
                0 0 7px rgba(181,0,42,1),
                0 0 18px rgba(181,0,42,.62),
                0 0 34px rgba(143,0,31,.32);
        }



        /* ================================================
           CONNECTION LINE
        ================================================= */

        .wwd-neural-line {

            height: 1px;

            position: absolute;

            display: block;

            transform-origin:
                left center;

            pointer-events: none;

            opacity: .24;

            background:
                linear-gradient(
                    90deg,
                    rgba(143,0,31,.08),
                    rgba(181,0,42,.42),
                    rgba(160,162,168,.14)
                );

            box-shadow:
                0 0 5px
                rgba(143,0,31,.08);

            overflow: hidden;
        }


        .wwd-neural-line::after {

            content: "";

            width: 35px;
            height: 100%;

            position: absolute;

            top: 0;
            left: -40px;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(181,0,42,.9),
                    transparent
                );

            opacity: .7;

            animation:
                wwdSignalTravel
                5s
                linear
                infinite;
        }



        /* ================================================
           ANIMATIONS
        ================================================= */

        @keyframes wwdNeuronPulse {

    0%,
    100% {
        transform:
            translate(0px, 0px)
            scale(1);

        opacity: .55;

        filter:
            brightness(1)
            drop-shadow(0 0 3px rgba(181,0,42,.65));
    }

    25% {
        transform:
            translate(7px, -5px)
            scale(1.25);

        opacity: .80;

        filter:
            brightness(1.6)
            drop-shadow(0 0 7px rgba(181,0,42,.85));
    }

    50% {
        transform:
            translate(12px, 4px)
            scale(1.65);

        opacity: 1;

        filter:
    brightness(3.5)
    drop-shadow(0 0 8px rgba(255,0,55,1))
    drop-shadow(0 0 18px rgba(181,0,42,1))
    drop-shadow(0 0 35px rgba(143,0,31,.8));
    }

    75% {
        transform:
            translate(4px, 9px)
            scale(1.25);

        opacity: .82;

        filter:
            brightness(1.5)
            drop-shadow(0 0 7px rgba(181,0,42,.8));
    }
}


        @keyframes wwdSignalTravel {

            0% {

                transform:
                    translateX(0);

                opacity:
                    0;

            }

            12% {

                opacity:
                    .8;

            }

            75% {

                opacity:
                    .55;

            }

            100% {

                transform:
                    translateX(450px);

                opacity:
                    0;

            }

        }



        /* ================================================
           MOBILE
        ================================================= */

        @media (max-width: 768px) {

            .wwd-neural-node {

                opacity:
                    .48;

            }


            .wwd-neural-line {

                opacity:
                    .13;

            }

        }



        /* ================================================
           ACCESSIBILITY
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

            .wwd-neural-node,
            .wwd-neural-line::after {

                animation:
                    none !important;

            }

        }

    `;


    document.head.appendChild(
        majesticStyle
    );



    /* =====================================================
       03 — SECTIONS THAT RECEIVE THE EFFECT
    ===================================================== */

    const neuralSections = [

        document.querySelector(
            ".hero"
        ),

        document.querySelector(
            ".intro"
        ),

        document.querySelector(
            ".fields"
        ),

        document.querySelector(
            ".process"
        ),

        document.querySelector(
            ".formations"
        ),

        document.querySelector(
            ".schedule"
        ),

        document.querySelector(
            ".cta"
        )

    ].filter(Boolean);



    /* =====================================================
       04 — CREATE LIVING NEURAL NETWORK
    ===================================================== */

    function createNeuralNetwork(
        section,
        nodeCount
    ) {


        /* Don't generate twice */

        if (
            section.querySelector(
                ".wwd-neural-field"
            )
        ) {

            return;

        }


        section.classList.add(
            "wwd-neural-host"
        );



        const network =
            document.createElement(
                "div"
            );


        network.className =
            "wwd-neural-field";


        network.setAttribute(
            "aria-hidden",
            "true"
        );


        section.prepend(
            network
        );



        const nodes = [];



        /* =================================================
           CREATE STARS / NODES
        ================================================= */

        for (
            let i = 0;
            i < nodeCount;
            i++
        ) {

            const node =
                document.createElement(
                    "span"
                );


            node.className =
                "wwd-neural-node";


            /*
                Mix cherry points with
                some neutral grey points.
            */

            if (
                Math.random() > .73
            ) {

                node.classList.add(
                    "grey"
                );

            }


            if (
                Math.random() > .78
            ) {

                node.classList.add(
                    "small"
                );

            }


            else if (
                Math.random() > .87
            ) {

                node.classList.add(
                    "large"
                );

            }



            /*
                Keep points away from
                the extreme borders.
            */

            const x =
                4 +
                Math.random() *
                92;


            const y =
                6 +
                Math.random() *
                88;



            node.style.left =
                x + "%";


            node.style.top =
                y + "%";


            node.style.animationDelay =
                (
                    -Math.random() *
                    4
                ) + "s";


            node.style.animationDuration =
                (
                    2.5 +
                    Math.random() *
                    3
                ) + "s";


            node.dataset.x =
                x;


            node.dataset.y =
                y;



            network.appendChild(
                node
            );


            nodes.push(
                node
            );

        }



        /* =================================================
           CONNECT RANDOM NEARBY NODES
        ================================================= */

        const connectionCount =
            Math.min(

                nodeCount + 5,

                isMobile
                    ? 7
                    : 18

            );



        for (
            let i = 0;
            i < connectionCount;
            i++
        ) {


            const first =
                nodes[
                    Math.floor(
                        Math.random() *
                        nodes.length
                    )
                ];


            let second =
                nodes[
                    Math.floor(
                        Math.random() *
                        nodes.length
                    )
                ];


            if (
                first === second
            ) {

                second =
                    nodes[
                        (
                            nodes.indexOf(
                                first
                            ) +
                            1
                        ) %
                        nodes.length
                    ];

            }



            const x1 =
                Number(
                    first.dataset.x
                );


            const y1 =
                Number(
                    first.dataset.y
                );


            const x2 =
                Number(
                    second.dataset.x
                );


            const y2 =
                Number(
                    second.dataset.y
                );



            const dx =
                x2 - x1;


            const dy =
                y2 - y1;



            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );



            /*
                Avoid very long ugly lines.
            */

            if (
                distance > 48
            ) {

                continue;

            }



            const angle =
                Math.atan2(
                    dy,
                    dx
                ) *
                180 /
                Math.PI;



            const line =
                document.createElement(
                    "span"
                );


            line.className =
                "wwd-neural-line";


            line.style.left =
                x1 + "%";


            line.style.top =
                y1 + "%";


            line.style.width =
                distance + "%";


            line.style.transform =
                "rotate(" +
                angle +
                "deg)";


            line.style.animationDelay =
                (
                    -Math.random() *
                    4
                ) + "s";



            network.insertBefore(
                line,
                network.firstChild
            );

        }



        /* =================================================
           RANDOM NEURON FIRING
        ================================================= */

        if (
            !reduceMotion
        ) {

            setInterval(
                function () {

                    const node =
                        nodes[
                            Math.floor(
                                Math.random() *
                                nodes.length
                            )
                        ];


                    if (!node) {
                        return;
                    }


                    node.animate(

                        [

                            {
                                transform:
                                    "scale(1)",

                                filter:
                                    "brightness(1)"
                            },

                            {
                                transform:
                                    "scale(2.5)",

                                filter:
                                    "brightness(3)"
                            },

                            {
                                transform:
                                    "scale(1)",

                                filter:
                                    "brightness(1)"
                            }

                        ],

                        {
                            duration:
                                700,

                            easing:
                                "cubic-bezier(.2,.7,.2,1)"
                        }

                    );

                },

                950 +
                Math.random() *
                700

            );

        }

    }



    /* =====================================================
       05 — APPLY NETWORK TO ALL SECTIONS
    ===================================================== */

    neuralSections.forEach(
        function (
            section,
            index
        ) {

            createNeuralNetwork(

                section,

                isMobile
                    ? 5
                    : (
                        index === 0
                            ? 17
                            : 10
                    )

            );

        }
    );



    /* =====================================================
       06 — HERO MOUSE REACTION
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero"
        );


    if (
        hero &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const points =
            hero.querySelectorAll(
                ".wwd-neural-node"
            );


        hero.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


                const mouseX =
                    event.clientX -
                    rect.left;


                const mouseY =
                    event.clientY -
                    rect.top;



                points.forEach(
                    function (point) {

                        const pointRect =
                            point
                                .getBoundingClientRect();


                        const pointX =
                            pointRect.left -
                            rect.left;


                        const pointY =
                            pointRect.top -
                            rect.top;



                        const dx =
                            mouseX -
                            pointX;


                        const dy =
                            mouseY -
                            pointY;


                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );


                        if (
                            distance < 150
                        ) {

                            const intensity =
                                1 -
                                distance /
                                150;


                            point.style.filter =
                                "brightness(" +
                                (
                                    1 +
                                    intensity *
                                    2.2
                                ) +
                                ")";


                            point.style.transform =
                                "scale(" +
                                (
                                    1 +
                                    intensity *
                                    .8
                                ) +
                                ")";

                        }

                        else {

                            point.style.filter =
                                "";

                            point.style.transform =
                                "";

                        }

                    }
                );

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                points.forEach(
                    function (point) {

                        point.style.filter =
                            "";

                        point.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       07 — SUBTLE CHERRY MOUSE AURA
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        const aura =
            document.createElement(
                "div"
            );


        aura.setAttribute(
            "aria-hidden",
            "true"
        );


        Object.assign(
            aura.style,
            {

                width:
                    "480px",

                height:
                    "480px",

                position:
                    "fixed",

                top:
                    "0",

                left:
                    "0",

                zIndex:
                    "0",

                pointerEvents:
                    "none",

                borderRadius:
                    "50%",

                opacity:
                    ".11",

                filter:
                    "blur(30px)",

                transform:
                    "translate(-50%, -50%)",

                background:
                    "radial-gradient(" +
                    "circle," +
                    "rgba(181,0,42,.34)," +
                    "rgba(143,0,31,.13) 36%," +
                    "rgba(160,162,168,.035) 55%," +
                    "transparent 72%" +
                    ")"

            }
        );


        document.body.appendChild(
            aura
        );


        let x =
            window.innerWidth / 2;


        let y =
            window.innerHeight / 2;


        let targetX =
            x;


        let targetY =
            y;



        document.addEventListener(
            "mousemove",
            function (event) {

                targetX =
                    event.clientX;


                targetY =
                    event.clientY;

            },
            {
                passive: true
            }
        );



        function moveAura() {

            x +=
                (
                    targetX -
                    x
                ) *
                .055;


            y +=
                (
                    targetY -
                    y
                ) *
                .055;


            aura.style.left =
                x + "px";


            aura.style.top =
                y + "px";


            requestAnimationFrame(
                moveAura
            );

        }


        moveAura();

    }



    /* =====================================================
       SMART CLUB SIGNATURE
    ===================================================== */

    console.log(
        "%c SMART CLUB // WHAT WE DO ",
        "background:#8f001f;" +
        "color:#fff;" +
        "padding:7px 12px;" +
        "font-weight:bold;" +
        "border-radius:4px;"
    );


})();

/* =========================================================
   WHAT WE DO — MOVING NEURAL LINES
   SAME LIVING EFFECT AS ABOUT / INDEX
   Paste at the VERY BOTTOM of what-we-do.js
========================================================= */

(function () {

    "use strict";


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const isMobile =
        window.matchMedia(
            "(max-width: 768px)"
        ).matches;


    if (reduceMotion) {
        return;
    }



    /* =====================================================
       SECTIONS
    ===================================================== */

    const sections = [

        document.querySelector(".hero"),

        document.querySelector(".intro"),

        document.querySelector(".fields"),

        document.querySelector(".process"),

        document.querySelector(".formations"),

        document.querySelector(".schedule"),

        document.querySelector(".cta")

    ].filter(Boolean);



    /* =====================================================
       CREATE MOVING NETWORK
    ===================================================== */

    function createMovingNetwork(section, specialHero = false) {


        /* Don't create twice */

        if (
            section.querySelector(
                ".wwd-moving-network"
            )
        ) {
            return;
        }



        /* Section must contain absolute canvas */

        const computed =
            getComputedStyle(section);


        if (
            computed.position === "static"
        ) {

            section.style.position =
                "relative";

        }



        /* =================================================
           CANVAS
        ================================================= */

        const canvas =
            document.createElement(
                "canvas"
            );


        canvas.className =
            "wwd-moving-network";


        canvas.setAttribute(
            "aria-hidden",
            "true"
        );


        Object.assign(
            canvas.style,
            {

                position:
                    "absolute",

                inset:
                    "0",

                width:
                    "100%",

                height:
                    "100%",

                zIndex:
                    "1",

                pointerEvents:
                    "none",

                opacity:
                    specialHero
                        ? ".68"
                        : ".48"

            }
        );


        section.prepend(
            canvas
        );



        /* Keep page content over particles */

        Array
            .from(section.children)
            .forEach(function (child) {

                if (child === canvas) {
                    return;
                }

                if (
                    getComputedStyle(child).position ===
                    "static"
                ) {

                    child.style.position =
                        "relative";

                }

                if (
                    !child.style.zIndex
                ) {

                    child.style.zIndex =
                        "2";

                }

            });



        const ctx =
            canvas.getContext(
                "2d"
            );


        let width = 0;
        let height = 0;

        let particles = [];



        /* =================================================
           MOUSE
        ================================================= */

        let mouseX = 0;
        let mouseY = 0;

        let mouseActive =
            false;



        section.addEventListener(
            "mousemove",
            function (event) {

                if (isMobile) {
                    return;
                }


                const rect =
                    section.getBoundingClientRect();


                mouseX =
                    event.clientX -
                    rect.left;


                mouseY =
                    event.clientY -
                    rect.top;


                mouseActive =
                    true;

            }
        );


        section.addEventListener(
            "mouseleave",
            function () {

                mouseActive =
                    false;

            }
        );



        /* =================================================
           PARTICLES
        ================================================= */

        function createParticles() {

            particles = [];


            let count;


            if (specialHero) {

                count =
                    isMobile
                        ? 24
                        : Math.min(
                            72,
                            Math.floor(
                                width / 22
                            )
                        );

            }

            else {

                count =
                    isMobile
                        ? 10
                        : Math.min(
                            34,
                            Math.floor(
                                width / 42
                            )
                        );

            }



            for (
                let i = 0;
                i < count;
                i++
            ) {


                const grey =
                    Math.random() >
                    .76;


                particles.push({

                    x:
                        Math.random() *
                        width,

                    y:
                        Math.random() *
                        height,


                    /*
                        Slow natural movement
                    */

                    vx:
    (
        Math.random() -
        .5
    ) *
    (
        specialHero
            ? .45
            : .30
    ),

vy:
    (
        Math.random() -
        .5
    ) *
    (
        specialHero
            ? .45
            : .30
    ),

                    size:
                        .7 +
                        Math.random() *
                        1.25,


                    grey:
                        grey,


                    phase:
                        Math.random() *
                        Math.PI *
                        2

                });

            }

        }



        /* =================================================
           RESIZE
        ================================================= */

        function resizeCanvas() {

            const rect =
                section.getBoundingClientRect();


            width =
                rect.width;


            height =
                rect.height;


            const dpr =
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                );


            canvas.width =
                Math.round(
                    width *
                    dpr
                );


            canvas.height =
                Math.round(
                    height *
                    dpr
                );


            canvas.style.width =
                width + "px";


            canvas.style.height =
                height + "px";


            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );


            createParticles();

        }



        /* =================================================
           ANIMATION
        ================================================= */

        function animate(time) {


            ctx.clearRect(
                0,
                0,
                width,
                height
            );



            /* =============================================
               CONNECTIONS

               Because particles move every frame,
               THESE LINES MOVE TOO.
            ============================================= */

            for (
                let i = 0;
                i < particles.length;
                i++
            ) {

                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {


                    const first =
                        particles[i];


                    const second =
                        particles[j];


                    const dx =
                        first.x -
                        second.x;


                    const dy =
                        first.y -
                        second.y;


                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    const maxDistance =
                        specialHero
                            ? 190
                            : 165;


                    if (
                        distance <
                        maxDistance
                    ) {


                        const opacity =
                            (
                                1 -
                                distance /
                                maxDistance
                            ) *
                            (
                                specialHero
                                    ? .42
                                    : .30
                            );



                        /*
                            Mostly cherry red,
                            occasionally grey.
                        */

                        const greyLine =
                            first.grey &&
                            second.grey;



                        ctx.beginPath();


                        ctx.moveTo(
                            first.x,
                            first.y
                        );


                        ctx.lineTo(
                            second.x,
                            second.y
                        );


                        if (greyLine) {

                            ctx.strokeStyle =
                                "rgba(" +
                                "160,162,168," +
                                opacity *
                                .65 +
                                ")";

                        }

                        else {

                            ctx.strokeStyle =
                                "rgba(" +
                                "143,0,31," +
                                opacity +
                                ")";

                        }


                        ctx.lineWidth =
    specialHero
        ? 1
        : .8;


                        ctx.stroke();

                    }

                }

            }



            /* =============================================
               MOVE + DRAW PARTICLES
            ============================================= */

            particles.forEach(
                function (particle) {


                    particle.x +=
                        particle.vx;


                    particle.y +=
                        particle.vy;



                    /* -------------------------------------
                       Mouse reaction
                    ------------------------------------- */

                    if (
                        mouseActive &&
                        !isMobile
                    ) {


                        const dx =
                            particle.x -
                            mouseX;


                        const dy =
                            particle.y -
                            mouseY;


                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );


                        if (
                            distance < 145 &&
                            distance > 0
                        ) {

                            const force =
                                (
                                    145 -
                                    distance
                                ) /
                                145;


                            particle.x +=
                                (
                                    dx /
                                    distance
                                ) *
                                force *
                                .40;


                            particle.y +=
                                (
                                    dy /
                                    distance
                                ) *
                                force *
                                .40;

                        }

                    }



                    /* -------------------------------------
                       Screen wrapping
                    ------------------------------------- */

                    if (
                        particle.x <
                        -10
                    ) {

                        particle.x =
                            width + 10;

                    }


                    if (
                        particle.x >
                        width + 10
                    ) {

                        particle.x =
                            -10;

                    }


                    if (
                        particle.y <
                        -10
                    ) {

                        particle.y =
                            height + 10;

                    }


                    if (
                        particle.y >
                        height + 10
                    ) {

                        particle.y =
                            -10;

                    }



                    /* -------------------------------------
                       Glow pulse
                    ------------------------------------- */

                    const pulse =
                        .72 +
                        Math.sin(
                            time *
                            .0012 +
                            particle.phase
                        ) *
                        .28;



                    let color;


                    if (particle.grey) {

                        color =
                            "160,162,168";

                    }

                    else {

                        color =
                            "181,0,42";

                    }



                    /* LARGE GLOW */

                    ctx.beginPath();


                    ctx.arc(
    particle.x,
    particle.y,
    particle.size * 9,
    0,
    Math.PI * 2
);

ctx.fillStyle =
    "rgba(" +
    color +
    "," +
    (
        .12 *
        pulse
    ) +
    ")";

ctx.fill();



                    /* CORE */

                    ctx.beginPath();


                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.size,
                        0,
                        Math.PI *
                        2
                    );


                    ctx.fillStyle =
                        "rgba(" +
                        color +
                        "," +
                        (
                            1 *
                            pulse
                        ) +
                        ")";


                    ctx.fill();

                }
            );



            requestAnimationFrame(
                animate
            );

        }



        resizeCanvas();


        window.addEventListener(
            "resize",
            resizeCanvas
        );


        requestAnimationFrame(
            animate
        );

    }



    /* =====================================================
       ACTIVATE
    ===================================================== */

    sections.forEach(
        function (
            section,
            index
        ) {

            createMovingNetwork(
                section,
                index === 0
            );

        }
    );


})();
/* =========================================================
   FIX — REMOVE STATIC NETWORK
   KEEP ONLY THE MOVING ABOUT/INDEX STYLE NETWORK
========================================================= */

(function () {

    "use strict";


    /* Remove the old fixed points + fixed lines */

    document
        .querySelectorAll(".wwd-neural-field")
        .forEach(function (field) {

            field.remove();

        });



    /* Make moving canvas clearly visible */

    document
        .querySelectorAll(".wwd-moving-network")
        .forEach(function (canvas, index) {

            canvas.style.zIndex =
                "1";

            canvas.style.opacity =
                index === 0
                    ? ".82"
                    : ".62";

        });

})();
/* =========================================================
   SMART CLUB — CLOSE MOBILE MENU ON SCROLL / SWIPE
   ========================================================= */

(() => {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    function isMenuOpen() {
        return (
            mobileMenu.classList.contains("active") ||
            mobileMenu.classList.contains("open") ||
            mobileMenu.classList.contains("show")
        );
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove("active", "open", "show");

        menuBtn.classList.remove("active", "open");

        // Return hamburger icon
        menuBtn.textContent = "☰";

        // Accessibility
        menuBtn.setAttribute("aria-expanded", "false");
    }


    /* Close when user starts scrolling */
    window.addEventListener(
        "scroll",
        () => {
            if (isMenuOpen()) {
                closeMobileMenu();
            }
        },
        { passive: true }
    );


    /* Close immediately when finger starts swiping */
    let touchStartY = 0;

    document.addEventListener(
        "touchstart",
        (e) => {
            touchStartY = e.touches[0].clientY;
        },
        { passive: true }
    );

    document.addEventListener(
        "touchmove",
        (e) => {
            if (!isMenuOpen()) return;

            const currentY = e.touches[0].clientY;
            const distance = Math.abs(currentY - touchStartY);

            // Small threshold prevents accidental closing
            if (distance > 8) {
                closeMobileMenu();
            }
        },
        { passive: true }
    );
})();
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    function syncMenuIcon() {
        const isOpen =
            mobileMenu.classList.contains("open") ||
            mobileMenu.classList.contains("active");

        menuBtn.classList.toggle("menu-open", isOpen);
    }

    const observer = new MutationObserver(syncMenuIcon);

    observer.observe(mobileMenu, {
        attributes: true,
        attributeFilter: ["class"]
    });

    menuBtn.addEventListener("click", () => {
        requestAnimationFrame(syncMenuIcon);
    });

    syncMenuIcon();
});