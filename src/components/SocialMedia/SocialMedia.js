import classes from "../SocialMedia/SocialMedia.module.css";
import Card from "../../Ul/Card";
import FbContainer from "./FbContainer";
import Twitter from './Twitter';
import Spotify from "./SpotifyContainer";
import Youtube from "./Youtube";
import Instagram from "./Instagram";
import TikTok from './TikTok';
const SocialMedia = () => {
  return (
    <Card>
      <div className={classes.container}>
      <div className={classes.title}>
              Follow Fc Barcelona on Social Media
            </div>
        <a href="#">
          <div className={classes.social_media_content}>
           
            <FbContainer/>
            <Twitter/>
            <Spotify/>
            <Youtube/>
            <Instagram />
            <TikTok />
          </div>
        </a>
      </div>
    </Card>
  );
};
export default SocialMedia;
