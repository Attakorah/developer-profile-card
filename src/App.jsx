import "./App.css";

function ProfileHeader({ name, role, school }) {
    return (
        <header className="profile-header">
            <div>
                <p className="eyebrow">React Developer Profile</p>
                <h1>{name}</h1>
                <p className="school">{school}</p>
                <p className="role">{role}</p>
            </div>

            <div className="avatar">
                AE
            </div>
        </header>
    );
}

function SkillsList({ skills }) {
    return (
        <section className="section-card">
            <h2>Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <span className="skill-badge" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

function ProjectsList({ projects }) {
    return (
        <section className="section-card">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-top">
                            <h3>{project.title}</h3>

                            <span className={project.completed ? "status completed" : "status progress"}>
                                {project.completed ? "Completed" : "In Progress"}
                            </span>
                        </div>

                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

function App() {
    const developer = {
        name: "Attakorah Emmanuel",
        school: "Computer Science Student at UENR",
        role: "Full-Stack AI Developer in Training",
        skills: [
            "Java",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitHub",
            "React"
        ],
        projects: [
            {
                title: "Developer Portfolio v1",
                description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
                completed: true
            },
            {
                title: "Task Manager JS",
                description: "A task manager app built with JavaScript DOM manipulation.",
                completed: true
            },
            {
                title: "Expense Tracker",
                description: "An expense tracking app for managing income and spending.",
                completed: true
            },
            {
                title: "Developer Profile Card",
                description: "My first React project using components and props.",
                completed: false
            }
        ]
    };

    return (
        <main className="app">
            <ProfileHeader
                name={developer.name}
                school={developer.school}
                role={developer.role}
            />

            <SkillsList skills={developer.skills} />

            <ProjectsList projects={developer.projects} />
        </main>
    );
}

export default App;