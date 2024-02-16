import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaGithub, FaEye } from "react-icons/fa6";
import ScrollUp from "../components/ScrollUp";
import { projectById } from "../../firebase";
import { TailSpin } from "react-loader-spinner";

export default function EachWork() {
  const params = useParams();
  const appId = parseInt(params.id);
  const [app, setApp] = useState({
    description: null,
    giturl: null,
    id: null,
    imgurl: null,
    link: null,
    title: null,
    tools: null,
  });

  useEffect(() => {
    projectById(appId).then((project) => {
      setApp(project);
    });
  }, []);

  const { id, title, imgurl, link, description, giturl, tools } = app;

  const location = useLocation();
  const appAmount = location?.state?.appAmount;
  return id ? (
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

        <img src={imgurl} alt="" className="intro__img" />
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
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <ScrollUp />
    </>
  ) : (
    <div className="spinner">
      <TailSpin
        color="#c0bebe"
        height={70}
        strokeWidth={3}
        radius={"0px"}
      />
    </div>
  );
}
