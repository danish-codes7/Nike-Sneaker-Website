// import React, { useState } from "react";

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const shoes = [
//     {
//       name:"Air Jordan 18",

//       color: "Green",
//       image: "/images/Background.png",
//  bg: "from-[#a8ff00] via-[#3a7d2c] to-[#041b12]"  ,
//       price: "$199",
//     },
//     {
//       name:"Air DT Max '96",
//       color: "Red",
//       rotate:"40deg",
//       image: "/images/shoes3.2.png",
// bg: "from-[#ff4d4d] via-[#c1121f] to-[#2b0000]",
//       price: "$219",
//     },
//     {
//       name:"Air More Uptempo",
//       color: "Black",
//       image: "/images/shoes4.2.png",
//   bg: "from-[#2b2b2b] via-[#121212] to-[#000000]",
//       price: "$229",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % shoes.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? shoes.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div
//       className={`w-full h-screen bg-gradient-to-br ${shoes[currentIndex].bg} transition-colors duration-700 relative flex items-center justify-between px-10 overflow-hidden`}
//     >
      

//       {/* SHOES SLIDER */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
//         {shoes.map((shoe, index) => {
//           let position = "translate-x-260 opacity-0 ";

//           if (index === currentIndex) {
//             position = "translate-x-0 opacity-100 z-20 ";
//           } else if (
//             index ===
//             (currentIndex - 1 + shoes.length) % shoes.length
//           ) {
//             position = "-translate-x-260 opacity-0";
//           }

//           return (
//             <img
//               key={index}
//               src={shoe.image}
//               alt={shoe.color}
//               className={`absolute w-[clamp(400px,45vw,650px)] transition-all duration-700 ease-in-out ${position} ${
//   index === currentIndex
//     ? "rotate-0 scale-100 opacity-100"
//     : "rotate-[-18deg] scale-90 opacity-0"
// }`}
//               style={{
//                 filter:
//                   "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
//               }}
//             />
//           );
//         })}

//          {/* Circular Line Below Shoe */}
//         <svg
//           className="absolute top-full -translate-y-12"
//           width="500"
//           height="80"
//           viewBox="0 0 500 80"
//           preserveAspectRatio="none"
//         >
//           {/* Outer circle line */}
//           <ellipse
//             cx="250"
//             cy="40"
//             rx="200"
//             ry="35"
//             fill="none"
//             stroke="rgba(255, 255, 255, 0.3)"
//             strokeWidth="2"
//             strokeDasharray="5,5"
//           />
          
//           {/* Inner accent circle */}
//           <ellipse
//             cx="250"
//             cy="40"
//             rx="180"
//             ry="30"
//             fill="none"
//             stroke="rgba(255, 255, 255, 0.15)"
//             strokeWidth="1"
//           />
//         </svg>

//         {/* Rotating animation */}
//         <style>{`
//           @keyframes rotateLine {
//             from {
//               transform: translateY(-48px) rotateX(70deg);
//             }
//             to {
//               transform: translateY(-48px) rotateX(70deg);
//             }
//           }
          
//           .shoe-platform {
//             animation: rotateLine 20s linear infinite;
//           }
//         `}</style>
//       </div>

      {/* RIGHT CONTENT */}
     

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-30">
//         <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
//         <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
//       </div>

//       {/* ARROWS */}
//       <button
//         onClick={nextSlide}
      //   className="absolute left-50 top-110 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 "
      // >
//         <i className="ri-arrow-left-s-line"></i>
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-50 top-110 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 "
//       >
//        <i className="ri-arrow-right-s-line"></i>
//       </button>

       
       
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState } from "react";

