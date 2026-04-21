

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  // --- All Refs ---
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);
  const col5Ref = useRef(null);

  const bottomRef = useRef(null);

  useGSAP(() => {

    // ================================
    // BIG HEADING — slides up from bottom
    // ================================
    gsap.fromTo(headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // CTA BUTTON — fades up after heading
    // ================================
    gsap.fromTo(buttonRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // GRID COLUMNS — each one rises up
    // with a stagger delay so they come
    // in one after another left to right
    // ================================
    gsap.fromTo(
      [col1Ref.current, col2Ref.current, col3Ref.current, col4Ref.current, col5Ref.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,       // each column comes in 0.12s after the previous
        immediateRender: false,
        scrollTrigger: {
          trigger: col1Ref.current,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // BOTTOM BAR — fades in last
    // ================================
    gsap.fromTo(bottomRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 98%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="min-h-screen w-screen bg-gradient-to-b from-[#0a0a0a] to-black text-white px-10 py-20 flex flex-col justify-between"
    >

      {/* TOP BIG CTA */}
      <div>
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-black uppercase leading-tight max-w-4xl"
        >
          Designed for Performance.
          <br />
          Built for Everyday.
        </h1>

        <button
          ref={buttonRef}
          className="mt-10 px-8 py-3 bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition"
        >
          Explore Collection
        </button>
      </div>

      {/* MIDDLE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-20">

        <div ref={col1Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">PRODUCT</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white transition">Running</li>
            <li className="hover:text-white transition">Training</li>
            <li className="hover:text-white transition">Basketball</li>
            <li className="hover:text-white transition">Lifestyle</li>
          </ul>
        </div>

        <div ref={col2Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">FEATURES</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Traction Grip</li>
            <li>Impact Foam</li>
            <li>Ultra Light</li>
            <li>Rapid Dry</li>
          </ul>
        </div>

        <div ref={col3Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">COMPANY</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>About</li>
            <li>Careers</li>
            <li>News</li>
            <li>Investors</li>
          </ul>
        </div>

        <div ref={col4Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">SUPPORT</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div ref={col5Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">STAY UPDATED</h2>
          <p className="text-sm text-white/60 mb-4">
            Get updates on new drops and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 bg-white/10 text-sm outline-none"
            />
            <button className="px-4 bg-white text-black text-sm font-semibold">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div
        ref={bottomRef}
        className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 mt-10 border-t border-white/10 pt-6"
      >
        <p>© 2026 Nike. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white transition">Privacy</span>
          <span className="hover:text-white transition">Terms</span>
          <span className="hover:text-white transition">Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;