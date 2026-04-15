// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="h-full w-full relative flex justify-between">
//       <div className="left-side mt-20">
//         <div>
//           <h1 className="text-7xl font-bold text-white">
//             Elevate every step <br /> you take.
//           </h1>
//         </div>

//         <h1 className="text-4xl mt-15 uppercase text-white">air jordan 18</h1>
//         <div className="h-1 mt-1 w-62 bg-white"></div>

//         <p className="w-92 text-white mt-10">
//           The Air Jordan 18 is one of the most refined and luxurious sneakers in
//           the Jordan lineup, designed to reflect the final chapter of Michael
//           Jordan’s legendary NBA career. Released in 2003, the shoe was inspired
//           by high-end Italian dress shoes.
//         </p>
//       </div>

//       <div className="shoes">
//         <img
//           className="h-160 absolute top-8 left-85"
//           src="/images/Background.png"
//           alt=""
//         />
//       </div>

//       <div className="right-side">
//         <div className="r-upper mt-25 mr-5">
//           <h1 className="font-bold uppercase text-white text-xl flex gap-2 ml-5 items-center">
//             <div className="h-2 w-2 rounded-full bg-white"></div>Select Size
//             (us)
//           </h1>

//           <div className="mt-5 flex  gap-5">
//             <span className="py-2 px-4 border border-gray-400 text-white rounded-full">
//               7
//             </span>
//             <span className="py-2 px-4 border border-gray-400  text-white rounded-full">
//               8
//             </span>

//             <span className="py-2 px-4 border border-gray-400 text-white rounded-full">
//               9
//             </span>
//             <span className="py-2 px-4 border border-gray-400 text-white rounded-full">
//               10
//             </span>
//           </div>
//           <div className="mt-5 flex gap-5">
//             <span className="py-2 px-4   bg-white/20 text-white rounded-full">
//               11
//             </span>
//             <span className="py-2 px-4 border border-gray-400  text-white rounded-full">
//               12
//             </span>

//             <span className="py-2 px-4 border border-gray-400 text-white rounded-full">
//               13
//             </span>
//             <span className="py-2 px-4 border border-gray-400 text-white rounded-full">
//               14
//             </span>
//           </div>
//         </div>

//         <div className="r-apps flex mt-20 gap-5 flex-col items-end justify-end">
//           <i className="ri-instagram-line text-2xl block  bg-white/10 text-white py-2 px-3 rounded-full"></i>
//           <i className="ri-facebook-circle-line text-2xl  bg-white/10 text-white py-2 px-3 rounded-full"></i>
//           <i className="ri-twitter-line text-2xl  bg-white/10 text-white py-2 px-3 rounded-full"></i>
//         </div>

//         <div className="r-CTA">
//             <h1 className="bg-white w-29 font-blakc a uppercase text-black py-3 px-5 rounded-full ">buy now</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#d4ff8c] via-[#7fb069] to-[#1a3d2e] relative flex items-center justify-between px-10 py-16 overflow-hidden">
      
      {/* Left Content */}
      <div className="max-w-[480px] z-10">
        <h1 className="text-[64px] font-extrabold text-white leading-[1.1] tracking-[-1.5px]">
          Elevate every<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>step</span> you take.
        </h1>

        <h2 className="text-3xl font-bold tracking-[8px] uppercase text-white mt-12">
          Green
        </h2>
        <div className="h-px w-24 mt-3" style={{ background: "linear-gradient(to right, #fff, transparent)" }} />

        <p className="w-[420px] text-white/85 text-[14px] leading-[1.8] mt-7">
          The Air Jordan 18 is one of the most refined and luxurious sneakers in the Jordan lineup, designed to reflect the final chapter of Michael Jordan's legendary NBA career.
        </p>

        <div className="flex gap-3 mt-8">
          <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
            Premium
          </span>
          <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
            Leather
          </span>
          <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
            2003
          </span>
        </div>
      </div>

      {/* Center Shoe Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none flex flex-col items-center">
        <img
          src="/images/Background.png"
          alt="Green Air Jordan"
          className="w-[clamp(400px,45vw,650px)] h-auto object-contain"
          style={{ filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))" }}
        />
        
        {/* Circular Line Below Shoe */}
        <svg
          className="absolute top-full -translate-y-12"
          width="500"
          height="80"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          {/* Outer circle line */}
          <ellipse
            cx="250"
            cy="40"
            rx="200"
            ry="35"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          
          {/* Inner accent circle */}
          <ellipse
            cx="250"
            cy="40"
            rx="180"
            ry="30"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
          />
        </svg>

        {/* Rotating animation */}
        <style>{`
          @keyframes rotateLine {
            from {
              transform: translateY(-48px) rotateX(70deg);
            }
            to {
              transform: translateY(-48px) rotateX(70deg);
            }
          }
          
          .shoe-platform {
            animation: rotateLine 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-8 items-end z-10">
        
        {/* Size Selection */}
        <div className="backdrop-blur-md border border-white/20 rounded-2xl p-6">
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Select Size (US)
          </p>
          <div className="flex flex-wrap gap-2 max-w-[220px] justify-end">
            {[7, 8, 9, 10, 11, 12, 13, 14].map((s) => (
              <button
                key={s}
                className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-full text-white/60 text-xs cursor-pointer transition-all hover:border-white hover:text-white hover:bg-white/20"
                style={s === 11 ? { background: "rgba(255,255,255,0.95)", color: "#000", borderColor: "#fff", fontWeight: 700 } : {}}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 flex-col">
          <i className="ri-instagram-line text-2xl text-white/70 hover:text-white cursor-pointer transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full"></i>
          <i className="ri-facebook-circle-line text-2xl text-white/70 hover:text-white cursor-pointer transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full"></i>
          <i className="ri-twitter-line text-2xl text-white/70 hover:text-white cursor-pointer transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full"></i>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4 bg-white/15 border border-white/30 rounded-full p-2 px-6 cursor-pointer hover:bg-white/25 transition-all duration-300">
          <button className="bg-white text-black text-[12px] font-extrabold tracking-[2px] uppercase py-3 px-6 rounded-full hover:shadow-lg duration-300">
            Buy Now
          </button>
          <span className="text-white text-[24px] font-black tracking-[-0.5px]">$199</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-30">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;

