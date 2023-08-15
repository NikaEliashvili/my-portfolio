import React from "react";
import myPhoto from "../../public/images/myPhoto-min.jpg";
export default function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Nika Eliasvili</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Front-End Developer
      </p>
      <img
        src={myPhoto}
        alt="a picture of Jane Smith smiling"
        className="intro__img"
      />
    </section>
  );
}
