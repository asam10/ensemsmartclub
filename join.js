/*==========================================================
SMART CLUB JOIN PAGE
PART 1
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();

    initializeButtons();

    initializeSmoothScroll();

});


/*==========================================================
ELEMENTS
==========================================================*/

const navbar = document.querySelector(".navbar");

const memberBtn = document.getElementById("memberBtn");

const sponsorBtn = document.getElementById("sponsorBtn");

const memberApplication = document.getElementById("memberApplication");

const sponsorApplication = document.getElementById("sponsorApplication");

const journeySection = document.querySelector(".journey-section");



/*==========================================================
NAVBAR
==========================================================*/

function initializeNavbar(){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

}



/*==========================================================
SMOOTH SCROLL
==========================================================*/

function initializeSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}



/*==========================================================
BUTTONS
==========================================================*/

function initializeButtons(){

    if(memberBtn){

        memberBtn.addEventListener("click",()=>{

            openMemberApplication();

        });

    }

    if(sponsorBtn){

        sponsorBtn.addEventListener("click",()=>{

            openSponsorApplication();

        });

    }

}



/*==========================================================
MEMBER
==========================================================*/

function openMemberApplication(){

    sponsorApplication.classList.remove("active");

    memberApplication.classList.add("active");

    memberApplication.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}



/*==========================================================
SPONSOR
==========================================================*/

function openSponsorApplication(){

    memberApplication.classList.remove("active");

    sponsorApplication.classList.add("active");

    sponsorApplication.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}



/*==========================================================
BACK TO JOURNEY
==========================================================*/

function backToJourney(){

    memberApplication.classList.remove("active");

    sponsorApplication.classList.remove("active");

    journeySection.scrollIntoView({

        behavior:"smooth"

    });

}


/*==========================================================
GLOBAL
==========================================================*/

window.backToJourney = backToJourney;
/*==========================================================
PART 2
PREMIUM ANIMATIONS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeHeroSpotlight();

    initializeJourneyCards();

    initializeRevealAnimations();

});


/*==========================================================
HERO SPOTLIGHT
==========================================================*/

function initializeHeroSpotlight(){

    const hero = document.querySelector(".hero");

    if(!hero) return;

    const spotlight = document.createElement("div");

    spotlight.className = "hero-spotlight";

    hero.appendChild(spotlight);

    hero.addEventListener("mousemove",(e)=>{

        const rect = hero.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        spotlight.style.left = x + "px";

        spotlight.style.top = y + "px";

    });

}



/*==========================================================
JOURNEY CARDS
==========================================================*/

function initializeJourneyCards(){

    const cards = document.querySelectorAll(".journey-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const centerX = rect.width/2;

            const centerY = rect.height/2;

            const rotateY = (x-centerX)/18;

            const rotateX = -(y-centerY)/18;

            card.style.transform =

            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

            let glow = card.querySelector(".cursor-glow");

            if(!glow){

                glow = document.createElement("div");

                glow.className="cursor-glow";

                card.appendChild(glow);

            }

            glow.style.left = x + "px";

            glow.style.top = y + "px";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}



/*==========================================================
REVEAL
==========================================================*/

function initializeRevealAnimations(){

    const elements = document.querySelectorAll(

        ".section-header,.journey-card,.application-form,.cta-box,.faq-item"

    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(element=>{

        element.classList.add("hidden");

        observer.observe(element);

    });

}
/*==========================================================
PART 3
PREMIUM INTERACTIONS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeMagneticButtons();

    initializeTitleSweep();

    initializeFormAnimations();

    initializeFormSubmission();

});


/*==========================================================
MAGNETIC BUTTONS
==========================================================*/

function initializeMagneticButtons(){

    const buttons = document.querySelectorAll(

        ".primary-btn,.secondary-btn,.submit-button,.card-button"

    );

    buttons.forEach(button=>{

        button.addEventListener("mousemove",(e)=>{

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const moveX = (x - rect.width/2) / 7;

            const moveY = (y - rect.height/2) / 7;

            button.style.transform =

            `translate(${moveX}px,${moveY}px)`;

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="translate(0,0)";

        });

    });

}



/*==========================================================
TITLE LIGHT SWEEP
==========================================================*/

function initializeTitleSweep(){

    const title = document.querySelector(".hero h1");

    if(!title) return;

    title.classList.add("light-sweep");

}



/*==========================================================
FORM ANIMATION
==========================================================*/

function initializeFormAnimations(){

    const sections = document.querySelectorAll(".form-section");

    sections.forEach(section=>{

        const inputs = section.querySelectorAll(

            ".input-group,.checkbox-grid,.submit-area"

        );

        inputs.forEach((item,index)=>{

            //item.style.opacity="0";

            //item.style.transform="translateY(25px)";

            //item.style.transition=`all .6s ease ${index*0.08}s`;

        });

    });

}



/*==========================================================
SHOW FORM
==========================================================*/

function animateCurrentForm(form){

    const items = form.querySelectorAll(

        ".input-group,.checkbox-grid,.submit-area"

    );

    items.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        },index*80);

    });

}



