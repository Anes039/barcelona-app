import Card from "../../Ul/Card";
import classes from "./TikTok.module.css";
import tikTok from '../../IMG/tik-tok.png';

const TikTok = () => {
  return (
    <Card>
      <ul className={classes.social_media_list}>
        <li className={classes.tiktok_social_container}>
          <a href="https://www.tiktok.com/@fcbarcelona">
            <img
              src={tikTok}
              alt="tiktok"
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

export default TikTok;
