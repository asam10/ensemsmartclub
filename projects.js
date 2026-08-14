/* =========================================================
   SMART CLUB — PROJECTS & REPORTS
   PUBLIC DATABASE SYSTEM
========================================================= */


/* =========================================================
   01 — SUPABASE CONFIGURATION

   IMPORTANT:
   Use the SAME Supabase URL and ANON KEY
   that you used in admin.js.

   DO NOT use the service_role key here.
========================================================= */

const SUPABASE_URL =
    "https://zgaiipsthhdkddxmkaye.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_eRqoFo9jSA7h2Lc91a2UnA_2s5YV0Wb";


/* =========================================================
   02 — INITIALIZE SUPABASE
========================================================= */

let supabaseClient = null;


if (
    typeof supabase !== "undefined" &&
    SUPABASE_URL !== "YOUR_SUPABASE_URL" &&
    SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY"
) {

    supabaseClient =
        supabase.createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY
        );

}


/* =========================================================
   03 — GLOBAL DATA
========================================================= */

let projects = [];

let reports = [];

let currentProjectFilter = "all";

let currentReportFilter = "all";

let projectSearchTerm = "";


/* =========================================================
   04 — DOM ELEMENTS
========================================================= */


/* NAVIGATION */

const navbar =
    document.querySelector(".navbar");

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuClose =
    document.getElementById("mobileMenuClose");


/* PROJECTS */

const projectsGrid =
    document.getElementById("projectsGrid");

const emptyProjects =
    document.getElementById("emptyProjects");

const projectCount =
    document.getElementById("projectCount");

const projectLoading =
    document.getElementById("projectsLoading");

const projectError =
    document.getElementById("projectsError");

const projectSearch =
    document.getElementById("projectSearch");

const projectFilters =
    document.querySelectorAll(
        ".project-filters .filter"
    );


/* REPORTS */

const reportsGrid =
    document.getElementById("reportsGrid");

const emptyReports =
    document.getElementById("emptyReports");

const reportCount =
    document.getElementById("reportCount");

const reportsLoading =
    document.getElementById("reportsLoading");

const reportsError =
    document.getElementById("reportsError");

const reportFilters =
    document.querySelectorAll(
        ".report-filter"
    );


/* PROJECT MODAL */

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById(
        "projectModalClose"
    );

const projectDetailCover =
    document.getElementById(
        "projectDetailCover"
    );

const projectDetailCategory =
    document.getElementById(
        "projectDetailCategory"
    );

const projectDetailTitle =
    document.getElementById(
        "projectDetailTitle"
    );

const projectDetailStatus =
    document.getElementById(
        "projectDetailStatus"
    );

const projectDetailShort =
    document.getElementById(
        "projectDetailShort"
    );

const projectDetailProgressValue =
    document.getElementById(
        "projectDetailProgressValue"
    );

const projectDetailProgressFill =
    document.getElementById(
        "projectDetailProgressFill"
    );

const projectDetailDescription =
    document.getElementById(
        "projectDetailDescription"
    );

const relatedReports =
    document.getElementById(
        "relatedReports"
    );

const relatedReportsList =
    document.getElementById(
        "relatedReportsList"
    );


/* PDF READER */

const pdfReaderOverlay =
    document.getElementById(
        "pdfReader"
    );

const pdfReaderClose =
    document.getElementById(
        "pdfReaderClose"
    );

const pdfReaderTitle =
    document.getElementById(
        "pdfReaderTitle"
    );

const pdfReaderFrame =
    document.getElementById(
        "pdfFrame"
    );

const pdfReaderLoading =
    document.getElementById(
        "pdfReaderLoading"
    );

const pdfOpenNewTab =
    document.getElementById(
        "pdfOpenExternal"
    );
/* =========================================================
   05 — PAGE LOADER
========================================================= */

const pageLoader =
    document.getElementById("pageLoader");


window.addEventListener(
    "load",
    function () {

        setTimeout(
            function () {

                if (pageLoader) {

                    pageLoader.classList.add(
                        "hide"
                    );

                }

            },
            450
        );

    }
);


/* =========================================================
   06 — MOBILE MENU
========================================================= */

function openMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


function closeMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove("open");

    document.body.style.overflow =
        "";

}


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        function () {

            if (
                mobileMenu &&
                mobileMenu.classList.contains(
                    "open"
                )
            ) {

                closeMobileMenu();

            }

            else {

                openMobileMenu();

            }

        }
    );

}


if (mobileMenuClose) {

    mobileMenuClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


if (mobileMenu) {

    const links =
        mobileMenu.querySelectorAll("a");


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );

}


/* =========================================================
   07 — NAVBAR SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    function () {

        if (!navbar) return;


        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        }

        else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   08 — SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
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
                                    "visible"
                                );


                            revealObserver
                                .unobserve(
                                    entry.target
                                );

                        }

                    }
                );

            },

            {
                threshold: 0.1
            }

        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

}

else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   09 — HELPER
   ESCAPE HTML

   This prevents database text from being interpreted
   as HTML code.
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* =========================================================
   10 — NORMALIZE TEXT
========================================================= */

