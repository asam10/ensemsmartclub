// ==========================================================
// SMART CLUB - ENSEM
// ABOUT PAGE
// ==========================================================


// ==========================================================
// MOBILE MENU
// ==========================================================

const menuButton = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


function closeMobileMenu() {

    if (!menuButton || !mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("open");

    menuButton.textContent = "☰";

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


function openMobileMenu() {

    if (!menuButton || !mobileMenu) {
        return;
    }

    mobileMenu.classList.add("open");

    menuButton.textContent = "✕";

    menuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
    );
}


if (menuButton && mobileMenu) {

    menuButton.addEventListener(
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
    updateNavbar
);




// ==========================================================
// SCROLL REVEAL ANIMATION
// ==========================================================

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("visible");


                            revealObserver
                                .unobserve(
                                    entry.target
                                );

                        }

                    }
                );

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    // Fallback for old browsers

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}



// ==========================================================
// SMOOTH INTERNAL SCROLLING
// ==========================================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                // Ignore empty links such as href="#"

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    }
);



// ==========================================================
// CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
// ==========================================================

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 1000 &&
            mobileMenu &&
            mobileMenu.classList.contains("open")
        ) {

            closeMobileMenu();

        }

    }
);



// ==========================================================
// MEMBER CARD INTERACTION
// ==========================================================

const memberCards =
    document.querySelectorAll(
        ".member-card"
    );


memberCards.forEach(
    function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add(
                    "member-active"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove(
                    "member-active"
                );

            }
        );

    }
);



// ==========================================================
// PRESIDENT CARD INTERACTION
// ==========================================================

const presidentCard =
    document.querySelector(
        ".president-card"
    );


if (presidentCard) {

    presidentCard.addEventListener(
        "mouseenter",
        function () {

            presidentCard.classList.add(
                "president-active"
            );

        }
    );


    presidentCard.addEventListener(
        "mouseleave",
        function () {

            presidentCard.classList.remove(
                "president-active"
            );

        }
    );

}



// ==========================================================
// CLUB RESPONSABLE VIP CARD
// ==========================================================

const responsableCard =
    document.querySelector(
        ".founder-card"
    );


if (responsableCard) {

    responsableCard.addEventListener(
        "mouseenter",
        function () {

            responsableCard.classList.add(
                "responsable-active"
            );

        }
    );


    responsableCard.addEventListener(
        "mouseleave",
        function () {

            responsableCard.classList.remove(
                "responsable-active"
            );

        }
    );

}



// ==========================================================
// PAGE LOADED
// ==========================================================

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
// ==========================================================
// LANGUAGE SYSTEM
// ==========================================================

