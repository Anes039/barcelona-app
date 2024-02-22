import Card from "../../Ul/Card";
import classes from "./Instagram.module.css";

const Instagram = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.social_media_list}>
        <li className={classes.instagram_social_container}>
          <a href="https://www.instagram.com/fcbarcelona/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
              alt="spotify"
            />
            <div className={classes.social_media_description}>
              <div className={classes.social_media_name}><h3>Fc Barcelona </h3></div>
              <div className={classes.social_media_handle}> <h3>@fc barcelona </h3></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Instagram;
