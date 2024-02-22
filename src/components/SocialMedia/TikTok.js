import Card from "../../Ul/Card";
import classes from "./TikTok.module.css";
import tikTok from '../../IMG/tik-tok.png';

const TikTok = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.social_media_list}>
        <li className={classes.tiktok_social_container}>
          <a href="https://www.tiktok.com/@fcbarcelona">
            <img
              src={tikTok}
              alt="tiktok"
            />
            <div className={classes.social_media_description}>
              <div className={classes.social_media_name}><h3>Fc Barcelona</h3></div>
              <div className={classes.social_media_handle}><h3>@fc barcelona</h3></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TikTok;