const translations = {

    en: {

        metaDescription:
            "Meet the Club Responsable and Executive Bureau of Smart Club ENSEM.",

        pageTitle:
            "Executive Bureau | Smart Club ENSEM",

        home: "Home",
        about: "About Us",
        whatWeDo: "What We Do",
        projects: "Projects",
        events: "Events",
        joinUs: "Join Us",
        joinSmartClub: "Join Smart Club",
        joinSmartClubArrow: "Join Smart Club →",

        openMenu: "Open navigation menu",

        smartClubEnsem: "SMART CLUB • ENSEM",

        aboutHeroTitle:
            "Meet the minds<br><span>behind the club.</span>",

        aboutHeroDescription:
            "Meet the people behind Smart Club — from our Club Responsable to the Executive Bureau working together to transform ideas into real initiatives.",

        meetTeam: "Meet the Team ↓",

        ourTeam: "OUR TEAM",

        leadershipTitle:
            "Leadership driven by <span>innovation.</span>",

        teamIntroOne:
            "Smart Club brings together students with different skills and responsibilities around one common objective: building a strong community around technology, engineering and digital innovation.",

        teamIntroTwo:
            "From formations and projects to media, logistics, design, sponsoring and partnerships, every member contributes to turning ideas into action.",

        clubResponsable: "CLUB RESPONSABLE",

        responsableHeading:
            "Guiding the vision<br>behind <span>Smart Club.</span>",

        clubResponsableTitle:
            "Club Responsable",

        responsableDescription:
            "The professor responsible for Smart Club, guiding its development and supporting its mission to create a dynamic environment where ENSEM students can explore digitalization, engineering, innovation and collaborative projects.",

        guidanceVisionInnovation:
            "GUIDANCE • VISION • INNOVATION",

        responsableQuote:
            "Supporting a student community where knowledge, creativity and ambition can be transformed into real impact.",

        executiveBureau:
            "EXECUTIVE BUREAU",

        bureauHeading:
            "The team behind <span>Smart Club.</span>",

        presidentRole: "PRESIDENT",
        presidentRoleTitle: "President",

        presidentDescription:
            "Leading Smart Club's vision, coordinating the Executive Bureau and guiding the club's activities, projects and development.",

        vicePresidentRole:
            "VICE PRESIDENT",

        vicePresidentDescription:
            "Supporting the President and helping coordinate the club's teams, activities and strategic development.",

        treasurerRole:
            "TREASURER",

        treasurerDescription:
            "Managing the club's financial resources and supporting the organization of projects, events and activities.",

        mediaRole:
            "MEDIA",

        mediaDescriptionOne:
            "Creating and managing Smart Club's communication, content and digital presence.",

        mediaDescriptionTwo:
            "Supporting content creation, communication and the club's presence across digital platforms.",

        logisticsRole:
            "LOGISTICS",

        logisticsDescription:
            "Coordinating the organization, resources and practical needs of Smart Club events and activities.",

        formationManagerRole:
            "FORMATION MANAGER",

        formationManagerDescription:
            "Coordinating Smart Club's learning program and planning technical formations for members.",

        formationMemberDescription:
            "Helping prepare workshops, technical sessions and educational content for the Smart Club community.",

        designerRole:
            "DESIGNER",

        creativeBadge:
            "CREATIVE",

        designerDescription:
            "Building Smart Club's visual identity and transforming ideas into creative digital experiences and designs.",

        projectRole:
            "PROJECT",

        projectDescriptionOne:
            "Supporting the development of Smart Club projects and helping transform technical ideas into real solutions.",

        projectDescriptionTwo:
            "Contributing to the planning, development and realization of Smart Club's technical projects.",

        sponsoringRole:
            "SPONSORING",

        sponsoringDescriptionOne:
            "Building relationships with external partners and helping create opportunities for collaboration and support.",

        sponsoringDescriptionTwo:
            "Developing partnerships and supporting Smart Club in building connections with companies, organizations and collaborators.",

        linkedin:
            "LinkedIn ↗",

        whatsapp:
            "WhatsApp ↗",

        oneTeamOneVision:
            "ONE TEAM • ONE VISION",

        teamMessageTitle:
            "Digital Minds.<br><span>Real Impact.</span>",

        teamMessageDescription:
            "Smart Club is more than its Executive Bureau. It's a community built by every student who contributes an idea, a skill or a vision.",

        footerSlogan:
            "Digital Minds. Real Impact.",

        studentClubOf:
            "STUDENT CLUB OF",

        quickLinks:
            "QUICK LINKS",

        executiveBureauLink:
            "Executive Bureau",

        footerBottomSlogan:
            "Digital Minds. <span>Real Impact.</span>"

    },


    fr: {

        metaDescription:
            "Découvrez la responsable du club et le Bureau Exécutif de Smart Club ENSEM.",

        pageTitle:
            "Bureau Exécutif | Smart Club ENSEM",

        home: "Accueil",
        about: "À propos",
        whatWeDo: "Nos activités",
        projects: "Projets",
        events: "Événements",
        joinUs: "Nous rejoindre",
        joinSmartClub: "Rejoindre Smart Club",
        joinSmartClubArrow: "Rejoindre Smart Club →",

        openMenu: "Ouvrir le menu de navigation",

        smartClubEnsem: "SMART CLUB • ENSEM",

        aboutHeroTitle:
            "Découvrez les esprits<br><span>derrière le club.</span>",

        aboutHeroDescription:
            "Découvrez les personnes derrière Smart Club, de la responsable du club au Bureau Exécutif, qui travaillent ensemble pour transformer les idées en initiatives concrètes.",

        meetTeam:
            "Découvrir l'équipe ↓",

        ourTeam:
            "NOTRE ÉQUIPE",

        leadershipTitle:
            "Un leadership porté par <span>l'innovation.</span>",

        teamIntroOne:
            "Smart Club rassemble des étudiants aux compétences et responsabilités variées autour d'un objectif commun : construire une communauté forte autour de la technologie, de l'ingénierie et de l'innovation numérique.",

        teamIntroTwo:
            "Des formations aux projets, en passant par les médias, la logistique, le design, le sponsoring et les partenariats, chaque membre contribue à transformer les idées en actions.",

        clubResponsable:
            "RESPONSABLE DU CLUB",

        responsableHeading:
            "Guider la vision<br>derrière <span>Smart Club.</span>",

        clubResponsableTitle:
            "Responsable du club",

        responsableDescription:
            "La professeure responsable de Smart Club accompagne son développement et soutient sa mission : créer un environnement dynamique où les étudiants de l'ENSEM peuvent explorer la digitalisation, l'ingénierie, l'innovation et les projets collaboratifs.",

        guidanceVisionInnovation:
            "ACCOMPAGNEMENT • VISION • INNOVATION",

        responsableQuote:
            "Soutenir une communauté étudiante où les connaissances, la créativité et l'ambition peuvent être transformées en impact réel.",

        executiveBureau:
            "BUREAU EXÉCUTIF",

        bureauHeading:
            "L'équipe derrière <span>Smart Club.</span>",

        presidentRole:
            "PRÉSIDENTE",

        presidentRoleTitle:
            "Présidente",

        presidentDescription:
            "Elle dirige la vision de Smart Club, coordonne le Bureau Exécutif et guide les activités, les projets et le développement du club.",

        vicePresidentRole:
            "VICE-PRÉSIDENT",

        vicePresidentDescription:
            "Il soutient la présidente et participe à la coordination des équipes, des activités et du développement stratégique du club.",

        treasurerRole:
            "TRÉSORIER",

        treasurerDescription:
            "Il gère les ressources financières du club et soutient l'organisation des projets, des événements et des activités.",

        mediaRole:
            "MÉDIA",

        mediaDescriptionOne:
            "Il crée et gère la communication, le contenu et la présence numérique de Smart Club.",

        mediaDescriptionTwo:
            "Elle contribue à la création de contenu, à la communication et à la présence du club sur les plateformes numériques.",

        logisticsRole:
            "LOGISTIQUE",

        logisticsDescription:
            "Il coordonne l'organisation, les ressources et les besoins pratiques des événements et des activités de Smart Club.",

        formationManagerRole:
            "RESPONSABLE FORMATION",

        formationManagerDescription:
            "Il coordonne le programme d'apprentissage de Smart Club et planifie les formations techniques destinées aux membres.",

        formationMemberDescription:
            "Il participe à la préparation des ateliers, des sessions techniques et du contenu éducatif pour la communauté Smart Club.",

        designerRole:
            "DESIGNER",

        creativeBadge:
            "CRÉATIF",

        designerDescription:
            "Il construit l'identité visuelle de Smart Club et transforme les idées en expériences numériques et en designs créatifs.",

        projectRole:
            "PROJET",

        projectDescriptionOne:
            "Elle soutient le développement des projets de Smart Club et contribue à transformer les idées techniques en solutions concrètes.",

        projectDescriptionTwo:
            "Elle contribue à la planification, au développement et à la réalisation des projets techniques de Smart Club.",

        sponsoringRole:
            "SPONSORING",

        sponsoringDescriptionOne:
            "Il développe les relations avec les partenaires externes et contribue à créer des opportunités de collaboration et de soutien.",

        sponsoringDescriptionTwo:
            "Il développe les partenariats et aide Smart Club à établir des relations avec les entreprises, les organisations et les collaborateurs.",

        linkedin:
            "LinkedIn ↗",

        whatsapp:
            "WhatsApp ↗",

        oneTeamOneVision:
            "UNE ÉQUIPE • UNE VISION",

        teamMessageTitle:
            "Esprits numériques.<br><span>Impact réel.</span>",

        teamMessageDescription:
            "Smart Club est bien plus que son Bureau Exécutif. C'est une communauté construite par chaque étudiant qui apporte une idée, une compétence ou une vision.",

        footerSlogan:
            "Esprits numériques. Impact réel.",

        studentClubOf:
            "CLUB ÉTUDIANT DE",

        quickLinks:
            "LIENS RAPIDES",

        executiveBureauLink:
            "Bureau Exécutif",

        footerBottomSlogan:
            "Esprits numériques. <span>Impact réel.</span>"

    }

};


