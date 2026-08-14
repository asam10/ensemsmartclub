/* =========================================================
   SMART CLUB — ADMIN CONTROL CENTER
   SUPABASE VERSION
========================================================= */


/* =========================================================
   1 — SUPABASE CONNECTION
========================================================= */

const SUPABASE_URL =
    "https://zgaiipsthhdkddxmkaye.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_eRqoFo9jSA7h2Lc91a2UnA_2s5YV0Wb";


const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


/* =========================================================
   2 — ELEMENTS
========================================================= */

const loginScreen =
    document.getElementById("loginScreen");

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");

const emailInput =
    document.getElementById("email");

const password =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");

const loginButton =
    document.getElementById("loginButton");


const dashboard =
    document.getElementById("dashboard");

const dashboardTitle =
    document.getElementById("dashboardTitle");

const logoutButton =
    document.getElementById("logoutButton");


const navItems =
    document.querySelectorAll(".nav-item");

const dashboardSections =
    document.querySelectorAll(".dashboard-section");

const overviewSection =
    document.getElementById("overviewSection");

const projectsSection =
    document.getElementById("projectsSection");


const projectModal =
    document.getElementById("projectModal");

const projectForm =
    document.getElementById("projectForm");

const modalClose =
    document.getElementById("modalClose");

const cancelProject =
    document.getElementById("cancelProject");


const createProjectButton =
    document.getElementById("createProjectButton");

const projectsCreateButton =
    document.getElementById("projectsCreateButton");

const emptyCreateButton =
    document.getElementById("emptyCreateButton");

const newProjectNav =
    document.getElementById("newProjectNav");


const projectProgress =
    document.getElementById("projectProgress");

const progressValue =
    document.getElementById("progressValue");


const projectsGrid =
    document.getElementById("projectsGrid");

const projectsPageEmpty =
    document.getElementById("projectsPageEmpty");

const emptyProjects =
    document.getElementById("emptyProjects");

const recentProjectList =
    document.getElementById("recentProjectList");


const totalProjects =
    document.getElementById("totalProjects");

const publishedProjects =
    document.getElementById("publishedProjects");

const draftProjects =
    document.getElementById("draftProjects");


const viewAllProjects =
    document.getElementById("viewAllProjects");

const projectSearch =
    document.getElementById("projectSearch");

const filters =
    document.querySelectorAll(".filter");


const notification =
    document.getElementById("notification");

const notificationText =
    document.getElementById("notificationText");


/* =========================================================
   3 — STATE
========================================================= */

/*
    This array is now only a LOCAL COPY of what exists
    inside Supabase.

    Supabase is the real database.
*/

let projects = [];

let currentFilter = "all";

let editingProjectId = null;

let currentUser = null;

let isSavingProject = false;


/* =========================================================
   4 — PASSWORD VISIBILITY
========================================================= */

if (passwordToggle) {

    passwordToggle.addEventListener(
        "click",
        function () {

            if (password.type === "password") {

                password.type = "text";

                passwordToggle.textContent =
                    "HIDE";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            }

            else {

                password.type =
                    "password";

                passwordToggle.textContent =
                    "SHOW";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );

}


/* =========================================================
   5 — LOGIN WITH SUPABASE
========================================================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const email =
                emailInput.value.trim();

            const enteredPassword =
                password.value;


            if (!email || !enteredPassword) {

                showLoginMessage(
                    "Enter your email and password.",
                    true
                );

                return;

            }


            setLoginLoading(true);

            showLoginMessage(
                "VERIFYING ACCESS...",
                false
            );


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth
                        .signInWithPassword({

                            email: email,

                            password:
                                enteredPassword

                        });


                if (error) {

                    console.error(
                        "Login error:",
                        error
                    );

                    showLoginMessage(
                        "ACCESS DENIED — Invalid email or password.",
                        true
                    );

                    return;

                }


                if (!data.user) {

                    showLoginMessage(
                        "ACCESS DENIED.",
                        true
                    );

                    return;

                }


                currentUser =
                    data.user;


                showLoginMessage(
                    "ACCESS GRANTED.",
                    false
                );


                await openDashboard();

            }

            catch (error) {

                console.error(
                    "Unexpected login error:",
                    error
                );


                showLoginMessage(
                    "Unable to connect to authentication service.",
                    true
                );

            }

            finally {

                setLoginLoading(false);

            }

        }
    );

}


/* =========================================================
   6 — LOGIN MESSAGE
========================================================= */

function showLoginMessage(
    message,
    isError = false
) {

    if (!loginMessage) {
        return;
    }


    loginMessage.textContent =
        message;


    loginMessage.style.color =
        isError
            ? "#ff477e"
            : "#e31367";

}


/* =========================================================
   7 — LOGIN BUTTON LOADING
========================================================= */

function setLoginLoading(loading) {

    if (!loginButton) {
        return;
    }


    loginButton.disabled =
        loading;


    const text =
        loginButton.querySelector("span");


    if (!text) {
        return;
    }


    text.textContent =
        loading
            ? "AUTHENTICATING..."
            : "ENTER CONTROL CENTER";

}


/* =========================================================
   8 — OPEN DASHBOARD
========================================================= */

async function openDashboard() {

    if (loginScreen) {

        loginScreen.classList.add(
            "hidden"
        );

    }


    if (dashboard) {

        dashboard.classList.remove(
            "hidden"
        );

    }

    resetInactivityTimer();

    showDashboardSection(
        "overview"
    );


    /*
        Get projects from Supabase.
    */

    await loadProjects();

}


/* =========================================================
   9 — LOGOUT
========================================================= */

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        async function () {

            logoutButton.disabled =
                true;


            try {

                const { error } =
                    await supabaseClient.auth
                        .signOut();


                if (error) {

                    console.error(
                        "Logout error:",
                        error
                    );

                    showNotification(
                        "Logout failed."
                    );

                    return;

                }


                currentUser = null;

                clearTimeout(inactivityTimer);

                projects = [];


                if (dashboard) {

                    dashboard.classList.add(
                        "hidden"
                    );

                }


                if (loginScreen) {

                    loginScreen.classList.remove(
                        "hidden"
                    );

                }


                if (loginForm) {

                    loginForm.reset();

                }


                if (loginMessage) {

                    loginMessage.textContent =
                        "";

                }


                if (password) {

                    password.type =
                        "password";

                }


                if (passwordToggle) {

                    passwordToggle.textContent =
                        "SHOW";

                }


                updateDashboard();

            }

            catch (error) {

                console.error(
                    "Logout error:",
                    error
                );

            }

            finally {

                logoutButton.disabled =
                    false;

            }

        }
    );

}


/* =========================================================
   10 — RESTORE EXISTING LOGIN SESSION

   IMPORTANT:

   If you refresh admin.html while already logged in,
   Supabase can restore the session.
========================================================= */

async function restoreSession() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient.auth
                .getSession();


        if (error) {

            console.error(
                "Session error:",
                error
            );

            showLogin();

            return;

        }


        const session =
            data.session;


        if (
    session &&
    session.user
      ) {

    console.log("========== SESSION ==========");
    console.log("Session:", session);
    console.log("User:", session.user);
    console.log("Role:", session.user.role);
    console.log("User ID:", session.user.id);
    console.log("=============================");

    currentUser =
        session.user;

    await openDashboard();

      }

        else {

            showLogin();

        }

    }

    catch (error) {

        console.error(
            "Session restore error:",
            error
        );


        showLogin();

    }

}


/* =========================================================
   11 — SHOW LOGIN
========================================================= */

function showLogin() {

    if (dashboard) {

        dashboard.classList.add(
            "hidden"
        );

    }


    if (loginScreen) {

        loginScreen.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   12 — AUTH STATE CHANGES
========================================================= */

supabaseClient.auth.onAuthStateChange(
    function (event, session) {

        if (session && session.user) {

            currentUser =
                session.user;

        }

        else if (
            event === "SIGNED_OUT"
        ) {

            currentUser = null;

        }

    }
);


/* =========================================================
   13 — DASHBOARD NAVIGATION
========================================================= */

navItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const section =
                    item.dataset.section;


                /*
                    NEW PROJECT doesn't have
                    data-section.
                */

                if (!section) {
                    return;
                }


                showDashboardSection(
                    section
                );

            }
        );

    }
);


/* =========================================================
   14 — SHOW DASHBOARD SECTION
========================================================= */

function showDashboardSection(
    sectionName
) {

    dashboardSections.forEach(
        function (section) {

            section.classList.remove(
                "active"
            );

        }
    );


    navItems.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );

        }
    );


    if (
        sectionName === "projects"
    ) {

        if (projectsSection) {

            projectsSection.classList.add(
                "active"
            );

        }


        if (dashboardTitle) {

            dashboardTitle.textContent =
                "PROJECTS";

        }


        const nav =
            document.querySelector(
                '[data-section="projects"]'
            );


        if (nav) {

            nav.classList.add(
                "active"
            );

        }

    }

    else {

        if (overviewSection) {

            overviewSection.classList.add(
                "active"
            );

        }


        if (dashboardTitle) {

            dashboardTitle.textContent =
                "OVERVIEW";

        }


        const nav =
            document.querySelector(
                '[data-section="overview"]'
            );


        if (nav) {

            nav.classList.add(
                "active"
            );

        }

    }

}


/* =========================================================
   15 — VIEW ALL PROJECTS
========================================================= */

if (viewAllProjects) {

    viewAllProjects.addEventListener(
        "click",
        function () {

            showDashboardSection(
                "projects"
            );

        }
    );

}


/* =========================================================
   16 — LOAD PROJECTS FROM SUPABASE
========================================================= */

