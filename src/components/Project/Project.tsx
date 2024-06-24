import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project(props: any) {
  const { data } = props;

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {data.projects.map((project: any, index:any) => {
          return (
            <ScrollAnimation animateIn="flipInX" key={index}>
              <div className="project">
                <header>
                  <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <title>Folder</title>{" "}
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
                  </svg>
                  <div className="project-links">
                    <a
                      href={project.projectlink}
                      target="_blank"
                      rel="noreferrer"
                      title={`GitHub:- ${project.title}`}
                    >
                      <img src={githubIcon} alt="Visit site" />
                    </a>
                    {/* <a href="https://vote.rohitkumar.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                  </div>
                </header>
                <div className="body">
                  <h3>
                    {project.title}
                  </h3>
                  <p>
                    {" "}
                    {project.description}
                    {" "}
                  </p>
                </div>
                <footer>
                  {" "}
                  <ul className="tech-list">
                    {
                      project.techuse.map((tech: any, index: number)=>(
                        <li key={index}>{tech}</li>
                      ))
                    }
                  </ul>{" "}
                </footer>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </Container>
  );
}
