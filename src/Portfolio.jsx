// src/Portfolio.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { saveAs } from "file-saver";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  // ------------------- PROJECTS -------------------
  const projects = [
    {
      title: "FoodHub",
      subtitle: "Food Ordering Website",
      description: "Modern food ordering platform with real-time data",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      gradient:
        "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 10, 0.92) 100%)",
      tag: "WEB",
      live: "https://food-hub-ochre.vercel.app/",
      repo: "https://github.com/ApoorvVerma28/FoodHub",
    },
    {
      title: "Samadhaan Foundation",
      subtitle: "Property Management Service",
      description: "Real estate service platform",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      gradient:
        "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 10, 0.92) 100%)",
      tag: "WEB",
      live: "https://samadhaangroups.co.in/",
    },
    {
      title: "Inox Software Solutions",
      subtitle: "Corporate Website",
      description: "Website for Inox Software Solutions",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gradient:
        "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 10, 0.92) 100%)",
      tag: "WEB",
      live: "https://www.inoxsoftwaresolutions.com/",
    },
    {
      title: "E-Shop Cloth Store",
      subtitle: "Ecommerce Website",
      description: "Website for Inox Software Solutions",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      gradient:
        "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 10, 0.92) 100%)",
      tag: "WEB",
      live: "https://www.inoxsoftwaresolutions.com/",
      repo: "https://github.com/ApoorvVerma28/E-shop",
    },
  ];

  const skills = [
    "React JS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "Tailwind CSS",
    "HTML/CSS",
    "Git/GitHub",
    "Redux",
    "Firebase",
    "REST APIs",
    "Responsive Design",
  ];

  // ------------------- DOWNLOAD CV -------------------
  const handleDownloadCV = () => {
    const cvPath = "/assets/Apoorv_Verma_CV.pdf"; // Put your PDF in public/assets/
    saveAs(cvPath, "Apoorv_Verma_CV.pdf");
  };

  // ------------------- RENDER -------------------
  return (
    <div className="min-h-screen bg-[#e8e8e8] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Settings Icon */}

        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-8 mb-8"
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-4"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#000000] shadow-lg">
                <img
                  src="assets/ApoorvPhoto.jpg"
                  alt="Apoorv Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Apoorv Verma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 mb-4"
            >
              Web Developer | Tech Enthusiast | Problem Solver
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 mb-8"
            >
              {[
                {
                  icon: Github,
                  link: "https://github.com/ApoorvVerma28",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/apoorv-verma-165758250/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  link: "mailto:apoorvverma73@gmail.com?subject=Hi%20Apoorv!&body=Hello%20Apoorv,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600  transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 w-full max-w-md mb-8">
              {[
                { value: '1', label: 'Year of work\nexperience' },
                { value: '', label: 'Completed\nprojects' },
                { value: '5+', label: 'Satisfied\ncustomers' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 whitespace-pre-line leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div> */}

            {/* Action Buttons */}
            <div className="flex gap-4 w-full max-w-md">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="flex-1 bg-[#000000] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Download size={18} />
                Download CV
              </motion.button>

             <motion.a
  href="mailto:apoorvverma73@gmail.com?subject=Hi%20Apoorv!&body=Hello%20Apoorv,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
  whileHover={{
    scale: 1.02,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  }}
  whileTap={{ scale: 0.98 }}
  className="flex-1 bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-[#000000] transition-all text-center"
>
  Contact me
</motion.a>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-2 mb-8 grid grid-cols-2 gap-2"
        >
          <motion.button
            onClick={() => setActiveTab("portfolio")}
            className={`py-3 px-6 rounded-xl font-semibold transition-all ${
              activeTab === "portfolio"
                ? "bg-[#000000] text-white"
                : " hover:bg-gray-50"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("skills")}
            className={`py-3 px-6 rounded-xl font-semibold transition-all ${
              activeTab === "skills"
                ? "bg-[#000000] text-white"
                : " hover:bg-gray-50"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.button>
        </motion.div>

        {/* Content */}
        {activeTab === "portfolio" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div
                  className="h-48 relative flex items-center justify-center p-6"
                  style={{ background: project.gradient }}
                >
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold text-white/90 tracking-wider">
                      {project.tag}
                    </span>
                  </div>

                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.subtitle}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4 text-sm font-semibold">
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-1 text-[#000000]"
                      >
                        Live <ExternalLink size={14} />
                      </motion.a>
                    )}
                    {project.repo && (
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-1 text-[#000000]"
                      >
                        Repo <Github size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.0,
                    backgroundColor: "#000000",
                    color: "white",
                  }}
                  className="bg-gray-50 rounded-xl p-4 text-center font-medium text-gray-700 cursor-pointer transition-all"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Soft Skills
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {["Adaptability", "Teamwork", "Management"].map(
                (skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-gray-50 rounded-xl p-6 transition-all"
                  >
                    <div className="text-lg font-semibold text-gray-900">
                      {skill}
                    </div>
                  </motion.div>
                )
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} />
                  <span>apoorvverma73@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} />
                  <span>+91 8707355068</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} />
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-600 text-sm"
        >
          © Apoorv Verma, 2025 All rights reserved
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
