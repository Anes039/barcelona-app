import Card from "../../Ul/Card";
import classes from "./FbContainer.module.css";

const Twitter = () => {
  return (
    <Card>
      <ul className={classes.social_media_list}>
        <li className={classes.fb_social_container}>
          <a href="https://www.facebook.com/fcbarcelona/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png"
              alt="twitter"
            />
            <div className={classes.social_media_description}>
              <div className={classes.social_media_name}>Fc Barcelona</div>
              <div className={classes.social_media_handle}>@fc barcelona</div>
            </div>
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default Twitter;