async function loadProjects() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient

                .from("projects")

                .select("*")

                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );


        if (error) {

            console.error(
                "Load projects error:",
                error
            );


            showNotification(
                "Unable to load projects."
            );


            projects = [];

            updateDashboard();

            return;

        }


        projects =
            data || [];


        updateDashboard();

    }

    catch (error) {

        console.error(
            "Unexpected project loading error:",
            error
        );


        projects = [];

        updateDashboard();


        showNotification(
            "Database connection error."
        );

    }

}


/* =========================================================
   17 — OPEN NEW PROJECT MODAL
========================================================= */

function openNewProjectModal() {

    editingProjectId =
        null;


    if (projectForm) {

        projectForm.reset();

    }


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    if (modalTitle) {

        modalTitle.textContent =
            "NEW PROJECT";

    }


    if (projectProgress) {

        projectProgress.value =
            0;

    }


    if (progressValue) {

        progressValue.textContent =
            "0%";

    }


    if (projectModal) {

        projectModal.classList.add(
            "open"
        );

    }


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   18 — NEW PROJECT BUTTONS
========================================================= */

[
    createProjectButton,
    projectsCreateButton,
    emptyCreateButton,
    newProjectNav

].forEach(
    function (button) {

        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            openNewProjectModal
        );

    }
);


/* =========================================================
   19 — CLOSE MODAL
========================================================= */

function closeProjectModal() {

    if (projectModal) {

        projectModal.classList.remove(
            "open"
        );

    }


    document.body.style.overflow =
        "";

}


/* X */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* CANCEL */

if (cancelProject) {

    cancelProject.addEventListener(
        "click",
        closeProjectModal
    );

}


/* CLICK OUTSIDE */

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


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains(
                "open"
            )
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   20 — PROGRESS SLIDER
========================================================= */

if (projectProgress) {

    projectProgress.addEventListener(
        "input",
        function () {

            if (progressValue) {

                progressValue.textContent =
                    projectProgress.value +
                    "%";

            }

        }
    );

}


/* =========================================================
   21 — CREATE SLUG
========================================================= */

function createSlug(title) {

    return String(title)

        .toLowerCase()

        .trim()

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(
            /[^a-z0-9]+/g,
            "-"
        )

        .replace(
            /^-+|-+$/g,
            ""
        );

}


/* =========================================================
   22 — COLLECT PROJECT FORM DATA
========================================================= */

function getProjectFormData() {

    const title =
        document
            .getElementById(
                "projectTitle"
            )
            .value
            .trim();


    return {

        title:
            title,

        slug:
            createSlug(title),

        short_description:
            document
                .getElementById(
                    "projectShortDescription"
                )
                .value
                .trim(),

        category:
            document
                .getElementById(
                    "projectCategory"
                )
                .value,

        status:
            document
                .getElementById(
                    "projectStatus"
                )
                .value,

        progress:
            Number(
                projectProgress.value
            ),

        cover_image:
            document
                .getElementById(
                    "projectCover"
                )
                .value
                .trim() || null,

        description:
            document
                .getElementById(
                    "projectDescription"
                )
                .value
                .trim(),

        published:
            document
                .getElementById(
                    "projectPublished"
                )
                .checked

    };

}


/* =========================================================
   23 — SAVE PROJECT TO SUPABASE
========================================================= */

if (projectForm) {

    projectForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            if (isSavingProject) {
                return;
            }


            const projectData =
                getProjectFormData();


            if (!projectData.title) {

                showNotification(
                    "Project title is required."
                );

                return;

            }


            if (!currentUser) {

                showNotification(
                    "Your session has expired."
                );

                return;

            }


            isSavingProject =
                true;


            const saveButton =
                projectForm.querySelector(
                    ".save-project-button"
                );


            if (saveButton) {

                saveButton.disabled =
                    true;

                saveButton.innerHTML =
                    `
                    SAVING...
                    <span>•••</span>
                    `;

            }


            try {

                /* =========================================
                   EDIT EXISTING PROJECT
                ========================================= */

                if (editingProjectId) {

                    const updateData = {

                        ...projectData,

                        updated_at:
                            new Date()
                                .toISOString()

                    };


                    const {
                        data,
                        error
                    } =
                        await supabaseClient

                            .from("projects")

                            .update(
                                updateData
                            )

                            .eq(
                                "id",
                                editingProjectId
                            )

                            .select();


                    if (error) {

                        throw error;

                    }


                    showNotification(
                        "Project updated."
                    );

                }


                /* =========================================
                   CREATE PROJECT
                ========================================= */

                else {

                    const insertData = {

                        ...projectData,

                        created_by:
                            currentUser.id

                    };


                    const {
                        data,
                        error
                    } =
                        await supabaseClient

                            .from("projects")

                            .insert(
                                insertData
                            )

                            .select();


                    if (error) {

                        throw error;

                    }


                    showNotification(
                        "Project created."
                    );

                }


                closeProjectModal();


                /*
                    Reload from database.

                    We don't manually add the project
                    to the JavaScript array anymore.
                */

                await loadProjects();

            }

            catch (error) {

                console.error(
                    "Save project error:",
                    error
                );


                showNotification(
                    getFriendlyDatabaseError(
                        error
                    )
                );

            }

            finally {

                isSavingProject =
                    false;


                if (saveButton) {

                    saveButton.disabled =
                        false;

                    saveButton.innerHTML =
                        `
                        SAVE PROJECT
                        <span>→</span>
                        `;

                }

            }

        }
    );

}


/* =========================================================
   24 — FRIENDLY DATABASE ERRORS
========================================================= */

function getFriendlyDatabaseError(
    error
) {

    if (!error) {

        return "Something went wrong.";

    }


    console.error(
        "Supabase:",
        error
    );


    if (
        error.code === "23505"
    ) {

        return "A project with this value already exists.";

    }


    if (
        error.code === "42501"
    ) {

        return "Database permission denied.";

    }


    if (
        error.message &&
        error.message
            .toLowerCase()
            .includes("row-level security")
    ) {

        return "Database security blocked this action.";

    }


    return (
        error.message ||
        "Unable to save project."
    );

}


/* =========================================================
   25 — UPDATE DASHBOARD
========================================================= */

function updateDashboard() {

    updateStatistics();

    renderProjects();

    renderRecentProjects();

}


/* =========================================================
   26 — STATISTICS
========================================================= */

function updateStatistics() {

    const published =
        projects.filter(
            function (project) {

                return (
                    project.published === true
                );

            }
        ).length;


    const drafts =
        projects.length -
        published;


    if (totalProjects) {

        totalProjects.textContent =
            projects.length;

    }


    if (publishedProjects) {

        publishedProjects.textContent =
            published;

    }


    if (draftProjects) {

        draftProjects.textContent =
            drafts;

    }

}


/* =========================================================
   27 — FILTER BUTTONS
========================================================= */

filters.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filters.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentFilter =
                    button.dataset.filter;


                renderProjects();

            }
        );

    }
);


/* =========================================================
   28 — SEARCH
========================================================= */

if (projectSearch) {

    projectSearch.addEventListener(
        "input",
        renderProjects
    );

}


/* =========================================================
   29 — FILTER PROJECTS
========================================================= */

function getFilteredProjects() {

    let filtered =
        [...projects];


    if (
        currentFilter ===
        "published"
    ) {

        filtered =
            filtered.filter(
                function (project) {

                    return (
                        project.published ===
                        true
                    );

                }
            );

    }


    if (
        currentFilter ===
        "draft"
    ) {

        filtered =
            filtered.filter(
                function (project) {

                    return (
                        project.published !==
                        true
                    );

                }
            );

    }


    const search =
        projectSearch

            ? projectSearch
                .value
                .trim()
                .toLowerCase()

            : "";


    if (search) {

        filtered =
            filtered.filter(
                function (project) {

                    const title =
                        String(
                            project.title || ""
                        ).toLowerCase();


                    const category =
                        String(
                            project.category || ""
                        ).toLowerCase();


                    const status =
                        String(
                            project.status || ""
                        ).toLowerCase();


                    return (
                        title.includes(search) ||
                        category.includes(search) ||
                        status.includes(search)
                    );

                }
            );

    }


    return filtered;

}


/* =========================================================
   30 — RENDER PROJECTS
========================================================= */

