import React from "react";
export default function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Nika Eliashvili</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Front-End Developer
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-f4bf7.appspot.com/o/Images%2Fme.jpg?alt=media&token=f83bd202-c70f-4145-bc7a-417470f76c30"
        alt="a picture of Jane Smith smiling"
        className="intro__img"
      />
    </section>
  );
}
