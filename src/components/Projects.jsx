import React from 'react';
import { Cpu, Bot, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Line Follower Robot',
    icon: Bot,
    desc: 'PID-tuned line follower using IR sensors and DC motors with encoder feedback.',
    link: '#',
  },
  {
    title: 'Obstacle Avoider',
    icon: Cpu,
    desc: 'Ultrasonic-based navigation with simple mapping and visualization in the browser.',
    link: '#',
  },
  {
    title: 'Algorithm Playground',
    icon: Code2,
    desc: 'Interactive visualizations for sorting, graph traversal, and pathfinding.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
          <p className="mt-2 text-white/70">A few things I've been building and experimenting with.</p>
        </div>
        <a href="#contact" className="hidden rounded-md bg-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/20 sm:inline-flex">Contact me</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <a key={p.title} href={p.link} className="group relative rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-2 text-blue-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-lg font-medium text-white">{p.title}</p>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 text-xs text-blue-300 opacity-0 transition group-hover:opacity-100">View details →</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
