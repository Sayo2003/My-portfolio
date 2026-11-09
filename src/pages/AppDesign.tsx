import projectImage from '../assets/app page.jpeg';

function AppDesign() {
  return (
    <section className="project-page">

      <h1>
        App Design
      </h1>

      <img
        src={projectImage}
        alt="App Design Project"
        className="project-image"
      />

      <p>
        This project focuses on an app which works like an alarm for using less
        screen time on your phone and alerts the user by notifying them through
        sound. The timer can be set by the user.
      </p>

    </section>
  );
}

export default AppDesign;