/*==========================================================
SUBMISSION
==========================================================*/

function initializeFormSubmission() {

    const memberForm = document.getElementById("memberForm");
    const sponsorForm = document.getElementById("sponsorForm");

    // ==========================
    // MEMBER APPLICATION
    // ==========================

    memberForm.addEventListener("submit", function (e) {

        e.preventDefault();
        const checkedDepartments = document.querySelectorAll(
    'input[name="club_department"]:checked'
);

const departmentError = document.getElementById("departmentError");

if (checkedDepartments.length === 0) {
    departmentError.style.display = "block";
    return;
}

departmentError.style.display = "none";

        emailjs.sendForm(
            "service_kh902z6",
            "template_ah2iu2y",
            this
        )

        .then(() => {

            showSuccessOverlay();
            this.reset();

        })

        .catch((error) => {

            console.error(error);
            alert("Failed to send member application.");

        });

    });

    // ==========================
    // SPONSOR APPLICATION
    // ==========================

    sponsorForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_kh902z6",
            "template_9xrquqv",
            this
        )

        .then(() => {

            showSuccessOverlay();
            this.reset();

        })

        .catch((error) => {

            console.error(error);
            alert("Failed to send sponsor application.");

        });

    });

}

/*==========================================================
SUCCESS OVERLAY
==========================================================*/

function showSuccessOverlay(){

    let overlay=document.querySelector(".success-overlay");

    if(!overlay){

        overlay=document.createElement("div");

        overlay.className="success-overlay";

        overlay.innerHTML=`

            <div class="success-box">

                <div class="success-icon">

                    ✓

                </div>

                <h2>

                    Welcome to Smart Club

                </h2>

                <p>

                    Your application has been successfully received.

                </p>

            </div>

        `;

        document.body.appendChild(overlay);

    }

    overlay.classList.add("active");

    setTimeout(()=>{

        overlay.classList.remove("active");

    },3500);

}



/*==========================================================
OVERRIDE APPLICATION OPEN
==========================================================*/

const originalMember=openMemberApplication;

openMemberApplication=function(){

    originalMember();

    animateCurrentForm(memberApplication);

};

const originalSponsor=openSponsorApplication;

openSponsorApplication=function(){

    originalSponsor();

    animateCurrentForm(sponsorApplication);

};
/*==========================================================
PART 4
ACCESS TRANSITION
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeAccessTransition();

});


/*==========================================================
INITIALIZE
==========================================================*/

function initializeAccessTransition(){

    const memberCard = document.querySelector("#memberBtn")?.closest(".journey-card");

    const sponsorCard = document.querySelector("#sponsorBtn")?.closest(".journey-card");

    if(memberCard){

        memberCard.addEventListener("click",()=>{

            playAccessTransition(memberCard,openMemberApplication);

        });

    }

    if(sponsorCard){

        sponsorCard.addEventListener("click",()=>{

            playAccessTransition(sponsorCard,openSponsorApplication);

        });

    }

}



/*==========================================================
TRANSITION
==========================================================*/

function playAccessTransition(card,callback){

    if(document.querySelector(".access-overlay")) return;

    const overlay=document.createElement("div");

    overlay.className="access-overlay";

    overlay.innerHTML=`

        <div class="scanner"></div>

        <div class="access-content">

            <div class="access-circle"></div>

            <h2>ACCESS GRANTED</h2>

            <p>Initializing Smart Club Portal...</p>

        </div>

    `;

    document.body.appendChild(overlay);

    card.classList.add("portal-active");

    setTimeout(()=>{

        overlay.classList.add("active");

    },30);

    setTimeout(()=>{

        callback();

    },1900);

    setTimeout(()=>{

        overlay.classList.remove("active");

        card.classList.remove("portal-active");

        setTimeout(()=>{

            overlay.remove();

        },700);

    },2600);

}



