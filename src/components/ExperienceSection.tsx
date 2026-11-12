import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2, Languages, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { EXPERIENCES, EDUCATION, LANGUAGES } from '../data/portfolioData';

interface ExperienceSectionProps {
  id?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id = 'experience' }) => {
  return (
    <section
      id={id}
      className="relative w-full bg-gradient-to-b from-[#05070A] via-[#080E1B] to-[#05070A] text-white px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-10 overflow-hidden"
    >
      {/* Immersive ambient glows */}
      <div className="absolute top-1/3 left-[-5%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Milestones & Track Record</span>
          </div>
          <h2
            id="experience-heading"
            className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Experience Cards (Timeline layout) */}
        <div className="w-full space-y-8 sm:space-y-10 mb-20">
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1} y={30} className="w-full">
              <div
                id={`exp-card-${exp.id}`}
                className="w-full rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-slate-900/90 via-[#070D18]/90 to-[#05070A]/95 border border-cyan-500/25 p-6 sm:p-8 md:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.7)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300 backdrop-blur-xl group"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-wider font-semibold mb-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight group-hover:text-cyan-300 transition-colors"
                    >
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 sm:space-y-4 mb-8">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Pills */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs uppercase tracking-wider px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education & Languages Sub-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education (Col 8) */}
          <div className="lg:col-span-8">
            <FadeIn delay={0.2} y={30}>
              <div className="h-full rounded-3xl bg-[#070D18]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-6">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </div>

                <div className="space-y-6">
                  {EDUCATION.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                          {edu.degree} &ndash;{' '}
                          <span className="text-cyan-300">{edu.field}</span>
                        </h4>
                        <span className="text-xs font-mono text-cyan-400/90 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 shrink-0 self-start sm:self-auto">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">
                        {edu.institution}
                        {edu.location ? `, ${edu.location}` : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Languages & Working Domains (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <FadeIn delay={0.3} y={30} className="h-full">
              <div className="h-full rounded-3xl bg-[#070D18]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/30 transition-colors">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-6">
                    <Languages className="w-4 h-4" />
                    <span>Languages</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {LANGUAGES.map((lang) => (
                      <div
                        key={lang.language}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <span className="text-sm font-semibold text-white">
                          {lang.language}
                        </span>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                          {lang.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-xs text-cyan-200 leading-relaxed font-light">
                    Proven track record delivering client and enterprise applications across Cybersecurity, CRM, Matrimony, Medical AI, and Custom SaaS.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
