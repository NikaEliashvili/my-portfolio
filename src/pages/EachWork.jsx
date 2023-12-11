import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaGithub, FaEye } from "react-icons/fa6";
import ScrollUp from "../components/ScrollUp";

import data from "../data";
export default function EachWork() {
  const params = useParams();
  const appId = parseInt(params.id);
  const app = data.filter((app) => app.id === appId);
  const { id, title, imgurl, link, description, giturl, tools } =
    app[0];
  const location = useLocation();
  const appAmount = location?.state?.appAmount;
  return (
    <>
      <HashLink
        to={`..#work-${id}`}
        className="backLink"
        state={{ appAmount }}
      >
        &larr; Back to All Apps
      </HashLink>
      <section className="intro portfolio-intro">
        <h1 className="section__title section__title--intro">
          {title}
          <strong>web app</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          {tools}
        </p>

        <img
          src={`../../images/${imgurl}`}
          alt=""
          className="intro__img"
        />
      </section>
      <div className="portfolio-item-individual">
        <div>
          <a className="" target="_blank" href={giturl}>
            <FaGithub /> GitHub Repo
          </a>
          <a className="" target="_blank" href={link}>
            <FaEye /> Live version
          </a>
        </div>
        <p dangerouslySetInnerHTML={description} />
      </div>
      <ScrollUp />
    </>
  );
}