function renderProjects() {

    if (!projectsGrid) {
        return;
    }


    const filtered =
        getFilteredProjects();


    projectsGrid.innerHTML =
        "";


    if (projects.length === 0) {

        if (projectsPageEmpty) {

            projectsPageEmpty.style.display =
                "block";

        }


        return;

    }


    if (projectsPageEmpty) {

        projectsPageEmpty.style.display =
            "none";

    }


    /*
        Nothing matches search/filter.
    */

    if (filtered.length === 0) {

        projectsGrid.innerHTML =
            `
            <div class="projects-page-empty"
                 style="display:block; grid-column:1/-1;">

                <span>00</span>

                <h3>
                    NO MATCHING PROJECTS
                </h3>

                <p>
                    No project matches the current filter.
                </p>

            </div>
            `;


        return;

    }


    filtered.forEach(
        function (project) {

            const card =
                createProjectCard(
                    project
                );


            projectsGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   31 — CREATE PROJECT CARD
========================================================= */

function createProjectCard(project) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "admin-project-card";


    const cover =
        project.cover_image

            ? `
                <img
                    src="${escapeHTML(project.cover_image)}"
                    alt="${escapeHTML(project.title)}"
                    loading="lazy"
                >
              `

            : `
                <div class="project-cover-placeholder">
                    ◈
                </div>
              `;


    const progress =
        clampProgress(
            project.progress
        );


    article.innerHTML = `

        <div class="project-cover">

            ${cover}

            <span class="project-publish-status">

                ${
                    project.published
                        ? "PUBLISHED"
                        : "DRAFT"
                }

            </span>

        </div>


        <div class="project-card-body">

            <span class="project-category">

                ${
                    escapeHTML(
                        project.category ||
                        "OTHER"
                    )
                }

            </span>


            <h3>

                ${
                    escapeHTML(
                        project.title
                    )
                }

            </h3>


            <p>

                ${
                    escapeHTML(
                        project.short_description ||
                        "No description provided."
                    )
                }

            </p>


            <div class="card-progress">

                <div class="card-progress-top">

                    <span>

                        ${
                            escapeHTML(
                                project.status ||
                                "Planning"
                            )
                        }

                    </span>

                    <strong>

                        ${progress}%

                    </strong>

                </div>


                <div class="card-progress-track">

                    <div
                        class="card-progress-fill"
                        style="width:${progress}%"
                    ></div>

                </div>

            </div>


            <div class="project-card-actions">

                <button
                    class="edit-project"
                    type="button"
                >
                    EDIT
                </button>


                <button
                    class="delete-project"
                    type="button"
                >
                    DELETE
                </button>

            </div>

        </div>

    `;


    const editButton =
        article.querySelector(
            ".edit-project"
        );


    const deleteButton =
        article.querySelector(
            ".delete-project"
        );


    if (editButton) {

        editButton.addEventListener(
            "click",
            function () {

                editProject(
                    project.id
                );

            }
        );

    }


    if (deleteButton) {

        deleteButton.addEventListener(
            "click",
            function () {

                deleteProject(
                    project.id
                );

            }
        );

    }


    return article;

}


/* =========================================================
   32 — RECENT PROJECTS
========================================================= */

function renderRecentProjects() {

    if (!recentProjectList) {
        return;
    }


    /*
        Remove previously rendered rows.
    */

    const existing =
        recentProjectList
            .querySelectorAll(
                ".recent-project-row"
            );


    existing.forEach(
        function (item) {

            item.remove();

        }
    );


    /*
        Empty database.
    */

    if (projects.length === 0) {

        if (emptyProjects) {

            emptyProjects.style.display =
                "flex";

        }


        return;

    }


    if (emptyProjects) {

        emptyProjects.style.display =
            "none";

    }


    projects
        .slice(0, 4)
        .forEach(
            function (project) {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "recent-project-row";


                row.style.padding =
                    "22px 28px";


                row.style.borderBottom =
                    "1px solid rgba(255,255,255,.07)";


                row.innerHTML = `

                    <span
                        style="
                            color:#e31367;
                            font-size:8px;
                            letter-spacing:3px;
                            font-weight:900;
                        "
                    >

                        ${
                            escapeHTML(
                                project.category ||
                                "OTHER"
                            )
                        }

                    </span>


                    <h4
                        style="
                            margin-top:8px;
                            font-size:16px;
                        "
                    >

                        ${
                            escapeHTML(
                                project.title
                            )
                        }

                    </h4>


                    <p
                        style="
                            margin-top:7px;
                            color:#666d76;
                            font-size:10px;
                        "
                    >

                        ${
                            clampProgress(
                                project.progress
                            )
                        }% DEVELOPMENT

                        ·

                        ${
                            project.published
                                ? "PUBLISHED"
                                : "DRAFT"
                        }

                    </p>

                `;


                recentProjectList
                    .appendChild(
                        row
                    );

            }
        );

}


/* =========================================================
   33 — EDIT PROJECT
========================================================= */

function editProject(id) {

    const project =
        projects.find(
            function (item) {

                return (
                    item.id === id
                );

            }
        );


    if (!project) {

        showNotification(
            "Project not found."
        );

        return;

    }


    editingProjectId =
        project.id;


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    if (modalTitle) {

        modalTitle.textContent =
            "EDIT PROJECT";

    }


    document.getElementById(
        "projectTitle"
    ).value =
        project.title || "";


    document.getElementById(
        "projectShortDescription"
    ).value =
        project.short_description || "";


    document.getElementById(
        "projectCategory"
    ).value =
        project.category ||
        "Other";


    document.getElementById(
        "projectStatus"
    ).value =
        project.status ||
        "Planning";


    const progress =
        clampProgress(
            project.progress
        );


    projectProgress.value =
        progress;


    progressValue.textContent =
        progress + "%";


    document.getElementById(
        "projectCover"
    ).value =
        project.cover_image || "";


    document.getElementById(
        "projectDescription"
    ).value =
        project.description || "";


    document.getElementById(
        "projectPublished"
    ).checked =
        project.published === true;


    projectModal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   34 — DELETE PROJECT FROM SUPABASE
========================================================= */

async function deleteProject(id) {

    const project =
        projects.find(
            function (item) {

                return (
                    item.id === id
                );

            }
        );


    if (!project) {

        showNotification(
            "Project not found."
        );

        return;

    }


    const confirmed =
    await showDeleteConfirmation(
        "DELETE PROJECT?",
        'Delete "' +
        project.title +
        '"?\n\nThis action cannot be undone.'
    );


    if (!confirmed) {
        return;
    }


    try {

        const {
            error
        } =
            await supabaseClient

                .from("projects")

                .delete()

                .eq(
                    "id",
                    id
                );


        if (error) {

            throw error;

        }


        showNotification(
            "Project deleted."
        );


        await loadProjects();

    }

    catch (error) {

        console.error(
            "Delete project error:",
            error
        );


        showNotification(
            getFriendlyDatabaseError(
                error
            )
        );

    }

}


/* =========================================================
   35 — CLAMP PROGRESS
========================================================= */

function clampProgress(value) {

    const number =
        Number(value);


    if (!Number.isFinite(number)) {

        return 0;

    }


    return Math.min(
        100,
        Math.max(
            0,
            Math.round(number)
        )
    );

}


/* =========================================================
   36 — NOTIFICATION
========================================================= */

let notificationTimer;


function showNotification(message) {

    if (
        !notification ||
        !notificationText
    ) {

        return;

    }


    notificationText.textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        notificationTimer
    );


    notificationTimer =
        setTimeout(
            function () {

                notification.classList.remove(
                    "show"
                );

            },

            3000
        );

}


/* =========================================================
   37 — HTML ESCAPING
========================================================= */

function escapeHTML(value) {

    return String(value || "")

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}


/* =========================================================
   38 — INITIALIZATION
========================================================= */

/*
    DO NOT call updateDashboard() directly anymore.

    First we ask Supabase whether the administrator
    already has an authenticated session.
*/

/* =========================================================
   39 — REPORTS SYSTEM
   SMART CLUB — ENSEM

   REPORT MANAGEMENT
   PDF UPLOAD
   PDF READER
   SUPABASE DATABASE
========================================================= */


/* =========================================================
   40 — REPORT ELEMENTS
========================================================= */

const reportsSection =
    document.getElementById("reportsSection");

const reportsGrid =
    document.getElementById("reportsGrid");

const reportsPageEmpty =
    document.getElementById("reportsPageEmpty");

const reportSearch =
    document.getElementById("reportSearch");

const reportFilters =
    document.querySelectorAll(".report-filter");


const reportModal =
    document.getElementById("reportModal");

const reportForm =
    document.getElementById("reportForm");

const reportModalClose =
    document.getElementById("reportModalClose");

const cancelReport =
    document.getElementById("cancelReport");

const reportModalTitle =
    document.getElementById("reportModalTitle");


const createReportButton =
    document.getElementById("createReportButton");

const reportsCreateButton =
    document.getElementById("reportsCreateButton");

const newReportNav =
    document.getElementById("newReportNav");

const emptyReportCreateButton =
    document.getElementById("emptyCreateReportButton");


const reportTitle =
    document.getElementById("reportTitle");

const reportType =
    document.getElementById("reportType");

const reportDate =
    document.getElementById("reportDate");

const reportDescription =
    document.getElementById("reportDescription");

const reportProject =
    document.getElementById("reportProject");

const reportPublished =
    document.getElementById("reportPublished");

const reportPdf =
    document.getElementById("reportPdf");

const reportCover =
    document.getElementById("reportCover");

const reportFileSelected =
    document.getElementById("reportFileSelected");


const totalReports =
    document.getElementById("totalReports");

const publishedReports =
    document.getElementById("publishedReports");

const draftReports =
    document.getElementById("draftReports");


const pdfViewerModal =
    document.getElementById("pdfViewerModal");

const pdfViewerClose =
    document.getElementById("pdfViewerClose");

const pdfViewerTitle =
    document.getElementById("pdfViewerTitle");

const pdfViewerFrame =
    document.getElementById("pdfViewerFrame");

const pdfViewerOpen =
    document.getElementById("pdfViewerOpen");


const viewAllReports =
    document.getElementById("viewAllReports");



/* =========================================================
   41 — REPORT STATE
========================================================= */

let reports = [];

let currentReportFilter =
    "all";

let editingReportId =
    null;

let isSavingReport =
    false;



/* =========================================================
   42 — REPORT FIELD HELPER
========================================================= */

function getReportField(...ids) {

    for (const id of ids) {

        const element =
            document.getElementById(id);

        if (element) {

            return element;

        }

    }


    return null;

}



/* =========================================================
   43 — REPORT SLUG

   We add a tiny unique ending because your Supabase
   report slug column is UNIQUE.
========================================================= */

function createUniqueReportSlug(title) {

    const base =
        createSlug(title) ||
        "report";


    return (
        base +
        "-" +
        Date.now().toString(36)
    );

}



/* =========================================================
   44 — CLEAN PDF FILE NAME
========================================================= */

function sanitizeFileName(name) {

    return String(
        name ||
        "report.pdf"
    )

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .replace(
            /[^a-zA-Z0-9._-]+/g,
            "-"
        )

        .replace(
            /-+/g,
            "-"
        )

        .replace(
            /^-|-$/g,
            ""
        );

}



/* =========================================================
   45 — FORMAT REPORT DATE
========================================================= */

function formatReportDate(value) {

    if (!value) {

        return "NO DATE";

    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return escapeHTML(value);

    }


    return date.toLocaleDateString(
        undefined,
        {

            year:
                "numeric",

            month:
                "short",

            day:
                "numeric"

        }
    );

}



/* =========================================================
   46 — GET RELATED PROJECT NAME
========================================================= */

function getRelatedProjectName(report) {


    if (
        report.project_title
    ) {

        return report.project_title;

    }


    const projectId =

        report.project_id ||

        report.related_project_id;


    if (!projectId) {

        return "";

    }


    const project =
        projects.find(
            function (item) {

                return (
                    String(item.id) ===
                    String(projectId)
                );

            }
        );


    return project
        ? project.title
        : "";

}



/* =========================================================
   47 — PROJECT OPTIONS INSIDE REPORT FORM
========================================================= */

function populateReportProjectOptions(
    selectedValue = ""
) {


    const select =

        reportProject ||

        getReportField(
            "reportRelatedProject",
            "relatedProject"
        );


    if (!select) {

        return;

    }


    const current =

        selectedValue ||

        select.value ||

        "";


    select.innerHTML =
        `
        <option value="">
            No related project
        </option>
        `;


    projects.forEach(
        function (project) {


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                project.id;


            option.textContent =
                project.title;


            select.appendChild(
                option
            );

        }
    );


    if (current) {

        select.value =
            current;

    }

}



/* =========================================================
   48 — LOAD REPORTS FROM SUPABASE
========================================================= */

async function loadReports() {


    try {


        const {
            data,
            error
        } =

            await supabaseClient

                .from("reports")

                .select("*")

                .order(
                    "created_at",
                    {
                        ascending:
                            false
                    }
                );


        if (error) {

            throw error;

        }


        reports =
            data || [];


        updateReportsDashboard();


    }

    catch (error) {


        console.error(
            "Load reports error:",
            error
        );


        reports = [];


        updateReportsDashboard();


        showNotification(
            "Unable to load reports."
        );

    }

}



/* =========================================================
   49 — UPDATE REPORT DASHBOARD
========================================================= */

function updateReportsDashboard() {


    updateReportStatistics();


    renderReports();


    renderRecentReports();

}



/* =========================================================
   50 — REPORT STATISTICS
========================================================= */

function updateReportStatistics() {


    const published =
        reports.filter(
            function (report) {

                return (
                    report.published ===
                    true
                );

            }
        ).length;


    const drafts =
        reports.length -
        published;


    if (totalReports) {

        totalReports.textContent =
            reports.length;

    }


    if (publishedReports) {

        publishedReports.textContent =
            published;

    }


    if (draftReports) {

        draftReports.textContent =
            drafts;

    }

}



/* =========================================================
   51 — REPORT FILTERS
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
                    button.dataset.filter ||
                    "all";


                renderReports();

            }
        );

    }
);



/* =========================================================
   52 — REPORT SEARCH
========================================================= */

if (reportSearch) {


    reportSearch.addEventListener(
        "input",
        renderReports
    );

}



/* =========================================================
   53 — FILTER REPORTS
========================================================= */

function getFilteredReports() {


    let filtered =
        [...reports];


    if (
        currentReportFilter ===
        "published"
    ) {


        filtered =
            filtered.filter(
                function (report) {

                    return (
                        report.published ===
                        true
                    );

                }
            );

    }


    if (
        currentReportFilter ===
        "draft"
    ) {


        filtered =
            filtered.filter(
                function (report) {

                    return (
                        report.published !==
                        true
                    );

                }
            );

    }


    const search =

        reportSearch

            ? reportSearch
                .value
                .trim()
                .toLowerCase()

            : "";


    if (search) {


        filtered =
            filtered.filter(
                function (report) {


                    const haystack = [

                        report.title,

                        report.type,

                        report.category,

                        report.description,

                        getRelatedProjectName(
                            report
                        )

                    ]

                        .filter(Boolean)

                        .join(" ")

                        .toLowerCase();


                    return (
                        haystack.includes(
                            search
                        )
                    );

                }
            );

    }


    return filtered;

}



/* =========================================================
   54 — RENDER REPORTS
========================================================= */

function renderReports() {


    if (!reportsGrid) {

        return;

    }


    const filtered =
        getFilteredReports();


    reportsGrid.innerHTML =
        "";


    if (
        reports.length === 0
    ) {


        if (reportsPageEmpty) {

            reportsPageEmpty
                .style.display =
                "block";

        }


        return;

    }


    if (reportsPageEmpty) {

        reportsPageEmpty
            .style.display =
            "none";

    }



    /* =====================================================
       NOTHING MATCHES SEARCH
    ===================================================== */

    if (
        filtered.length === 0
    ) {


        reportsGrid.innerHTML =
            `

            <div
                class="reports-page-empty"
                style="
                    display:block;
                    grid-column:1/-1;
                "
            >

                <span>
                    00
                </span>


                <h3>
                    NO MATCHING REPORTS
                </h3>


                <p>

                    No report matches
                    the current search
                    or filter.

                </p>

            </div>

            `;


        return;

    }



    /* =====================================================
       CREATE CARDS
    ===================================================== */

    filtered.forEach(
        function (report) {


            reportsGrid.appendChild(

                createReportCard(
                    report
                )

            );

        }
    );

}



/* =========================================================
   55 — CREATE REPORT CARD
========================================================= */

function createReportCard(report) {


    const article =
        document.createElement(
            "article"
        );


    article.className =
        "admin-report-card";


    const coverUrl =

        report.cover_image ||

        report.cover_url ||

        "";


    const pdfUrl =

        report.pdf_url ||

        report.file_url ||

        "";


    let type =

      report.type ||

      report.category ||

       "REPORT";

      if (type.toLowerCase() === "project") {
          type = "PROJECT REPORT";
        }
    const relatedProject =
        getRelatedProjectName(
            report
        );


    const cover =

        coverUrl

            ? `

                <img
                    src="${escapeHTML(
                        coverUrl
                    )}"
                    alt="${escapeHTML(
                        report.title
                    )}"
                    loading="lazy"
                >

              `

            : `

                <div
                    class="report-cover-placeholder"
                >

                    <span>
                        PDF
                    </span>

                </div>

              `;



    article.innerHTML =
        `

        <div class="report-cover">


            ${cover}


            <span
                class="
                    report-publish-status
                    ${
                        report.published
                            ? "published"
                            : ""
                    }
                "
            >

                ${
                    report.published
                        ? "PUBLISHED"
                        : "DRAFT"
                }

            </span>


            <span
                class="report-type-badge"
            >

                ${escapeHTML(type)}

            </span>


        </div>



        <div class="report-card-body">


            <div
                class="report-card-meta"
            >


                <span>

                    ${formatReportDate(

                        report.report_date ||

                        report.event_date ||

                        report.created_at

                    )}

                </span>


                <span>
                    SMART://REPORT
                </span>


            </div>



            <h3>

                ${escapeHTML(

                    report.title ||

                    "Untitled report"

                )}

            </h3>



            <p>

                ${escapeHTML(

                    report.description ||

                    report.short_description ||

                    "No description provided."

                )}

            </p>



            ${
                relatedProject

                    ? `

                    <div
                        class="report-related-project"
                    >

                        <span>
                            RELATED PROJECT
                        </span>

                        <strong>

                            ${escapeHTML(
                                relatedProject
                            )}

                        </strong>

                    </div>

                    `

                    : ""
            }



            <div
                class="report-card-actions"
            >


                <button
                    class="view-report"
                    type="button"
                    ${
                        pdfUrl
                            ? ""
                            : "disabled"
                    }
                >

                    READ PDF

                </button>


                <button
                    class="edit-report"
                    type="button"
                >

                    EDIT

                </button>


                <button
                    class="delete-report"
                    type="button"
                >

                    DELETE

                </button>


            </div>


        </div>

        `;



    /* =====================================================
       READ PDF
    ===================================================== */

    const viewButton =
        article.querySelector(
            ".view-report"
        );


    if (
        viewButton &&
        pdfUrl
    ) {


        viewButton.addEventListener(
            "click",
            function () {


                openPdfViewer(

                    pdfUrl,

                    report.title

                );

            }
        );

    }



    /* =====================================================
       EDIT
    ===================================================== */

    const editButton =
        article.querySelector(
            ".edit-report"
        );


    if (editButton) {


        editButton.addEventListener(
            "click",
            function () {


                editReport(
                    report.id
                );

            }
        );

    }



    /* =====================================================
       DELETE
    ===================================================== */

    const deleteButton =
        article.querySelector(
            ".delete-report"
        );


    if (deleteButton) {


        deleteButton.addEventListener(
            "click",
            function () {


                deleteReport(
                    report.id
                );

            }
        );

    }


    return article;

}



/* =========================================================
   56 — RECENT REPORTS
========================================================= */

function renderRecentReports() {


    const container =
        document.getElementById(
            "recentReportList"
        );


    const empty =
        document.getElementById(
            "emptyReports"
        );


    if (!container) {

        return;

    }


    container

        .querySelectorAll(
            ".recent-report-row"
        )

        .forEach(
            function (element) {

                element.remove();

            }
        );



    if (
        reports.length === 0
    ) {


        if (empty) {

            empty.style.display =
                "block";

        }


        return;

    }


    if (empty) {

        empty.style.display =
            "none";

    }



    reports

        .slice(0, 4)

        .forEach(
            function (
                report,
                index
            ) {


                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "recent-report-row";


                row.innerHTML =
                    `

                    <span
                        class="recent-report-index"
                    >

                        ${String(
                            index + 1
                        ).padStart(
                            2,
                            "0"
                        )}

                    </span>


                    <div
                        class="recent-report-info"
                    >

                        <strong>

                            ${escapeHTML(
                                report.title
                            )}

                        </strong>


                        <span>

                            ${escapeHTML(

                                report.type ||

                                report.category ||

                                "REPORT"

                            )}

                            ·

                            ${
                                report.published

                                    ? "PUBLISHED"

                                    : "DRAFT"
                            }

                        </span>


                    </div>


                    <button
                        type="button"
                    >

                        OPEN →

                    </button>

                    `;


                const button =
                    row.querySelector(
                        "button"
                    );


                if (button) {


                    button.addEventListener(
                        "click",
                        function () {


                            showDashboardSection(
                                "reports"
                            );

                        }
                    );

                }


                container.appendChild(
                    row
                );

            }
        );

}



/* =========================================================
   57 — OPEN NEW REPORT
========================================================= */

function openNewReportModal() {


    editingReportId =
        null;


    if (reportForm) {

        reportForm.reset();

    }


    if (reportModalTitle) {

        reportModalTitle.textContent =
            "NEW REPORT";

    }


    populateReportProjectOptions();

    if (reportPublished) {

    reportPublished.checked = true;

}


    if (reportFileSelected) {


        reportFileSelected.textContent =
            "";


        reportFileSelected.style.display =
            "none";

    }


    if (reportModal) {


        reportModal.classList.add(
            "open"
        );


        document.body.style.overflow =
            "hidden";

    }

}



/* =========================================================
   58 — REPORT OPEN BUTTONS
========================================================= */

[
    createReportButton,
    reportsCreateButton,
    newReportNav,
    emptyReportCreateButton

].forEach(
    function (button) {


        if (!button) {

            return;

        }


        button.addEventListener(
            "click",
            openNewReportModal
        );

    }
);



/* =========================================================
   59 — CLOSE REPORT MODAL
========================================================= */

function closeReportModal() {


    if (reportModal) {


        reportModal.classList.remove(
            "open"
        );

    }


    document.body.style.overflow =
        "";

}



if (reportModalClose) {


    reportModalClose.addEventListener(
        "click",
        closeReportModal
    );

}



if (cancelReport) {


    cancelReport.addEventListener(
        "click",
        closeReportModal
    );

}



if (reportModal) {


    reportModal.addEventListener(
        "click",
        function (event) {


            if (
                event.target ===
                reportModal
            ) {


                closeReportModal();

            }

        }
    );

}



/* =========================================================
   60 — PDF FILE NAME DISPLAY
========================================================= */

if (reportPdf) {


    reportPdf.addEventListener(
        "change",
        function () {


            const file =

                reportPdf.files &&

                reportPdf.files[0];


            if (!reportFileSelected) {

                return;

            }


            if (!file) {


                reportFileSelected.textContent =
                    "";


                reportFileSelected.style.display =
                    "none";


                return;

            }


            reportFileSelected.textContent =
                file.name;


            reportFileSelected.style.display =
                "block";

        }
    );

}



/* =========================================================
   61 — UPLOAD PDF TO SUPABASE STORAGE
   SMART CLUB — FIXED VERSION
========================================================= */

async function uploadReportPdf(file) {

    if (!file) {
        return {
            publicUrl: "",
            storagePath: ""
        };
    }


    /* =====================================================
       CHECK ADMIN SESSION
    ===================================================== */

    if (!currentUser || !currentUser.id) {

        throw new Error(
            "Your admin session has expired. Please log in again."
        );

    }


    /* =====================================================
       PDF VALIDATION

       IMPORTANT:
       On some phones file.type can be empty even for a
       perfectly valid PDF, so we also check the extension.
    ===================================================== */

    const originalName =
        String(file.name || "").trim();

    const lowerName =
        originalName.toLowerCase();

    const looksLikePdf =
        file.type === "application/pdf" ||
        lowerName.endsWith(".pdf");


    if (!looksLikePdf) {

        throw new Error(
            "Please select a PDF file."
        );

    }


    /* =====================================================
       FILE SIZE

       50 MB maximum from the website side.
       Supabase may have its own bucket limit too.
    ===================================================== */

    const MAX_PDF_SIZE =
        50 * 1024 * 1024;


    if (file.size > MAX_PDF_SIZE) {

        throw new Error(
            "The PDF is too large. Maximum size is 50 MB."
        );

    }


    if (file.size === 0) {

        throw new Error(
            "This PDF appears to be empty."
        );

    }


    /* =====================================================
       SAFE FILE NAME
    ===================================================== */

    let safeName =
        sanitizeFileName(
            originalName || "report.pdf"
        );


    if (
        !safeName
            .toLowerCase()
            .endsWith(".pdf")
    ) {

        safeName += ".pdf";

    }


    /* =====================================================
       UNIQUE STORAGE PATH

       Example:

       user-id/1722345678-abc123-report.pdf
    ===================================================== */

    const uniquePart =
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .slice(2, 10);


    const storagePath =
        currentUser.id +
        "/" +
        uniquePart +
        "-" +
        safeName;


    console.log(
        "SMART ADMIN // Uploading PDF:",
        {
            name: originalName,
            size: file.size,
            type: file.type,
            path: storagePath
        }
    );


    /* =====================================================
       UPLOAD PDF
    ===================================================== */

    const {
        data: uploadData,
        error: uploadError
    } =
        await supabaseClient
            .storage
            .from("reports")
            .upload(
                storagePath,
                file,
                {
                    cacheControl: "3600",

                    /*
                       Never overwrite another report.
                    */
                    upsert: false,

                    /*
                       Force correct PDF content type.
                    */
                    contentType:
                        "application/pdf"
                }
            );


    if (uploadError) {

        console.error(
            "SMART ADMIN // PDF upload error:",
            uploadError
        );


        const message =
            String(
                uploadError.message || ""
            ).toLowerCase();


        if (
            message.includes("bucket") &&
            message.includes("not found")
        ) {

            throw new Error(
                'The Supabase Storage bucket "reports" does not exist.'
            );

        }


        if (
            message.includes("row-level security") ||
            message.includes("unauthorized") ||
            message.includes("permission")
        ) {

            throw new Error(
                "Supabase blocked the PDF upload. Check the Storage policies for the reports bucket."
            );

        }


        if (
            message.includes("maximum") ||
            message.includes("size") ||
            message.includes("too large")
        ) {

            throw new Error(
                "The PDF is larger than the size allowed by Supabase Storage."
            );

        }


        throw uploadError;

    }


    /* =====================================================
       CONFIRM PATH RETURNED BY SUPABASE
    ===================================================== */

    const uploadedPath =
        uploadData &&
        uploadData.path

            ? uploadData.path

            : storagePath;


    /* =====================================================
       GET PUBLIC URL
    ===================================================== */

    const {
        data: publicUrlData
    } =
        supabaseClient
            .storage
            .from("reports")
            .getPublicUrl(
                uploadedPath
            );


    const publicUrl =
        publicUrlData &&
        publicUrlData.publicUrl

            ? publicUrlData.publicUrl

            : "";


    if (!publicUrl) {

        /*
           The upload succeeded, but we could not construct
           the URL used by the website.
        */

        console.error(
            "SMART ADMIN // No public PDF URL generated."
        );


        /*
           Remove the uploaded file so we don't leave
           an unused PDF in Storage.
        */

        await supabaseClient
            .storage
            .from("reports")
            .remove([
                uploadedPath
            ]);


        throw new Error(
            "The PDF uploaded, but its public URL could not be generated."
        );

    }


    console.log(
        "SMART ADMIN // PDF uploaded successfully:",
        publicUrl
    );


    return {

        publicUrl:
            publicUrl,

        storagePath:
            uploadedPath

    };

}
/* =========================================================
   62 — COLLECT REPORT FORM
========================================================= */

function collectReportFormValues() {


    const titleElement =

        reportTitle ||

        getReportField(
            "reportName"
        );


    const typeElement =

        reportType ||

        getReportField(
            "reportCategory"
        );


    const dateElement =

        reportDate ||

        getReportField(
            "reportEventDate"
        );


    const descriptionElement =

        reportDescription ||

        getReportField(
            "reportShortDescription"
        );


    const projectElement =

        reportProject ||

        getReportField(
            "reportRelatedProject",
            "relatedProject"
        );


    const publishedElement =

        reportPublished ||

        getReportField(
            "reportPublic"
        );


    const coverElement =

        reportCover ||

        getReportField(
            "reportCoverUrl"
        );



    return {


        title:

            titleElement

                ? titleElement
                    .value
                    .trim()

                : "",



        type:

            typeElement

                ? typeElement.value

                : "Other",



        report_date:

            dateElement &&
            dateElement.value

                ? dateElement.value

                : null,



        description:

            descriptionElement

                ? descriptionElement
                    .value
                    .trim()

                : "",



        project_id:

            projectElement &&
            projectElement.value

                ? projectElement.value

                : null,



        cover_image:

            coverElement &&
            coverElement.value

                ? coverElement
                    .value
                    .trim()

                : null,



        published:

            publishedElement

                ? publishedElement.checked

                : false

    };

}



/* =========================================================
   63 — SAVE REPORT
   SMART CLUB — FINAL MOBILE-SAFE VERSION
========================================================= */

if (reportForm) {

    reportForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* =================================================
               PREVENT DOUBLE SUBMISSION
            ================================================= */

            if (isSavingReport) {
                return;
            }


            /* =================================================
               CHECK LOGIN
            ================================================= */

            if (!currentUser) {

                showNotification(
                    "Your session has expired. Please log in again."
                );

                return;
            }


            /* =================================================
               COLLECT FORM DATA
            ================================================= */

            const formData =
                collectReportFormValues();


            /* =================================================
               TITLE REQUIRED
            ================================================= */

            if (
                !formData ||
                !formData.title ||
                !String(formData.title).trim()
            ) {

                showNotification(
                    "Report title is required."
                );

                return;
            }


            /* =================================================
               GET PDF FILE

               IMPORTANT FOR MOBILE:
               We check files.length explicitly.
            ================================================= */

            let file = null;

            if (
                reportPdf &&
                reportPdf.files &&
                reportPdf.files.length > 0
            ) {

                file =
                    reportPdf.files[0];

            }


            /* =================================================
               EXISTING REPORT WHEN EDITING
            ================================================= */

            const existing =

                editingReportId

                    ? reports.find(
                        function (item) {

                            return (
                                String(item.id) ===
                                String(editingReportId)
                            );

                        }
                    )

                    : null;


            /* =================================================
               NEW REPORT MUST HAVE PDF
            ================================================= */

            if (
                !editingReportId &&
                !file
            ) {

                showNotification(
                    "Please select the report PDF."
                );

                return;
            }


            /* =================================================
               VALIDATE PDF BEFORE UPLOAD

               Some phones don't correctly provide file.type,
               so we ALSO check the .pdf extension.
            ================================================= */

            if (file) {

                const fileName =
                    String(
                        file.name || ""
                    ).trim();


                const lowerFileName =
                    fileName.toLowerCase();


                const fileType =
                    String(
                        file.type || ""
                    ).toLowerCase();


                const isPdf =

                    fileType ===
                        "application/pdf" ||

                    lowerFileName.endsWith(
                        ".pdf"
                    );


                if (!isPdf) {

                    showNotification(
                        "Please select a valid PDF file."
                    );

                    return;
                }


                /* =============================================
                   MAXIMUM FILE SIZE — 50 MB
                ============================================= */

                const MAX_PDF_SIZE =
                    50 * 1024 * 1024;


                if (
                    file.size >
                    MAX_PDF_SIZE
                ) {

                    showNotification(
                        "The PDF is too large. Maximum size is 50 MB."
                    );

                    return;
                }


                /* =============================================
                   EMPTY / INVALID FILE
                ============================================= */

                if (
                    !file.size ||
                    file.size <= 0
                ) {

                    showNotification(
                        "The selected PDF appears to be empty."
                    );

                    return;
                }

            }


            /* =================================================
               START SAVING
            ================================================= */

            isSavingReport =
                true;


            const saveButton =

                reportForm.querySelector(
                    ".save-report-button, button[type='submit']"
                );


            const oldButtonHTML =

                saveButton

                    ? saveButton.innerHTML

                    : "";


            if (saveButton) {

                saveButton.disabled =
                    true;


                saveButton.innerHTML =
                    file
                        ? "UPLOADING PDF..."
                        : "SAVING...";

            }


            /*
                Used to remove a newly uploaded PDF if
                the database operation fails afterwards.
            */

            let newStoragePath =
                "";


            try {


                /* =================================================
                   CURRENT PDF INFORMATION
                ================================================= */

                let pdfUrl =

                    existing

                        ? (
                            existing.pdf_url ||
                            existing.file_url ||
                            ""
                        )

                        : "";


                let pdfPath =

                    existing

                        ? (
                            existing.pdf_path ||
                            existing.storage_path ||
                            ""
                        )

                        : "";


                /* =================================================
                   UPLOAD NEW PDF
                ================================================= */

                if (file) {


                    if (saveButton) {

                        saveButton.innerHTML =
                            "UPLOADING PDF...";

                    }


                    const upload =
                        await uploadReportPdf(
                            file
                        );


                    /* =============================================
                       MAKE SURE UPLOAD RETURNED DATA
                    ============================================= */

                    if (!upload) {

                        throw new Error(
                            "PDF upload failed. No upload information was returned."
                        );

                    }


                    if (
                        !upload.publicUrl
                    ) {

                        throw new Error(
                            "PDF uploaded but its URL could not be created."
                        );

                    }


                    if (
                        !upload.storagePath
                    ) {

                        throw new Error(
                            "PDF uploaded but its storage path is missing."
                        );

                    }


                    pdfUrl =
                        upload.publicUrl;


                    pdfPath =
                        upload.storagePath;


                    newStoragePath =
                        upload.storagePath;


                    if (saveButton) {

                        saveButton.innerHTML =
                            "SAVING REPORT...";

                    }

                }


                /* =================================================
                   FINAL PDF CHECK
                ================================================= */

                if (!pdfUrl) {

                    throw new Error(
                        "The report does not have a PDF."
                    );

                }


                /* =================================================
                   DATABASE OBJECT
                ================================================= */

                const reportData = {

                    ...formData,


                    pdf_url:
                        pdfUrl,


                    pdf_path:
                        pdfPath,


                    updated_at:
                        new Date()
                            .toISOString()

                };


                /* =================================================
                   EDIT EXISTING REPORT
                ================================================= */

                if (editingReportId) {


                    const {
                        error
                    } =

                        await supabaseClient

                            .from("reports")

                            .update(
                                reportData
                            )

                            .eq(
                                "id",
                                editingReportId
                            );


                    if (error) {

                        console.error(
                            "Report update database error:",
                            error
                        );

                        throw error;

                    }


                    /* =============================================
                       DELETE OLD PDF IF IT WAS REPLACED
                    ============================================= */

                    const oldPdfPath =

                        existing

                            ? (
                                existing.pdf_path ||
                                existing.storage_path ||
                                ""
                            )

                            : "";


                    if (
                        file &&
                        oldPdfPath &&
                        oldPdfPath !== pdfPath
                    ) {

                        try {

                            const {
                                error:
                                    oldFileDeleteError
                            } =

                                await supabaseClient
                                    .storage

                                    .from("reports")

                                    .remove(
                                        [
                                            oldPdfPath
                                        ]
                                    );


                            if (
                                oldFileDeleteError
                            ) {

                                console.warn(
                                    "Old PDF cleanup failed:",
                                    oldFileDeleteError
                                );

                            }

                        }

                        catch (
                            cleanupError
                        ) {

                            /*
                                Don't fail the whole report update
                                just because the OLD PDF could not
                                be deleted.
                            */

                            console.warn(
                                "Old PDF cleanup error:",
                                cleanupError
                            );

                        }

                    }


                    showNotification(
                        "Report updated successfully."
                    );

                }


                /* =================================================
                   CREATE NEW REPORT
                ================================================= */

                else {


                    const insertData = {

                        ...reportData,


                        slug:
                            createUniqueReportSlug(
                                formData.title
                            ),


                        created_by:
                            currentUser.id

                    };


                    const {
                        error
                    } =

                        await supabaseClient

                            .from("reports")

                            .insert(
                                insertData
                            );


                    if (error) {

                        console.error(
                            "Report insert database error:",
                            error
                        );

                        throw error;

                    }


                    showNotification(
                        "Report created successfully."
                    );

                }


                /* =================================================
                   SUCCESS — RESET + CLOSE
                ================================================= */

                closeReportModal();


                /*
                    Reload reports from Supabase so the
                    dashboard immediately shows the new report.
                */

                await loadReports();

            }


            catch (error) {


                console.error(
                    "Save report error:",
                    error
                );


                /* =================================================
                   REMOVE NEW PDF IF DATABASE SAVE FAILED
                ================================================= */

                if (newStoragePath) {

                    try {

                        const {
                            error:
                                cleanupError
                        } =

                            await supabaseClient
                                .storage

                                .from("reports")

                                .remove(
                                    [
                                        newStoragePath
                                    ]
                                );


                        if (cleanupError) {

                            console.warn(
                                "Failed to clean uploaded PDF:",
                                cleanupError
                            );

                        }

                    }

                    catch (
                        cleanupException
                    ) {

                        console.warn(
                            "PDF cleanup exception:",
                            cleanupException
                        );

                    }

                }


                /* =================================================
                   SHOW USEFUL ERROR
                ================================================= */

                let message =
                    "Unable to save report.";


                if (
                    typeof getFriendlyReportError ===
                    "function"
                ) {

                    message =
                        getFriendlyReportError(
                            error
                        );

                }

                else if (
                    error &&
                    error.message
                ) {

                    message =
                        error.message;

                }


                showNotification(
                    message
                );

            }


            finally {


                /* =================================================
                   UNLOCK FORM
                ================================================= */

                isSavingReport =
                    false;


                if (saveButton) {

                    saveButton.disabled =
                        false;


                    saveButton.innerHTML =

                        oldButtonHTML ||

                        "SAVE REPORT";

                }

            }

        }
    );

}



