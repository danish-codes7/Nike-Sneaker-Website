import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const ShoesDetails = () => {
  return (
    <div className="min-h-screen w-screen  rounded-t-4xl bg-gradient-to-br from-[#fafafa] via-[#e5e5e5] to-[#404040]">
      <div className="h-1/2 w-full flex items-center pt-20 ">
        <div className="shoes-div h-full flex items-center w-[50%] ">
          <img className="h-60 pl-2" src="/images/tempo-sole.png" alt="" />
        </div>

        <div className="h-full w-[50%] p-5 pt-15 pl-15">
          <div className="heading">
            <h1 className="text-6xl uppercase text-black/90 font-black">
              3d shaped
            </h1>
            <h1 className="text-6xl uppercase text-black/90 font-black">
              midfoot shank
            </h1>
          </div>

          <div className="para font-light w-150 leading-7 mt-5">
            <p>
              Designed for grip under pressure, the textured rubber outsole
              offers reliable traction and long-lasting durability a
              precision-crafted rubber outsole ensures confident footing,
              combining durability with responsive ground control durable rubber
              outsole built for maximum grip and control.
            </p>
          </div>
        </div>
      </div>

      <div className="h-1/2 mt-25 w-full flex items-center ">
        <div className="h-full w-[50%] p-5 pt-15 pl-15">
          <div className="heading mt-10 ">
            <h1 className="text-6xl uppercase text-black/90 font-black">
              phylon-injected
            </h1>
            <h1 className="text-6xl uppercase text-black/90 font-black">
              midsole
            </h1>
          </div>

          <div className="para font-light w-150 leading-7 mt-5">
            <p>
              Phylon-injected cushioning absorbs impact while maintaining a
              lightweight, responsive ride. Built for movement, the phylon
              midsole delivers consistent comfort without added weight. Designed
              to handle impact, the injected phylon core provides smooth and
              stable transitions..
            </p>
          </div>
        </div>

        <div className="shoes-div h-full flex items-center w-[50%] ">
          <img className="h-100" src="/images/tempo-2.png" alt="" />
        </div>
      </div>

      <div className="h-1/2 mt-25 w-full flex items-center ">
        <div className="shoes-div h-full flex items-center w-[50%] ">
          <img className="h-90 pl-20 " src="/images/tempo-3.png" alt="" />
        </div>

        <div className="h-full w-[50%] p-5 pt-15 pl-15">
          <div className="heading">
            <h1 className="text-6xl uppercase text-black/90 font-black">
              mess innersleeve
            </h1>
          </div>

          <div className="para font-light w-150 leading-7 mt-5">
            <p>
              A breathable mesh inner sleeve wraps the foot for a snug,
              sock-like fit and all-day comfort. Lightweight mesh construction
              enhances airflow while providing a secure, adaptive feel
              Engineered mesh inner sleeve delivers targeted breathability and a
              locked-in fit during movement.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen pt-20  w-screen relative ">
        <div className="h-full relative w-full">
          <h1 className="text-7xl pl-10 pb-10 font-black">
            Performance <br /> that proves.
          </h1>

          <img className="h-90 pl-50 pt" src="/images/nike-logo.png" alt="" />

          <img
            className="h-90  absolute rotate-10  top-60 left-170 z-50"
            src="/images/tempo-4.png"
            alt=""
          />

          <div className="absolute top-150 left-130 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
            <h1 className="font-black text-lg">Traction Grip</h1>
          </div>

          <div className="absolute top-120 left-110 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
            <h1 className="font-black text-lg">Ultra Light</h1>
          </div>

          <div className="absolute top-50 left-130 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
            <h1 className="font-black text-lg">Eco Build</h1>
          </div>

          <div className="absolute top-20 left-200 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
            <h1 className="font-black text-lg">Impact Foam</h1>
          </div>
          <div className="absolute top-60 left-280 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
            <h1 className="font-black text-lg">Strong Stitch</h1>
          </div>

          <div className="absolute top-100 left-300 bg-white rounded-full px-5 py-2 shadow-2xl inline-block">
            <h1 className="font-black text-lg">Rapid Dry</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetails;
