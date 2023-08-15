import Card from "../../Ul/Card";
import classes from "./TeamPlayList.module.css";
const TeamPlayList = (isActive) => {
  return (
    <Card
      className={`${classes.imageWrapper} ${isActive ? classes.active : ""} `}
    >
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            {" "}
            <h3>Only for culers</h3>{" "}
          </div>
          <div className={classes.items}>
            <div className={classes.imageWrapper}>
              <img
              isActive = {true}
                src="https://www.fcbarcelona.com/photo-resources/2023/06/15/fc494056-c592-46fe-acf1-65d94e836b1d/400x240-NEW_KIT-EN.png?width=400&height=239"
                alt=""
              />
            </div>
            <div className={classes.imageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2020/10/01/094aa33e-d3fa-4c07-8821-11df8316546e/cat_culers.jpg?width=400&height=239"
                alt=""
              />
            </div>
            <div className={classes.imageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2020/10/01/e6672772-c140-4b18-aea4-b201e0302c08/eng_full_matches.jpg?width=400&height=239"
                alt=""
              />
            </div>
            <div className={classes.imageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2020/10/01/bf7bb427-5379-466c-a392-78f846937383/cat_barca_fun.jpg?width=400&height=239"
                alt=""
              />
            </div>
            <div className={classes.imageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2021/10/28/a5619b85-4284-4571-b0e2-334fd8216d38/mdc_eng.jpg?width=400&height=239"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={classes.secondContainer}>
          <div className={classes.secondWrapper}>
            <div className={classes.secondTitle}>
              {" "}
              <h3>Barca News</h3>{" "}
            </div>
            <div className={classes.Items}>
            <div className={classes.secondImageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2023/08/09/a4d4cbbc-3b6a-471c-9fff-3034957a7383/1920_1080_ES.png?width=640&height=400"
                alt=""
              />
              <p>Barca and Prime video launching </p>
            </div><div className={classes.secondImageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2023/08/09/642840b1-5cec-4909-9ca1-33892ba4ce68/WhatsApp-Image-2023-08-09-at-12.29.25.jpeg?width=640&height=400"
                alt=""
              />
              <p>The Gamper Vlog</p>
            </div><div className={classes.secondImageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2023/08/09/73d9f961-7777-44f9-a2f9-8ee072dbd263/ent_0908-025.jpg?width=640&height=400"
                alt=""
              />
                <p>Recovery session after Gamper</p>
            </div><div className={classes.secondImageWrapper}>
              <img
                src="https://www.fcbarcelona.com/photo-resources/2023/08/09/174a3453-e94a-4024-bb93-0d1778d20997/1596173040.jpg?width=640&height=400"
                alt=""
              />
                <p>Barca most represtented in WC quarters</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default TeamPlayList;
