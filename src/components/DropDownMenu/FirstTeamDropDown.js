import React, { useState } from "react";
import arrow from "../../IMG/down arrow.png";
import classes from "./FirstTeamDropDown.module.css";


const FirstTeamDropDown = () => {
  const [isFirstTeamDropDownShown, setIsFirstTeamDropDownShown] =
    useState(false);

  const showFirstTeamDropDownHandler = () => {
    setIsFirstTeamDropDownShown(!isFirstTeamDropDownShown);
  };

  return (
    <div className={classes.text_and_icon}>
      <h3
        onClick={showFirstTeamDropDownHandler}
      >
        First Team
        <img src={arrow} alt="arrow" />
      </h3>
      {isFirstTeamDropDownShown && (
        <div key={!isFirstTeamDropDownShown} className={`${classes.dropdown} ${classes.fadeIn} show`}>
          {
            <ul key={!isFirstTeamDropDownShown}>
              <div  className={classes.leftSide}>
                <li>Latest</li>
                <li>Schedule</li>
                <li>Tickets</li>
                <li>Standings</li>
                <li>Results</li>
              </div>
              <div className={classes.grayLine}></div>
              <div>
                <li>Players</li>
                <li>Photos</li>
                <li>Honours</li>
                <li>Features</li>
              </div>
            </ul>
          }
        </div>
      )}
    </div>
  );
};

export default FirstTeamDropDown;
