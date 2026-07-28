import { motion } from "framer-motion";


const services = [
  {
    title: "Landing page",
    description:
      "Menyusun halaman dengan satu pesan utama, satu arah baca, dan satu tujuan yang jelas.",
  },
  {
    title: "Profil bisnis",
    description:
      "Menjelaskan layanan, nilai, dan kontak dengan susunan yang mudah dipindai di ponsel.",
  },
  {
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


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};


export default function App() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative isolate min-h-screen overflow-hidden">
        <motion.img
          src="/images/hero-studio.jpg"
          alt="Ruang kerja studio kreatif dengan cahaya pagi"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(2,6,23,0.52)_50%,rgba(2,6,23,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.18),transparent_30%)]" />


        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-end px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl pb-6">
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.38em] text-white/70"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Nusa Studio
            </motion.p>
            <motion.h1
              className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08, duration: 0.8 }}
            >
              Website yang tenang, tajam, dan mudah dipercaya.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.16, duration: 0.8 }}
            >
              Kami merancang situs untuk bisnis kecil, kreator, dan brand lokal yang ingin tampil rapi sejak
              pandangan pertama, tanpa terasa rumit.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.24, duration: 0.8 }}
            >
              <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Mulai proyek
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Lihat pendekatan
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="layanan" className="bg-white px-6 py-24 text-slate-900 md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.34em] text-slate-500">Yang dikerjakan</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Satu halaman, satu tujuan.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Kami menyusun situs yang membantu pengunjung bergerak dari rasa penasaran ke tindakan dengan alur yang
              jelas dan tidak berlebihan.
            </p>
          </motion.div>


          <div className="mt-12 border-t border-slate-200">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="grid gap-4 border-b border-slate-200 py-7 md:grid-cols-[1fr_2fr] md:items-start"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
              >
                <p className="text-xl font-semibold tracking-tight text-slate-900">{service.title}</p>
                <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-slate-950 px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.34em] text-white/55">Proses</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Dibangun pelan, lalu terasa cepat.
            </h2>
          </motion.div>


          <div className="mt-12 grid gap-0 border-t border-white/10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="grid gap-5 border-b border-white/10 py-7 md:grid-cols-[0.5fr_1fr_2fr] md:items-start"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                <p className="text-sm font-medium tracking-[0.3em] text-white/45">{step.number}</p>
                <p className="text-xl font-semibold tracking-tight text-white">{step.title}</p>
                <p className="max-w-2xl text-base leading-7 text-white/68 md:text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section id="kontak" className="bg-white px-6 py-24 text-slate-900 md:px-10">
        <div className="mx-auto max-w-6xl border-t border-slate-200 pt-16">
          <motion.div
            className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.34em] text-slate-500">Kontak</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Siap membuat website yang lebih jelas dan meyakinkan?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Kirim brief singkat, lalu kita susun halaman yang cocok dengan tujuan bisnismu.
              </p>
            </div>


            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:halo@nusastudio.id"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                halo@nusastudio.id
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      <footer className="border-t border-slate-200 bg-white px-6 py-6 text-sm text-slate-500 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>Nusa Studio</p>
          <p>Website landing page sederhana, bersih, dan siap disesuaikan.</p>
        </div>
      </footer>
    </main>
  );
}
