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

        presidentRole:
            "PRESIDENT",

        presidentRoleTitle:
            "President",

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

        openMenu:
            "Ouvrir le menu de navigation",

        smartClubEnsem:
            "SMART CLUB • ENSEM",

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
        translations[language] ||
        translations.en;


    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                if (
                    selectedLanguage[key]
                    !== undefined
                ) {

                    element.textContent =
                        selectedLanguage[key];

                }

            }
        );


    document
        .querySelectorAll(
            "[data-i18n-html]"
        )
        .forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-html"
                    );


                if (
                    selectedLanguage[key]
                    !== undefined
                ) {

                    element.innerHTML =
                        selectedLanguage[key];

                }

            }
        );


    document
        .querySelectorAll(
            "[data-i18n-content]"
        )
        .forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-content"
                    );


                if (
                    selectedLanguage[key]
                    !== undefined
                ) {

                    element.setAttribute(
                        "content",
                        selectedLanguage[key]
                    );

                }

            }
        );


    document
        .querySelectorAll(
            "[data-i18n-aria-label]"
        )
        .forEach(
            function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-aria-label"
                    );


                if (
                    selectedLanguage[key]
                    !== undefined
                ) {

                    element.setAttribute(
                        "aria-label",
                        selectedLanguage[key]
                    );

                }

            }
        );


    localStorage.setItem(
        "smartClubLanguage",
        language
    );


    const englishButton =
        document.getElementById(
            "enBtn"
        );

    const frenchButton =
        document.getElementById(
            "frBtn"
        );


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


    // Update text belonging to the
    // new interactive bureau card system

    updateInteractiveCardLanguage(
        language
    );

}



// ==========================================================
// LOAD SAVED LANGUAGE
// ==========================================================

const savedLanguage =
    localStorage.getItem(
        "smartClubLanguage"
    ) || "en";


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



// ==========================================================
// INTERACTIVE BUREAU CARDS
// ==========================================================
//
// IMPORTANT:
//
// Your cinematic cards are stored inside:
//
// cards1/
//
// Examples:
//
// cards1/president/index.html
// cards1/media-taha/index.html
// cards1/logistics/index.html
// cards1/formation-farouk/index.html
//
// The HTML button decides which card opens using:
//
// data-card-page="cards1/.../index.html"
//
// ==========================================================


const bureauCardButtons =
    document.querySelectorAll(
        ".bureau-card-btn"
    );


const bureauCardModal =
    document.getElementById(
        "bureauCardModal"
    );


const bureauCardFrame =
    document.getElementById(
        "bureauCardFrame"
    );


const bureauCardLoader =
    document.getElementById(
        "bureauCardLoader"
    );


const bureauCardModalTitle =
    document.getElementById(
        "bureauCardModalTitle"
    );


const bureauCardReplay =
    document.getElementById(
        "bureauCardReplay"
    );


const bureauCardCloseElements =
    document.querySelectorAll(
        "[data-card-close]"
    );


let currentCardPage =
    "";


let currentCardTitle =
    "";


let lastCardTrigger =
    null;


// Keep the page scroll position while modal is open

let previousBodyOverflow =
    "";



// ==========================================================
// CORRECT CARD FOLDER PATH
// ==========================================================
//
// You said the folder is called "cards1".
// This function gives us extra safety.
//
// Even if one old HTML button still has:
//
// cards/logistics/index.html
//
// this automatically changes it to:
//
// cards1/logistics/index.html
//
// ==========================================================

function normalizeCardPath(path) {

    if (!path) {

        return "";

    }


    let cleanPath =
        path.trim();


    // Old folder name -> new folder name

    if (
        cleanPath.startsWith(
            "cards/"
        )
    ) {

        cleanPath =
            cleanPath.replace(
                /^cards\//,
                "cards1/"
            );

    }


    // Remove accidental leading slash
    // so Netlify treats it relative to the site folder

    if (
        cleanPath.startsWith(
            "/cards1/"
        )
    ) {

        cleanPath =
            cleanPath.substring(1);

    }


    return cleanPath;

}



// ==========================================================
// SHOW CARD LOADER
// ==========================================================

function showCardLoader() {

    if (!bureauCardLoader) {

        return;

    }


    bureauCardLoader.classList.remove(
        "hidden"
    );

}



// ==========================================================
// HIDE CARD LOADER
// ==========================================================

function hideCardLoader() {

    if (!bureauCardLoader) {

        return;

    }


    bureauCardLoader.classList.add(
        "hidden"
    );

}



// ==========================================================
// OPEN INTERACTIVE CARD
// ==========================================================

