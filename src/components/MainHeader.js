import Card from "../Ul/Card";
import classes from "./MainHeader.module.css";
import profile from "../IMG/icon.svg";
import Barca from "../IMG/Barcaa-removebg-preview.png";
import Navbar from "./Navbar/Navbar";
import person from '../IMG/person.png';
const MainHeader = () => {
  
  return (
    <Card>
      <div className={classes.container}>
        <button className={classes.btn}>
          {" "}
          The season begins , come to the stadium ⚽{" "}
          <span className={classes.txt}>Buy Now Your Tickets</span>
        </button>
        <ul className={classes.lista}>
          <li className={{ width: "50%" }}>
            <img  className={classes.person} src='https://cdn-icons-png.flaticon.com/128/9131/9131478.png' alt="" />
          </li>
          <li className={classes.text}>Login</li>
          <li>
            <button className={classes.barca_btn}>
              <img src={Barca} alt="" />
              <h3>Register</h3>
            </button>
          </li>
          <li className={classes.circle}>
            <p className={classes.en}>EN</p>
          </li>
        </ul>
       
      </div>
      <Navbar/>
    </Card>
  );
};
export default MainHeader;
