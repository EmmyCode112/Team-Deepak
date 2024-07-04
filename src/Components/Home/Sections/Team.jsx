import React from "react";
import { team } from "../../../assets/asset";
import Team_item from "../../../Components/Team_item";

const Team = () => {
  return (
    <section className="w-[90%] mx-auto mt-[60px] pt-[60px]" id="team">
      <h1 className="text-center py-3  text-4xl text-[#7a6ad8] mb-4">
        OUR TEAM
      </h1>
      <div className="grid-col-3 gap-4 max-xl:gap-y-[170px] grid mt-[150px]">
        {team.map((item, index) => (
          <Team_item
            key={index}
            id={item.id}
            work={item.work}
            image={item.image}
            Name={item.Name}
            media1={item.media1}
            media2={item.media2}
            media3={item.media3}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
