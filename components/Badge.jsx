"use client";

import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  endCountNum,
  beforeCountText,
  endCountText,
}) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="title flex items-center justify-center">
        <div className="text-4xl leading-none">
          {beforeCountText}
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
