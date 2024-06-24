import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Achievements = () => {
  return (
    <div id="achievements">
      <h1 className="heading">
        Few of my {" "}
        <span className="text-purple">Achievements</span>
      </h1>
      <div className="flex flex-col items-center max-lg mt-20">
        <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="slow"
        />
        <div className="flex fles-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-20">
          {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={img}
                alt={name}
                className="md:w-10 w-5"
              />
              <img
                src={nameImg}
                alt={name}
                className="md:w-40 w-50"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Achievements;
