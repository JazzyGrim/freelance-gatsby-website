import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";
import "../styles/global.css";
import * as styles from "../styles/home.module.css";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Reveal from 'react-reveal/reveal';
import Fade from 'react-reveal/Fade';

const skills = [
  {
    name: "HTML5 / CSS3 / SASS",
    percentage: "90%"
  },
  {
    name: "JavaScript",
    percentage: "90%"
  },
  {
    name: "React / React Native",
    percentage: "85%"
  },
  {
    name: "Node.JS / Express",
    percentage: "90%"
  },
  {
    name: "Python",
    percentage: "60%"
  },
  {
    name: "SQL",
    percentage: "60%"
  },
  {
    name: "C / C++",
    percentage: "75%"
  },
  {
    name: "OpenGL / GLSL",
    percentage: "60%"
  },
  {
    name: "Java",
    percentage: "85%"
  },
  {
    name: "C#, .NET, Angular",
    percentage: "20%"
  }
]

export default function Home() {
  return <Layout>
    <main>
      <Fade bottom>
        <div id={ styles.titleContainer }>
          <h3>pozdrav, ja sam</h3>
          <h1>Mateo Sindičić</h1>
          <Fade bottom delay={ 1000 }>
            <h2>Mladi Web & Mobile Developer s opsesijom o <span>{ "<kodu/>" }</span></h2>
          </Fade>
          <div id={ styles.linksContainer }>
            <Fade delay={ 2000 }>
              <button onClick={() => scrollTo("section[name='about']")}>Više o meni
              <div className={ styles.arrow } />
              </button>
              <Link to="https://github.com/JazzyGrim/"><img src="github.png" /></Link>
              <Link to=""><img src="linkedin.png" /></Link>
              <Link to=""><img src="fb.png" /></Link>
              <Link to=""><img src="ig.png" /></Link>
            </Fade>
          </div>
        </div>
      </Fade>
      <img alt="An apartment website designed by Mateo Sindičić." id={ styles.mainImage } src="/Group9-min.png" />
      <Reveal effect="revealLeft">
        <img alt="A contact form designed by Mateo Sindičić." id={ styles.imageLeft } src="/Group10-min.png" />
      </Reveal>
      <Reveal effect="revealRightOne">
        <img alt="A pop-up notification designed by Mateo Sindičić." id={ styles.imageRightOne } src="/Group2-min.png" />
      </Reveal>
      <Reveal effect="revealRightTwo">
        <img alt="A blog post card designed by Mateo Sindičić." id={ styles.imageRightTwo } src="/Group3-min.png" />
      </Reveal>
    </main>
    <section id={ styles.aboutSection } name="about">
      <div id={ styles.blueBox }>
        <img alt="An image of Mateo Sindičić." src="/mateo-min.png" />
      </div>
      <div id={ styles.content }>
        <h2>
          <Reveal effect="collapseCover" delay={ 1000 } >
            <span className={ styles.textCover } />
          </Reveal>
          O Meni
        </h2>
        <p>
          <Reveal effect="collapseCover" delay={ 1200 } >
            <span className={ `${ styles.textCover } ${ styles.textCoverReverse }` }/>
          </Reveal>
          Zovem se Mateo Sindičić i u slobodno vrijeme dizajniram i programiram web stranice, aplikacije te video igre. Moje prvo iskustvo s programiranjem bilo je oko moje 10. godine,  što me s vremenom dovelo ovdje. Zalažem se za minimalizam i savršenstvo, a moji projekti su odraz toga.
        </p>
      </div>
    </section>
    <Reveal effect="lightsOut" effectOut="lightsIn" delay={ 500 }>
    <section id={ styles.skillsSection } name="skills">
    <div class="area">
      <div class="wire"></div>
      <div class="fixture">
        <div class="strip"></div>
        <div class="strip"></div>
        <div class="strip"></div>
      </div>
      <div class="bulb">
        <div class="zig"></div>
        <div class="zig"></div>
        <div class="zig"></div>
      </div>
    </div>
      <h2>
        Moje Znanje
      </h2>
      <p>
        Specijaliziram u tzv. Full-Stack polju. Razvijam web aplikacije ( React.JS, Gatsby ), mobilne aplikacije ( React Native - Expo / Barebones ), servere ( Node.JS, Express, SQL ), video igre ( C++, OpenGL, GLSL ), dodatke za video igre ( Java ).
      </p>
      <div id={ styles.gridView }>
        <div className={ styles.gridContainer }>
          { skills.slice( 0, 5 ).map( skill => <SkillBar name={ skill.name } percentage={ skill.percentage } /> ) }
        </div>
        <div className={ styles.gridContainer }>
        { skills.slice( 5, 10 ).map( skill => <SkillBar name={ skill.name } percentage={ skill.percentage } /> ) }
        </div>
      </div>
    </section>
    </Reveal>
    <section id={ styles.contactSection } name="contact">
      <div id={ styles.staticInfo }>
        <h2>Direktan upit</h2>
        <h3>email</h3>
        <a href="mailto:mateo.sindicic@gmail.com">mateo.sindicic@gmail.com</a>
        <h3>phone</h3>
        <a href="tel:+38591-373-4442">+385 91 373 4442</a>
      </div>
      <div id={ styles.infoContainer }>
      <ContactForm />
      </div>
    </section>
  </Layout>
}