/* =========================================================
   64 — EDIT REPORT
========================================================= */

function editReport(id) {


    const report =
        reports.find(
            function (item) {

                return (
                    String(item.id) ===
                    String(id)
                );

            }
        );


    if (!report) {


        showNotification(
            "Report not found."
        );


        return;

    }


    editingReportId =
        report.id;



    if (reportModalTitle) {


        reportModalTitle.textContent =
            "EDIT REPORT";

    }



    /* =====================================================
       TITLE
    ===================================================== */

    const titleElement =

        reportTitle ||

        getReportField(
            "reportName"
        );


    if (titleElement) {


        titleElement.value =
            report.title || "";

    }



    /* =====================================================
       TYPE
    ===================================================== */

    const typeElement =

        reportType ||

        getReportField(
            "reportCategory"
        );


    if (typeElement) {


        typeElement.value =

            report.type ||

            report.category ||

            typeElement.value;

    }



    /* =====================================================
       DATE
    ===================================================== */

    const dateElement =

        reportDate ||

        getReportField(
            "reportEventDate"
        );


    if (dateElement) {


        dateElement.value =

            report.report_date

                ? String(
                    report.report_date
                ).slice(
                    0,
                    10
                )

                : "";

    }



    /* =====================================================
       DESCRIPTION
    ===================================================== */

    const descriptionElement =

        reportDescription ||

        getReportField(
            "reportShortDescription"
        );


    if (descriptionElement) {


        descriptionElement.value =

            report.description ||

            report.short_description ||

            "";

    }



    /* =====================================================
       PROJECT
    ===================================================== */

    populateReportProjectOptions(

        report.project_id ||

        report.related_project_id ||

        ""

    );



    /* =====================================================
       COVER
    ===================================================== */

    const coverElement =

        reportCover ||

        getReportField(
            "reportCoverUrl"
        );


    if (coverElement) {


        coverElement.value =

            report.cover_image ||

            report.cover_url ||

            "";

    }



    /* =====================================================
       PUBLISHED
    ===================================================== */

    const publishedElement =

        reportPublished ||

        getReportField(
            "reportPublic"
        );


    if (publishedElement) {


        publishedElement.checked =
            report.published ===
            true;

    }



    /* =====================================================
       PDF INPUT

       Browsers do NOT allow us to programmatically fill a
       file input for security reasons.

       When editing, the administrator only selects a PDF
       if they want to replace the existing one.
    ===================================================== */

    if (reportPdf) {

        reportPdf.value =
            "";

    }


    if (reportFileSelected) {

        const existingPdf =

            report.pdf_url ||

            report.file_url ||

            "";


        reportFileSelected.textContent =

            existingPdf

                ? "CURRENT PDF SAVED — SELECT A NEW PDF TO REPLACE IT"

                : "NO PDF SELECTED";

    }



    /* =====================================================
       OPEN MODAL
    ===================================================== */

    if (reportModal) {

        reportModal.classList.add(
            "open"
        );

    }


    document.body.style.overflow =
        "hidden";

}
/* =========================================================
   65 — DELETE REPORT
========================================================= */

