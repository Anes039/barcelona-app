import classes from "./Sidebar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { IoMdArrowDropright } from "react-icons/io";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useContext } from "react";
import { Context } from "../Context/Context";

import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils"; 
const Sidebar = () => {
  const [visible, setVisible] = useState(true);
  const { isOpen, onClickHandler } = useContext(Context);


  const buttonHandler = () => {
    setVisible(!visible);
    console.log("Peshendetje");
  };
  
  return (
    <div className={classes.container}>
      <div
        className={classes.burger_container}
        value={!isOpen}
        onClick={onClickHandler}
      >
        <RxHamburgerMenu value={buttonHandler} className={classes.burger} />
      </div>
      {isOpen && (
        <div
          value={isOpen}
          className={` ${classes.active} ${classes.navigation_content}   `}
        >
          <div className={`${classes.top_menu} ${classes.active}`}>
            <div className={classes.search_bar}>
              <IoIosSearch
                className={`  ${classes.active}    ${classes.search}`}
              />
              <input
                type="text"
                placeholder="Search Fc Barcelona for players,news,video,etc"
              />
            </div>
            <div className={` ${classes.list_container}  ${classes.active} `}>
              <li>
                <div className={`${classes.museum} ${classes.yellow}`}>
                  <div className={classes.ticket_container}>
                    <ConfirmationNumberIcon
                      className={classes.ticket}
                      style={{ color: "#edb62d" }}
                    />
                    <h3>Tickets & Museums</h3>
                    
                  </div>

                  <IoMdArrowDropright className={classes.arroww} />
                </div>
              </li>
              <li>
                <div className={`${classes.jersey} ${classes.yellow}`}>
                  <div className={classes.shop}>
                    <LocalMallIcon style={{}} />
                    <h3>Shop</h3>
                  </div>
                  <IoMdArrowDropright className={classes.arroww} />
                </div>
              </li>
              <li>
                <div className={`${classes.culers} ${classes.yellow}`}>
                  <div className={classes.culers_content}>
                    <Diversity3Icon className={classes.person} style={{}} />
                    <h3>Culers</h3>
                  </div>

                  <IoMdArrowDropright className={classes.arrow} />
                </div>
              </li>
              <li>
                <div className={classes.text_and_icon}>
                  <div className={classes.first}>
                    <h3>First Team</h3>
                    <IoMdArrowDropright className={classes.first_arrow} />
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.text_and_iconn}>
                  <div className={classes.club}>
                    <h3>Club</h3>
                    <IoMdArrowDropright className={classes.club_arrow} />
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.text_and_iconnn}>
                  <div className={classes.barca}>
                    <h3>Barca Team</h3>
                    <IoMdArrowDropright className={classes.white_arrow} />
                  </div>
                </div>
                <div className={classes.close_container}>
                  <IoCloseOutline
                    value={!isOpen}
                    onClick={onClickHandler}
                    className={classes.close}
                  />
                </div>
              </li>
            </div>
          </div>
        </div>
      )}

      <div className={classes.navigation_container}>
        <div className={classes.navigation_content}>
          <div className={classes.top_menu}>
            <IoCloseOutline />
            <div className={classes.search_bar}>
              <IoIosSearch className={classes.search} />
              <input
                type="text"
                placeholder="Search Fc Barcelona for players,news,video,etc"
              />
            </div>
            <div className={classes.list_container}>
              <li>
                <div className={`${classes.museum} ${classes.yellow}`}>
                  <ConfirmationNumberIcon
                    className={classes.ticket}
                    style={{ color: "#edb62d" }}
                  />
                  <h3>Tickets & Museums</h3>{" "}
                  <IoMdArrowDropright className={classes.arroww} />
                </div>
              </li>
              <li>
                <div className={`${classes.jersey} ${classes.yellow}`}>
                  <LocalMallIcon style={{}} />
                  <h3>Shop</h3> <IoMdArrowDropright className={classes.arrow} />
                </div>
              </li>
              <li>
                <div className={`${classes.culers} ${classes.yellow}`}>
                  <Diversity3Icon style={{}} />
                  <h3>Culers</h3>
                  <IoMdArrowDropright className={classes.arrow} />
                </div>
              </li>
              <li>
                <div className={classes.text_and_icon}>
                  <h3>First Team</h3>
                  <IoMdArrowDropright className={classes.white_arrow} />
                </div>
              </li>
              <li>
                <div className={classes.text_and_iconn}>
                  <h3>Club</h3>
                  <IoMdArrowDropright className={classes.white_arroww} />
                </div>
              </li>
              <li>
                <div className={classes.text_and_iconnn}>
                  <h3>Barca Team</h3>
                  <IoMdArrowDropright className={classes.white_arrow} />
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