function normalizeText(value) {

    return String(
        value || ""
    )
        .trim()
        .toLowerCase();

}


/* =========================================================
   11 — FORMAT DATE
========================================================= */

function formatDate(dateValue) {

    if (!dateValue) {

        return "DATE UNKNOWN";

    }


    const date =
        new Date(dateValue);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(dateValue);

    }


    return date.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    )
    .toUpperCase();

}


/* =========================================================
   12 — CLAMP PROGRESS
========================================================= */

function getProgress(value) {

    let progress =
        Number(value);


    if (
        Number.isNaN(progress)
    ) {

        progress = 0;

    }


    return Math.min(
        100,
        Math.max(
            0,
            progress
        )
    );

}


/* =========================================================
   13 — SHOW PROJECT LOADING
========================================================= */

function showProjectLoading() {

    if (projectLoading) {

        projectLoading.classList.remove(
            "hidden"
        );

    }


    if (projectError) {

        projectError.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   14 — HIDE PROJECT LOADING
========================================================= */

function hideProjectLoading() {

    if (projectLoading) {

        projectLoading.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   15 — PROJECT ERROR
========================================================= */

function showProjectError() {

    hideProjectLoading();


    if (projectError) {

        projectError.classList.add(
            "show"
        );

    }

}


/* =========================================================
   16 — REPORT LOADING
========================================================= */

function showReportLoading() {

    if (reportsLoading) {

        reportsLoading.classList.remove(
            "hidden"
        );

    }


    if (reportsError) {

        reportsError.classList.remove(
            "show"
        );

    }

}


function hideReportLoading() {

    if (reportsLoading) {

        reportsLoading.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   17 — REPORT ERROR
========================================================= */

function showReportError() {

    hideReportLoading();


    if (reportsError) {

        reportsError.classList.add(
            "show"
        );

    }

}


/* =========================================================
   18 — LOAD PROJECTS FROM SUPABASE
========================================================= */

async function loadProjects() {

    showProjectLoading();


    if (!supabaseClient) {

        console.error(
            "Supabase is not configured."
        );

        showProjectError();

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient

                .from("projects")

                .select("*")

                .eq(
                    "published",
                    true
                )

                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );


        if (error) {

            throw error;

        }


        projects =
            Array.isArray(data)
                ? data
                : [];


        hideProjectLoading();

        renderProjects();

    }

    catch (error) {

        console.error(
            "Could not load projects:",
            error
        );

        projects = [];

        showProjectError();

        renderProjects();

    }

}


/* =========================================================
   19 — LOAD REPORTS FROM SUPABASE
========================================================= */

async function loadReports() {

    showReportLoading();


    if (!supabaseClient) {

        console.error(
            "Supabase is not configured."
        );

        showReportError();

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient

                .from("reports")

                .select("*")

                .eq(
                    "published",
                    true
                )

                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );


        if (error) {

            throw error;

        }


        reports =
            Array.isArray(data)
                ? data
                : [];


        hideReportLoading();

        renderReports();

    }

    catch (error) {

        console.error(
            "Could not load reports:",
            error
        );

        reports = [];

        showReportError();

        renderReports();

    }

}


/* =========================================================
   20 — FILTER PROJECTS
========================================================= */

function getFilteredProjects() {

    let filtered =
        [...projects];


    /* CATEGORY */

    if (
        currentProjectFilter !==
        "all"
    ) {

        filtered =
            filtered.filter(
                function (project) {

                    return (
                        normalizeText(
                            project.category
                        ) ===
                        normalizeText(
                            currentProjectFilter
                        )
                    );

                }
            );

    }


    /* SEARCH */

    if (projectSearchTerm) {

        filtered =
            filtered.filter(
                function (project) {

                    const searchData = [

                        project.title,

                        project.short_description,

                        project.description,

                        project.category,

                        project.status

                    ]
                    .join(" ")
                    .toLowerCase();


                    return searchData.includes(
                        projectSearchTerm
                    );

                }
            );

    }


    return filtered;

}


/* =========================================================
   21 — RENDER PROJECTS
========================================================= */

function renderProjects() {

    if (!projectsGrid) return;


    const filteredProjects =
        getFilteredProjects();


    projectsGrid.innerHTML = "";


    if (projectCount) {

        projectCount.textContent =
            String(
                filteredProjects.length
            ).padStart(
                2,
                "0"
            );

    }


    if (
        filteredProjects.length === 0
    ) {

        if (emptyProjects) {

            emptyProjects.classList.remove(
                "hidden"
            );

            emptyProjects.style.display =
                "grid";

        }

        return;

    }


    if (emptyProjects) {

        emptyProjects.classList.add(
            "hidden"
        );

        emptyProjects.style.display =
            "none";

    }


    filteredProjects.forEach(
        function (
            project,
            index
        ) {

            const card =
                createProjectCard(
                    project,
                    index
                );


            projectsGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   22 — CREATE PROJECT CARD
========================================================= */

function createProjectCard(
    project,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "project-card";


    const title =
        escapeHTML(
            project.title ||
            "Untitled Project"
        );


    const category =
        escapeHTML(
            project.category ||
            "Project"
        );


    const status =
        escapeHTML(
            project.status ||
            "In Development"
        );


    const description =
        escapeHTML(
            project.short_description ||
            project.description ||
            "Smart Club project."
        );


    const progress =
        getProgress(
            project.progress
        );


    const cover =
        project.cover_url ||
        project.cover_image ||
        project.image_url ||
        project.image ||
        "";


    const number =
        String(
            index + 1
        ).padStart(
            2,
            "0"
        );


    let coverHTML = "";


    if (cover) {

        coverHTML = `

            <img
                src="${escapeHTML(cover)}"
                alt="${title}"
                loading="lazy"
            >

        `;

    }

    else {

        coverHTML = `

            <div
                class="project-card-placeholder"
            >

                ◈

            </div>

        `;

    }


    card.innerHTML = `

        <div
            class="project-card-cover"
        >

            ${coverHTML}


            <span
                class="project-card-category"
            >

                ${category}

            </span>


            <span
                class="project-card-number"
            >

                SMART://PRJ/${number}

            </span>

        </div>


        <div
            class="project-card-content"
        >

            <p
                class="project-card-status"
            >

                ${status}

            </p>


            <h3>

                ${title}

            </h3>


            <p
                class="project-card-description"
            >

                ${description}

            </p>


            <div
                class="project-card-progress"
            >

                <div
                    class="project-card-progress-top"
                >

                    <span>
                        DEVELOPMENT
                    </span>

                    <strong>
                        ${progress}%
                    </strong>

                </div>


                <div
                    class="project-card-progress-track"
                >

                    <div
                        class="project-card-progress-fill"
                        style="width:${progress}%"
                    ></div>

                </div>

            </div>


            <div
                class="project-card-action"
            >

                <strong>
                    EXPLORE PROJECT
                </strong>

                <span>
                    →
                </span>

            </div>

        </div>

    `;


    card.setAttribute(
        "tabindex",
        "0"
    );


    card.addEventListener(
        "click",
        function () {

            openProjectModal(
                project
            );

        }
    );


    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openProjectModal(
                    project
                );

            }

        }
    );


    return card;

}


/* =========================================================
   23 — PROJECT FILTER BUTTONS
========================================================= */

projectFilters.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                projectFilters.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentProjectFilter =
                    normalizeText(
                        button.dataset.filter ||
                        "all"
                    );


                renderProjects();

            }
        );

    }
);


