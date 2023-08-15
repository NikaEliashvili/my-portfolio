import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  if (winHeight - window.innerHeight >= window.innerHeight - 800) {
    isScroll = true;
  } else {
    isScroll = false;
  }
  return (
    <div className="scroll-up" onClick={scrollUp}>
      {isScroll && <BsFillArrowUpCircleFill className="upicon" />}{" "}
    </div>
  );
}
