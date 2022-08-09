import React from "react";

const CardComp = () => {
  return (
    <div className="people">
      {
        cardData.map((item) => {
          return (
            <div key={item.id} className="people-cards">
        <div className="item">
          <div className="img">
            <img src={`/images/Ellipse_${item.image}.jpg`} alt="" boy />
          </div>
          <div className="call">
            <div className="l1"><p><i class="fa-solid fa-book"></i> 35 Lessons</p></div>
            <div className="l2"><p><i class="fa-solid fa-calendar-week"></i>  28th April 2021</p></div>
          </div>
          <div className="child">
            <p>{item.class}</p>
          </div>
          <div className="framer">
            <p>For anyone validating Framer as a professional prototyping tool.</p>
          </div>
        </div>
          <button>Enroll Now</button>
      </div>
          )
        })
      }
    </div>
  );
};

export default CardComp;

const cardData = [
  {
    id: 1,
    image: 1,
    class: "Creche",
  },

  {
    id: 2,
    image: 2,
    class: "Transition",
  },

  {
    id: 3,
    image: 3,
    class: "Nursery",
  },
]