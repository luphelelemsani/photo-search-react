import { useState, useRef } from "react";
import gsap from "gsap";
import LikeIcon from "../../assets/images/like.svg";
import LeftIcon from "../../assets/images/left.svg";
import RightIcon from "../../assets/images/right.svg";
import "./card.css";

const Card = ({ item, data }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <div className="main-container">
        {scrollX !== 0 && (
          <button
            className="prev"
            onClick={() => slide(-200)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <img src={LeftIcon} alt="Left/Previous Icon" />
          </button>
        )}
        <div className="grid-container" ref={scrl} onScroll={scrollCheck}>
          {item.length > 0
            ? item.map((Val) => {
                return (
                  <div key={Val.id} className="grid-item">
                    <div>
                      <img
                        src={Val.urls.full}
                        alt={Val.title}
                        width="100%"
                        height="400"
                      />
                    </div>
                    <div className="user-container">
                      <div>
                        <span style={{ color: "black", fontWeight: "bold" }}>
                          {Val.user.name}
                        </span>
                      </div>
                      <div className="likes-container">
                        <span>{Val.likes}</span>
                        <img src={LikeIcon} alt="Like Icon" />
                      </div>
                    </div>
                  </div>
                );
              })
            : data.map((Val) => {
                return (
                  <div key={Val.id} className="grid-item">
                    <div>
                      <img
                        src={Val.cover_photo.urls.full}
                        alt={Val.title}
                        width="100%"
                        height="400"
                      />
                    </div>
                    <div className="user-container">
                      <div>
                        <span style={{ color: "black", fontWeight: "bold" }}>
                          {Val.cover_photo.user.name}
                        </span>
                      </div>
                      <div className="likes-container">
                        <span>{Val.cover_photo.user.total_likes}</span>
                        <img src={LikeIcon} alt="Like Icon" />
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        {!scrolEnd && (
          <button
            className="next"
            onClick={() => slide(+200)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <img src={RightIcon} alt="Right/Next Icon" />
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