/* =========================================================
   24 — PROJECT SEARCH
========================================================= */

if (projectSearch) {

    projectSearch.addEventListener(
        "input",
        function () {

            projectSearchTerm =
                normalizeText(
                    projectSearch.value
                );


            renderProjects();

        }
    );

}


/* =========================================================
   25 — OPEN PROJECT MODAL
========================================================= */

function openProjectModal(project) {

    if (!projectModal) return;


    const title =
        project.title ||
        "Untitled Project";


    const category =
        project.category ||
        "Project";


    const status =
        project.status ||
        "In Development";


    const shortDescription =
        project.short_description ||
        "";


    const description =
        project.description ||
        shortDescription ||
        "No project description available.";


    const progress =
        getProgress(
            project.progress
        );


    const cover =
        project.cover_url ||
        project.cover_image ||
        project.image_url ||
        project.image ||
        "";


    if (projectDetailCategory) {

        projectDetailCategory.textContent =
            category.toUpperCase();

    }


    if (projectDetailTitle) {

        projectDetailTitle.textContent =
            title;

    }


    if (projectDetailStatus) {

        projectDetailStatus.textContent =
            status.toUpperCase();

    }


    if (projectDetailShort) {

        projectDetailShort.textContent =
            shortDescription;

    }


    if (projectDetailDescription) {

        projectDetailDescription.textContent =
            description;

    }


    if (
        projectDetailProgressValue
    ) {

        projectDetailProgressValue.textContent =
            progress + "%";

    }


    if (
        projectDetailProgressFill
    ) {

        projectDetailProgressFill.style.width =
            progress + "%";

    }


    if (projectDetailCover) {

        if (cover) {

            projectDetailCover.style
                .backgroundImage =
                `url("${cover}")`;

        }

        else {

            projectDetailCover.style
                .backgroundImage =
                "linear-gradient(135deg,#15181e,#080a0e)";

        }

    }


    renderRelatedReports(
        project
    );


    projectModal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   26 — CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    if (!projectModal) return;


    projectModal.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                projectModal
            ) {

                closeProjectModal();

            }

        }
    );

}


