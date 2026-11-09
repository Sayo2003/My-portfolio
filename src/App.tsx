
import reactLogo from './assets/react.svg';
// Profile image displayed in the Home page hero section.
import profileImage from './assets/pfp design.jpeg';

// Imports the stylesheet for the portfolio's layout and appearance.
import './App.css';

// React Router tools used to manage URL-based navigation between pages.
// BrowserRouter enables routing, Routes groups route definitions,
// Route maps a URL to a page component, and Link creates in-app navigation links.
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// Individual detail-page components for the portfolio projects.
import BreastCancer from './pages/BreastCancer';
import AppDesign from './pages/AppDesign';

// HOME PAGE: introduces the portfolio owner and provides About Me and Contact sections.
function Home() {
  return (
    <>
      {/* Hero Section: shows the profile image, name, and short professional introduction. */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              src={profileImage}
              alt="Sayonil Daspoddar"
              className="hero-image"
            />
          </div>

          <div className="hero-text">
            <h1>Sayonil Daspoddar</h1>

            <p>
              Student at University of Limerick | Ex-Designer
              at Expoysys Data Labs
            </p>
          </div>
        </div>
      </section>

      {/* About Section: provides a short overview of background and interests. */}
      <section id="about" className="section about">
        <h2>About Me</h2>

        <p>
          Welcome to my portfolio. I am a student at the University of
          Limerick interested in design, animation, technology and
          creative projects, having a background in computer science
          and communication. I was interested in design aspect of
          computers and I will keep learning and exploring.
        </p>
      </section>

      {/* Contact Section: displays clickable email and LinkedIn contact information. */}
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>

        <p>
          Email:{' '}
          <a href="mailto:26008947@studentmail.ul.ie">
            26008947@studentmail.ul.ie
          </a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/sayonil-daspoddar-371537252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sayonil Daspoddar
          </a>
        </p>
      </section>
    </>
  );
}


/* =========================
   EDUCATION PAGE
========================= */

// EDUCATION PAGE: displays academic qualifications, institutions, and dates.
function Education() {
  return (
    <section className="section education">
      <h2>Education</h2>

      <div className="education-grid">

        <div className="education-card">
          <h3>10th</h3>

          <h4>
            Delhi Public School Ghaziabad Vasundhara
          </h4>

          <p className="education-date">
            2018 – 2019
          </p>
        </div>


        <div className="education-card">
          <h3>12th</h3>

          <h4>
            CBSE Delhi
          </h4>

          <p className="education-date">
            2020 – 2021
          </p>
        </div>


        <div className="education-card">
          <h3>
            B.Tech Computer and Communication Engineering
          </h3>

          <h4>
            Manipal University Jaipur
          </h4>

          <p className="education-date">
            2021 – 2025
          </p>

          <p className="education-location">
            Jaipur, India
          </p>
        </div>

      </div>
    </section>
  );
}


/* =========================
   EXPERIENCE PAGE
========================= */

// EXPERIENCE PAGE: presents professional experience, responsibilities, and tools.
function Experience() {
  return (
    <section className="section experience">
      <h2>Experience</h2>

      <div className="experience-card">

        <div className="experience-header">
          <h3>UI/UX Designer</h3>

          <h4>
            ExpoysysDataLabs
          </h4>

          <p className="experience-date">
            August 2024 – October 2024
          </p>

          <p className="experience-location">
            Karnataka, India
          </p>
        </div>


        <div className="experience-section">
          <h4>Role Overview</h4>

          <p>
            Worked as a UI/UX Designer, contributing to the design
            of digital content and an application focused on helping
            users reduce their screen time.
          </p>
        </div>


        <div className="experience-section">
          <h4>Responsibilities</h4>

          <ul>
            <li>
              Designed web posters based on the company's website.
            </li>

            <li>
              Designed an application to help users reduce their
              screen time on application software.
            </li>

            <li>
              Contributed to the visual design and development of
              digital content for the company.
            </li>
          </ul>
        </div>


        <div className="experience-section">
          <h4>Tools & Development</h4>

          <p>
            During my experience, I learned about different
            application development and deployment tools used to
            create and deploy the application, including:
          </p>

          <div className="experience-tools">
            <span>CodePen</span>
            <span>Notepad</span>
            <span>Tiiny.host</span>
            <span>WebIntoApp</span>
            <span>Google Drive</span>
          </div>
        </div>


        <div className="experience-section">
          <h4>Experience Summary</h4>

          <p>
            This experience allowed me to develop practical skills
            in UI/UX design while gaining exposure to application
            development, deployment, and digital content creation.
          </p>
        </div>

      </div>
    </section>
  );
}


/* =========================
   CLUBS PAGE
========================= */

// CLUBS & ACTIVITIES PAGE: displays extracurricular activities, roles, and dates.
function Clubs() {
  return (
    <section className="section clubs">
      <h2>Clubs & Activities</h2>

      <div className="clubs-grid">

        <div className="club-card">
          <h3>ONEIROS'22</h3>

          <h4>
            Organizing Committee
          </h4>

          <p>
            Contributed to event planning and coordination efforts.
          </p>

          <span>
            2022
          </span>
        </div>


        <div className="club-card">
          <h3>
            Scribbles – The Art Community
          </h3>

          <h4>
            Head of Design
          </h4>

          <p>
            Led a team of five, overseeing and coordinating
            creative projects and events.
          </p>

          <span>
            2021 – 2022
          </span>
        </div>


        <div className="club-card">
          <h3>
            Boxing Club
          </h3>

          <h4>
            2 Year Trainee
          </h4>

          <p>
            Actively participated in the college boxing club for
            two years through regular training sessions and
            competitions.
          </p>

          <span>
            2021 – 2023
          </span>
        </div>

      </div>
    </section>
  );
}


/* =========================
   PROJECTS PAGE
========================= */

// PROJECTS PAGE: displays project cards that link to detailed project pages.
function Projects() {
  return (
    <section className="section projects">
      <h2>Projects</h2>

      <div className="project-grid">

        <Link
          to="/projects/breast-cancer"
          className="project-card"
        >
          <h3>
            Breast Cancer Detection using Machine Learning
            and Deep Learning
          </h3>

          <span>View Project →</span>
        </Link>

        <Link
          to="/projects/app-design"
          className="project-card"
        >
          <h3>App Design</h3>

          <span>View Project →</span>
        </Link>

      </div>
    </section>
  );
}

/* =========================
   MAIN APP
========================= */

// MAIN APP COMPONENT: renders the shared header, page content, and footer.
function App() {
  // BrowserRouter enables navigation between pages without a full page reload.
  return (
    <BrowserRouter>

      {/* Header: shared site branding and navigation menu. */}
      <header className="header">

        <nav className="navbar">

          <div className="logo-container">
            <img
              src={reactLogo}
              alt="Portfolio Logo"
              className="logo"
            />
          </div>


          {/* Navigation: links let visitors move between portfolio pages. */}
          <ul className="nav-links">

            <li>
              <Link to="/">
                About
              </Link>
            </li>

            <li>
              <Link to="/education">
                Education
              </Link>
            </li>

            <li>
              <Link to="/experience">
                Experience
              </Link>
            </li>

            <li>
              <Link to="/clubs">
                Clubs
              </Link>
            </li>

            <li>
              <Link to="/projects">
                Projects
              </Link>
            </li>

            <li>
              <a href="/#contact">
                Contact
              </a>
            </li>

          </ul>

        </nav>

      </header>


      {/* Page Content: the component matching the current route appears in this area. */}
      <main className="container">

        {/* Routes renders the page component that matches the current URL. */}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/education"
            element={<Education />}
          />

          <Route
            path="/experience"
            element={<Experience />}
          />

          <Route
            path="/clubs"
            element={<Clubs />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* Breast Cancer Project */}
          <Route
            path="/projects/breast-cancer"
            element={<BreastCancer />}
          />

          {/* App Design Project */}
          <Route
            path="/projects/app-design"
            element={<AppDesign />}
          />

        </Routes>

      </main>


      {/* Footer: displays copyright information at the bottom of the website. */}
      {/* Shared footer shown below the page content. */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Sayonil Daspoddar.
          All Rights Reserved.
        </p>
      </footer>

    </BrowserRouter>
  );
}

// Export the main App component so it can be rendered by the application entry point.
export default App;