function openBureauCard(
    cardPage,
    cardTitle,
    trigger
) {

    if (
        !bureauCardModal ||
        !bureauCardFrame
    ) {

        console.warn(
            "Interactive bureau modal not found."
        );

        return;

    }


    const normalizedPage =
        normalizeCardPath(
            cardPage
        );


    if (!normalizedPage) {

        console.warn(
            "No card page was provided."
        );

        return;

    }


    currentCardPage =
        normalizedPage;


    currentCardTitle =
        cardTitle ||
        "Bureau Member";


    lastCardTrigger =
        trigger ||
        null;


    if (bureauCardModalTitle) {

        bureauCardModalTitle.textContent =
            currentCardTitle;

    }


    showCardLoader();


    // Open modal

    bureauCardModal.classList.add(
        "open"
    );


    bureauCardModal.setAttribute(
        "aria-hidden",
        "false"
    );


    // Stop about page from scrolling behind modal

    previousBodyOverflow =
        document.body.style.overflow;


    document.body.style.overflow =
        "hidden";


    // Start card only when opened

    bureauCardFrame.src =
        currentCardPage;


    // Put keyboard focus on the close button

    const closeButton =
        document.getElementById(
            "bureauCardModalClose"
        );


    if (closeButton) {

        setTimeout(
            function () {

                closeButton.focus();

            },
            120
        );

    }

}



// ==========================================================
// CLOSE INTERACTIVE CARD
// ==========================================================

function closeBureauCard() {

    if (!bureauCardModal) {

        return;

    }


    bureauCardModal.classList.remove(
        "open"
    );


    bureauCardModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        previousBodyOverflow;


    // Stop the cinematic card after modal closes.
    // Small delay lets the modal closing animation finish.

    setTimeout(
        function () {

            if (
                bureauCardModal
                    .classList
                    .contains("open")
            ) {

                return;

            }


            if (bureauCardFrame) {

                bureauCardFrame.src =
                    "about:blank";

            }


            hideCardLoader();

        },
        380
    );


    // Return focus to the button
    // that originally opened the card

    if (lastCardTrigger) {

        setTimeout(
            function () {

                lastCardTrigger.focus();

            },
            420
        );

    }

}



// ==========================================================
// REPLAY CARD
// ==========================================================

function replayBureauCard() {

    if (
        !bureauCardFrame ||
        !currentCardPage
    ) {

        return;

    }


    showCardLoader();


    // Clearing src first guarantees
    // that script.js inside the card starts again

    bureauCardFrame.src =
        "about:blank";


    setTimeout(
        function () {

            bureauCardFrame.src =
                currentCardPage;

        },
        90
    );

}



// ==========================================================
// CARD BUTTON EVENTS
// ==========================================================

bureauCardButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                const cardPage =
                    button.getAttribute(
                        "data-card-page"
                    );


                const cardTitle =
                    button.getAttribute(
                        "data-card-title"
                    );


                openBureauCard(
                    cardPage,
                    cardTitle,
                    button
                );

            }
        );

    }
);



// ==========================================================
// IFRAME FINISHED LOADING
// ==========================================================

if (bureauCardFrame) {

    bureauCardFrame.addEventListener(
        "load",
        function () {

            /*
                The iframe also fires load for about:blank.

                Only hide loader when a real
                cinematic card is currently loaded.
            */

            const frameSrc =
                bureauCardFrame.getAttribute(
                    "src"
                );


            if (
                frameSrc &&
                frameSrc !==
                    "about:blank"
            ) {

                setTimeout(
                    hideCardLoader,
                    250
                );

            }

        }
    );

}



// ==========================================================
// REPLAY BUTTON
// ==========================================================

if (bureauCardReplay) {

    bureauCardReplay.addEventListener(
        "click",
        function () {

            replayBureauCard();

        }
    );

}



// ==========================================================
// CLOSE BUTTON / BACKDROP
// ==========================================================

bureauCardCloseElements.forEach(
    function (element) {

        element.addEventListener(
            "click",
            function () {

                closeBureauCard();

            }
        );

    }
);



// ==========================================================
// ESCAPE KEY CLOSES CARD MODAL
// ==========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
                "Escape" &&
            bureauCardModal &&
            bureauCardModal
                .classList
                .contains("open")
        ) {

            closeBureauCard();

        }

    }
);



// ==========================================================
// ACCESSIBILITY — KEEP TAB INSIDE MODAL
// ==========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Tab" ||
            !bureauCardModal ||
            !bureauCardModal
                .classList
                .contains("open")
        ) {

            return;

        }


        const focusableElements =
            bureauCardModal
                .querySelectorAll(

                    'button:not([disabled]), ' +
                    'a[href], ' +
                    'iframe, ' +
                    '[tabindex]:not([tabindex="-1"])'

                );


        if (
            focusableElements.length ===
            0
        ) {

            return;

        }


        const firstElement =
            focusableElements[0];


        const lastElement =
            focusableElements[
                focusableElements.length -
                1
            ];


        if (
            event.shiftKey &&
            document.activeElement ===
                firstElement
        ) {

            event.preventDefault();

            lastElement.focus();

        }


        else if (
            !event.shiftKey &&
            document.activeElement ===
                lastElement
        ) {

            event.preventDefault();

            firstElement.focus();

        }

    }
);



// ==========================================================
// INTERACTIVE CARD TRANSLATIONS
// ==========================================================

