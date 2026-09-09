"use client";

import { useState } from "react";
import { MAJOR_PROJECTS, ProjectReference } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Building2, Factory, FileText, Utensils, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectShowcase() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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
    <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white border-t border-neutral-100 my-8 max-w-7xl mx-auto" id="projects">
      <div>
        
        {/* Header: Simple, Monochromatic, Elegant */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-100 gap-4">
          <div>
            <span className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
              {language === "id" ? "PORTOFOLIO PROYEK & REFERENSI" : "PROJECT PORTFOLIO & REFERENCES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 leading-tight">
              {language === "id"
                ? "Instalasi Sistem Pendingin & Energi Skala Besar"
                : "Large-Scale Industrial & Commercial Installations"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-light leading-relaxed md:text-right">
            {language === "id"
              ? "Solusi Absorption Chiller, Cooling Tower, Pipa PPR-CT, dan Pompa Industri terpasang di berbagai pabrik manufaktur dan superblok terkemuka di Indonesia."
              : "Integrated Absorption Chillers, cooling towers, PPR-CT piping, and industrial pumps operating across premier factories and superblocks in Indonesia."}
          </p>
        </div>

        {/* Filter Pills: Clean Monochrome */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-100">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xs font-semibold"
                    : "bg-neutral-50 text-neutral-600 hover:text-neutral-900 border-neutral-200 hover:border-neutral-300 hover:bg-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Simple, Clean & Elegant Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 border border-neutral-200/80 hover:border-neutral-900 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <div>
                {/* Client Label & Location */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                    {project.categoryLabel[language]}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{project.location.split(",")[0]}</span>
                  </div>
                </div>

                {/* Client Name */}
                <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-1">
                  {project.clientName}
                </h3>
                <p className="text-xs text-neutral-500 font-light mb-4">
                  {project.location}
                </p>

                {/* Scope of Work */}
                <div className="mb-4 pb-4 border-b border-neutral-100">
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">
                    {language === "id" ? "Lingkup Pekerjaan" : "Scope of Work"}
                  </span>
                  <p className="text-xs font-medium text-neutral-800 leading-relaxed">
                    {project.scopeOfWork[language]}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">
                    {language === "id" ? "Spesifikasi Sistem" : "Key Highlights"}
                  </span>
                  {project.keyHighlights[language].map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Impact Box */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-medium text-neutral-400 block">
                    {language === "id" ? "Dampak Efisiensi" : "Operational Impact"}
                  </span>
                  <span className="text-xs font-semibold text-neutral-900">
                    {project.impact[language]}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-900 text-neutral-600 hover:text-white flex items-center justify-center transition-colors"
                  title="Inquire"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