/*==========================================================
BACKGROUND PARALLAX
==========================================================*/

window.addEventListener("mousemove",(e)=>{

    const glow1=document.querySelector(".glow-1");

    const glow2=document.querySelector(".glow-2");

    if(!glow1 || !glow2) return;

    const x=(e.clientX/window.innerWidth-.5)*40;

    const y=(e.clientY/window.innerHeight-.5)*40;

    glow1.style.transform=`translate(${x}px,${y}px)`;

    glow2.style.transform=`translate(${-x}px,${-y}px)`;

});


/*==========================================================
BUTTON RIPPLE
==========================================================*/

document.querySelectorAll(

    ".primary-btn,.secondary-btn,.card-button,.submit-button"

).forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=button.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});
/*==========================================================
PART 5
CINEMATIC EFFECTS
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    createParticles();

    initializeCustomCursor();

    initializeTypewriter();

    initializeHud();

    initializeRandomGlitches();

});


/*==========================================================
PARTICLES
==========================================================*/

function createParticles(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const container=document.createElement("div");

    container.className="particle-container";

    hero.appendChild(container);

    for(let i=0;i<80;i++){

        const particle=document.createElement("span");

        particle.className="particle";

        particle.style.left=Math.random()*100+"%";

        particle.style.top=Math.random()*100+"%";

        particle.style.animationDuration=

            8+Math.random()*10+"s";

        particle.style.animationDelay=

            Math.random()*8+"s";

        particle.style.opacity=Math.random();

        particle.style.transform=

            `scale(${0.4+Math.random()*1.4})`;

        container.appendChild(particle);

    }

}


/*==========================================================
CUSTOM CURSOR
==========================================================*/

function initializeCustomCursor(){

    const cursor=document.createElement("div");

    cursor.className="cursor-light";

    document.body.appendChild(cursor);

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left=e.clientX+"px";

        cursor.style.top=e.clientY+"px";

    });

    document.querySelectorAll(

        "button,a,.journey-card,input,textarea"

    ).forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            cursor.classList.add("active");

        });

        item.addEventListener("mouseleave",()=>{

            cursor.classList.remove("active");

        });

    });

}


/*==========================================================
TYPEWRITER
==========================================================*/

function initializeTypewriter(){

    const title =
        document.querySelector(".hero h1");

    if (!title) return;


    const startTypewriter = () => {

        const finalText =
            title.innerHTML;

        const plain =
            title.textContent
                .replace(/\s+/g, " ")
                .trim();

        title.innerHTML = "";

        let index = 0;


        const timer =
            setInterval(() => {

                title.textContent =
                    plain.substring(
                        0,
                        index
                    );

                index++;


                if (index > plain.length) {

                    clearInterval(timer);

                    title.innerHTML =
                        finalText;

                }

            }, 35);

    };


    /*
       Wait until the saved language
       has been applied first.
    */

    setTimeout(
        startTypewriter,
        100
    );

}

/*==========================================================
GLITCH
==========================================================*/

