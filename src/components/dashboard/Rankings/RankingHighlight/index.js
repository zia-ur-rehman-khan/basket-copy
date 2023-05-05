import React from "react";
import up from "public/profile/up.png";
import down from "public/profile/down.png";
import Image from "next/image";

const data = [
  {
    key: 1,
    evolution: true,
    score: 65,
    no: 105,
  },
];

const RankingHighlight = () => {
  return (
    <div className="ranking__box">
      <div className="ranking__header">
        <div>
          <h4>No</h4>
        </div>
        <div>
          <h4>My Score</h4>
        </div>
        <div>
          <h4>Evolution</h4>
        </div>
      </div>
      <div className="ranking__body">
        {data.map((info) => (
          <>
            <div>
              <h3>{info.no}</h3>
            </div>
            <div>
              <h3>{info.score}</h3>
            </div>
            <div>
              <span>
                {info.evolution ? (
                  <Image src={up} alt=" " />
                ) : (
                  <Image src={down} alt=" " />
                )}
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RankingHighlight;
