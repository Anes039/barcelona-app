import React, { useState } from "react";
import arrow from "../../IMG/down arrow.png";
import classes from "./ClubDropDown.module.css";

const FirstTeamDropDown = () => {
    const [isClubDropDownShown, setIsClubDropDownShown] = useState(false);

    const showClubDropDownHandler = () => {
        setIsClubDropDownShown(true);
      };
    
      const hideClubDropDownHandler = () => {
        setIsClubDropDownShown(false);
      };

  return (
    <div className={classes.text_and_iconn}>
      <h3
        onMouseEnter={showClubDropDownHandler}
        onMouseLeave={hideClubDropDownHandler}
      >
        Club
        <img src={arrow} alt="arrow" />
      </h3>
      {isClubDropDownShown && (
        <div className={`${classes.secondDropdown} ${classes.fadeIn} show`}>
          <ul>
            <div className={classes.secondLeftSide}>
              <li>Espai Barca</li>
              <li>Spotify Camp nou Park</li>
              <li>Latest</li>
              <li>Kids</li>
              <li>Schedule</li>
              <li>Members</li>
              <li>More Than a Club</li>
              <li>Identity</li>
              <li>Partners</li>
              <li>History</li>
              <li>Barca Foundation</li>
              <li>Barca Club</li>
            </div>
            <div className={classes.secondGrayLine}></div>
            <div>
              <li>Barca Innovation</li>
              <li>La masia</li>
              <li>Documentation Centre</li>
              <li>Barca Events</li>
              <li>Transparency Compilance</li>
              <li>Child Protection</li>
              <li>Sporting Managment</li>
              <li>Press</li>
              <li>Facilities</li>
              <li>Services</li>
              <li>Fitness</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FirstTeamDropDown;
