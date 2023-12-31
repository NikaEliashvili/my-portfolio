import React, { useId } from "react";
import data from "../data.js";

import { Link, useLocation } from "react-router-dom";

export default function MyWorks() {
  // const [isSeeMore, setIsSeeMore] = React.useState(true);
  const location = useLocation();
  const stateAppAmount = location?.state?.appAmount;
  const [appAmount, setAppAmount] = React.useState(stateAppAmount || 8);
  const getData = data.slice(0, appAmount);
  function seeMore() {
    if (appAmount >= data.length) {
      setAppAmount(8);
    } else {
      setAppAmount((prevAmount) => prevAmount + 8);
    }
  }

  const isSeeMore = appAmount >= data.length ? false : true;

  const portElements = getData.map((app) => {
    const { id, imgurl, title } = app;
    return (
      <Link key={id} to={`${id}`} id={`work-${id}`} state={{ appAmount }}>
        <div key={id} className="portfolio__item">
          <img
            src={`../../images/${imgurl}`}
            alt={title}
            className="portfolio__img"
          />
        </div>
      </Link>
    );
  });

  return (
    <section key={useId()} className="my-work" id="work">
      <h2 className="section__title section__title--work">My projects</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">{portElements}</div>
      <button className="loadmore-btn" onClick={seeMore}>
        {isSeeMore ? "See More" : "See Less"}
      </button>
    </section>
  );
}
