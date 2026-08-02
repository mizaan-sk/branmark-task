"use client";

import { motion } from "framer-motion";

export default function TrustedBrands() {
  const logos = [
    "/logos/imageye___-_imgi_10_90149438.cms_.webp",
    "/logos/imageye___-_imgi_11_tropolite-logo.webp",
    "/logos/imageye___-_imgi_13_speridian_logo.webp",
    "/logos/imageye___-_imgi_14_Prestige_Group.png",
    "/logos/imageye___-_imgi_15_eb72de5b-eaef-4085-a3fa-a9ba24dbc443.__CR01350175_PT0_SX350_V1___.png.webp",
    "/logos/imageye___-_imgi_16_images-1.png",
    "/logos/imageye___-_imgi_17_eatfit.png",
    "/logos/imageye___-_imgi_21_Duroflex4dd71755-f634-4366-85ba-1c3d5ce9fbf637e8c77c-13c5-4c75-b985-d88c09061dd6.jpg",
    "/logos/imageye___-_imgi_23_HEBBEVU_FRESH_3_2a674e6b-5aca-4fd1-8f89-e151768d1e83-e1732018199858.png",
    "/logos/imageye___-_imgi_24_Logo.png",
    "/logos/imageye___-_imgi_25_pantaloons-logo-1.png",
    "/logos/imageye___-_imgi_26_manipal_pro_learn_logo.png",
    "/logos/imageye___-_imgi_27_IBM-Logo-client.png",
    "/logos/imageye___-_imgi_29_TWC_logo_without_R-01.png",
    "/logos/imageye___-_imgi_45_images-2-1.webp",
    "/logos/imageye___-_imgi_47_1673953662154.webp",
    "/logos/imageye___-_imgi_52_Built_In_Logo.webp",
    "/logos/imageye___-_imgi_53_The_Financial_Express_India_Logo.webp",
    "/logos/imageye___-_imgi_5_1675945195409_Screenshot-2023-02-09-at-7.10.51-AM.png",
    "/logos/imageye___-_imgi_71_manipal_pro_learn_logo-480x136.png",
    "/logos/imageye___-_imgi_7_image-5.webp",
    "/logos/imageye___-_imgi_91_speridian_logo-480x115.webp",
  ];

  return (
    <section id="brands" className="py-16 md:py-[4vw] bg-[#ffffff] border-b border-purple-100 overflow-hidden relative select-none">
      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-4 md:px-[2vw] mb-8 md:mb-[2.5vw] text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-[2.6vw] font-semibold text-[#180336] tracking-tight"
        >
          Trusted by brands ready to scale.
        </motion.h2>
      </div>

      {/* Infinite Fast-Moving Horizontal Marquee of Client Logos */}
      <div className="flex overflow-hidden relative w-full items-center py-4 md:py-[1vw]">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[8vw] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[8vw] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-fast-scroll flex items-center gap-10 md:gap-[3.5vw]">
          {[...logos, ...logos, ...logos].map((src, idx) => (
            <motion.div
              key={`${src}-${idx}`}
              whileHover={{ scale: 1.08 }}
              className="h-12 w-28 md:h-[3.5vw] md:w-[9vw] flex items-center justify-center shrink-0"
            >
              <img
                src={src}
                alt="Client Brand Logo"
                className="max-h-10 md:max-h-[3.2vw] w-auto max-w-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


