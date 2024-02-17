import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

export default function ScrollUp() {
  const [winHeight, setWinHeight] = React.useState(window.scrollY);
  let isScroll = false;
  React.useEffect(() => {
    function handleScroll() {
      setWinHeight(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (winHeight - window.innerHeight >= window.innerHeight - 800) {
    isScroll = true;
  } else {
    isScroll = false;
  }
  return (
    <HashLink to="/#">
      <div className="scroll-up">
        {isScroll && <BsFillArrowUpCircleFill className="upicon" />}{" "}
      </div>
    </HashLink>
  );
}