function updateInteractiveCardLanguage(
    language
) {

    const isFrench =
        language === "fr";


    // VIEW CARD buttons

    document
        .querySelectorAll(
            ".bureau-card-btn"
        )
        .forEach(
            function (button) {

                const textElement =
                    button.querySelector(
                        "span:nth-child(2)"
                    );


                if (textElement) {

                    textElement.textContent =
                        isFrench
                            ? "VOIR LA CARTE INTERACTIVE"
                            : "VIEW INTERACTIVE CARD";

                }

            }
        );


    // Note above bureau

    const noteText =
        document.querySelector(
            ".bureau-card-note p"
        );


    if (noteText) {

        noteText.textContent =
            isFrench

                ? "Découvrez chaque membre du bureau à travers une carte interactive Smart Club."

                : "Discover each bureau member through an interactive Smart Club card.";

    }


    // Modal kicker

    const modalKicker =
        document.querySelector(
            ".bureau-card-modal-kicker"
        );


    if (modalKicker) {

        modalKicker.textContent =
            isFrench

                ? "SMART CLUB • BUREAU INTERACTIF"

                : "SMART CLUB • INTERACTIVE BUREAU";

    }


    // Modal information text

    const modalBottomText =
        document.querySelector(
            ".bureau-card-modal-bottom p"
        );


    if (modalBottomText) {

        modalBottomText.textContent =
            isFrench

                ? "Cliquez ou touchez la carte pour interagir avec elle."

                : "Click or tap the card to interact with it.";

    }


    // Replay

    if (bureauCardReplay) {

        bureauCardReplay.textContent =
            isFrench
                ? "REJOUER LA CARTE"
                : "REPLAY CARD";

    }


    // Loader

    if (bureauCardLoader) {

        const loaderText =
            bureauCardLoader
                .querySelector(
                    "span:last-child"
                );


        if (loaderText) {

            loaderText.textContent =
                isFrench
                    ? "CHARGEMENT"
                    : "LOADING CARD";

        }

    }

}



// ==========================================================
// APPLY INTERACTIVE LANGUAGE ON FIRST LOAD
// ==========================================================





// ==========================================================
// CARD ERROR SAFETY
// ==========================================================
//
// Browsers don't give a perfect iframe 404 event,
// but we can at least prevent an endless loader.
//
// ==========================================================

let cardLoadingTimeout =
    null;


function startCardLoadingTimeout() {

    clearTimeout(
        cardLoadingTimeout
    );


    cardLoadingTimeout =
        setTimeout(
            function () {

                hideCardLoader();

            },
            5000
        );

}


bureauCardButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            startCardLoadingTimeout
        );

    }
);


if (bureauCardFrame) {

    bureauCardFrame.addEventListener(
        "load",
        function () {

            clearTimeout(
                cardLoadingTimeout
            );

        }
    );

}



// ==========================================================
// CLOSE MODAL IF USER NAVIGATES AWAY
// ==========================================================

window.addEventListener(
    "pagehide",
    function () {

        if (bureauCardFrame) {

            bureauCardFrame.src =
                "about:blank";

        }

    }
);

// ==========================================================
// APPLY SAVED LANGUAGE AFTER ALL CARD VARIABLES EXIST
// ==========================================================

applyLanguage(savedLanguage);

// ==========================================================
// SMART CLUB — ABOUT PAGE READY
// ==========================================================

