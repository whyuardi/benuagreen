"use client";

import { useState } from "react";
import { MAJOR_PROJECTS, ProjectReference } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Factory, FileText, Utensils, MapPin, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function ProjectShowcase() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectReference | null>(null);

  const categories = [
    { id: "all", label: language === "id" ? "Semua Proyek" : "All Projects", icon: Building2 },
    { id: "industrial", label: language === "id" ? "Manufaktur & Kimia" : "Industrial & Chemical", icon: Factory },
    { id: "pulp-paper", label: language === "id" ? "Pulp & Kertas" : "Pulp & Paper Mill", icon: FileText },
    { id: "food-beverage", label: language === "id" ? "Makanan & Minuman" : "Food & Beverage", icon: Utensils },
    { id: "commercial", label: language === "id" ? "Mall & Komersial" : "Commercial & Malls", icon: Building2 },
  ];

  const filteredProjects = selectedCategory === "all"
    ? MAJOR_PROJECTS
    : MAJOR_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 bg-neutral-900 text-white rounded-3xl my-12 max-w-7xl mx-auto overflow-hidden relative" id="projects">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "id" ? "Portofolio Klien Utama" : "Major Client References"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4">
            {language === "id"
              ? "Dipercaya oleh Industri Terkemuka & Superblock Nasional"
              : "Trusted by Major Industrial Enterprises & Commercial Superblocks"}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            {language === "id"
              ? "Solusi terintegrasi sistem pendingin Chiller, Cooling Tower, Pipa PPR, dan Pompa Efisiensi Tinggi yang terpasang di berbagai fasilitas manufaktur dan gedung komersial prestisius di Indonesia."
              : "Integrated chillers, cooling towers, industrial PPR piping, and high-efficiency pumping infrastructure operating across premier industrial manufacturing plants and commercial properties in Indonesia."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-white text-neutral-900 border-white shadow-md font-semibold"
                    : "bg-white/5 text-neutral-400 hover:text-white border-white/10 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-800/80 rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-950/30"
            >
              <div>
                {/* Client Label & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                    {project.categoryLabel[language]}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span>{project.location.split(",")[0]}</span>
                  </div>
                </div>

                {/* Client Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug mb-2">
                  {project.clientName}
                </h3>

                {/* Scope of Work */}
                <p className="text-xs text-neutral-300 font-medium mb-4 pb-3 border-b border-white/10">
                  {project.scopeOfWork[language]}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.keyHighlights[language].map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Box */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[11px] text-neutral-300 leading-relaxed font-light">
                <span className="text-white font-semibold block mb-0.5">
                  {language === "id" ? "Hasil & Dampak:" : "Project Result:"}
                </span>
                {project.impact[language]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Banner Strip */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
              {language === "id" ? "Kemitraan Jangka Panjang" : "Long-Term Partnerships"}
            </span>
            <p className="text-xs text-neutral-500 font-light">
              {language === "id"
                ? "Didukung layanan purna jual, suku cadang siap pasang, dan garansi operasional."
                : "Backed by guaranteed spare parts availability, technician supervision, and warranty support."}
            </p>
          </div>

          <a
            href="https://wa.me/628176779719?text=Halo%20Benua%20Green%20Energy,%20saya%20tertarik%20melihat%20studi%20kasus%20dan%20proposal%20rekayasa%20proyek%20serupa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100 transition-all cursor-pointer shrink-0"
          >
            <span>{language === "id" ? "Konsultasi Kebutuhan Proyek" : "Consult Project Engineering"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
