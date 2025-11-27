import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer / AI & Cloud Systems Developer",
          "Software Developer",
          "AI-Ready Full-Stack Developer / Cloud Systems Engineer",
          "Full Stack Developer - AI Integration, Python/JS, & Azure CI/CD",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
