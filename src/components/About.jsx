import React from "react";
export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">
        Who I am
      </h2>
      <p className="section__subtitle section__subtitle--about">
        Front-End Developer
      </p>

      <div className="about-me__body">
        <p>
          I'm a Frontend developer based out of Tbilisi, Georgia. I
          love building apps that solve real-world problems, and that
          are delightful to use. My specialities in frontend
          development include
          <strong>
            TypeScript, JavaScript(ES6+), React, Angular, Ant Design,
            TailwindCSS, PHP, MySql.
          </strong>
        </p>
        <p>
          <strong>
            {" "}
            Briefly, about my experience in this field:
          </strong>{" "}
          <br />
          In 2023, I had a chance to work as an intern ReactJS
          developer in MedSoft which is the Hospital Information
          System. My main goal was to create website development
          interfaces and deal with API requests. I’ve gained new tech
          skills and learned new tools such as Ant Design, Redux and
          so on.
        </p>
      </div>

      <img
        src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-f4bf7.appspot.com/o/Images%2Fme.jpg?alt=media&token=f83bd202-c70f-4145-bc7a-417470f76c30"
        alt=""
        className="about-me__img"
      />
    </section>
  );
}
