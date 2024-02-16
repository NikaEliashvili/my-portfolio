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
        src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-f4bf7.appspot.com/o/Images%2FmyPhoto-min.jpg?alt=media&token=6e5c928a-20df-4355-85b2-42c9af72ccb5"
        alt="a picture of Jane Smith smiling"
        className="intro__img"
      />
    </section>
  );
}
