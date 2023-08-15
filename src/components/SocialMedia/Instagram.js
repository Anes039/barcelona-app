import Card from "../../Ul/Card";
import classes from "./Instagram.module.css";

const Instagram = () => {
  return (
    <Card>
      <ul className={classes.social_media_list}>
        <li className={classes.instagram_social_container}>
          <a href="https://www.instagram.com/fcbarcelona/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
              alt="spotify"
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

export default Instagram;
