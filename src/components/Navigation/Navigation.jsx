import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <Link to="/ipd">
        <div className="company-name">
        Clever Solutions
        </div>
      </Link>
      <Link to="/about">Apie mus</Link>
      <Link to="/projects">Projektai</Link>
    </div>
  );
};
