import React from "react";
import "../styles/Project.css";

const Project = ({ image, text, date, info, url }) => {
  return (
    <article className="project container mb">
      <div className="project-img">
        <a href={url}>
          <img src={image} alt={text} />
        </a>
      </div>
      <div className="project-info">
        <div className="project-info-inner">
          <h3 className="project-title">{text}</h3>
          <p className="project-date">
            <span>{date}</span>
            {info}
          </p>
          <a href={url} className="project-btn">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="42"
                cy="42"
                r="41"
                transform="matrix(0.70711,0.70711,-0.70711,0.70711,42,-17.39724)"
                stroke="white"
                stroke-width="2"
                data-svg-origin="42 42"
                style={{
                  transformOrigin:
                    "0px 0px; stroke-dashoffset: 0; stroke-dasharray: none",
                }}
              />
              <path
                d="M42.9456 52.9577L44.9879 55L58.0272 41.9607L45.0665 29L43.0242 31.0423L52.6073 40.6254H27V43.4532H52.4502L42.9456 52.9577Z"
                fill="white"
                data-svg-origin="27 29"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px; opacity: 1" }}
              />
            </svg>
            <p className="hover">EN SAVOIR PLUS</p>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
