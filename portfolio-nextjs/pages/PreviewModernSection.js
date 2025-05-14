import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

// This preview section demonstrates the unified, modern style for your portfolio
export default function PreviewModernSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b001a] py-16 px-4">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center gap-8 border border-purple-800/40" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-wide">
          <span className="name">Modern Preview</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-4 text-center max-w-2xl">
          This is a preview of how your sections will look with the upgraded, unified design. It respects your dark background (<span className="text-purple-400">#0b001a</span>), uses your brand gradients, glassmorphism, and modern button & card styles.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <Image
            src="/images/profile-placeholder.png"
            width={120}
            height={120}
            alt="Preview profile"
            className="rounded-full border-4 border-purple-700 shadow-lg"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-wider">Stephen Onyeka</h3>
            <p className="text-gray-300 mb-4">Fullstack Developer | UI/UX Enthusiast</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-purple-800 text-white px-4 py-1 rounded-full text-xs font-semibold">React</span>
              <span className="bg-indigo-700 text-white px-4 py-1 rounded-full text-xs font-semibold">Next.js</span>
              <span className="bg-purple-500/70 text-white px-4 py-1 rounded-full text-xs font-semibold">Node.js</span>
              <span className="bg-white/10 text-purple-300 px-4 py-1 rounded-full text-xs font-semibold border border-purple-400/40">MongoDB</span>
            </div>
            <Link href="#Portfolio" className="shiny-button border-2 border-purple-700 text-white font-bold px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-purple-700/70 transition-colors duration-200">
              See Portfolio <HiMiniArrowTopRightOnSquare />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