async function deleteReport(id) {

    const report =
        reports.find(
            function (item) {

                return (
                    String(item.id) ===
                    String(id)
                );

            }
        );


    if (!report) {

        showNotification(
            "Report not found."
        );

        return;

    }


    const confirmed =
    await showDeleteConfirmation(
        "DELETE REPORT?",
        'Delete "' +
        (report.title || "this report") +
        '"?\n\nThe report and its PDF will be permanently removed.'
    );


    if (!confirmed) {

        return;

    }


    try {

        /* =================================================
           DELETE DATABASE ENTRY FIRST
        ================================================= */

        const {
            error
        } =
            await supabaseClient

                .from("reports")

                .delete()

                .eq(
                    "id",
                    id
                );


        if (error) {

            throw error;

        }


        /* =================================================
           DELETE PDF FROM STORAGE
        ================================================= */

        const storagePath =

            report.pdf_path ||

            report.storage_path ||

            "";


        if (storagePath) {

            try {

                const {
                    error: storageError
                } =
                    await supabaseClient

                        .storage

                        .from("reports")

                        .remove(
                            [
                                storagePath
                            ]
                        );


                if (storageError) {

                    console.warn(
                        "PDF cleanup error:",
                        storageError
                    );

                }

            }

            catch (storageException) {

                console.warn(
                    "PDF cleanup exception:",
                    storageException
                );

            }

        }


        showNotification(
            "Report deleted."
        );


        await loadReports();

    }

    catch (error) {

        console.error(
            "Delete report error:",
            error
        );


        const message =

            typeof getFriendlyReportError === "function"

                ? getFriendlyReportError(error)

                : (

                    error &&
                    error.message

                        ? error.message

                        : "Unable to delete report."

                );


        showNotification(
            message
        );

    }

}
/* =========================================================
   66 — GET PDF URL

   Supports:
   - existing public pdf_url
   - Storage pdf_path
   - private Storage buckets using signed URLs
========================================================= */

