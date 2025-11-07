import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">About Me</h2>
          <p className="mt-4 text-white/70">
            I'm a curious learner passionate about programming and robotics. I enjoy building
            small robots, tinkering with sensors, and writing clean, reliable code. My focus is on
            learning fundamentals, practicing problem solving, and sharing what I learn along the way.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 sm:max-w-md">
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">C/C++</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Python</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">JavaScript</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Arduino</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Raspberry Pi</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">ROS Basics</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
          <h3 className="text-lg font-medium text-white/90">What I'm Exploring</h3>
          <p className="mt-3 text-white/70">
            Embedded systems, mechanical design for robotics, and algorithms like path planning and
            computer vision. I love turning ideas into working prototypes and learning by doing.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white/90">Microcontrollers</p>
              <p className="mt-1 text-xs text-white/60">AVR, ESP32, STM32</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white/90">Tools</p>
              <p className="mt-1 text-xs text-white/60">VS Code, KiCad, Fusion 360</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
