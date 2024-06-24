import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists1 = ["Golang", "C#", "Python", "C++", "Dart", "JavaScript", "C"];
  const leftLists2 = ["Flutter", "React", "Node", "Mongo", "Tailwind"];
  const rightLists1 = ["Flask", "Keras", "PyTorch", "TensorFlow", "Django", "Numpy", "Pandas"];
  const rightLists2 = ["Golang", "Flutter", "React", "Solidity", "SQL", "R"];
  
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "sabychakraborty08@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={`font-poppins text-lg lg:text-3xl max-w-96 font-bold z-20 text-center`}
          >
            {title}
          </div>
          <div className="font-poppins font-light md:max-w-65 md:text-xs lg:text-xl text-xl text-[#C1C2D3] z-10 text-center">
            {description}
          </div>
          
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-4 lg:gap-3 w-fit absolute -right-1 lg:-right-1">
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-2">
                {leftLists1.map((item, i) => (
                  <span
                    key={i}
                    className="lg:pt-5 lg:pb-1 lg:px-6 pt-7 px-4 text-xs lg:text-base opacity-50
                    lg:opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-1 py-4 px-2 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-1 lg:gap-2">
                <span className="lg:py-3 lg:px-1 py-1 px-1  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists1.map((item, i) => (
                  <span
                    key={i}
                    className="lg:pt-5.5 lg:pb-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-40 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-3">
                {leftLists2.map((item, i) => (
                  <span
                    key={i}
                    className="lg:pt-5 lg:pb-5 lg:px-9 py-2 px-1 text-xs lg:text-base opacity-50
                    lg:opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-1 py-4 px-2 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-2 lg:gap-2">
                <span className="lg:py-3 lg:px-1 py-1 px-1  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists2.map((item, i) => (
                  <span
                    key={i}
                    className="lg:pt-5 lg:pb-5 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-40 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