async function getReportPdfUrl(report) {

    if (!report) {

        throw new Error(
            "Report not found."
        );

    }


    /* =====================================================
       EXISTING PUBLIC URL

       Your current database already stores pdf_url.
       Keep using it when available.
    ===================================================== */

    const existingUrl =

        report.pdf_url ||

        report.file_url ||

        "";


    if (existingUrl) {

        return existingUrl;

    }


    /* =====================================================
       STORAGE PATH FALLBACK
    ===================================================== */

    const storagePath =

        report.pdf_path ||

        report.storage_path ||

        "";


    if (!storagePath) {

        throw new Error(
            "No PDF attached to this report."
        );

    }


    /* =====================================================
       TRY SIGNED URL

       This also works if you later make the reports
       bucket private.
    ===================================================== */

    const {
        data,
        error
    } =
        await supabaseClient

            .storage

            .from("reports")

            .createSignedUrl(
                storagePath,
                60 * 60
            );


    if (
        !error &&
        data &&
        data.signedUrl
    ) {

        return data.signedUrl;

    }


    /* =====================================================
       PUBLIC URL FALLBACK
    ===================================================== */

    const {
        data: publicData
    } =
        supabaseClient

            .storage

            .from("reports")

            .getPublicUrl(
                storagePath
            );


    if (
        publicData &&
        publicData.publicUrl
    ) {

        return publicData.publicUrl;

    }


    throw (
        error ||
        new Error(
            "Unable to generate the PDF URL."
        )
    );

}



