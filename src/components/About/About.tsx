import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";

interface skills {
  name: string,
  icon: any
}

export function About(props:any) {
  const { data } = props;

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            {data.aboutme}
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem" }}>
          <p>{data.howcanihelp}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {
            data.skills.map((skill:skills, index:number)=>{
                const delay = Math.round((0.10 + (index * 0.02)) * 100);
                return <div className="hability" key={index}>
                  <ScrollAnimation animateIn="fadeInUp" delay={delay}>
                    {skill.icon ? <img src={skill.icon} alt={skill.name} /> : skill.name }
                  </ScrollAnimation>
                </div>
              })
            }
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={data.image} alt={data.name} />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
