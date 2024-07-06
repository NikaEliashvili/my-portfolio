import React, { useEffect, useId, useState } from "react";
import { MdClear } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import dataFB from "../../firebase.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MyWorks() {
  const location = useLocation();
  const [data, setData] = useState(null);

  const stateAppAmount = location?.state?.appAmount;
  const [appAmount, setAppAmount] = React.useState(
    stateAppAmount || 8
  );

  const skeletonArr = Array(8).fill();

  const [filters, setFilters] = useState([
    { filterName: "React", isActive: false },
    { filterName: "Angular", isActive: false },
    { filterName: "VanillaJS", isActive: false },
    { filterName: "Firebase", isActive: false },
  ]);

  useEffect(() => {
    dataFB?.then((res) => {
      setData(res);
    });
  }, []);

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

  const getData =
    data?.length > 0
      ? filters.some((filter) => filter.isActive === true)
        ? data?.filter((data) => {
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
        : data
      : null;

  function seeMore() {
    if (appAmount >= data?.length) {
      setAppAmount(8);
      setIsSeeMore(true);
    } else {
      setAppAmount((prevAmount) => prevAmount + 8);
      setIsSeeMore(appAmount + 8 >= data?.length ? false : true);
    }
  }

  const [isSeeMore, setIsSeeMore] = useState(
    appAmount >= data?.length ? false : true
  );

  const portElements = getData
    ? getData?.slice(0, appAmount)?.map((project) => {
        const { id, imgurl, title, tools } = project;
        return (
          <abbr
            className="card-link"
            key={id}
            title="Click to see more..."
          >
            <Link
              to={`${id}`}
              id={`work-${id}`}
              state={{ appAmount }}
            >
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
                <div className="portfolio__item">
                  <img
                    loading="eager"
                    src={imgurl}
                    alt={title}
                    className="portfolio__img"
                  />
                </div>
              </div>
            </Link>
          </abbr>
        );
      })
    : skeletonArr.map((_, i) => (
        <SkeletonTheme
          key={i}
          baseColor="#303030"
          highlightColor="#323232"
        >
          <Skeleton
            count={1}
            borderRadius={10}
            direction="ltr"
            duration={1.25}
            height={300}
            width={250}
          />
        </SkeletonTheme>
      ));

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
      <p>
        All Projects on my{" "}
        <a
          href="https://github.com/NikaEliashvili"
          style={{ textDecoration: "underline" }}
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <div className="portfolio">{portElements}</div>

      {getData?.length - 8 > 0 && (
        <button className="loadmore-btn" onClick={seeMore}>
          {isSeeMore ? "See More" : "See Less"}
        </button>
      )}
    </section>
  );
}
