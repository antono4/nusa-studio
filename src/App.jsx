import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Landing page",
    description:
      "Menyusun halaman dengan satu pesan utama, satu arah baca, dan satu tujuan yang jelas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Profil bisnis",
    description:
      "Menjelaskan layanan, nilai, dan kontak dengan susunan yang mudah dipindai di ponsel.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Portofolio ringkas",
    description:
      "Menampilkan karya tanpa membuat pengunjung kehilangan fokus atau merasa penuh sesak.",
  },
];


const steps = [
  {
    number: "01",
    title: "Pahami tujuan",
    description:
      "Kita pilih satu hasil utama, seperti lead, booking, atau penjualan, lalu membangun halaman di sekelilingnya.",
  },
  {
    number: "02",
    title: "Bentuk cerita",
    description:
      "Struktur, kata-kata, dan visual disusun agar pengunjung paham cepat tanpa merasa dipaksa.",
  },
  {
    number: "03",
    title: "Rilis dan rapikan",
    description:
      "Halaman dites di berbagai layar, disempurnakan, lalu disiapkan untuk tampil ringan dan konsisten.",
  },
];


const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};


const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["layanan", "proses", "kontak"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };


  return (
    <main className="bg-slate-950 text-slate-100 scroll-smooth">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-sm font-medium tracking-[0.25em] text-white/90 hover:text-white transition-colors">
              NUSA STUDIO
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#kontak"
                onClick={(e) => { e.preventDefault(); scrollToSection("#kontak"); }}
                className="ml-4 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
              >
                Mulai proyek
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("#kontak")}
                  className="w-full mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Mulai proyek
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-40" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 md:px-10">
          <motion.div
            className="max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Studio kreatif independen
            </motion.div>
            <motion.h1
              className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
              variants={fadeUp}
            >
              Website yang{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  tenang
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                tajam
              </span>
              , dan{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                mudah dipercaya
              </span>
              .
            </motion.h1>
            <motion.p
              className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
              variants={fadeUp}
            >
              Kami merancang situs untuk bisnis kecil, kreator, dan brand lokal yang ingin tampil rapi sejak
              pandangan pertama, tanpa terasa rumit.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              variants={fadeUp}
            >
              <button
                onClick={() => scrollToSection("#kontak")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 active:scale-95"
              >
                Mulai proyek
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("#layanan")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                Lihat layanan
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>


      {/* Services Section */}
      <section id="layanan" className="bg-white px-6 py-28 text-slate-900 md:px-10 md:py-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-medium uppercase tracking-[0.34em] text-indigo-600">
              Yang dikerjakan
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Satu halaman, satu tujuan.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Kami menyusun situs yang membantu pengunjung bergerak dari rasa penasaran ke tindakan dengan alur yang
              jelas dan tidak berlebihan.
            </motion.p>
          </motion.div>


          <div className="mt-16 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01, backgroundColor: "rgb(249,250,251)" }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-indigo-200 hover:shadow-lg md:grid md:grid-cols-[auto_1fr_2fr] md:items-center md:gap-8 md:p-10"
              >
                <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex items-center gap-4 md:block">
                  <div className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">{service.title}</h3>
                </div>
                <p className="mt-2 text-base leading-relaxed text-slate-600 md:mt-0 md:text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section id="proses" className="bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-28 text-white md:px-10 md:py-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-medium uppercase tracking-[0.34em] text-cyan-400/80">
              Proses
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Dibangun pelan, lalu terasa cepat.
            </motion.h2>
          </motion.div>


          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-purple-500/50 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative md:grid md:grid-cols-[auto_1fr_2fr] md:gap-8 md:items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-start justify-center pt-2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                    >
                      <span className="text-sm font-bold text-cyan-400">{step.number}</span>
                    </motion.div>
                  </div>

                  <div className={`py-6 md:py-8 ${index !== steps.length - 1 ? "border-b border-white/10 md:border-none" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-bold text-cyan-400">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                    </div>
                    <p className="text-base leading-relaxed text-white/60 md:text-lg md:pl-16">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="kontak" className="bg-white px-6 py-28 text-slate-900 md:px-10 md:py-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center"
          >
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.34em] text-indigo-600">
                Kontak
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Siap membuat website yang lebih jelas dan meyakinkan?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                Kirim brief singkat, lalu kita susun halaman yang cocok dengan tujuan bisnismu.
              </p>
              
              {/* Social Links */}
              <div className="mt-8 flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-900 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-900 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-900 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>


            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="mailto:halo@nusastudio.id"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-5 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/30 active:scale-95"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                halo@nusastudio.id
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-emerald-500/20 bg-emerald-50 px-8 py-5 text-base font-semibold text-emerald-700 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-emerald-100 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white">Nusa Studio</p>
              <p className="mt-1 text-sm text-white/50">Website landing page sederhana, bersih, dan siap disesuaikan.</p>
            </div>
            <p className="text-sm text-white/40">© 2025 Nusa Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
