import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

  const projects = [
    {
      title: "Putting Peril - Game Storm(internship)",
      description: [
        "A VR game design internship working with a small team developing Putting Peril, a game built using an in-VR creation tool for Meta Quest. The project focuses on both building the game and improving the tool used to create it.",

        "I worked on playtesting levels and providing feedback on gameplay and bugs, as well as extending the levels by adding new gameplay elements such as pickups, alternative routes, and interactive features to make them more engaging and fun to explore. I also created my own levels using the tool, focusing on layout, flow, and player experience.",

        "As part of the internship, I contributed feedback on the VR creation app itself, suggesting improvements, identifying issues, and proposing new features that could improve usability. I also worked with audio by selecting appropriate sound effects for in-game actions and creating a custom sound when needed.",

        "The work is done in a small team environment with daily meetings and ongoing communication through Slack, with tasks organized in Trello. In addition to implementation and testing, I also contribute general feedback on different aspects of the project, including gameplay and design decisions.",
      ],
      images: [],
    },
    {
      title: "SHUTMP",
      description: [
        "A 2D space shooter developed in Unity as part of a structured course, covering a wide range of gameplay and technical systems across multiple modules. I worked on implementing core features including menu systems, scene management, input handling with re-bindable controls, and the main gameplay loop. The project includes player movement, shooting mechanics, enemy behaviors with different movement patterns, and collision systems.",
        "As part of the assignments, I extended the game by adding systems such as enemy spawning and attack logic, pickups and scoring, HUD elements, and a basic boss encounter. I also implemented audio systems with multiple sound effects and music tracks, as well as save functionality and performance optimizations like limiting on-screen objects. This project focused on integrating multiple gameplay systems, working across scenes, and maintaining a larger, feature-rich codebase.",
      ],
      images: [
        "images/unnamed.png",
        "images/unnamed2.png",
        "images/unnamed3.png",
        "images/unnamed4.png",
        "images/unnamed5.png",
        "images/unnamed6.png",
      ],
    },
    {
      title: "NBA Chain Game",
      description: [
        "A browser-based game where players create a chain by linking NBA players and teams, starting from a randomly selected player. Each step requires connecting a player to a team they played for, then continuing the chain with another valid player.",
        "I developed the full application using React, implementing core game logic, state management, and user interaction systems. The game includes real-time input validation, autocomplete suggestions for player names, and rule enforcement to ensure valid and non-repeating team-player connections. I also built both singleplayer and local multiplayer modes, including a turn-based system and a countdown timer.",
        "To support gameplay, I integrated external player data and built a custom data-fetching script to retrieve and store the dataset locally. This reduced reliance on third-party APIs, eliminated request latency during gameplay, and avoided ongoing API costs. The locally stored dataset is structured for efficient lookups, enabling fast validation and smooth user experience.",
        "Additional features include a high score system using local storage and UI feedback through notifications. This project focused on structuring scalable game logic, optimizing performance through data handling decisions, and building responsive, user-friendly interactions in a web environment.",
      ],
      link: "https://2aleksandar3.github.io/NBAChainGame/",
      size: "large",
      images: [
        "images/Screenshot1.png",
        "images/Screenshot2.png",
        "images/Screenshot3.png",
        "images/Screenshot4.png",
        "images/Screenshot5.png",
        "images/Screenshot6.png",
        "images/Screenshot7.png",
      ],
    },
    {
      title: "3D Breakout",
      description: [
        "A 3D arcade-style project developed in Unreal Engine using Blueprints as part of a structured course, focusing on gameplay systems, UI integration, and basic procedural content. I implemented player controls with the new input system, including paddle movement and ball interactions, alongside collision handling and core game loop mechanics. The project features simple 3D geometry with shaders and randomly generated levels to enhance replayability.",

        "As part of the assignment, I extended the project by creating a persistent high score system using a custom game instance to retain data between levels, and I added a new 'golden brick' worth 50 points, integrating it into the scoring and collision systems. This project focused on designing interactive gameplay systems, implementing visual scripting logic in Blueprints, and creating engaging, player-focused game mechanics.",
      ],
      images: [
        "images/unnamed41.png",
        "images/unnamed42.png",
        "images/unnamed43.png",
        "images/unnamed44.png",
        "images/unnamed45.png",
        "images/unnamed46.png",
        "images/unnamed47.png",
      ],
    },

    {
      title: "Merlin Demon War",
      description: [
        "A card-based combat project developed in Unity as part of a structured course. I worked on implementing core gameplay systems including card logic, turn flow, drag-and-drop interactions, animations, and audio integration.",
        "As part of the assignment, I extended the game by implementing a new 'Destruct' card, which involved adding new card properties, integrating it into the game controller, and connecting its visual and audio effects to gameplay behavior. This project focused on gameplay logic, interaction systems, and feedback integration.",
      ],
      images: [
        "images/unnamed11.png",
        "images/unnamed12.png",
        "images/unnamed13.png",
        "images/unnamed14.png",
        "images/unnamed15.png",
      ],
    },
    {
      title: "Snake",
      description: [
        "A mobile game developed in Unity as part of a structured course, focusing on Android deployment and touch-based gameplay. I implemented core systems including swipe controls, snake movement and body-following behavior, collision handling, and basic game progression with scoring and UI.",
        "As part of the assignment, I extended the game by adding spike obstacles that increase with each level. This involved updating the game controller, creating spawning and reset logic, and integrating the feature into the progression system. This project focused on mobile input handling, gameplay progression, and dynamic object spawning.",
      ],
      images: [
        "images/unnamed31.png",
        "images/unnamed32.png",
        "images/unnamed33.png",
        "images/unnamed34.png",
        "images/unnamed35.png",
      ],
    },

    {
      title: "The Return",
      description: [
        "A text-based adventure project developed in Unity as part of a structured game development course. Following guided implementation of core systems such as user input handling, world data structures, and an action-based interaction framework, I independently extended the project by designing and implementing a new 'read' action.",
        "This involved creating a dedicated action script, adding new item properties, and integrating the feature into the existing game controller and interaction system. Through this process, I gained practical experience working with modular systems, extending existing codebases, and implementing new gameplay interactions in a structured architecture.",
      ],
      images: [
        "images/unnamed21.png",
        "images/unnamed22.png",
        "images/unnamed23.png",
        "images/unnamed24.png",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const aboutTop = aboutRef.current.offsetTop;
      const projectsTop = projectsRef.current.offsetTop;
      const contactTop = contactRef.current.offsetTop;

      if (scrollY >= contactTop - 100) {
        setActiveSection("contact");
      } else if (scrollY >= projectsTop - 50) {
        setActiveSection("projects");
      } else {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="side-nav">
        <div
          className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => scrollTo(aboutRef)}
        >
          <span className="dot" />
          <span>About Me</span>
        </div>

        <div
          className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => scrollTo(projectsRef)}
        >
          <span className="dot" />
          <span>Projects</span>
        </div>

        <div
          className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => scrollTo(contactRef)}
        >
          <span className="dot" />
          <span>Contact</span>
        </div>
      </div>

      <header className="header">
        <h1>Aleksandar Prodanic - Portfolio</h1>
        <p>Game Developer | Unity & Unreal Engine | Interactive Experiences</p>
      </header>
      <div ref={aboutRef} className="project-card alt-bg">
        <h2>About Me</h2>
        <p>
          Hi, I’m Aleksandar, a game developer passionate about creating
          interactive and engaging experiences. I specialize in Unity (C#) and
          Unreal Engine (Blueprints), building gameplay systems across 2D and 3D
          projects, from text adventures to mobile games and arcade-style
          experiences. I’m currently working as a game design intern on a VR
          project, contributing to gameplay design, level creation, and
          playtesting in a small development team. I enjoy designing intuitive
          mechanics, implementing modular systems, and bringing ideas to life
          through both coding and creative problem-solving. Outside of
          development, I like exploring game design concepts, experimenting with
          art tools like Krita, and discovering ways to make games more
          immersive and fun. Feel free to explore my projects below or get in
          touch if you’d like to collaborate!
        </p>
      </div>

      <section ref={projectsRef} className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>
            <div
              className={`project-layout ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="project-carousel">
                <ImageCarousel images={project.images} size={project.size} />
              </div>

              <div className="project-description">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}{" "}
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer ref={contactRef} className="footer">
        <p>© 2026 Aleksandar Prodanić</p>
        <p>
          <a
            href="https://github.com/2Aleksandar3"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |<a href="mailto:prodanicaleksandar@gmail.com">Email</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
