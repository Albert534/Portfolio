import React from "react";
import face from "../assets/face.jpg";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Face = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Freelancer"],
    loop: true,
    typeSpeed: 170,
    deleteSpeed: 120,
  });
  return (
    <div className="grid bg-primary py-4">
      <section className="grid gap-0 grid-cols-1 min-[989px]:grid-cols-2">
        <Wrap className="flex justify-center">
          <WrapItem>
            <Avatar
              boxSize="300px"
              name="Aung Paing Oo"
              src={face}
              className="border border-text border-3 mt-[40px] ml-[200px] max-[989px]:ml-[0px] min-[1920px]:ml-[400px]"
            />
          </WrapItem>
        </Wrap>
        <div className="text-text mt-[150px] text-4xl min-w-9 max-[989px]:text-center font-open min-[989px]:text-5xl ">
          {" "}
          <text>
            I am <span className="text-green-400">Aung Paing Oo</span>
          </text>
          <br />
          <br />
          <p>
            and I'm a{" "}
            <span className="text-green-400">
              {text} <Cursor cursorStyle="|" />{" "}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Face;