/* =========================================================
   27 — FIND REPORTS RELATED TO PROJECT
========================================================= */

function getReportsForProject(
    project
) {

    return reports.filter(
        function (report) {

            /* BEST METHOD:
               report.project_id
               references project.id
            */

            if (
                report.project_id &&
                project.id
            ) {

                return (
                    String(
                        report.project_id
                    ) ===
                    String(
                        project.id
                    )
                );

            }


            /* FALLBACK IF YOUR DATABASE
               USES project_slug
            */

            if (
                report.project_slug &&
                project.slug
            ) {

                return (
                    normalizeText(
                        report.project_slug
                    ) ===
                    normalizeText(
                        project.slug
                    )
                );

            }


            return false;

        }
    );

}


/* =========================================================
   28 — RENDER RELATED REPORTS
========================================================= */

function renderRelatedReports(
    project
) {

    if (
        !relatedReports ||
        !relatedReportsList
    ) {

        return;

    }


    const projectReports =
        getReportsForProject(
            project
        );


    relatedReportsList.innerHTML =
        "";


    if (
        projectReports.length === 0
    ) {

        relatedReports.style.display =
            "none";

        return;

    }


    relatedReports.style.display =
        "block";


    projectReports.forEach(
        function (report) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "related-report-item";


            item.innerHTML = `

                <strong>

                    ${escapeHTML(
                        report.title ||
                        "Project Report"
                    )}

                </strong>


                <span>

                    READ REPORT →

                </span>

            `;


            item.addEventListener(
                "click",
                function () {

                    openPDFReader(
                        report
                    );

                }
            );


            relatedReportsList
                .appendChild(
                    item
                );

        }
    );

}


/* =========================================================
   29 — FILTER REPORTS
========================================================= */

function getFilteredReports() {

    if (
        currentReportFilter ===
        "all"
    ) {

        return [...reports];

    }


    return reports.filter(
        function (report) {

            const type =
                normalizeText(
                    report.type ||
                    report.category
                );


            return (
                type ===
                normalizeText(
                    currentReportFilter
                )
            );

        }
    );

}


/* =========================================================
   30 — RENDER REPORTS
========================================================= */

function renderReports() {

    if (!reportsGrid) return;


    const filteredReports =
        getFilteredReports();


    reportsGrid.innerHTML = "";


    if (reportCount) {

        reportCount.textContent =
            String(
                filteredReports.length
            ).padStart(
                2,
                "0"
            );

    }


    if (
        filteredReports.length === 0
    ) {

        if (emptyReports) {

            emptyReports.classList.add(
                "show"
            );

        }

        return;

    }


    if (emptyReports) {

        emptyReports.classList.remove(
            "show"
        );

    }


    filteredReports.forEach(
        function (report) {

            const card =
                createReportCard(
                    report
                );


            reportsGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   31 — CREATE REPORT CARD
========================================================= */

function createReportCard(report) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "report-card";


    const title =
        escapeHTML(
            report.title ||
            "Untitled Report"
        );


const rawType =
    report.type ||
    report.category ||
    "Report";

const type =
    escapeHTML(
        rawType.toLowerCase() === "project"
            ? "Project Report"
            : rawType
    );


    const description =
        escapeHTML(
            report.description ||
            "Smart Club technical document."
        );


    const date =
        formatDate(
            report.report_date ||
            report.date ||
            report.created_at
        );


    let projectName = "";


    if (report.project_id) {

        const linkedProject =
            projects.find(
                function (project) {

                    return (
                        String(project.id) ===
                        String(
                            report.project_id
                        )
                    );

                }
            );


        if (linkedProject) {

            projectName =
                linkedProject.title;

        }

    }


    card.innerHTML = `

        <div
            class="report-card-top"
        >

            <div
                class="report-card-icon"
            >

                ▤

            </div>


            <div>

                <p
                    class="report-card-type"
                >

                    ${type.toUpperCase()}

                </p>


                <p
                    class="report-card-date"
                >

                    ${escapeHTML(date)}

                </p>

            </div>

        </div>


        <h3>

            ${title}

        </h3>


        <p
            class="report-card-description"
        >

            ${description}

        </p>


        ${
            projectName

            ? `

                <p
                    class="report-card-project"
                >

                    RELATED PROJECT //

                    <strong>

                        ${escapeHTML(
                            projectName
                        )}

                    </strong>

                </p>

            `

            : ""
        }


        <div
            class="report-card-action"
        >

            <strong>
                READ DOCUMENT
            </strong>

            <span>
                →
            </span>

        </div>

    `;


    card.setAttribute(
        "tabindex",
        "0"
    );


    card.addEventListener(
        "click",
        function () {

            openPDFReader(
                report
            );

        }
    );


    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openPDFReader(
                    report
                );

            }

        }
    );


    return card;

}


