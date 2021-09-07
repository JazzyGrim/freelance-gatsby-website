import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";
import "../styles/global.css";
import * as mainStyles from "../styles/home-main.module.css";
import * as aboutStyles from "../styles/home-about.module.css";
import * as skillsStyles from "../styles/home-skills.module.css";
import * as contactStyles from "../styles/home-contact.module.css";
import scrollTo from "gatsby-plugin-smoothscroll";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import TextContainer from "../components/TextContainer";
import SMLinks from "../components/SMLinks";
import LightBulb from "../components/LightBulb";
import DesignGallery from "../components/DesignGallery";

export default function Home() {
  return (
    <Layout>
      <main>
        <Fade bottom>
          <div id={mainStyles.titleContainer}>
            <h3>pozdrav, ja sam</h3>
            <h1>Mateo Sindičić</h1>
            <Fade bottom delay={1000}>
              <h2>
                Mladi Web & Mobile Developer s opsesijom o{" "}
                <span>{"<kodu/>"}</span>
              </h2>
            </Fade>
            <div id={mainStyles.linksContainer}>
              <Fade delay={2000}>
                <button onClick={() => scrollTo("section[name='about']")}>
                  Više o meni
                  <div className={mainStyles.arrow} />
                </button>
                <SMLinks />
              </Fade>
            </div>
          </div>
        </Fade>
        <DesignGallery />
      </main>
      <section id={aboutStyles.about} name="about">
        <div id={aboutStyles.imageContainer}>
          <div className={aboutStyles.imageShadow} id={aboutStyles.shOne} />
          <div className={aboutStyles.imageShadow} id={aboutStyles.shTwo} />
          <div className={aboutStyles.imageShadow} id={aboutStyles.shThree} />
          <StaticImage
            alt="An image of Mateo Sindičić."
            src="../images/portrait.jpg"
            placeholder="blurred"
            quality={100}
            className={aboutStyles.aboutImage}
          />
        </div>
        <div id={aboutStyles.content}>
          <TextContainer
            title="O Meni"
            description="Zovem se Mateo Sindičić i u slobodno vrijeme dizajniram i
            programiram web stranice, aplikacije te video igre. Moje prvo
            iskustvo s programiranjem bilo je oko moje 10. godine, što me s
            vremenom dovelo ovdje. Zalažem se za minimalizam i savršenstvo, a
            moji projekti su odraz toga."
            titleReveal={
              <Reveal effect="collapseCover" delay={1000}>
                <span className={aboutStyles.textCover} />
              </Reveal>
            }
            descriptionReveal={
              <Reveal effect="collapseCover" delay={1200}>
                <span
                  className={`${aboutStyles.textCover} ${aboutStyles.textCoverReverse}`}
                />
              </Reveal>
            }
          />
        </div>
      </section>
      <Reveal effect="lightsOut" effectOut="lightsIn" delay={500}>
        <section id={skillsStyles.skills} name="skills">
          <LightBulb />
          <div id={skillsStyles.skillContainer}>
            <TextContainer
              title="Moje Znanje"
              description="Specijaliziram u tzv. Full-Stack polju. Razvijam web aplikacije (
            React.JS, Gatsby ), mobilne aplikacije ( React Native - Expo /
            Barebones ), servere ( Node.JS, Express, SQL ), video igre ( C++,
            OpenGL, GLSL ), dodatke za video igre ( Java )."
            />
            <div id={skillsStyles.gridView}>
              <div className={skillsStyles.gridContainer}>
                {skills.slice(0, 5).map(skill => (
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
              <div className={skillsStyles.gridContainer}>
                {skills.slice(5, 10).map(skill => (
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      <section id={contactStyles.contact} name="contact">
        <div id={contactStyles.staticInfo}>
          <h2>Direktan upit</h2>
          <h3>email</h3>
          <a href="mailto:mateo.sindicic@gmail.com">mateo.sindicic@gmail.com</a>
          <h3>phone</h3>
          <a href="tel:+38591-373-4442">+385 91 373 4442</a>
        </div>
        <div id={contactStyles.infoContainer}>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}

const skills = [
  {
    name: "HTML5 / CSS3 / SASS",
    percentage: "90%",
  },
  {
    name: "JavaScript",
    percentage: "90%",
  },
  {
    name: "React / React Native",
    percentage: "85%",
  },
  {
    name: "Node.JS / Express",
    percentage: "90%",
  },
  {
    name: "Python",
    percentage: "60%",
  },
  {
    name: "SQL",
    percentage: "60%",
  },
  {
    name: "C / C++",
    percentage: "75%",
  },
  {
    name: "OpenGL / GLSL",
    percentage: "60%",
  },
  {
    name: "Java",
    percentage: "85%",
  },
  {
    name: "C#, .NET, Angular",
    percentage: "20%",
  },
];