/* =========================================================
   67 — OPEN PDF INSIDE WEBSITE
========================================================= */

function openPdfViewer(
    url,
    title
) {

    if (!url) {

        showNotification(
            "No PDF attached to this report."
        );

        return;

    }


    /* =====================================================
       TITLE
    ===================================================== */

    if (pdfViewerTitle) {

        pdfViewerTitle.textContent =
            title ||
            "REPORT";

    }


    /* =====================================================
       OPEN EXTERNAL BUTTON
    ===================================================== */

    if (pdfViewerOpen) {

        pdfViewerOpen.href =
            url;


        pdfViewerOpen.target =
            "_blank";


        pdfViewerOpen.rel =
            "noopener noreferrer";

    }


    /* =====================================================
       PDF VIEWER
    ===================================================== */

    if (pdfViewerFrame) {

        /*
            Supports:

            <iframe id="pdfViewerFrame">

            OR

            <div id="pdfViewerFrame"></div>
        */

        if (
            pdfViewerFrame.tagName ===
            "IFRAME"
        ) {

            pdfViewerFrame.src =
                url;

        }

        else {

            pdfViewerFrame.innerHTML = `

                <iframe
                    src="${escapeHTML(url)}"
                    title="${escapeHTML(
                        title ||
                        "Smart Club Report"
                    )}"
                    loading="eager"
                    style="
                        width:100%;
                        height:100%;
                        min-height:70vh;
                        border:0;
                    "
                ></iframe>

            `;

        }

    }


    /* =====================================================
       OPEN VIEWER MODAL
    ===================================================== */

    if (pdfViewerModal) {

        pdfViewerModal.classList.add(
            "open"
        );


        document.body.style.overflow =
            "hidden";

    }

    else {

        /*
            Fallback if the PDF viewer modal does
            not exist in the HTML.
        */

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }

}



/* =========================================================
   68 — OPEN REPORT PDF

   Use this when clicking VIEW PDF.
========================================================= */

async function openReportPdf(report) {

    if (!report) {

        showNotification(
            "Report not found."
        );

        return;

    }


    try {

        const url =
            await getReportPdfUrl(
                report
            );


        openPdfViewer(
            url,
            report.title ||
            "REPORT"
        );

    }

    catch (error) {

        console.error(
            "Open PDF error:",
            error
        );


        showNotification(

            error &&
            error.message

                ? error.message

                : "Unable to open this PDF."

        );

    }

}



/* =========================================================
   69 — CLOSE PDF VIEWER
========================================================= */

function closePdfViewer() {

    if (!pdfViewerModal) {
        return;
    }


    pdfViewerModal.classList.remove(
        "open"
    );


    /* =====================================================
       REMOVE PDF FROM VIEWER
    ===================================================== */

    if (pdfViewerFrame) {

        if (
            pdfViewerFrame.tagName ===
            "IFRAME"
        ) {

            pdfViewerFrame.src =
                "about:blank";

        }

        else {

            pdfViewerFrame.innerHTML =
                "";

        }

    }


    document.body.style.overflow =
        "";

}



/* =========================================================
   70 — PDF VIEWER CLOSE BUTTON
========================================================= */

if (pdfViewerClose) {

    pdfViewerClose.addEventListener(
        "click",
        closePdfViewer
    );

}



/* =========================================================
   71 — CLOSE PDF VIEWER BY CLICKING BACKGROUND
========================================================= */

if (pdfViewerModal) {

    pdfViewerModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                pdfViewerModal
            ) {

                closePdfViewer();

            }

        }
    );

}



/* =========================================================
   72 — FRIENDLY REPORT ERRORS
========================================================= */

function getFriendlyReportError(error) {

    if (!error) {

        return (
            "Unable to save report."
        );

    }


    const message =
        String(
            error.message ||
            ""
        );


    const lower =
        message.toLowerCase();


    /* =====================================================
       UNIQUE VALUE
    ===================================================== */

    if (
        error.code ===
        "23505"
    ) {

        return (
            "A report with this slug already exists."
        );

    }


    /* =====================================================
       SECURITY / RLS
    ===================================================== */

    if (
        error.code === "42501" ||

        lower.includes(
            "row-level security"
        ) ||

        lower.includes(
            "unauthorized"
        ) ||

        lower.includes(
            "permission"
        )
    ) {

        return (
            "Supabase security blocked this action. Check the reports table and Storage policies."
        );

    }


    /* =====================================================
       STORAGE BUCKET
    ===================================================== */

    if (
        lower.includes(
            "bucket not found"
        ) ||

        (
            lower.includes("bucket") &&
            lower.includes("does not exist")
        )
    ) {

        return (
            'The Supabase Storage bucket "reports" could not be found.'
        );

    }


    /* =====================================================
       FILE TOO LARGE
    ===================================================== */

    if (
        lower.includes(
            "too large"
        ) ||

        lower.includes(
            "maximum"
        ) ||

        lower.includes(
            "file size"
        )
    ) {

        return (
            "The PDF is larger than the size allowed by Supabase Storage."
        );

    }


    /* =====================================================
       DATABASE COLUMN / SCHEMA
    ===================================================== */

    if (
        lower.includes(
            "column"
        ) ||

        lower.includes(
            "schema cache"
        )
    ) {

        return (
            "The reports table columns do not match admin.js. Check the Supabase reports table."
        );

    }


    /* =====================================================
       NETWORK
    ===================================================== */

    if (
        lower.includes(
            "failed to fetch"
        ) ||

        lower.includes(
            "network"
        )
    ) {

        return (
            "Network error. Check your internet connection and try again."
        );

    }


    return (
        message ||
        "Unable to save report."
    );

}



