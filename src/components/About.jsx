import React from "react";
import myImg from "../../public/images/me.jpg";
export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Front-End Developer
      </p>

      <div className="about-me__body">
        <p>
          I'm a Frontend developer based out of Tbilisi, Georgia. I love
          building apps that solve real-world problems, and that are delightful
          to use. My specialities include{" "}
          <strong>
            JavaScript(ES6+), React JS(React-Router-6), CSS, PHP, MySql.
          </strong>
        </p>
        <p>
          <strong> Briefly, about my experience:</strong> <br /> My background
          is purposefulness. I love to work hard and strive for a goal, so I
          have spent the last 3 years learning new things. At 16, I started
          learning Adobe Photoshop and Adobe Illustrator, and a year later I
          made my first money on{" "}
          <a
            target="_new"
            href="https://www.upwork.com/freelancers/~012186212d489b97e1"
          >
            Upwork
          </a>{" "}
          as a <strong> Grapchic Designer.</strong>
        </p>
      </div>

      <img
        src={myImg}
        alt="Jane leaning against a bus"
        className="about-me__img"
      />
    </section>
  );
}