/* =========================================================
   32 — REPORT FILTER BUTTONS
========================================================= */

reportFilters.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                reportFilters.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentReportFilter =
                    normalizeText(
                        button.dataset.filter ||
                        "all"
                    );


                renderReports();

            }
        );

    }
);


/* =========================================================
   33 — GET PDF URL

   Supports several possible column names so the code
   remains flexible with your Supabase table.
========================================================= */

function getReportPDFURL(report) {

    return (

        report.pdf_url ||

        report.file_url ||

        report.document_url ||

        report.pdf ||

        ""

    );

}


/* =========================================================
   34 — OPEN PDF INSIDE WEBSITE
========================================================= */

function openPDFReader(report) {

    if (!pdfReaderOverlay) {

        return;

    }


    const pdfURL =
        getReportPDFURL(
            report
        );


    if (!pdfURL) {

        console.error(
            "This report has no PDF URL."
        );

        alert(
            "This report does not have a PDF file yet."
        );

        return;

    }


    if (pdfReaderTitle) {

        pdfReaderTitle.textContent =
            report.title ||
            "Smart Club Report";

    }


    if (pdfReaderLoading) {

        pdfReaderLoading.classList.remove(
            "hidden"
        );

    }


    if (pdfReaderFrame) {

        pdfReaderFrame.src =
            pdfURL;


        pdfReaderFrame.onload =
            function () {

                if (
                    pdfReaderLoading
                ) {

                    pdfReaderLoading
                        .classList
                        .add(
                            "hidden"
                        );

                }

            };

    }


    if (pdfOpenNewTab) {

        pdfOpenNewTab.href =
            pdfURL;

    }


    pdfReaderOverlay.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   35 — CLOSE PDF READER
========================================================= */

function closePDFReader() {

    if (!pdfReaderOverlay) {

        return;

    }


    pdfReaderOverlay.classList.remove(
        "open"
    );


    if (pdfReaderFrame) {

        pdfReaderFrame.src =
            "about:blank";

    }


    if (pdfReaderLoading) {

        pdfReaderLoading.classList.remove(
            "hidden"
        );

    }


    /*
       If project modal is still open,
       keep body locked.
    */

    if (
        projectModal &&
        projectModal.classList.contains(
            "open"
        )
    ) {

        return;

    }


    document.body.classList.remove(
        "modal-open"
    );

}


if (pdfReaderClose) {

    pdfReaderClose.addEventListener(
        "click",
        closePDFReader
    );

}


if (pdfReaderOverlay) {

    pdfReaderOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                pdfReaderOverlay
            ) {

                closePDFReader();

            }

        }
    );

}


