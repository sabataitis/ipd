import React from "react";
import classes from "./About.module.scss";
import { Footer } from "../shared/Footer/Footer"
export const About = () => {
  return (
      <>
    <div className={classes.team__page}>
      <div className={classes.heading}>
        <div className={classes.title}>
          <h3>
            <b className={classes.company__name}>Clever solutions</b> tai jau 15
            metų interjero dizainu besirūpinanti profesonalų komanda
          </h3>
        </div>
        <div className={classes.paragraph}>
          <p>
            “Profesionalumas - tai nuoširdaus dėmesio, laiko, patirties ir žinių
            davimas mumis pasitikinčiam žmogui. Tai įsiklausymas, gebėjimas
            bendrauti su užsakovais ir suprasti, kas jiems svarbu ir kaip jie
            nori jaustis savo namuose. Susikalbėjimas, vienodi lūkesčiai ir
            džiuginančio rezultato sukūrimas."
          </p>
        </div>
      </div>
      <div className={classes.team}>
        <div className={classes.title}>
          <h3>Mūsų Komanda</h3>
        </div>
        <div className={classes.team__container}>
          <div className={classes.team__member}>
            <img
              src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="memberImg"
            />
            <h3 className={classes.member__name}>Viktorija Grikeviciute</h3>
            <p className={classes.member__title}>Interjero architektė</p>
          </div>
          <div className={classes.team__member}>
            <img
              src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="memberImg"
            />
            <h3 className={classes.member__name}>Viktorija Grikeviciute</h3>
            <p className={classes.member__title}>Interjero architektė</p>
          </div>
          <div className={classes.team__member}>
            <img
              src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="memberImg"
            />
            <h3 className={classes.member__name}>Viktorija Grikeviciute</h3>
            <p className={classes.member__title}>Interjero architektė</p>
          </div>
          <div className={classes.team__member}>
            <img
              src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="memberImg"
            />
            <h3 className={classes.member__name}>Viktorija Grikeviciute</h3>
            <p className={classes.member__title}>Interjero architektė</p>
          </div>
          <div className={classes.team__member}>
            <img
              src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="memberImg"
            />
            <h3 className={classes.member__name}>Viktorija Grikeviciute</h3>
            <p className={classes.member__title}>Interjero architektė</p>
          </div>
          <div className={classes.team__member}>
            <img
              src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="memberImg"
            />
            <h3 className={classes.member__name}>Viktorija Grikeviciute</h3>
            <p className={classes.member__title}>Interjero architektė</p>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};
