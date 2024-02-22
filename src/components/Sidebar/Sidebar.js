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
const Sidebar = ({ isActive }) => {
  const { isOpen, onClickHandler } = useContext(Context);

  return (
    <div>
      <div
        className={classes.burger_container}
        value={!isOpen}
        onClick={onClickHandler}
      >
        <RxHamburgerMenu className={classes.burger} />
      </div>
      {!isOpen && isActive &&(
        <div className={` ${classes.active} ${classes.navigation_content}   `}>
          <div className={`${classes.top_menu} ${classes.active}`}>
            <IoCloseOutline />
            <div className={classes.search_bar}>
              <IoIosSearch className={classes.search} />
              <input
                type="text"
                placeholder="Search Fc Barcelona for players,news,video,etc"
              />
            </div>
            <div className= {` ${classes.list_container}  ${classes.active} ` }>
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