/* =========================================================
   36 — KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        /*
           PDF gets priority because it can
           be opened on top of project modal.
        */

        if (
            pdfReaderOverlay &&
            pdfReaderOverlay.classList
                .contains("open")
        ) {

            closePDFReader();

            return;

        }


        if (
            projectModal &&
            projectModal.classList
                .contains("open")
        ) {

            closeProjectModal();

            return;

        }


        if (
            mobileMenu &&
            mobileMenu.classList
                .contains("open")
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   37 — HERO BUTTONS
========================================================= */

const exploreProjectsButton =
    document.getElementById(
        "exploreProjectsButton"
    );

const exploreReportsButton =
    document.getElementById(
        "exploreReportsButton"
    );


if (exploreProjectsButton) {

    exploreProjectsButton.addEventListener(
        "click",
        function () {

            const section =
                document.getElementById(
                    "projects"
                );


            if (section) {

                section.scrollIntoView(
                    {
                        behavior: "smooth"
                    }
                );

            }

        }
    );

}


if (exploreReportsButton) {

    exploreReportsButton.addEventListener(
        "click",
        function () {

            const section =
                document.getElementById(
                    "reports"
                );


            if (section) {

                section.scrollIntoView(
                    {
                        behavior: "smooth"
                    }
                );

            }

        }
    );

}


/* =========================================================
   38 — DATABASE INITIALIZATION
========================================================= */

async function initializeDatabase() {

    /*
       Projects and reports can load at
       the same time.
    */

    await Promise.allSettled(
        [
            loadProjects(),
            loadReports()
        ]
    );

}


/* =========================================================
   39 — START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeDatabase();

    }
);


/* =========================================================
   SMART CLUB — ENSEM

   PUBLIC PROJECT DATABASE

   PROJECTS:
   Supabase → projects → published

   REPORTS:
   Supabase → reports → published

   PDF:
   Supabase Storage → browser PDF reader

   DIGITAL MINDS.
   REAL IMPACT.
========================================================= */
/* =========================================================
   40 — BILINGUAL SYSTEM
========================================================= */

const projectTranslations = {

    en: {

        metaDescription:
            "Discover Smart Club ENSEM projects, engineering work, digital solutions and technical reports.",

        pageTitle:
            "Projects & Reports | Smart Club ENSEM",

        loaderDatabase: "SMART://DATABASE",
        connecting: "CONNECTING...",
        connectingStatus: "CONNECTING",

        home: "Home",
        about: "About Us",
        whatWeDo: "What We Do",
        projects: "Projects",
        reports: "Reports",
        events: "Events",
        joinUs: "Join Us",
        joinSmartClub: "JOIN SMART CLUB",

        openNavigationMenu: "Open navigation menu",
        closeNavigation: "Close navigation",
        mobileNavigation: "SMART://NAVIGATION",

        projectDatabaseCode: "SMART://PROJECT_DATABASE",

        projectsHeroTitle:
            'FROM IDEA <small>TO</small> <span>IMPACT.</span>',

        projectsHeroDescription:
            "Explore the engineering projects, experiments, digital solutions and technical work developed by the Smart Club community at ENSEM.",

        exploreProjects: "EXPLORE PROJECTS",
        viewReports: "VIEW REPORTS",
        database: "DATABASE",

        smart: "SMART",
        buildSystem: "BUILD SYSTEM",
        projectDevelopment: "PROJECT DEVELOPMENT",
        scrollToExplore: "SCROLL TO EXPLORE",

        projectDatabase: "PROJECT DATABASE",

        databaseIntroTitle:
            "WE DON'T JUST <span>IMAGINE.</span> WE BUILD.",

        databaseIntroDescription:
            "This space documents what Smart Club creates: from first concepts and prototypes to completed engineering and digital projects.",

        projectsSectionCode: "SMART://PROJECTS",

        projectsSectionTitle:
            "WHAT WE'RE <span>BUILDING.</span>",

        projectsSectionDescription:
            "Explore current and completed Smart Club projects across engineering, automation, digitalization and emerging technologies.",

        databaseStatus: "DATABASE STATUS",

        filterAll: "ALL",
        filterDigitalization: "DIGITALIZATION",
        filterEngineering: "ENGINEERING",
        filterAutomation: "AUTOMATION",
        filterInnovation: "INNOVATION",
        filterAi: "AI",
        filterOther: "OTHER",

        searchProjectPlaceholder: "Search project...",
        searchProjects: "Search projects",

        retrievingProjects: "RETRIEVING PROJECTS",
        build: "BUILD",

        projectsStatusCode: "SMART://PROJECTS/STATUS",

        emptyProjectsTitle:
            "SOMETHING IS <span>BEING BUILT.</span>",

        emptyProjectsDescription:
            "Our project database is currently waiting for its first public release. Soon, this space will document the ideas, prototypes and engineering projects created by Smart Club members.",

        projectSystem: "PROJECT SYSTEM",
        initializing: "INITIALIZING",
        building: "BUILDING",

        connectionErrorCode: "SMART://CONNECTION_ERROR",
        projectDatabaseUnavailable: "PROJECT DATABASE UNAVAILABLE",
        tryAgainLater: "Please try again later.",

        methodCode: "SMART://METHOD",
        fromConceptToReality: "FROM CONCEPT TO REALITY",

        philosophyTitle:
            "THINK. <span>BUILD.</span> IMPACT.",

        philosophyDescription:
            "Smart Club projects are built around experimentation, engineering, digital technologies and collaborative problem solving.",

        think: "THINK",
        identifyProblem: "Identify a problem.",

        design: "DESIGN",
        engineerSolution: "Engineer a solution.",

        transformIdeas: "Transform ideas into systems.",

        impact: "IMPACT",
        createMeaningful: "Create something meaningful.",

        documentationCode: "SMART://DOCUMENTATION",

        reportsSectionTitle:
            "PROJECT & EVENT <span>REPORTS.</span>",

        reportsSectionDescription:
            "Explore technical documentation, project reports, event summaries and activity records published by Smart Club.",

        documentArchive: "DOCUMENT ARCHIVE",

        filterProjects: "PROJECTS",
        filterEvents: "EVENTS",
        filterTechnical: "TECHNICAL",
        filterActivities: "ACTIVITIES",

        documents: "DOCUMENTS",
        retrievingDocumentArchive: "RETRIEVING DOCUMENT ARCHIVE...",

        reportsCode: "SMART://REPORTS",
        documentArchiveEmpty: "DOCUMENT ARCHIVE EMPTY",

        reportsWillAppear:
            "Published Smart Club reports will appear here.",

        documentErrorCode: "SMART://DOCUMENT_ERROR",
        reportArchiveUnavailable: "REPORT ARCHIVE UNAVAILABLE",

        projectCtaTitle:
            "HAVE AN IDEA <span>WORTH BUILDING?</span>",

        projectCtaDescription:
            "Join a community where ideas become experiments, experiments become projects and projects create real impact.",

        closeProject: "Close project",
        projectCode: "SMART://PROJECT",
        projectTitle: "PROJECT TITLE",
        inDevelopment: "IN DEVELOPMENT",
        developmentProgress: "DEVELOPMENT PROGRESS",
        aboutProject: "ABOUT THE PROJECT",
        documentation: "DOCUMENTATION",
        relatedReports: "RELATED REPORTS",

        reportCode: "SMART://REPORT",
        reportTitle: "REPORT",
        openPdf: "OPEN PDF ↗",
        closeReport: "Close report",
        loadingDocument: "LOADING DOCUMENT...",
        smartClubReportTitle: "Smart Club Report",

        footerSlogan: "Digital Minds. Real Impact.",
        studentClubOf: "STUDENT CLUB OF",

        ensemFullName:
            "École Nationale Supérieure d'Électricité et de Mécanique",

        navigation: "NAVIGATION",
        system: "SYSTEM",
        databaseOnline: "DATABASE ONLINE",

        copyright:
            "© 2026 Smart Club • ENSEM",

        footerBottomSlogan:
            "DIGITAL MINDS. <span>REAL IMPACT.</span>",

        systemAccess: "System access",
        administrationAccess: "Administration access"
    },


    fr: {

        metaDescription:
            "Découvrez les projets, travaux d'ingénierie, solutions numériques et rapports techniques de Smart Club ENSEM.",

        pageTitle:
            "Projets et rapports | Smart Club ENSEM",

        loaderDatabase: "SMART://BASE_DE_DONNÉES",
        connecting: "CONNEXION...",
        connectingStatus: "CONNEXION",

        home: "Accueil",
        about: "À propos",
        whatWeDo: "Nos activités",
        projects: "Projets",
        reports: "Rapports",
        events: "Événements",
        joinUs: "Nous rejoindre",
        joinSmartClub: "REJOINDRE SMART CLUB",

        openNavigationMenu: "Ouvrir le menu de navigation",
        closeNavigation: "Fermer la navigation",
        mobileNavigation: "SMART://NAVIGATION",

        projectDatabaseCode: "SMART://BASE_PROJETS",

        projectsHeroTitle:
            'DE L’IDÉE <small>À</small> <span>L’IMPACT.</span>',

        projectsHeroDescription:
            "Découvrez les projets d'ingénierie, les expériences, les solutions numériques et les travaux techniques développés par la communauté Smart Club à l'ENSEM.",

        exploreProjects: "EXPLORER LES PROJETS",
        viewReports: "VOIR LES RAPPORTS",
        database: "BASE DE DONNÉES",

        smart: "SMART",
        buildSystem: "SYSTÈME DE CRÉATION",
        projectDevelopment: "DÉVELOPPEMENT DE PROJETS",
        scrollToExplore: "FAITES DÉFILER POUR EXPLORER",

        projectDatabase: "BASE DE PROJETS",

        databaseIntroTitle:
            "NOUS N'IMAGINONS PAS SEULEMENT. <span>NOUS CONSTRUISONS.</span>",

        databaseIntroDescription:
            "Cet espace présente les créations de Smart Club, des premiers concepts et prototypes jusqu'aux projets numériques et d'ingénierie finalisés.",

        projectsSectionCode: "SMART://PROJETS",

        projectsSectionTitle:
            "CE QUE NOUS <span>CONSTRUISONS.</span>",

        projectsSectionDescription:
            "Découvrez les projets actuels et réalisés de Smart Club dans les domaines de l'ingénierie, de l'automatisation, de la digitalisation et des technologies émergentes.",

        databaseStatus: "ÉTAT DE LA BASE",

        filterAll: "TOUS",
        filterDigitalization: "DIGITALISATION",
        filterEngineering: "INGÉNIERIE",
        filterAutomation: "AUTOMATISATION",
        filterInnovation: "INNOVATION",
        filterAi: "IA",
        filterOther: "AUTRE",

        searchProjectPlaceholder: "Rechercher un projet...",
        searchProjects: "Rechercher des projets",

        retrievingProjects: "CHARGEMENT DES PROJETS",
        build: "CONSTRUIRE",

        projectsStatusCode: "SMART://PROJETS/ÉTAT",

        emptyProjectsTitle:
            "QUELQUE CHOSE EST <span>EN CONSTRUCTION.</span>",

        emptyProjectsDescription:
            "Notre base de projets attend actuellement sa première publication. Cet espace présentera bientôt les idées, les prototypes et les projets d'ingénierie créés par les membres de Smart Club.",

        projectSystem: "SYSTÈME DE PROJETS",
        initializing: "INITIALISATION",
        building: "CONSTRUCTION",

        connectionErrorCode: "SMART://ERREUR_CONNEXION",
        projectDatabaseUnavailable: "BASE DE PROJETS INDISPONIBLE",
        tryAgainLater: "Veuillez réessayer plus tard.",

        methodCode: "SMART://MÉTHODE",
        fromConceptToReality: "DU CONCEPT À LA RÉALITÉ",

        philosophyTitle:
            "PENSER. <span>CONSTRUIRE.</span> IMPACTER.",

        philosophyDescription:
            "Les projets de Smart Club reposent sur l'expérimentation, l'ingénierie, les technologies numériques et la résolution collaborative de problèmes.",

        think: "PENSER",
        identifyProblem: "Identifier un problème.",

        design: "CONCEVOIR",
        engineerSolution: "Concevoir une solution.",

        transformIdeas: "Transformer les idées en systèmes.",

        impact: "IMPACTER",
        createMeaningful: "Créer quelque chose d'utile.",

        documentationCode: "SMART://DOCUMENTATION",

        reportsSectionTitle:
            "RAPPORTS DE PROJETS ET <span>D'ÉVÉNEMENTS.</span>",

        reportsSectionDescription:
            "Découvrez les documents techniques, les rapports de projets, les résumés d'événements et les comptes rendus d'activités publiés par Smart Club.",

        documentArchive: "ARCHIVE DOCUMENTAIRE",

        filterProjects: "PROJETS",
        filterEvents: "ÉVÉNEMENTS",
        filterTechnical: "TECHNIQUE",
        filterActivities: "ACTIVITÉS",

        documents: "DOCUMENTS",
        retrievingDocumentArchive: "CHARGEMENT DES DOCUMENTS...",

        reportsCode: "SMART://RAPPORTS",
        documentArchiveEmpty: "ARCHIVE DOCUMENTAIRE VIDE",

        reportsWillAppear:
            "Les rapports publiés par Smart Club apparaîtront ici.",

        documentErrorCode: "SMART://ERREUR_DOCUMENT",
        reportArchiveUnavailable: "ARCHIVE DES RAPPORTS INDISPONIBLE",

        projectCtaTitle:
            "VOUS AVEZ UNE IDÉE <span>À CONSTRUIRE ?</span>",

        projectCtaDescription:
            "Rejoignez une communauté où les idées deviennent des expériences, les expériences deviennent des projets et les projets créent un impact réel.",

        closeProject: "Fermer le projet",
        projectCode: "SMART://PROJET",
        projectTitle: "TITRE DU PROJET",
        inDevelopment: "EN DÉVELOPPEMENT",
        developmentProgress: "PROGRESSION DU DÉVELOPPEMENT",
        aboutProject: "À PROPOS DU PROJET",
        documentation: "DOCUMENTATION",
        relatedReports: "RAPPORTS ASSOCIÉS",

        reportCode: "SMART://RAPPORT",
        reportTitle: "RAPPORT",
        openPdf: "OUVRIR LE PDF ↗",
        closeReport: "Fermer le rapport",
        loadingDocument: "CHARGEMENT DU DOCUMENT...",
        smartClubReportTitle: "Rapport Smart Club",

        footerSlogan: "Esprits numériques. Impact réel.",
        studentClubOf: "CLUB ÉTUDIANT DE",

        ensemFullName:
            "École Nationale Supérieure d'Électricité et de Mécanique",

        navigation: "NAVIGATION",
        system: "SYSTÈME",
        databaseOnline: "BASE DE DONNÉES EN LIGNE",

        copyright:
            "© 2026 Smart Club • ENSEM",

        footerBottomSlogan:
            "ESPRITS NUMÉRIQUES. <span>IMPACT RÉEL.</span>",

        systemAccess: "Accès système",
        administrationAccess: "Accès à l'administration"
    }

};



/* =========================================================
   APPLY LANGUAGE
========================================================= */

function applyProjectLanguage(language) {

    const selectedLanguage =
        projectTranslations[language] ||
        projectTranslations.en;


    document.documentElement.lang =
        language;


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
                element.getAttribute("data-i18n-html");

            if (selectedLanguage[key] !== undefined) {

                element.innerHTML =
                    selectedLanguage[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-content]")
        .forEach(function (element) {

            const key =
                element.getAttribute("data-i18n-content");

            if (selectedLanguage[key] !== undefined) {

                element.setAttribute(
                    "content",
                    selectedLanguage[key]
                );

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (selectedLanguage[key] !== undefined) {

                element.setAttribute(
                    "placeholder",
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


    document
        .querySelectorAll("[data-i18n-title]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-title"
                );

            if (selectedLanguage[key] !== undefined) {

                element.setAttribute(
                    "title",
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



/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

const savedProjectLanguage =
    localStorage.getItem(
        "smartClubLanguage"
    ) || "en";


applyProjectLanguage(
    savedProjectLanguage
);



/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

const projectsEnglishButton =
    document.getElementById("enBtn");

const projectsFrenchButton =
    document.getElementById("frBtn");


if (projectsEnglishButton) {

    projectsEnglishButton.addEventListener(
        "click",
        function () {

            applyProjectLanguage("en");

        }
    );

}


if (projectsFrenchButton) {

    projectsFrenchButton.addEventListener(
        "click",
        function () {

            applyProjectLanguage("fr");

        }
    );

}