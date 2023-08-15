import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:nikaeliashvili18@outlook.com" className="footer__link">
        nikaeliashvili18@outlook.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            target="_blank"
            className="social-list__link"
            href="https://www.upwork.com/freelancers/~012186212d489b97e1"
          >
            <SiUpwork />
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            className="social-list__link"
            href="https://linkedin.com/in/nika-eliashvili-461851264"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            className="social-list__link"
            href="https://github.com/NikaEliashvili"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