// ==========================================================
// APPLY LANGUAGE
// ==========================================================

function applyLanguage(language) {

    const selectedLanguage =
        translations[language] || translations.en;


    document.documentElement.lang = language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.getAttribute("data-i18n");

            if (selectedLanguage[key] !== undefined) {

                element.textContent =
                    selectedLanguage[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-html]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-html"
                );

            if (selectedLanguage[key] !== undefined) {

                element.innerHTML =
                    selectedLanguage[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-content]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-content"
                );

            if (selectedLanguage[key] !== undefined) {

                element.setAttribute(
                    "content",
                    selectedLanguage[key]
                );

            }

        });


    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach(function (element) {

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


// ==========================================================
// LOAD SAVED LANGUAGE
// ==========================================================

const savedLanguage =
    localStorage.getItem(
        "smartClubLanguage"
    ) || "en";


applyLanguage(savedLanguage);


// ==========================================================
// LANGUAGE BUTTONS
// ==========================================================

const englishButton =
    document.getElementById("enBtn");

const frenchButton =
    document.getElementById("frBtn");


if (englishButton) {

    englishButton.addEventListener(
        "click",
        function () {

            applyLanguage("en");

        }
    );

}


if (frenchButton) {

    frenchButton.addEventListener(
        "click",
        function () {

            applyLanguage("fr");

        }
    );

}