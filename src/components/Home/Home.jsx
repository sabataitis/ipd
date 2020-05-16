import React from "react";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
import { Footer } from "../shared/Footer/Footer.jsx";

export const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.heading}>
        <h1>Interjero dizaino ir architekturos studija</h1>
      </div>
      <div className={classes.about}>
        <div className={classes.title}>
          <h3>Interjero dizaino ir architekturos studija</h3>
        </div>
        <div className={classes.paragraph}>
          <p>
            Įsivaizduokite visiškai jūsų gyvenimo būdui pritaikytus namus.
            Patogi, funkcionaliai išnaudota erdvė, visi daiktai turi savo
            vietas, šviesos visur tiek, kiek jos ir reikia. Apgalvota viskas:
            nuo baldų ar buitinės technikos iki smulkių interjero detalių ir
            jums tinkančių spalvų. Kaskart grįžę namo jaučiate šilumą ir
            jaukumą. Tai patogūs, stilingi, praktiški ir jūsų individualumą
            atspindintys namai.          </p>
        </div>
        <div className={classes.link}>
          <Link to="/about">Musu komanda</Link>
        </div>
      </div>
      <div className={classes.private}>
        <div className={classes.background__projects_private}></div>
        <div className={classes.projects__private}>
          <div className={classes.title}>
            <h3>Interjeras jusu namams</h3>
          </div>
          <div className={classes.paragraph}>
            <p>
              Namai - tai jūsų identitetas, ramybė, saugiausia ir jaukiausia
              erdvė, į kurią norisi grįžti. Kartu tai - jūsų gyvenimo būdo
              atspindys: kiekviena erdvė turi būti pritaikyta jūsų įpročiams ir
              poreikiams. Maksimalus komfortas ir jums miela estetika - toks
              mūsų darbo su jumis rezultatas.
            </p>
          </div>
          <div className={classes.link}>
            <Link to="/projects">Daugiau..</Link>
          </div>
        </div>
      </div>
      <div className={classes.business}>
        <div className={classes.background__projects_business}></div>
        <div className={classes.projects__business}>
          <div className={classes.title}>
            <h3>Visuomeninis interjeras</h3>
          </div>
          <div className={classes.paragraph}>
            <p>
              Pridėtinę vertę jūsų verslui kuriantis ir prie sėkmės
              prisidedantis interjeras. Kaip? Ne tik kuriant tinkamą įvaizdį,
              bet ir maksimaliai pritaikant interjerą jūsų verslo tikslams:
              produktyvumą užtikrinti leidžiantis biuro išplanavimas, tinkamą
              auditoriją žavintis restorano ar parduotuvės salono interjeras ar
              ilgaamžis ir universalus nuomojamo buto įrengimas.
            </p>
          </div>
          <div className={classes.link}>
            <Link to="/projects">Daugiau..</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
