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
              <div className={classes.social_media_name}><h3>Fc Barcelona</h3></div>
              <div className={classes.social_media_handle}> <h3>@fc barcelona </h3></div>
            </div>
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default Spotify;
