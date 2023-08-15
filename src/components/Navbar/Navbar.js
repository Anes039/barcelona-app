import React, { useState } from "react";
import Card from "../../Ul/Card";
import BarcaLogo from "../../IMG/barcaLogo.png";
import arrow from "../../IMG/down arrow.png";
import classes from "./Navbar.module.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ClubDropDown from '../DropDownMenu/ClubDropDown';
import FirstTeamDropDown from "../DropDownMenu/FirstTeamDropDown";
import Carousel from '../Carousel/Carousel';
import Partner from '../PartnerSection/Partner';
import TeamPlayList from "../TeamPlayList/TeamPlayList";
import MainPartners from "../MainPartners/MainPartners";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
const Navbar = () => {


  const carouselItems = [
    { id: "1", img: 'https://www.fcbarcelona.com/photo-resources/2023/08/01/6679919f-9493-461f-b29e-c7dc693afba5/ENG-FLASH30.jpg?width=864&height=676', text: "30% discount on Tickets for Gamper Trophy and La Liga" },
    { id: "2", img: "https://www.fcbarcelona.com/photo-resources/2023/08/14/a638c58a-130f-42df-a21a-3ada685a4719/3200x2000-JOC-puzle-primer_golejador_la_liga-.jpg?width=864&height=676", text: "Solve these opening goalscorer puzzles" },
    { id: "3", img: "https://www.fcbarcelona.com/photo-resources/2023/08/02/0d6f2c93-3c26-4851-a301-0bd20083c094/_SG_9808.jpg?width=864&height=676", text: "On the way up to America" },
  ];
  const [isTicketDropDownShown, setIsTicketDropDownShown] = useState(false);
  const [isCulersDropDownShown, setIsCulersDropDownShown] = useState(false);
/// This code should be refactored into smaller components
//We can do the same we did with FirstTeamDropDown and ClubDropDown, we can do also with culer and ticket!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  const showTicketDropDown = () => {
    setIsTicketDropDownShown(true)
  }
  const hideTicketDropDown = () => {
    setIsTicketDropDownShown(false)
  }
  const showCulerDropDownHandler = () => {
    setIsCulersDropDownShown(true)
  }
  const hideCulerDropDownHandler = () => {
    setIsCulersDropDownShown(false)
  }

  return (
    <Card>
      <div className={classes.navbarContainer}>
      <div className={classes.navbar}>
        <img src={BarcaLogo} alt="" />
        <div className={classes.layer}></div>
        <FirstTeamDropDown/>
        <ClubDropDown/>
        
        
      <Carousel  items = {carouselItems} />
      <Partner/>
      <TeamPlayList/>
      <MainPartners/>
      <SocialMedia/>
      <Footer/>
      <div className={classes.back}></div>
          
        </div>
        
        <div className={classes.text_and_iconnn}>
          <h3>Barca Team</h3>
          <img src={arrow} alt="arrow" />
        </div>

   

        <div className={classes.yellow_menu}>
          <div className={classes.museum}>
            <ConfirmationNumberIcon style={{ color: "#edb62d" }} />
            <h3  onMouseEnter={showTicketDropDown}
            onMouseLeave={hideTicketDropDown}>Tickets & Museums
              
            </h3>
            {isTicketDropDownShown && (
            <div className={`${classes.thirdDropdown} ${classes.fadeIn} show`}>
              <ul>
                <div className={classes.thirdLeftSide}>
                  <li>Men's Football</li>
                  <li>Vip's Man  Football</li>
                  <li>Tour & Museum</li>
                  <li>Basketball</li>
                  <li>Vip's Man Basketball</li>
                  <li>Woman' Football</li>
                  <li>Barcs Atletic</li>
                  <li>Handball</li>
                 
                </div>
                <div className={classes.thirdGrayLine}></div>
                <div>
                <li>Futsal</li>
                  <li>Rock-Hockey</li>
                  <li>Packs and promotions</li>
                  <li>Barca Bussiness</li>
                  <li>All about tickets</li>
                  <li>Barca Cafe</li>
                  <li>Barca Virtual Dream</li>
                </div>
              </ul>
            </div>
          )}
          </div>
          <div className={classes.jersey}>
            <LocalMallIcon
              style={{
                color: "#edb62d",
                width: "50%",
                marginLeft: "-1em",
                marginTop: "-0em",
              }}
            />
            <h3>Shop</h3>
          </div>
          <div className={classes.culers}>
            <Diversity3Icon
              style={{
                color: "#edb62d",
                width: "50%",
              }}
            />
            <h3
            onMouseEnter={showCulerDropDownHandler}
            onMouseLeave={hideCulerDropDownHandler}
            >Culers</h3>
            {isCulersDropDownShown && (
            <div className={`${classes.fourthDropdown} ${classes.fadeIn} show`}>
              <ul>
                <div className={classes.fourthLeftSide}>
                  <li>Premium</li>
                  <li>Draws</li>
                  <li>Barca Tv+</li>
                  <li>Benefits</li>
                  <li>Games</li>
                  
                 
                
                </div>
                </ul>
                </div>
            )}
          </div>
        </div>
        </div>
      
       
    </Card>
  );
};

export default Navbar;
