import React from "react";
import Introduction from "../components/Introduction";
import MyWorks from "../components/MyWorks";
import Services from "../components/Services";
import About from "../components/About";
import ScrollUp from "../components/ScrollUp";
export default function MainPage() {
  return (
    <>
      <Introduction />
      <Services />
      <About />
      <MyWorks />
      <ScrollUp />
    </>
  );
}
