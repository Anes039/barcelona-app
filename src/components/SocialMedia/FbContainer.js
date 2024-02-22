import Card from "../../Ul/Card";
import classes from "./FbContainer.module.css";

const Twitter = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.social_media_list}>
        <li className={classes.fb_social_container}>
          <a href="https://www.facebook.com/fcbarcelona/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png"
              alt="twitter"
            />
            <div className={classes.social_media_description}>
              <div className={classes.social_media_name}><h3>Fc Barcelona</h3></div>
              <div className={classes.social_media_handle}><h3>@fc barcelona </h3></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Twitter;
