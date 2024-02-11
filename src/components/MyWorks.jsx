import React, { useId, useState } from "react";
import { MdClear } from "react-icons/md";
import data from "../data.js";

import { Link, useLocation } from "react-router-dom";

export default function MyWorks() {
  const location = useLocation();
  const stateAppAmount = location?.state?.appAmount;
  const [appAmount, setAppAmount] = React.useState(
    stateAppAmount || 8
  );

  const [filters, setFilters] = useState([
    { filterName: "React", isActive: false },
    { filterName: "Angular", isActive: false },
    { filterName: "VanillaJS", isActive: false },
    { filterName: "Firebase", isActive: false },
    { filterName: "PHP", isActive: false },
    { filterName: "SQL", isActive: false },
  ]);

  function handleActiveClick(name) {
    setFilters((prev) =>
      prev.map((filter) => {
        return filter.filterName === name
          ? { ...filter, isActive: !filter.isActive }
          : filter;
      })
    );
  }

  function clearFilters() {
    setTimeout(() => {
      setFilters((prev) =>
        prev.map((filter) => {
          return { ...filter, isActive: false };
        })
      );
    }, 100);
  }

  const getData = filters.some((filter) => filter.isActive === true)
    ? data.filter((data) => {
        const newFilters = filters.filter(
          (filter) => filter.isActive
        );

        let newData = [];
        newFilters.forEach((filter) => {
          if (data.tools.includes(filter.filterName)) {
            newData.push(data);
          }
        });
        return newData.length > 0 ? newData : null;
      })
    : data;

  function seeMore() {
    if (appAmount >= data.length) {
      setAppAmount(8);
      setIsSeeMore(true);
    } else {
      setAppAmount((prevAmount) => prevAmount + 8);
      setIsSeeMore(appAmount + 8 >= data.length ? false : true);
    }
  }

  const [isSeeMore, setIsSeeMore] = useState(
    appAmount >= data.length ? false : true
  );

  const portElements = getData.slice(0, appAmount).map((project) => {
    const { id, imgurl, title, tools } = project;
    return (
      <Link
        key={id}
        to={`${id}`}
        id={`work-${id}`}
        state={{ appAmount }}
      >
        <dfn>
          <abbr title="Click to see more...">
            <div className="portfolio__item__card">
              <div className="portfolio__item__header__container">
                <h3 className="portfolio__item__header">{title}</h3>
                <div className="portfolio__item__tools">
                  {tools.split("&").map((skill) => (
                    <span key={skill} className="tool">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div key={id} className="portfolio__item">
                <img
                  src={`/images/${imgurl}`}
                  alt={title}
                  className="portfolio__img"
                />
              </div>
            </div>
          </abbr>
        </dfn>
      </Link>
    );
  });

  return (
    <section key={useId()} className="my-work" id="work">
      <h2 className="section__title section__title--work">
        My projects
      </h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="search_bar">
        {filters.map((filter) => (
          <span
            key={filter.filterName}
            onClick={() => handleActiveClick(filter.filterName)}
            className={`tool ${filter.isActive ? "active" : ""}`}
          >
            {filter.filterName}
          </span>
        ))}
        {filters.some((filter) => filter.isActive === true) && (
          <div onClick={clearFilters} className="clearFilters">
            <span>Clear</span>
            <MdClear />
          </div>
        )}
      </div>
      <div className="portfolio">{portElements}</div>

      {getData.length - 8 > 0 && (
        <button className="loadmore-btn" onClick={seeMore}>
          {isSeeMore ? "See More" : "See Less"}
        </button>
      )}
    </section>
  );
}
