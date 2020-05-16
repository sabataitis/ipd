import React from "react";
import classes from "./Projects.module.scss";
import "./Style.scss";
import { useState } from "react";

export const Projects = () => {
  function handleClick(arg, event) {
    changeState(arg);
  }
  function renderProjects(category) {
    if (category === "all") {
      return (
        <div className={classes.business__container}>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1574643065818-b1c2ff1ae03f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1549407978-6c7fac40b8c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1464029902023-f42eba355bde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1512324725833-abbc95d06090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1273&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1549407978-6c7fac40b8c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
        </div>
      );
    }
    if (category === "private") {
      return (
        <div className={classes.business__container}>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1574643065818-b1c2ff1ae03f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1512324725833-abbc95d06090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1273&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
        </div>
      );
    }
    if (category === "business") {
      return (
        <div className={classes.business__container}>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1549407978-6c7fac40b8c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1464029902023-f42eba355bde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
          <div className={classes.container__item}>
            <img
              src="https://images.unsplash.com/photo-1549407978-6c7fac40b8c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={classes.container__overlay}>
              <h3 className={classes.overlay__text}>Projekto pavadinimas</h3>
            </div>
          </div>
        </div>
      );
    }
  }
  const [state, changeState] = useState("all");
  return (
    <div>
      <div className={classes.projects__landing}>
        <div className={classes.projects__heading}>
          <h3>Mūsų Projektai</h3>
        </div>
        <div className={classes.buttons}>
          <button
          id={state==='all'?'active': ''}
            name="all"
            href="Visi"
            onClick={(event) => handleClick("all", event)}
          >
            Visi
          </button>
          <button
          id={state==='business'?'active': ''}
            name="business"
            onClick={(event) => handleClick("business", event)}
          >
            Visuomeniniai
          </button>
          <button
          id={state==='private'?'active': ''}
            name="private"
            onClick={(event) => handleClick("private", event)}
          >
            Privatūs
          </button>
        </div>
      </div>
      {renderProjects(state)}
    </div>
  );
};
