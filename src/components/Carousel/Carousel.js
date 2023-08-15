import { useState } from "react";
import classes from '../Carousel/Carousel.module.css';
const CarouselItem = ({ isActive, img, text, onMouseEnter }) => {
  return (
    <div
      className={`${classes.carousel_item} && ${classes.caption} ${isActive ? classes.active : ""}`}
      onMouseEnter={onMouseEnter}
    >
      <img src={img} alt={text} />
      
      <div className={classes.cap_background}></div>
      <h3 className={classes.caption}>{text}</h3>
      <div className="back"></div>
    </div>
  );
}

const Carousel = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(items[0].id);

  const handleMouseEnter = (id) => {
    setActiveItemId(id);
  };

  return (
    <div className={classes.carousel}>
      {items.map((item) => (
        <CarouselItem
          key={item.id}
          img={item.img}
          text={item.text}
          isActive={item.id === activeItemId}
          onMouseEnter={() => handleMouseEnter(item.id)}
        />
      ))}
    </div>
  );
};

export default Carousel;