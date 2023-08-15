import Card from "../../Ul/Card";
import classes from "./Youtube.module.css";

const Youtube = () => {
  return (
    <Card>
      <ul className={classes.social_media_list}>
        <li className={classes.youtube_social_container}>
          <a href="https://www.youtube.com/user/fcbarcelona">
            <img
              src="https://cdn-icons-png.flaticon.com/128/725/725361.png"
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

export default Youtube;