function initializeRandomGlitches(){

    setInterval(()=>{

        const hero=document.querySelector(".hero");

        if(!hero) return;

        hero.classList.add("hero-glitch");

        setTimeout(()=>{

            hero.classList.remove("hero-glitch");

        },120);

    },7000);

}
/*==========================================================
PART 7
PERFORMANCE & POLISH
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    optimizeAnimations();

    initializeLazyEffects();

    initializeKeyboardNavigation();

    initializePageProgress();

});
function initializePageProgress(){

    const progress=document.createElement("div");

    progress.className="page-progress";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const max=document.documentElement.scrollHeight-window.innerHeight;

        const percent=(window.scrollY/max)*100;

        progress.style.width=percent+"%";

    });

}
function optimizeAnimations(){

    if(window.innerWidth<768){

        document.body.classList.add("mobile-mode");

    }

}
function initializeLazyEffects(){

    const sections=document.querySelectorAll("section");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("loaded");

            }

        });

    },{

        threshold:.2

    });

    sections.forEach(section=>observer.observe(section));

}
function initializeKeyboardNavigation(){

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            backToJourney();

        }

    });

}

// ======================================
// closing member application buttons
// ======================================



const closeMemberApplication =
    document.getElementById("closeMemberApplication");

closeMemberApplication.addEventListener("click", () => {

    memberApplication.classList.remove("active");

    memberCard.scrollIntoView({

        behavior: "smooth",
        block: "center"

    });

});
// ======================================
// Close Sponsor Application
// ======================================

const closeSponsorApplication =
    document.getElementById("closeSponsorApplication");

closeSponsorApplication.addEventListener("click", () => {

    sponsorApplication.classList.remove("active");

    sponsorCard.scrollIntoView({

        behavior: "smooth",
        block: "center"

    });

});
/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const icon = question.querySelector(
        "span:last-child"
    );

    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            const faqIcon =
                faq.querySelector(
                    ".faq-question span:last-child"
                );

            if (faqIcon) {
                faqIcon.textContent = "+";
            }

        });

        if (!isActive) {

            item.classList.add("active");

            if (icon) {
                icon.textContent = "−";
            }

        }

    });

});
const translations = {

    en: {

        pageTitle: "Join Smart Club | ENSEM",

        home: "Home",
        about: "About",
        whatWeDo: "What We Do",
        projects: "Projects",
        events: "Events",
        joinUs: "Join Us",
        joinSmartClub: "Join Smart Club",

        heroTag: "SMART CLUB • ENSEM",

        heroTitle:
            "CREATE.<br>BUILD.<br><span>INSPIRE.</span>",

        heroDescription:
            "Join a community of passionate engineers, innovators and creators shaping the future through technology, teamwork and ambitious projects.",

        startJourney:
            "Start Your Journey",

        discoverSmartClub:
            "Discover Smart Club",

        scrollToBegin:
            "SCROLL TO BEGIN",

        journeyTag:
            "SMART CLUB PATHWAYS",

        journeyTitle:
            "Choose Your <span>Journey</span>",

        journeyDescription:
            "Every innovation starts with a decision. Whether you want to become a member or partner with us, your journey begins here.",

        becomeMember:
            "Become a Member",

        memberCardDescription:
            "Join Smart Club and work alongside passionate engineering students on innovative projects, competitions, workshops and cutting-edge technologies.",

        memberFeatureRobotics:
            "✓ Robotics & AI",

        memberFeatureCompetitions:
            "✓ National Competitions",

        memberFeatureProjects:
            "✓ Engineering Projects",

        memberFeatureWorkshops:
            "✓ Workshops",

        memberFeatureNetworking:
            "✓ Networking",

        applyAsMember:
            "Apply as a Member",

        or:
            "OR",

        becomeSponsor:
            "Become a Sponsor",

        sponsorCardDescription:
            "Partner with Smart Club to support ambitious student initiatives, discover future engineers and strengthen your brand within ENSEM.",

        sponsorFeatureVisibility:
            "✓ Brand Visibility",

        sponsorFeatureRecruitment:
            "✓ Recruit Talents",

        sponsorFeatureEvents:
            "✓ Sponsor Events",

        sponsorFeatureProjects:
            "✓ Innovation Projects",

        sponsorFeaturePartnership:
            "✓ Long-term Partnership",

        becomePartner:
            "Become a Partner",

        memberApplicationBadge:
            "MEMBER APPLICATION",

        memberApplicationTitle:
            "Join <span>Smart Club</span>",

        memberApplicationDescription:
            "Fill out the application below. We are looking for motivated ENSEM students who are ready to learn, build and innovate.",

        closeMemberApplication:
            "Close member application",

        personalInformation:
            "Personal Information",

        firstName:
            "First Name",

        lastName:
            "Last Name",

        emailAddress:
            "Email Address",

        phoneNumber:
            "Phone Number",

        firstNamePlaceholder:
            "Enter First Name",

        lastNamePlaceholder:
            "Enter Last Name",

        emailPlaceholder:
            "email@example.com",

        phonePlaceholder:
            "+212 6 XX XX XX XX",

        academicInformation:
            "Academic Information",

        branch:
            "Branch",

        selectBranch:
            "Select your branch",

        academicYear:
            "Academic Year",

        selectAcademicYear:
            "Select your academic year",

        firstYear:
            "1st Year",

        secondYear:
            "2nd Year",

        thirdYear:
            "3rd Year",

        departmentQuestion:
            "Which Smart Club department would you like to join?",

        departmentMultipleChoice:
            "You may select one or more departments.",

        departmentProjects:
            "Projects",

        departmentTreasurer:
            "Treasurer",

        departmentSponsoring:
            "Sponsoring",

        departmentDesign:
            "Design",

        departmentMedia:
            "Media & Communication",

        departmentFormation:
            "Formation",

        departmentError:
            "Please select at least one Smart Club department.",

        motivationQuestion:
            "Why do you want to join Smart Club?",

        motivationPlaceholder:
            "Tell us about yourself, your goals and why you would like to become part of Smart Club...",

        optionalLinks:
            "Links (Optional)",

        linkedin:
            "LinkedIn",

        instagram:
            "Instagram",

        optional:
            "(Optional)",

        linkedinPlaceholder:
            "https://linkedin.com/in/yourprofile",

        instagramPlaceholder:
            "@your_username",

        memberTermsConfirmation:
            "I confirm that the information provided is accurate.",

        submitApplication:
            "Submit Application",

        sponsorApplicationBadge:
            "SPONSOR APPLICATION",

        sponsorApplicationTitle:
            "Become a <span>Smart Partner</span>",

        sponsorApplicationDescription:
            "Help Smart Club grow through sponsorship, collaboration and innovation partnerships.",

        closeSponsorApplication:
            "Close sponsor application",

        companyInformation:
            "Company Information",

        companyName:
            "Company Name",

        companyNamePlaceholder:
            "Your Company",

        industry:
            "Industry",

        industryPlaceholder:
            "Technology, Manufacturing...",

        companyWebsite:
            "Company Website",

        companyWebsitePlaceholder:
            "https://yourcompany.com",

        companyLinkedinPlaceholder:
            "https://linkedin.com/company/...",

        companyInstagramPlaceholder:
            "@company",

        companyLogo:
            "Company Logo",

        uploadCompanyLogo:
            "Upload company logo",

        primaryContact:
            "Primary Contact",

        fullName:
            "Full Name",

        contactNamePlaceholder:
            "Name",

        position:
            "Position",

        jobTitlePlaceholder:
            "HR Manager",

        contactEmailPlaceholder:
            "contact@company.com",

        partnershipInterests:
            "Partnership Interests",

        interestSponsorEvents:
            "Sponsor Events",

        interestRecruitMembers:
            "Recruit Smart Club Members",

        interestOrganizeWorkshops:
            "Organize Workshops",

        interestTechnicalConferences:
            "Technical Conferences",

        interestInnovationProjects:
            "Innovation Projects",

        interestEquipmentDonation:
            "Equipment Donation",

        interestLongTermPartnership:
            "Long-term Partnership",

        other:
            "Other",

        mainObjectivesQuestion:
            "What are your main objectives?",

        goalBrandVisibility:
            "Brand Visibility",

        goalRecruitEngineers:
            "Recruit Future Engineers",

        goalSupportInnovation:
            "Support Student Innovation",

        goalCorporateResponsibility:
            "Corporate Social Responsibility",

        goalNetworking:
            "Networking",

        estimatedSponsorshipBudget:
            "Estimated Sponsorship Budget",

        budgetDescription:
            "This information helps us prepare a partnership proposal tailored to your company.",

        budgetLessThan5000:
            "Less than 5,000 MAD",

        budget5000To10000:
            "5,000 – 10,000 MAD",

        budget10000To25000:
            "10,000 – 25,000 MAD",

        budgetMoreThan25000:
            "More than 25,000 MAD",

        budgetLetsDiscuss:
            "Let's discuss",

        yourMessage:
            "Your Message",

        sponsorMessagePlaceholder:
            "Tell us about your company, your goals and how you would like to collaborate with Smart Club.",

        sponsorTermsConfirmation:
            "I certify that the information provided is accurate and authorize Smart Club ENSEM to contact me regarding this partnership.",

        sendPartnershipRequest:
            "Send Partnership Request",

        ctaTag:
            "SMART CLUB • ENSEM",

        ctaTitle:
            "Ready to Build <span>The Future?</span>",

        ctaDescription:
            "Whether you're an ambitious student looking to innovate or a company seeking to empower tomorrow's engineers, Smart Club is where ideas become reality.",

        contactUs:
            "Contact Us",

        questions:
            "QUESTIONS",

        faqTitle:
            "Frequently Asked <span>Questions</span>",

        faqWhoCanJoin:
            "Who can join Smart Club?",

        faqWhoCanJoinAnswer:
            "Any motivated ENSEM student who is passionate about technology, innovation, teamwork and learning.",

        faqExperience:
            "Do I need previous experience?",

        faqExperienceAnswer:
            "No. Motivation, curiosity and commitment are more important than experience.",

        faqRecruitmentTime:
            "How long does the recruitment process take?",

        faqRecruitmentTimeAnswer:
            "Applications are reviewed by our team. Shortlisted candidates will be contacted for the next steps.",

        faqSponsor:
            "How can my company become a sponsor?",

        faqSponsorAnswer:
            "Complete the Sponsor Application and our partnership team will get back to you to discuss collaboration opportunities.",

        footerSlogan:
            "Digital Minds. Real Impact.",

        navigation:
            "Navigation",

        contact:
            "Contact",

        followUs:
            "Follow Us",

        footerCopyright:
            "© 2026 Smart Club ENSEM. All Rights Reserved."

    },


    fr: {

        pageTitle:
            "Rejoindre Smart Club | ENSEM",

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

        heroTag:
            "SMART CLUB • ENSEM",

        heroTitle:
            "CRÉER.<br>CONSTRUIRE.<br><span>INSPIRER.</span>",

        heroDescription:
            "Rejoignez une communauté d’ingénieurs, d’innovateurs et de créateurs passionnés qui façonnent l’avenir grâce à la technologie, au travail d’équipe et à des projets ambitieux.",

        startJourney:
            "Commencer votre parcours",

        discoverSmartClub:
            "Découvrir Smart Club",

        scrollToBegin:
            "FAITES DÉFILER POUR COMMENCER",

        journeyTag:
            "PARCOURS SMART CLUB",

        journeyTitle:
            "Choisissez votre <span>parcours</span>",

        journeyDescription:
            "Chaque innovation commence par une décision. Que vous souhaitiez devenir membre ou collaborer avec nous, votre parcours commence ici.",

        becomeMember:
            "Devenir membre",

        memberCardDescription:
            "Rejoignez Smart Club et travaillez avec des étudiants ingénieurs passionnés sur des projets innovants, des compétitions, des ateliers et des technologies de pointe.",

        memberFeatureRobotics:
            "✓ Robotique et IA",

        memberFeatureCompetitions:
            "✓ Compétitions nationales",

        memberFeatureProjects:
            "✓ Projets d’ingénierie",

        memberFeatureWorkshops:
            "✓ Ateliers",

        memberFeatureNetworking:
            "✓ Réseautage",

        applyAsMember:
            "Postuler comme membre",

        or:
            "OU",

        becomeSponsor:
            "Devenir sponsor",

        sponsorCardDescription:
            "Collaborez avec Smart Club pour soutenir des initiatives étudiantes ambitieuses, découvrir de futurs ingénieurs et renforcer votre marque au sein de l’ENSEM.",

        sponsorFeatureVisibility:
            "✓ Visibilité de la marque",

        sponsorFeatureRecruitment:
            "✓ Recrutement de talents",

        sponsorFeatureEvents:
            "✓ Sponsoring d’événements",

        sponsorFeatureProjects:
            "✓ Projets d’innovation",

        sponsorFeaturePartnership:
            "✓ Partenariat à long terme",

        becomePartner:
            "Devenir partenaire",

        memberApplicationBadge:
            "CANDIDATURE MEMBRE",

        memberApplicationTitle:
            "Rejoindre <span>Smart Club</span>",

        memberApplicationDescription:
            "Remplissez le formulaire ci-dessous. Nous recherchons des étudiants motivés de l’ENSEM, prêts à apprendre, construire et innover.",

        closeMemberApplication:
            "Fermer la candidature membre",

        personalInformation:
            "Informations personnelles",

        firstName:
            "Prénom",

        lastName:
            "Nom",

        emailAddress:
            "Adresse e-mail",

        phoneNumber:
            "Numéro de téléphone",

        firstNamePlaceholder:
            "Entrez votre prénom",

        lastNamePlaceholder:
            "Entrez votre nom",

        emailPlaceholder:
            "email@exemple.com",

        phonePlaceholder:
            "+212 6 XX XX XX XX",

        academicInformation:
            "Informations académiques",

        branch:
            "Filière",

        selectBranch:
            "Sélectionnez votre filière",

        academicYear:
            "Année académique",

        selectAcademicYear:
            "Sélectionnez votre année académique",

        firstYear:
            "1re année",

        secondYear:
            "2e année",

        thirdYear:
            "3e année",

        departmentQuestion:
            "Quel département de Smart Club souhaitez-vous rejoindre ?",

        departmentMultipleChoice:
            "Vous pouvez sélectionner un ou plusieurs départements.",

        departmentProjects:
            "Projets",

        departmentTreasurer:
            "Trésorerie",

        departmentSponsoring:
            "Sponsoring",

        departmentDesign:
            "Design",

        departmentMedia:
            "Média et communication",

        departmentFormation:
            "Formation",

        departmentError:
            "Veuillez sélectionner au moins un département de Smart Club.",

        motivationQuestion:
            "Pourquoi souhaitez-vous rejoindre Smart Club ?",

        motivationPlaceholder:
            "Parlez-nous de vous, de vos objectifs et des raisons pour lesquelles vous souhaitez rejoindre Smart Club...",

        optionalLinks:
            "Liens facultatifs",

        linkedin:
            "LinkedIn",

        instagram:
            "Instagram",

        optional:
            "(Facultatif)",

        linkedinPlaceholder:
            "https://linkedin.com/in/votreprofil",

        instagramPlaceholder:
            "@votre_identifiant",

        memberTermsConfirmation:
            "Je confirme que les informations fournies sont exactes.",

        submitApplication:
            "Envoyer la candidature",

        sponsorApplicationBadge:
            "DEMANDE DE PARTENARIAT",

        sponsorApplicationTitle:
            "Devenir un <span>partenaire Smart</span>",

        sponsorApplicationDescription:
            "Aidez Smart Club à se développer grâce au sponsoring, à la collaboration et aux partenariats d’innovation.",

        closeSponsorApplication:
            "Fermer la demande de partenariat",

        companyInformation:
            "Informations sur l’entreprise",

        companyName:
            "Nom de l’entreprise",

        companyNamePlaceholder:
            "Votre entreprise",

        industry:
            "Secteur d’activité",

        industryPlaceholder:
            "Technologie, industrie...",

        companyWebsite:
            "Site web de l’entreprise",

        companyWebsitePlaceholder:
            "https://votreentreprise.com",

        companyLinkedinPlaceholder:
            "https://linkedin.com/company/...",

        companyInstagramPlaceholder:
            "@entreprise",

        companyLogo:
            "Logo de l’entreprise",

        uploadCompanyLogo:
            "Importer le logo de l’entreprise",

        primaryContact:
            "Contact principal",

        fullName:
            "Nom complet",

        contactNamePlaceholder:
            "Nom",

        position:
            "Fonction",

        jobTitlePlaceholder:
            "Responsable RH",

        contactEmailPlaceholder:
            "contact@entreprise.com",

        partnershipInterests:
            "Intérêts du partenariat",

        interestSponsorEvents:
            "Sponsoriser des événements",

        interestRecruitMembers:
            "Recruter des membres de Smart Club",

        interestOrganizeWorkshops:
            "Organiser des ateliers",

        interestTechnicalConferences:
            "Conférences techniques",

        interestInnovationProjects:
            "Projets d’innovation",

        interestEquipmentDonation:
            "Don de matériel",

        interestLongTermPartnership:
            "Partenariat à long terme",

        other:
            "Autre",

        mainObjectivesQuestion:
            "Quels sont vos principaux objectifs ?",

        goalBrandVisibility:
            "Visibilité de la marque",

        goalRecruitEngineers:
            "Recruter de futurs ingénieurs",

        goalSupportInnovation:
            "Soutenir l’innovation étudiante",

        goalCorporateResponsibility:
            "Responsabilité sociale de l’entreprise",

        goalNetworking:
            "Réseautage",

        estimatedSponsorshipBudget:
            "Budget estimé du sponsoring",

        budgetDescription:
            "Cette information nous aide à préparer une proposition de partenariat adaptée à votre entreprise.",

        budgetLessThan5000:
            "Moins de 5 000 MAD",

        budget5000To10000:
            "5 000 – 10 000 MAD",

        budget10000To25000:
            "10 000 – 25 000 MAD",

        budgetMoreThan25000:
            "Plus de 25 000 MAD",

        budgetLetsDiscuss:
            "À discuter",

        yourMessage:
            "Votre message",

        sponsorMessagePlaceholder:
            "Présentez-nous votre entreprise, vos objectifs et la manière dont vous souhaitez collaborer avec Smart Club.",

        sponsorTermsConfirmation:
            "Je certifie que les informations fournies sont exactes et j’autorise Smart Club ENSEM à me contacter concernant ce partenariat.",

        sendPartnershipRequest:
            "Envoyer la demande de partenariat",

        ctaTag:
            "SMART CLUB • ENSEM",

        ctaTitle:
            "Prêt à construire <span>le futur ?</span>",

        ctaDescription:
            "Que vous soyez un étudiant ambitieux souhaitant innover ou une entreprise désirant soutenir les ingénieurs de demain, Smart Club est l’endroit où les idées deviennent réalité.",

        contactUs:
            "Nous contacter",

        questions:
            "QUESTIONS",

        faqTitle:
            "Questions <span>fréquentes</span>",

        faqWhoCanJoin:
            "Qui peut rejoindre Smart Club ?",

        faqWhoCanJoinAnswer:
            "Tout étudiant motivé de l’ENSEM passionné par la technologie, l’innovation, le travail d’équipe et l’apprentissage.",

        faqExperience:
            "Ai-je besoin d’une expérience préalable ?",

        faqExperienceAnswer:
            "Non. La motivation, la curiosité et l’engagement sont plus importants que l’expérience.",

        faqRecruitmentTime:
            "Combien de temps dure le processus de recrutement ?",

        faqRecruitmentTimeAnswer:
            "Les candidatures sont examinées par notre équipe. Les candidats présélectionnés seront contactés pour les prochaines étapes.",

        faqSponsor:
            "Comment mon entreprise peut-elle devenir sponsor ?",

        faqSponsorAnswer:
            "Remplissez le formulaire de partenariat et notre équipe vous contactera afin de discuter des possibilités de collaboration.",

        footerSlogan:
            "Esprits numériques. Impact réel.",

        navigation:
            "Navigation",

        contact:
            "Contact",

        followUs:
            "Suivez-nous",

        footerCopyright:
            "© 2026 Smart Club ENSEM. Tous droits réservés."

    }

};
/* ==========================================================
   LANGUAGE SYSTEM
========================================================== */

