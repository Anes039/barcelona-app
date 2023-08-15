import Card from "../../Ul/Card";
import classes from "./Twitter.module.css";

const Twitter = () => {
  return (
    <Card>
      <ul className={classes.social_media_list}>
        <li className={classes.twitter_social_container}>
          <a href="https://twitter.com/FCBarcelona">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4926/4926492.png"
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
