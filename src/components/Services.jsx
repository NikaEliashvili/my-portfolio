import React from "react";

export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Development</h3>
          <p>
            I am a versatile front-end developer with a speciality in React JS.
            I have a solid grip on the fundamentals of web development using
            HTML, CSS, JavaScript and ReactJS. Also, I have intermediate
            knowledge of PHP and MySQL.
          </p>
        </div>
        <div className="service">
          <h3>Design</h3>
          <p>
            I have solid expertise in Adobe Photoshop. I can edit any type of
            content based on clients' wishes. Check my Upwork portfolio{" "}
            <a
              target="_new"
              href="https://www.upwork.com/freelancers/~012186212d489b97e1"
            >
              here
            </a>
            {". "}
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My Projects
      </a>
    </section>
  );
}
