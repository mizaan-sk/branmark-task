"use client";

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
    <section id="logos" className="py-12 md:py-[3vw] bg-[#F8FAFC] border-y border-[#E7E1FF] overflow-hidden relative select-none">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] mb-6 md:mb-[1.5vw] text-center">
        <h2 className="font-heading font-semibold md:pb-[4vw] text-xl sm:text-2xl md:text-[2.8vw] md:leading-[2.2vw] text-[#0B1B3D]">
          Trusted by brands ready to scale.
        </h2>
      </div>

      {/* Fast-Moving Horizontal Scroll of Client Logos in Grayscale */}
      <div className="flex overflow-hidden relative w-full items-center py-2 md:py-[0.5vw]">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[9vw] bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[9vw] bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="animate-fast-scroll flex items-center gap-10 md:gap-[3.5vw]">
          {[...logos, ...logos, ...logos].map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="h-12 w-28 md:h-[3vw] md:w-[9vw] flex items-center justify-center shrink-0"
            >
              <img
                src={src}
                alt="Client Brand Logo"
                className="max-h-10 md:max-h-[3vw] w-auto max-w-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-200"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
