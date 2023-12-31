import Card from "../../Ul/Card";
import classes from "./SpotifyContainer.module.css";

const Spotify = () => {
  return (
    <Card>
      <ul className={classes.social_media_list}>
        <li className={classes.spotify_social_container}>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3669/3669986.png"
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

export default Spotify;
