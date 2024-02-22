import Card from "../../Ul/Card";
import classes from "./Twitter.module.css";

const Twitter = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.social_media_list}>
        <li className={classes.twitter_social_container}>
          <a href="https://twitter.com/FCBarcelona">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4926/4926492.png"
              alt="twitter"
            />
            <div className={classes.social_media_description}>
              <div className={classes.social_media_name}><h3>Fc Barcelona</h3></div>
              <div className={classes.social_media_handle}><h3>@fc barcelona </h3></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Twitter;