const HeroSection = () => {
  // 🔹 State to track current active shoe index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 All shoe data (acts like a mini database for UI)
  const shoes = [
    {
      name: "Air Jordan 18",
      color: "Green",
      image: "/images/Background.png",
      bg: "from-[#a8ff00] via-[#3a7d2c] to-[#041b12]",
      price: "$199",
    },
    {
      name: "Air DT Max '96",
      color: "Red",
      rotate: "40deg",
      image: "/images/shoes3.2.png",
      bg: "from-[#ff4d4d] via-[#c1121f] to-[#2b0000]",
      price: "$219",
    },
    {
      name: "Air More Uptempo",
      color: "Black",
      image: "/images/shoes4.2.png",
      bg: "from-[#2b2b2b] via-[#121212] to-[#000000]",
      price: "$229",
    },
  ];

  // 🔹 Move to next shoe (loop enabled)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % shoes.length);
  };

  // 🔹 Move to previous shoe (loop enabled)
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? shoes.length - 1 : prev - 1
    );
  };

  return (
    <div
      // 🔹 Dynamic background based on active shoe
      className={`w-full h-screen bg-gradient-to-br ${shoes[currentIndex].bg} transition-colors duration-700 relative flex items-center justify-between px-10 overflow-hidden`}
    >
      
      {/* ================= LEFT CONTENT ================= */}
      
      <div className="max-w-[480px] z-10 mt-20">
        <h1 className="text-[64px] font-extrabold text-white leading-[1.1] tracking-[-1.5px]">
          Elevate every<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>step</span> you take.
        </h1>

        <h2 className="text-3xl font-bold tracking-[8px] uppercase text-white mt-12">
          {shoes[currentIndex].name}
        </h2> 
        <div className="h-[2px] w-82 mt-3" style={{ background: "linear-gradient(to right, #fff, transparent)" }} />

        <div className="h-full w-full pt-45">

       

        <p className="w-[420px] text-white/85 text-[14px] leading-[1.8] mt-7">
          The Air Jordan 18 is one of the most refined and luxurious sneakers in the Jordan lineup, designed to reflect the final chapter of Michael Jordan's legendary NBA career.
        </p>

        

        <div className="flex gap-3 mt-8">
          <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
            Premium
          </span>
          <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
            2015
          </span> 
        </div>
         </div>
      </div>

      {/* ================= SHOES SLIDER ================= */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
        
        {/* Loop through all shoes */}
        {shoes.map((shoe, index) => {

          // 🔹 Default position (off-screen right)
          let position = "translate-x-260 opacity-0";

          // 🔹 Active shoe (center)
          if (index === currentIndex) {
            position = "translate-x-0 opacity-100 z-20";
          }

          // 🔹 Previous shoe (left side exit)
          else if (
            index === (currentIndex - 1 + shoes.length) % shoes.length
          ) {
            position = "-translate-x-260 opacity-0";
          }

          return (
            <img
              key={index}
              src={shoe.image}
              alt={shoe.color}

              // 🔹 Combined animation: position + rotation + scale
              className={`absolute w-[clamp(400px,45vw,650px)] transition-all duration-700 ease-in-out ${position} ${
                index === currentIndex
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-[-18deg] scale-90 opacity-0"
              }`}

              // 🔹 Soft shadow for depth
              style={{
                filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
              }}
            />
          );
        })}

        {/* ================= PLATFORM DECOR ================= */}
        
        {/* Circular platform below shoe */}
        <svg
          className="absolute top-full -translate-y-12"
          width="500"
          height="80"
          viewBox="0 0 500 80"
        >
          <ellipse
            cx="250"
            cy="40"
            rx="200"
            ry="35"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          <ellipse
            cx="250"
            cy="40"
            rx="180"
            ry="30"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex flex-col gap-8 items-end z-10">

         {/* Size Selection */}
        <div className="backdrop-blur-md border mt-10 border-white/20 rounded-2xl p-6">
        <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-4">  <span className="w-2 h-2 rounded-full bg-white block" />Shoe Color : {shoes[currentIndex].color} </p>
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
        <div className="flex items-center mt-10 gap-4 bg-white/15 border border-white/30 rounded-full p-2 px-6 cursor-pointer hover:bg-white/25 transition-all duration-300">

        
          <button  className="bg-white text-black text-[12px] font-extrabold tracking-[2px] uppercase py-3 px-6 rounded-full hover:shadow-lg duration-300">
            Buy Now
          </button>
          <span className="text-white text-[24px] font-black tracking-[-0.5px]"> {shoes[currentIndex].price}</span>
        </div>
      </div>


      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-30">
        <span className="text-white/50 text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      {/* ================= ARROWS ================= */}

      {/* Previous */}
      <button
        onClick={prevSlide}
         className="absolute left-50 top-120 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 "
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
         className="absolute right-50 top-120 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 "
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
};

export default HeroSection;