const enBtn =
    document.getElementById("enBtn");

const frBtn =
    document.getElementById("frBtn");


let currentLanguage =
    localStorage.getItem("smartClubLanguage") || "en";


function applyLanguage(language) {

    const selectedLanguage =
        translations[language] || translations.en;


    currentLanguage = language;


    document.documentElement.lang =
        language;


    /* ==========================================
       NORMAL TEXT
    ========================================== */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.getAttribute("data-i18n");


            if (
                selectedLanguage[key] !== undefined
            ) {

                if (
                    element.tagName === "TITLE"
                ) {

                    document.title =
                        selectedLanguage[key];

                } else {

                    element.textContent =
                        selectedLanguage[key];

                }

            }

        });


    /* ==========================================
       HTML TEXT
       For titles containing span or br
    ========================================== */

    document
        .querySelectorAll("[data-i18n-html]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-html"
                );


            if (
                selectedLanguage[key] !== undefined
            ) {

                element.innerHTML =
                    selectedLanguage[key];

            }

        });


    /* ==========================================
       PLACEHOLDERS
    ========================================== */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );


            if (
                selectedLanguage[key] !== undefined
            ) {

                element.setAttribute(
                    "placeholder",
                    selectedLanguage[key]
                );

            }

        });


    /* ==========================================
       ARIA LABELS
    ========================================== */

    document
        .querySelectorAll(
            "[data-i18n-aria-label]"
        )
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-aria-label"
                );


            if (
                selectedLanguage[key] !== undefined
            ) {

                element.setAttribute(
                    "aria-label",
                    selectedLanguage[key]
                );

            }

        });


    /* ==========================================
       TITLE ATTRIBUTES
    ========================================== */

    document
        .querySelectorAll(
            "[data-i18n-title]"
        )
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-title"
                );


            if (
                selectedLanguage[key] !== undefined
            ) {

                element.setAttribute(
                    "title",
                    selectedLanguage[key]
                );

            }

        });


    /* ==========================================
       SAVE LANGUAGE
    ========================================== */

    localStorage.setItem(
        "smartClubLanguage",
        language
    );


    /* ==========================================
       ACTIVE LANGUAGE BUTTON
    ========================================== */

    if (enBtn) {

        enBtn.classList.toggle(
            "active",
            language === "en"
        );

    }


    if (frBtn) {

        frBtn.classList.toggle(
            "active",
            language === "fr"
        );

    }

}



/* ==========================================================
   LANGUAGE BUTTON EVENTS
========================================================== */

if (enBtn) {

    enBtn.addEventListener(
        "click",
        function () {

            applyLanguage("en");

        }
    );

}


if (frBtn) {

    frBtn.addEventListener(
        "click",
        function () {

            applyLanguage("fr");

        }
    );

}



/* ==========================================================
   LOAD SAVED LANGUAGE
========================================================== */

applyLanguage(currentLanguage);