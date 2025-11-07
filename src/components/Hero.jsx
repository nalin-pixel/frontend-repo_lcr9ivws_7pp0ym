import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Rocket className="h-4 w-4 text-blue-400" />
          <span>Programming • Robotics • Student</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">a student</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          I am a student with interests in programming and robotics — building interactive projects that blend code with hardware.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View Projects
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