console.log(
    "Smart Club About Page Ready — Interactive Bureau Cards Enabled"
);
/* =========================================================
   SMART CLUB ABOUT PAGE
   MAJESTIC MOTION SYSTEM — 2026
   Paste at the VERY BOTTOM of about.js
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DEVICE / ACCESSIBILITY
    ===================================================== */

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    const hasFinePointer =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        document.documentElement.classList.add(
            "reduce-motion"
        );

    }



    /* =====================================================
       01 — PAGE CINEMATIC ENTRANCE
    ===================================================== */

    document.documentElement.style.opacity =
        "0";


    window.addEventListener(
        "load",
        function () {

            document.documentElement.animate(

                [
                    {
                        opacity: 0
                    },

                    {
                        opacity: 1
                    }
                ],

                {
                    duration: reduceMotion
                        ? 1
                        : 700,

                    easing: "ease-out",

                    fill: "forwards"
                }

            );

        }
    );



    /* =====================================================
       02 — PREMIUM SCROLL PROGRESS
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
       03 — GLOBAL MOUSE POSITION
       Used by CSS atmospheric lighting
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        let mouseX =
            window.innerWidth / 2;

        let mouseY =
            window.innerHeight / 3;


        let targetX =
            mouseX;

        let targetY =
            mouseY;


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


        function animateGlobalLight() {

            mouseX +=
                (
                    targetX -
                    mouseX
                ) * 0.07;


            mouseY +=
                (
                    targetY -
                    mouseY
                ) * 0.07;


            document.body.style.setProperty(
                "--about-mx",
                (
                    mouseX /
                    window.innerWidth *
                    100
                ) + "%"
            );


            document.body.style.setProperty(
                "--about-my",
                (
                    mouseY /
                    window.innerHeight *
                    100
                ) + "%"
            );


            requestAnimationFrame(
                animateGlobalLight
            );

        }


        animateGlobalLight();

    }



    /* =====================================================
       04 — MAGENTA / CYAN MOUSE AURA
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        const aura =
            document.createElement("div");


        aura.setAttribute(
            "aria-hidden",
            "true"
        );


        Object.assign(
            aura.style,
            {
                width: "520px",
                height: "520px",

                position: "fixed",

                top: "0",
                left: "0",

                zIndex: "0",

                pointerEvents: "none",

                borderRadius: "50%",

                opacity: ".16",

                filter: "blur(24px)",

                transform:
                    "translate(-50%, -50%)",

                background:
                    "radial-gradient(" +
                    "circle," +
                    "rgba(255,45,131,.34)," +
                    "rgba(139,92,246,.12) 34%," +
                    "rgba(0,217,255,.055) 50%," +
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


        let desiredX =
            x;

        let desiredY =
            y;


        document.addEventListener(
            "mousemove",
            function (event) {

                desiredX =
                    event.clientX;

                desiredY =
                    event.clientY;

            }
        );


        function moveAura() {

            x +=
                (
                    desiredX -
                    x
                ) * 0.06;


            y +=
                (
                    desiredY -
                    y
                ) * 0.06;


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
       05 — CINEMATIC SCROLL REVEALS
    ===================================================== */

    const majesticElements =
        document.querySelectorAll(

            ".hero-content," +
            ".hero-logo," +

            ".section-label," +
            ".intro-grid h2," +
            ".intro-text," +

            ".founder-heading," +
            ".founder-card," +

            ".bureau-heading," +
            ".bureau-card-note," +
            ".president-card," +
            ".member-card," +

            ".message-content," +

            ".footer-brand," +
            ".footer-school," +
            ".footer-links"

        );


    majesticElements.forEach(
        function (
            element,
            index
        ) {

            element.classList.add(
                "about-majestic-reveal"
            );


            element.style.transitionDelay =
                Math.min(
                    (
                        index %
                        5
                    ) * 65,
                    260
                ) + "ms";

        }
    );



    if (
        "IntersectionObserver" in window &&
        !reduceMotion
    ) {

        const majesticObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "is-visible"
                                    );


                                majesticObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: 0.11,

                    rootMargin:
                        "0px 0px -45px 0px"
                }

            );


        majesticElements.forEach(
            function (element) {

                majesticObserver.observe(
                    element
                );

            }
        );

    }

    else {

        majesticElements.forEach(
            function (element) {

                element.classList.add(
                    "is-visible"
                );

            }
        );

    }



    /* =====================================================
       06 — LIVING NEURAL NETWORK GENERATOR

       No HTML changes needed.
       We generate the neurons automatically.
    ===================================================== */

    const neuralSections = [

        document.querySelector(
            ".about-hero"
        ),

        document.querySelector(
            ".intro-section"
        ),

        document.querySelector(
            ".founder-section"
        ),

        document.querySelector(
            ".bureau-section"
        ),

        document.querySelector(
            ".team-message"
        )

    ].filter(Boolean);



    function createNeuralNetwork(
        section,
        nodeCount
    ) {

        /*
            Don't generate twice.
        */

        if (
            section.querySelector(
                ".about-neural-field"
            )
        ) {

            return;

        }


        const network =
            document.createElement(
                "div"
            );


        network.className =
            "about-neural-field";


        network.setAttribute(
            "aria-hidden",
            "true"
        );


        section.prepend(
            network
        );


        const nodes = [];


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
                "about-neural-node";


            /*
                Keep nodes away from
                extreme section edges.
            */

            const x =
                5 +
                Math.random() *
                90;


            const y =
                7 +
                Math.random() *
                86;


            node.style.left =
                x + "%";


            node.style.top =
                y + "%";


            node.style.animationDelay =
                (
                    -Math.random() *
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



        /*
            Connect nearby random nodes.
        */

        const connectionCount =
            Math.min(
                nodeCount + 3,
                isMobile
                    ? 9
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
                            nodes.indexOf(first) +
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
                x2 -
                x1;


            const dy =
                y2 -
                y1;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


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
                "about-neural-line";


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


            const pulse =
                line.querySelector(
                    "::after"
                );


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



        /*
            Random neuron firing.
        */

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


                    if (!node) return;


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
                                    "scale(2.2)",

                                filter:
                                    "brightness(2.8)"
                            },

                            {
                                transform:
                                    "scale(1)",

                                filter:
                                    "brightness(1)"
                            }

                        ],

                        {
                            duration: 750,

                            easing:
                                "cubic-bezier(.2,.7,.2,1)"
                        }

                    );

                },

                900 +
                Math.random() *
                650

            );

        }

    }



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
                            ? 13
                            : 9
                    )

            );

        }
    );



    /* =====================================================
       07 — HERO PARTICLE CANVAS
       Gives hero the same neural / AI atmosphere as homepage
    ===================================================== */

    const hero =
        document.querySelector(
            ".about-hero"
        );


    if (
        hero &&
        !reduceMotion
    ) {

        const canvas =
            document.createElement(
                "canvas"
            );


        canvas.setAttribute(
            "aria-hidden",
            "true"
        );


        Object.assign(
            canvas.style,
            {
                position: "absolute",

                inset: "0",

                width: "100%",
                height: "100%",

                zIndex: "1",

                pointerEvents: "none",

                opacity: isMobile
                    ? ".27"
                    : ".48"
            }
        );


        hero.insertBefore(
            canvas,
            hero.firstChild
        );


        const ctx =
            canvas.getContext(
                "2d"
            );


        let width = 0;
        let height = 0;

        let particles = [];


        let mouseX = 0;
        let mouseY = 0;

        let mouseActive =
            false;



        function resizeCanvas() {

            const rect =
                hero.getBoundingClientRect();


            const dpr =
                Math.min(
                    window.devicePixelRatio ||
                    1,
                    2
                );


            width =
                rect.width;


            height =
                rect.height;


            canvas.width =
                width *
                dpr;


            canvas.height =
                height *
                dpr;


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


            buildParticles();

        }



        function buildParticles() {

            particles = [];


            const count =
                isMobile
                    ? 25
                    : Math.min(
                        70,
                        Math.floor(
                            width / 20
                        )
                    );


            for (
                let i = 0;
                i < count;
                i++
            ) {

                particles.push({

                    x:
                        Math.random() *
                        width,

                    y:
                        Math.random() *
                        height,

                    vx:
                        (
                            Math.random() -
                            .5
                        ) *
                        .16,

                    vy:
                        (
                            Math.random() -
                            .5
                        ) *
                        .16,

                    size:
                        .45 +
                        Math.random() *
                        1.1,

                    cyan:
                        Math.random() >
                        .76,

                    phase:
                        Math.random() *
                        Math.PI *
                        2

                });

            }

        }



        hero.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


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


        hero.addEventListener(
            "mouseleave",
            function () {

                mouseActive =
                    false;

            }
        );



        function animateParticles(
            time
        ) {

            ctx.clearRect(
                0,
                0,
                width,
                height
            );



            /*
                CONNECTIONS
            */

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

                    const a =
                        particles[i];


                    const b =
                        particles[j];


                    const dx =
                        a.x -
                        b.x;


                    const dy =
                        a.y -
                        b.y;


                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    const maximum =
                        isMobile
                            ? 85
                            : 130;


                    if (
                        distance <
                        maximum
                    ) {

                        const opacity =
                            (
                                1 -
                                distance /
                                maximum
                            ) *
                            .105;


                        ctx.beginPath();


                        ctx.moveTo(
                            a.x,
                            a.y
                        );


                        ctx.lineTo(
                            b.x,
                            b.y
                        );


                        ctx.strokeStyle =
                            "rgba(" +
                            "176,95,255," +
                            opacity +
                            ")";


                        ctx.lineWidth =
                            .65;


                        ctx.stroke();

                    }

                }

            }



            /*
                PARTICLES
            */

            particles.forEach(
                function (particle) {

                    particle.x +=
                        particle.vx;


                    particle.y +=
                        particle.vy;



                    /*
                        Mouse reaction
                    */

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
                            distance <
                            140 &&
                            distance >
                            0
                        ) {

                            particle.x +=
                                (
                                    dx /
                                    distance
                                ) *
                                .27;


                            particle.y +=
                                (
                                    dy /
                                    distance
                                ) *
                                .27;

                        }

                    }



                    /*
                        Wrap around
                    */

                    if (
                        particle.x < 0
                    ) {

                        particle.x =
                            width;

                    }


                    if (
                        particle.x >
                        width
                    ) {

                        particle.x =
                            0;

                    }


                    if (
                        particle.y < 0
                    ) {

                        particle.y =
                            height;

                    }


                    if (
                        particle.y >
                        height
                    ) {

                        particle.y =
                            0;

                    }



                    const pulse =
                        .65 +
                        Math.sin(
                            time *
                            .001 +
                            particle.phase
                        ) *
                        .25;


                    const color =
                        particle.cyan
                            ? "0,217,255"
                            : "255,45,131";


                    ctx.beginPath();


                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.size *
                        4,
                        0,
                        Math.PI *
                        2
                    );


                    ctx.fillStyle =
                        "rgba(" +
                        color +
                        "," +
                        .022 *
                        pulse +
                        ")";


                    ctx.fill();


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
                        .48 *
                        pulse +
                        ")";


                    ctx.fill();

                }
            );


            requestAnimationFrame(
                animateParticles
            );

        }


        resizeCanvas();


        window.addEventListener(
            "resize",
            resizeCanvas
        );


        requestAnimationFrame(
            animateParticles
        );

    }



    /* =====================================================
       08 — HERO DEPTH PARALLAX
    ===================================================== */

    if (
        hero &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const content =
            hero.querySelector(
                ".hero-content"
            );


        const logo =
            hero.querySelector(
                ".hero-logo"
            );


        let currentX = 0;
        let currentY = 0;

        let targetX = 0;
        let targetY = 0;



        hero.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    hero
                        .getBoundingClientRect();


                targetX =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                targetY =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                targetX = 0;

                targetY = 0;

            }
        );



        function heroDepth() {

            currentX +=
                (
                    targetX -
                    currentX
                ) *
                .06;


            currentY +=
                (
                    targetY -
                    currentY
                ) *
                .06;


            if (content) {

                content.style.transform =
                    "translate3d(" +
                    currentX *
                    -10 +
                    "px," +
                    currentY *
                    -7 +
                    "px,0)";

            }


            if (logo) {

                logo.style.transform =
                    "translate3d(" +
                    currentX *
                    19 +
                    "px," +
                    currentY *
                    13 +
                    "px,0)";

            }


            requestAnimationFrame(
                heroDepth
            );

        }


        heroDepth();

    }



    /* =====================================================
       09 — HERO LOGO REACTIVE DEPTH
    ===================================================== */

    const logoCircle =
        document.querySelector(
            ".logo-circle"
        );


    if (
        logoCircle &&
        hasFinePointer &&
        !reduceMotion
    ) {

        logoCircle.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    logoCircle
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;


                logoCircle.style.transform =
                    "perspective(1000px)" +
                    " rotateX(" +
                    y *
                    -5 +
                    "deg)" +
                    " rotateY(" +
                    x *
                    5 +
                    "deg)" +
                    " translateY(-7px)";

            }
        );


        logoCircle.addEventListener(
            "mouseleave",
            function () {

                logoCircle.style.transform =
                    "";

            }
        );

    }



    /* =====================================================
       10 — RESPONSABLE / FOUNDER PHOTO DEPTH
    ===================================================== */

    const founderCard =
        document.querySelector(
            ".founder-card"
        );


    if (
        founderCard &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const founderImage =
            founderCard.querySelector(
                ".founder-image img"
            );


        founderCard.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    founderCard
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;


                founderCard.style.transform =
                    "perspective(1500px)" +
                    " rotateX(" +
                    y *
                    -1.7 +
                    "deg)" +
                    " rotateY(" +
                    x *
                    1.7 +
                    "deg)" +
                    " translateY(-6px)";


                if (
                    founderImage
                ) {

                    founderImage.style.transform =
                        "scale(1.045)" +
                        " translate(" +
                        x *
                        -7 +
                        "px," +
                        y *
                        -7 +
                        "px)";

                }

            }
        );


        founderCard.addEventListener(
            "mouseleave",
            function () {

                founderCard.style.transform =
                    "";


                if (
                    founderImage
                ) {

                    founderImage.style.transform =
                        "";

                }

            }
        );

    }



    /* =====================================================
       11 — PRESIDENT CARD DEPTH
    ===================================================== */

    const majesticPresident =
        document.querySelector(
            ".president-card"
        );


    if (
        majesticPresident &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const image =
            majesticPresident.querySelector(
                ".president-image img"
            );


        majesticPresident.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    majesticPresident
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;


                majesticPresident.style.transform =
                    "perspective(1400px)" +
                    " rotateX(" +
                    y *
                    -1.5 +
                    "deg)" +
                    " rotateY(" +
                    x *
                    1.5 +
                    "deg)" +
                    " translateY(-5px)";


                if (image) {

                    image.style.transform =
                        "scale(1.04)" +
                        " translate(" +
                        x *
                        -6 +
                        "px," +
                        y *
                        -6 +
                        "px)";

                }

            }
        );


        majesticPresident.addEventListener(
            "mouseleave",
            function () {

                majesticPresident.style.transform =
                    "";


                if (image) {

                    image.style.transform =
                        "";

                }

            }
        );

    }



    /* =====================================================
       12 — MEMBER CARDS
       Pointer light + subtle 3D tilt
    ===================================================== */

    document
        .querySelectorAll(
            ".member-card"
        )
        .forEach(
            function (card) {

                if (
                    !hasFinePointer ||
                    reduceMotion
                ) {

                    return;

                }


                card.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            card
                                .getBoundingClientRect();


                        const mouseX =
                            event.clientX -
                            rect.left;


                        const mouseY =
                            event.clientY -
                            rect.top;


                        card.style.setProperty(
                            "--member-x",
                            mouseX +
                            "px"
                        );


                        card.style.setProperty(
                            "--member-y",
                            mouseY +
                            "px"
                        );


                        const rotateY =
                            (
                                mouseX -
                                rect.width /
                                2
                            ) /
                            rect.width *
                            3;


                        const rotateX =
                            (
                                rect.height /
                                2 -
                                mouseY
                            ) /
                            rect.height *
                            3;


                        card.style.transform =
                            "perspective(1100px)" +
                            " translateY(-8px)" +
                            " rotateX(" +
                            rotateX +
                            "deg)" +
                            " rotateY(" +
                            rotateY +
                            "deg)";

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.style.transform =
                            "";

                    }
                );

            }
        );



    /* =====================================================
       13 — MEMBER PHOTO PARALLAX
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        document
            .querySelectorAll(
                ".member-card"
            )
            .forEach(
                function (card) {

                    const image =
                        card.querySelector(
                            ".member-image img"
                        );


                    if (!image) {

                        return;

                    }


                    card.addEventListener(
                        "mousemove",
                        function (event) {

                            const rect =
                                card
                                    .getBoundingClientRect();


                            const x =
                                (
                                    event.clientX -
                                    rect.left
                                ) /
                                rect.width -
                                .5;


                            const y =
                                (
                                    event.clientY -
                                    rect.top
                                ) /
                                rect.height -
                                .5;


                            image.style.transform =
                                "scale(1.065)" +
                                " translate(" +
                                x *
                                -6 +
                                "px," +
                                y *
                                -6 +
                                "px)";

                        }
                    );


                    card.addEventListener(
                        "mouseleave",
                        function () {

                            image.style.transform =
                                "";

                        }
                    );

                }
            );

    }



    /* =====================================================
       14 — MAGNETIC BUTTONS
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        const magneticItems =
            document.querySelectorAll(

                ".hero-button," +
                ".join-btn," +
                ".bureau-card-btn," +
                ".linkedin-btn," +
                ".founder-linkedin," +
                ".message-content a"

            );


        magneticItems.forEach(
            function (item) {

                item.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            item
                                .getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left -
                            rect.width /
                            2;


                        const y =
                            event.clientY -
                            rect.top -
                            rect.height /
                            2;


                        item.style.transform =
                            "translate(" +
                            x *
                            .09 +
                            "px," +
                            y *
                            .13 +
                            "px)";

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    function () {

                        item.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       15 — CLICK ENERGY RIPPLE
    ===================================================== */

    const rippleTargets =
        document.querySelectorAll(

            ".hero-button," +
            ".join-btn," +
            ".bureau-card-btn," +
            ".member-card," +
            ".message-content a"

        );


    rippleTargets.forEach(
        function (element) {

            element.addEventListener(
                "pointerdown",
                function (event) {

                    if (
                        reduceMotion
                    ) {

                        return;

                    }


                    const rect =
                        element
                            .getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        ) *
                        1.5;


                    Object.assign(
                        ripple.style,
                        {
                            width:
                                size +
                                "px",

                            height:
                                size +
                                "px",

                            position:
                                "absolute",

                            left:
                                (
                                    event.clientX -
                                    rect.left -
                                    size /
                                    2
                                ) +
                                "px",

                            top:
                                (
                                    event.clientY -
                                    rect.top -
                                    size /
                                    2
                                ) +
                                "px",

                            zIndex:
                                "30",

                            borderRadius:
                                "50%",

                            pointerEvents:
                                "none",

                            opacity:
                                ".26",

                            transform:
                                "scale(0)",

                            background:
                                "radial-gradient(" +
                                "circle," +
                                "rgba(255,255,255,.78)," +
                                "rgba(255,45,131,.24) 32%," +
                                "transparent 68%" +
                                ")",

                            mixBlendMode:
                                "screen"
                        }
                    );


                    const style =
                        getComputedStyle(
                            element
                        );


                    if (
                        style.position ===
                        "static"
                    ) {

                        element.style.position =
                            "relative";

                    }


                    element.appendChild(
                        ripple
                    );


                    ripple.animate(

                        [

                            {
                                transform:
                                    "scale(0)",

                                opacity:
                                    .25
                            },

                            {
                                transform:
                                    "scale(1)",

                                opacity:
                                    0
                            }

                        ],

                        {
                            duration:
                                650,

                            easing:
                                "cubic-bezier(.2,.7,.2,1)"
                        }

                    ).onfinish =
                        function () {

                            ripple.remove();

                        };

                }
            );

        }
    );



    /* =====================================================
       16 — SECTION AMBIENT PARALLAX
    ===================================================== */

    if (
        !isMobile &&
        !reduceMotion
    ) {

        const sections =
            document.querySelectorAll(

                ".intro-section," +
                ".founder-section," +
                ".bureau-section," +
                ".team-message"

            );


        let ticking =
            false;


        function updateSectionDepth() {

            const center =
                window.innerHeight /
                2;


            sections.forEach(
                function (section) {

                    const rect =
                        section
                            .getBoundingClientRect();


                    const sectionCenter =
                        rect.top +
                        rect.height /
                        2;


                    const distance =
                        (
                            sectionCenter -
                            center
                        ) /
                        window.innerHeight;


                    section.style.setProperty(
                        "--section-depth",
                        Math.max(
                            -1,
                            Math.min(
                                1,
                                distance
                            )
                        )
                    );

                }
            );


            ticking =
                false;

        }


        window.addEventListener(
            "scroll",
            function () {

                if (
                    !ticking
                ) {

                    ticking =
                        true;


                    requestAnimationFrame(
                        updateSectionDepth
                    );

                }

            },
            {
                passive: true
            }
        );


        updateSectionDepth();

    }



    /* =====================================================
       17 — TEAM MESSAGE ENERGY RINGS
    ===================================================== */

    const teamMessage =
        document.querySelector(
            ".team-message"
        );


    if (
        teamMessage &&
        !reduceMotion
    ) {

        const ringLayer =
            document.createElement(
                "div"
            );


        Object.assign(
            ringLayer.style,
            {
                position:
                    "absolute",

                inset:
                    "0",

                zIndex:
                    "1",

                pointerEvents:
                    "none",

                overflow:
                    "hidden"
            }
        );


        teamMessage.prepend(
            ringLayer
        );


        for (
            let i = 0;
            i < 3;
            i++
        ) {

            const ring =
                document.createElement(
                    "span"
                );


            const size =
                330 +
                i *
                190;


            Object.assign(
                ring.style,
                {
                    width:
                        size +
                        "px",

                    height:
                        size +
                        "px",

                    position:
                        "absolute",

                    left:
                        "50%",

                    top:
                        "50%",

                    borderRadius:
                        "50%",

                    border:
                        "1px solid rgba(255,255,255," +
                        (
                            .11 -
                            i *
                            .024
                        ) +
                        ")",

                    transform:
                        "translate(-50%,-50%)"
                }
            );


            ringLayer.appendChild(
                ring
            );


            ring.animate(

                [

                    {
                        transform:
                            "translate(-50%,-50%) scale(.90)",

                        opacity:
                            .28
                    },

                    {
                        transform:
                            "translate(-50%,-50%) scale(1.06)",

                        opacity:
                            .85
                    },

                    {
                        transform:
                            "translate(-50%,-50%) scale(.90)",

                        opacity:
                            .28
                    }

                ],

                {
                    duration:
                        6000 +
                        i *
                        1500,

                    iterations:
                        Infinity,

                    easing:
                        "ease-in-out",

                    delay:
                        -i *
                        1000
                }

            );

        }

    }



    /* =====================================================
       18 — NAVBAR SUBTLE DIRECTION RESPONSE
    ===================================================== */

    const majesticNavbar =
        document.querySelector(
            ".navbar"
        );


    let previousScroll =
        window.scrollY;


    if (
        majesticNavbar &&
        !isMobile
    ) {

        window.addEventListener(
            "scroll",
            function () {

                const current =
                    window.scrollY;


                if (
                    current >
                    previousScroll &&
                    current >
                    420
                ) {

                    majesticNavbar.style.transform =
                        "translateY(-5px)";

                }

                else {

                    majesticNavbar.style.transform =
                        "translateY(0)";

                }


                previousScroll =
                    current;

            },
            {
                passive: true
            }
        );

    }



    /* =====================================================
       19 — MODAL OPEN ENERGY PULSE
       Keeps your existing modal logic untouched.
    ===================================================== */

    const modal =
        document.getElementById(
            "bureauCardModal"
        );


    if (
        modal &&
        !reduceMotion
    ) {

        const modalObserver =
            new MutationObserver(
                function () {

                    if (
                        !modal.classList
                            .contains(
                                "open"
                            )
                    ) {

                        return;

                    }


                    const panel =
                        modal.querySelector(
                            ".bureau-card-modal-panel"
                        );


                    if (!panel) {

                        return;

                    }


                    panel.animate(

                        [

                            {
                                boxShadow:
                                    "0 38px 130px rgba(0,0,0,.70)," +
                                    "0 0 0 rgba(214,0,99,0)"
                            },

                            {
                                boxShadow:
                                    "0 38px 130px rgba(0,0,0,.70)," +
                                    "0 0 70px rgba(214,0,99,.22)"
                            },

                            {
                                boxShadow:
                                    "0 38px 130px rgba(0,0,0,.70)," +
                                    "0 0 55px rgba(214,0,99,.09)"
                            }

                        ],

                        {
                            duration:
                                900,

                            easing:
                                "ease-out"
                        }

                    );

                }
            );


        modalObserver.observe(
            modal,
            {
                attributes: true,

                attributeFilter: [
                    "class"
                ]
            }
        );

    }



    /* =====================================================
       20 — PERFORMANCE
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            document.documentElement
                .classList
                .toggle(
                    "about-page-paused",
                    document.hidden
                );

        }
    );



    /* =====================================================
       SMART CLUB SIGNATURE
    ===================================================== */

    console.log(
        "%c SMART CLUB // ABOUT ",
        "background:#d60063;" +
        "color:#fff;" +
        "padding:7px 12px;" +
        "font-weight:bold;" +
        "border-radius:4px;"
    );


    console.log(
        "%c EXECUTIVE SYSTEM ONLINE ",
        "color:#00d9ff;" +
        "font-weight:bold;" +
        "letter-spacing:2px;"
    );


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