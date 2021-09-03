import React from "react";
import Layout from "../components/Layout";
import SkillBar from "../components/SkillBar";
import ContactForm from "../components/ContactForm";
import "../styles/global.css";
import * as styles from "../styles/home.module.css";
import scrollTo from 'gatsby-plugin-smoothscroll';

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
      <h1>Stigla je nova era<br/>Web Stranica</h1>
      <h2>Vrijeme je promjena. Mi smo ovdje<br/>samo za one dobre. Izradite modernu<br/>stranicu s kojom ste ponosni.</h2>
      <button onClick={() => scrollTo("section[name='contact']")}>Krenite Odmah</button>
      <img alt="An apartment website designed by Mateo Sindičić." id={ styles.mainImage } src="/Group9.png" />
      <img alt="A contact form designed by Mateo Sindičić." id={ styles.imageLeft } src="/Group10.png" />
      <img alt="A pop-up notification designed by Mateo Sindičić." id={ styles.imageRightOne } src="/Group2.png" />
      <img alt="A blog post card designed by Mateo Sindičić." id={ styles.imageRightTwo } src="/Group3.png" />
    </main>
    <section id={ styles.aboutSection } name="about">
      <div id={ styles.blueBox }>
        <img alt="An image of Mateo Sindičić." src="/mateo.png" />
      </div>
      <div id={ styles.content }>
        <h2>O Meni</h2>
        <p>Pozdrav! Ja sam Mateo Sindičić i u slobodno vrijeme dizajniram i programiram web stranice, aplikacije te video igre. Moje prvo iskustvo s programiranjem bilo je oko moje 10. godine,  što me s vremenom dovelo ovdje. Zalažem se za minimalizam i savršenstvo, a moji projekti su izravan odraz toga.</p>
      </div>
    </section>
    <section id={ styles.skillsSection } name="skills">
      <h2>Moje Znanje</h2>
      <p>Specijaliziram u tzv. Full-Stack polju. Razvijam web aplikacije ( React.JS, Gatsby ), mobilne aplikacije ( React Native - Expo / Barebones ), servere ( Node.JS, Express, SQL ), video igre ( C++, OpenGL, GLSL ), dodatke za video igre ( Java ).</p>
      <div id={ styles.gridView }>
        <div className={ styles.gridContainer }>
          { skills.slice( 0, 5 ).map( skill => <SkillBar name={ skill.name } percentage={ skill.percentage } /> ) }
        </div>
        <div className={ styles.gridContainer }>
        { skills.slice( 5, 10 ).map( skill => <SkillBar name={ skill.name } percentage={ skill.percentage } /> ) }
        </div>
      </div>
    </section>
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