/* =========================================================
   73 — EXTEND DASHBOARD NAVIGATION

   Existing sections:
   - overview
   - projects

   Added:
   - reports
========================================================= */

const originalShowDashboardSection =
    showDashboardSection;


showDashboardSection =
    function (sectionName) {


        /* =================================================
           KEEP ORIGINAL BEHAVIOR
        ================================================= */

        if (
            sectionName !==
            "reports"
        ) {

            originalShowDashboardSection(
                sectionName
            );


            return;

        }


        /* =================================================
           REMOVE CURRENT SECTION
        ================================================= */

        dashboardSections.forEach(
            function (section) {

                section.classList.remove(
                    "active"
                );

            }
        );


        navItems.forEach(
            function (item) {

                item.classList.remove(
                    "active"
                );

            }
        );


        /* =================================================
           SHOW REPORTS
        ================================================= */

        if (reportsSection) {

            reportsSection.classList.add(
                "active"
            );

        }


        /* =================================================
           DASHBOARD TITLE
        ================================================= */

        if (dashboardTitle) {

            dashboardTitle.textContent =
                "REPORTS";

        }


        /* =================================================
           ACTIVE SIDEBAR BUTTON
        ================================================= */

        const reportsNav =
            document.querySelector(
                '[data-section="reports"]'
            );


        if (reportsNav) {

            reportsNav.classList.add(
                "active"
            );

        }


        /* =================================================
           RENDER
        ================================================= */

        renderReports();

    };



/* =========================================================
   74 — VIEW ALL REPORTS
========================================================= */

if (viewAllReports) {

    viewAllReports.addEventListener(
        "click",
        function () {

            showDashboardSection(
                "reports"
            );

        }
    );

}

/* =========================================================
   75' — CUSTOM DELETE CONFIRMATION
========================================================= */

const confirmOverlay =
    document.getElementById(
        "confirmOverlay"
    );

const confirmTitle =
    document.getElementById(
        "confirmTitle"
    );

const confirmDescription =
    document.getElementById(
        "confirmDescription"
    );

const confirmDelete =
    document.getElementById(
        "confirmDelete"
    );

const confirmCancel =
    document.getElementById(
        "confirmCancel"
    );


let confirmResolve = null;


/* =========================================================
   OPEN CONFIRM MODAL
========================================================= */

function showDeleteConfirmation(
    title,
    description
) {

    return new Promise(function (resolve) {

        confirmResolve = resolve;


        if (confirmTitle) {

            confirmTitle.textContent =
                title ||
                "DELETE";

        }


        if (confirmDescription) {

            confirmDescription.innerHTML =
                String(description || "")
                    .replace(/\n/g, "<br>");

        }


        if (confirmOverlay) {

            confirmOverlay.classList.add(
                "open"
            );

        }


        document.body.style.overflow =
            "hidden";

    });

}


/* =========================================================
   CLOSE CONFIRM MODAL
========================================================= */

function closeDeleteConfirmation(
    result
) {

    if (confirmOverlay) {

        confirmOverlay.classList.remove(
            "open"
        );

    }


    document.body.style.overflow =
        "";


    if (confirmResolve) {

        confirmResolve(result);

        confirmResolve = null;

    }

}


/* =========================================================
   DELETE BUTTON
========================================================= */

if (confirmDelete) {

    confirmDelete.addEventListener(
        "click",
        function () {

            closeDeleteConfirmation(
                true
            );

        }
    );

}


/* =========================================================
   CANCEL BUTTON
========================================================= */

if (confirmCancel) {

    confirmCancel.addEventListener(
        "click",
        function () {

            closeDeleteConfirmation(
                false
            );

        }
    );

}


/* =========================================================
   CLICK OUTSIDE
========================================================= */

if (confirmOverlay) {

    confirmOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                confirmOverlay
            ) {

                closeDeleteConfirmation(
                    false
                );

            }

        }
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            confirmOverlay &&
            confirmOverlay.classList.contains(
                "open"
            )
        ) {

            closeDeleteConfirmation(
                false
            );

        }

    }
);

/* =========================================================
   75 — ESCAPE KEY

   ESC closes:
   - report modal
   - PDF viewer
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        /* =================================================
           REPORT MODAL
        ================================================= */

        if (
            reportModal &&
            reportModal
                .classList
                .contains(
                    "open"
                )
        ) {

            closeReportModal();

            return;

        }


        /* =================================================
           PDF VIEWER
        ================================================= */

        if (
            pdfViewerModal &&
            pdfViewerModal
                .classList
                .contains(
                    "open"
                )
        ) {

            closePdfViewer();

        }

    }
);



/* =========================================================
   76 — EXTEND OPEN DASHBOARD

   Preserve the existing project system and then
   initialize Reports.
========================================================= */

const originalOpenDashboard =
    openDashboard;


openDashboard =
    async function () {

        /* =================================================
           ORIGINAL ADMIN / PROJECT SYSTEM
        ================================================= */

        await originalOpenDashboard();


        /* =================================================
           REPORT PROJECT OPTIONS
        ================================================= */

        populateReportProjectOptions();


        /* =================================================
           LOAD REPORT DATABASE
        ================================================= */

        await loadReports();


        /* =================================================
           START SECURITY TIMER
        ================================================= */

        resetInactivityTimer();

    };



/* =========================================================
   77 — ADMIN AUTO LOGOUT
   15 MINUTES OF INACTIVITY
========================================================= */

const INACTIVITY_LIMIT =
    15 * 60 * 1000;


let inactivityTimer =
    null;



/* =========================================================
   78 — CLEAR INACTIVITY TIMER
========================================================= */

function clearInactivityTimer() {

    if (inactivityTimer) {

        clearTimeout(
            inactivityTimer
        );


        inactivityTimer =
            null;

    }

}



/* =========================================================
   79 — RESET INACTIVITY TIMER
========================================================= */

function resetInactivityTimer() {

    /*
        Only run the timer when an administrator
        is actually logged in.
    */

    if (!currentUser) {
        return;
    }


    clearInactivityTimer();


    inactivityTimer =
        setTimeout(
            autoLogoutAdmin,
            INACTIVITY_LIMIT
        );

}



/* =========================================================
   80 — AUTO LOGOUT
========================================================= */

async function autoLogoutAdmin() {

    console.log(
        "SMART ADMIN // SESSION EXPIRED"
    );


    clearInactivityTimer();


    try {

        if (supabaseClient) {

            await supabaseClient
                .auth
                .signOut();

        }

    }

    catch (error) {

        console.error(
            "Automatic logout error:",
            error
        );

    }


    currentUser =
        null;


    /* =====================================================
       CLOSE PROJECT MODAL
    ===================================================== */

    if (projectModal) {

        projectModal.classList.remove(
            "show"
        );


        projectModal.classList.remove(
            "open"
        );

    }


    /* =====================================================
       CLOSE REPORT MODAL
    ===================================================== */

    if (reportModal) {

        reportModal.classList.remove(
            "open"
        );

    }


    /* =====================================================
       CLOSE PDF VIEWER
    ===================================================== */

    if (pdfViewerModal) {

        closePdfViewer();

    }


    /* =====================================================
       RESTORE BODY
    ===================================================== */

    document.body.style.overflow =
        "";


    /* =====================================================
       RETURN TO LOGIN
    ===================================================== */

    showLogin();


    /* =====================================================
       MESSAGE
    ===================================================== */

    if (loginMessage) {

        loginMessage.textContent =
            "SESSION EXPIRED — PLEASE LOGIN AGAIN.";


        loginMessage.classList.add(
            "error"
        );

    }

}



/* =========================================================
   81 — ADMIN ACTIVITY DETECTION
========================================================= */

const adminActivityEvents = [

    "mousedown",
    "mousemove",
    "keydown",
    "scroll",
    "touchstart",
    "click"

];


adminActivityEvents.forEach(
    function (eventName) {

        document.addEventListener(
            eventName,
            resetInactivityTimer,
            {
                passive: true
            }
        );

    }
);



/* =========================================================
   82 — TAB VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.visibilityState ===
                "visible" &&
            currentUser
        ) {

            resetInactivityTimer();

        }

    }
);



/* =========================================================
   83 — AUTH STATE WATCHER
========================================================= */

if (supabaseClient) {

    supabaseClient
        .auth
        .onAuthStateChange(
            function (
                event,
                session
            ) {

                /* =========================================
                   SIGNED OUT
                ========================================= */

                if (
                    event ===
                    "SIGNED_OUT"
                ) {

                    currentUser =
                        null;


                    clearInactivityTimer();

                }


                /* =========================================
                   TOKEN REFRESH
                ========================================= */

                if (
                    event ===
                    "TOKEN_REFRESHED" &&
                    session &&
                    session.user
                ) {

                    currentUser =
                        session.user;


                    resetInactivityTimer();

                }

            }
        );

}



/* =========================================================
   84 — INITIALIZATION

   IMPORTANT:
   restoreSession() MUST appear only once in admin.js.

   Do NOT put another restoreSession() above this.
========================================================= */

restoreSession();



/* =========================================================
   SMART CLUB — ENSEM

   ADMIN CONTROL CENTER

   AUTHENTICATION       : READY
   PROJECT MANAGEMENT   : READY
   REPORT MANAGEMENT    : READY
   PDF UPLOAD            : READY
   PDF STORAGE           : READY
   INLINE PDF VIEWER     : READY
   MOBILE PDF SUPPORT    : READY
   AUTO LOGOUT           : 15 MIN
   SUPABASE DATABASE     : READY
========================================================= */