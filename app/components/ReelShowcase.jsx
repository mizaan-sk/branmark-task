"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Full catalog of 17 videos from /public/videos
const REEL_VIDEOS = [
  {
    id: "chicken-loaded-fries",
    videoSrc: "/videos/Chicken%20Loaded%20Fries.mp4",
    title: "Chicken Loaded Fries Promo",
    handle: "@LoadedBites",
    category: "Food & Dining",
    tag: "Viral Recipe",
    avatarLetter: "L",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "doriana-reel",
    videoSrc: "/videos/Doriana%20Reel.mp4",
    title: "Doriana Fashion Spotlight",
    handle: "@DorianaOfficial",
    category: "Fashion & Apparel",
    tag: "Brand Film",
    avatarLetter: "D",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "red-thai-curry",
    videoSrc: "/videos/Red%20Thai%20Curry.mp4",
    title: "Authentic Red Thai Curry",
    handle: "@CurryCraze",
    category: "Food & Dining",
    tag: "Foodie Hook",
    avatarLetter: "C",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "esah-rakhi-cinematic",
    videoSrc: "/videos/Esah%20Rakhi%20Cinematic%20Reel%2025_.mp4",
    title: "Cinematic Festive Collection",
    handle: "@EsahCouture",
    category: "Fashion & Apparel",
    tag: "Cinematic",
    avatarLetter: "E",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "esah-rakhi-reel",
    videoSrc: "/videos/Esah%20Rakhi%20Reel%2025_.mp4",
    title: "Rakhi Heritage Lookbook",
    handle: "@EsahEthnic",
    category: "Fashion & Apparel",
    tag: "Lookbook",
    avatarLetter: "E",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "forever-chasing-light",
    videoSrc: "/videos/Forever%20chasing%20light.mp4",
    title: "Forever Chasing Light",
    handle: "@ChasingLightStudio",
    category: "Cinematic & Ads",
    tag: "Visual Art",
    avatarLetter: "C",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "goggle",
    videoSrc: "/videos/Goggle.mp4",
    title: "Urban Eyewear Launch",
    handle: "@SpectraEyewear",
    category: "E-Commerce & Brands",
    tag: "Product Reel",
    avatarLetter: "G",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "jal",
    videoSrc: "/videos/Jal.mp4",
    title: "Purity In Every Drop",
    handle: "@JalHydration",
    category: "Food & Dining",
    tag: "Commercial",
    avatarLetter: "J",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "script-6",
    videoSrc: "/videos/Script%206.mp4",
    title: "High-Converting Ad Hook",
    handle: "@RivreachCreatives",
    category: "E-Commerce & Brands",
    tag: "High ROI Ad",
    avatarLetter: "R",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "v1-showcase",
    videoSrc: "/videos/V1.mp4",
    title: "Dynamic Product Showcase",
    handle: "@VelocityBrands",
    category: "E-Commerce & Brands",
    tag: "UGC Reel",
    avatarLetter: "V",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "v6-edit",
    videoSrc: "/videos/V6.mp4",
    title: "Trendsetter Beat Edit",
    handle: "@PulseMedia",
    category: "Cinematic & Ads",
    tag: "Performance Ad",
    avatarLetter: "P",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "video-2026-cut",
    videoSrc: "/videos/Video%202026-.mp4",
    title: "Visual Brand Identity",
    handle: "@VisionaryLab",
    category: "Cinematic & Ads",
    tag: "Creative Cut",
    avatarLetter: "V",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "video-2026-07-27",
    videoSrc: "/videos/Video%202026-07-27.mp4",
    title: "Summer Collection Drop",
    handle: "@LuxeAesthetic",
    category: "Fashion & Apparel",
    tag: "Campaign",
    avatarLetter: "L",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "video-2026-08-11-a",
    videoSrc: "/videos/Video%202026-08-11%20A.mp4",
    title: "Urban Motion Cinematic",
    handle: "@AeroDynamic",
    category: "Cinematic & Ads",
    tag: "Short Form",
    avatarLetter: "A",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "video-2026-08-11",
    videoSrc: "/videos/Video%202026-08-11.mp4",
    title: "Engagement Powerhouse",
    handle: "@PrimeReels",
    category: "E-Commerce & Brands",
    tag: "Social Hook",
    avatarLetter: "P",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
  {
    id: "video-retail-rush",
    videoSrc: "/videos/2026-07-27.mp4",
    title: "Retail Rush Flash Feature",
    handle: "@NovaDrop",
    category: "E-Commerce & Brands",
    tag: "Flash Sale",
    avatarLetter: "N",
    bg: "bg-[#480ED8]",
    accentColor: "#480ED8",
  },
  {
    id: "video-apex-visuals",
    videoSrc: "/videos/2026-08-111.24.52%20Pm.mp4",
    title: "Next-Gen Commercial Cut",
    handle: "@ApexVisuals",
    category: "Cinematic & Ads",
    tag: "Social Commercial",
    avatarLetter: "A",
    bg: "bg-[#FF5914]",
    accentColor: "#FF5914",
  },
];

const CATEGORIES = [
  "All",
  "Food & Dining",
  "Fashion & Apparel",
  "Cinematic & Ads",
  "E-Commerce & Brands",
];

// Single Reel Video Card Component
function ReelCard({
  reel,
  activeAudioId,
  onToggleAudio,
  onOpenModal,
  visibilityClass = "block",
}) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMuted = activeAudioId !== reel.id;

  // Sync mute state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.volume = 1;
      }
    }
  }, [isMuted]);

  // Track playback progress
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  // Intersection Observer for performance: only play videos in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Auto-play was prevented; keep muted & attempt muted play
              if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.play().catch(() => {});
              }
            });
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl md:rounded-[1.3vw] overflow-hidden aspect-[9/16] bg-[#0F0728] shadow-xl border border-purple-200/30 hover:border-[#FF5914]/80 transition-all duration-300 select-none flex flex-col justify-between ${visibilityClass}`}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={reel.videoSrc}
        loop
        playsInline
        autoPlay
        muted
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Top Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

      {/* Top Controls Bar */}
      <div className="relative z-20 p-3 sm:p-4 md:p-[0.9vw] flex items-center justify-between gap-2">
        {/* Category Pill Tag */}
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-xs md:text-[0.65vw] font-medium bg-black/40 backdrop-blur-md text-white/90 border border-white/15 tracking-tight truncate max-w-[130px] sm:max-w-none">
          {reel.tag}
        </span>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Audio Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleAudio(reel.id);
            }}
            className={`p-2 md:p-[0.55vw] rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md ${
              !isMuted
                ? "bg-[#FF5914] text-white ring-2 ring-[#FF5914]/40 scale-105"
                : "bg-black/50 text-white/90 hover:bg-black/75 hover:text-white border border-white/20"
            }`}
            aria-label={isMuted ? "Unmute reel" : "Mute reel"}
          >
            {!isMuted ? (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[0.9vw] md:h-[0.9vw] text-white animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[0.9vw] md:h-[0.9vw]" />
            )}
          </button>

          {/* Fullscreen / Expand Button */}
          <button
            onClick={() => onOpenModal(reel)}
            className="p-2 md:p-[0.55vw] rounded-full bg-black/50 text-white/90 hover:bg-[#480ED8] hover:text-white border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md"
            aria-label="Open Fullscreen Reel"
          >
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[0.9vw] md:h-[0.9vw]" />
          </button>
        </div>
      </div>

      {/* Middle Center Play/Pause Overlay on Click / Hover */}
      <div
        onClick={togglePlayPause}
        className="relative z-20 flex-1 flex items-center justify-center cursor-pointer"
      >
        <AnimatePresence>
          {(!isPlaying || isHovered) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-[3vw] md:h-[3vw] rounded-full flex items-center justify-center backdrop-blur-md border border-white/25 shadow-2xl transition-transform duration-200 ${
                !isPlaying
                  ? "bg-[#FF5914]/90 text-white scale-110"
                  : "bg-black/40 text-white/90 hover:bg-black/60 hover:scale-110"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 md:w-[1.2vw] md:h-[1.2vw] fill-white" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-[1.2vw] md:h-[1.2vw] fill-white ml-0.5" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Creator & Title Info */}
      <div className="relative z-20 p-3.5 sm:p-4 md:p-[1vw] space-y-2">
        {/* Reel Title */}
        <p className="text-white font-bold text-sm sm:text-base md:text-[0.95vw] leading-snug line-clamp-1 drop-shadow-md">
          {reel.title}
        </p>

        {/* Creator Handle Pill */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-[0.5vw] min-w-0">
            <div
              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-[1.6vw] md:h-[1.6vw] rounded-full ${reel.bg} text-white font-extrabold text-[11px] sm:text-xs md:text-[0.7vw] flex items-center justify-center border border-white/30 shrink-0 shadow-md`}
            >
              {reel.avatarLetter}
            </div>
            <span className="text-white/90 font-medium text-xs sm:text-sm md:text-[0.78vw] tracking-tight truncate">
              {reel.handle}
            </span>
          </div>

          <button
            onClick={() => onOpenModal(reel)}
            className="text-[11px] sm:text-xs md:text-[0.7vw] font-bold text-[#FF5914] hover:text-white flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>Watch</span>
            <ArrowRight className="w-3 h-3 md:w-[0.7vw] md:h-[0.7vw]" />
          </button>
        </div>

        {/* Live Bottom Playback Progress Bar */}
        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-gradient-to-r from-[#FF5914] to-[#cfb3f9] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ReelShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeAudioId, setActiveAudioId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [modalReel, setModalReel] = useState(null);
  const modalVideoRef = useRef(null);
  const [modalIsPlaying, setModalIsPlaying] = useState(true);
  const [modalProgress, setModalProgress] = useState(0);
  const [modalMuted, setModalMuted] = useState(false);

  // Filter reels according to active category
  const filteredReels = useMemo(() => {
    if (selectedCategory === "All") {
      return REEL_VIDEOS;
    }
    return REEL_VIDEOS.filter((reel) => reel.category === selectedCategory);
  }, [selectedCategory]);

  // Audio mute/unmute toggle across the grid
  const toggleAudio = (id) => {
    setActiveAudioId((prev) => (prev === id ? null : id));
  };

  // Open Fullscreen Reel Modal
  const openModal = (reel) => {
    // Mute background audio when modal opens
    setActiveAudioId(null);
    setModalReel(reel);
    setModalMuted(false);
    setModalIsPlaying(true);
  };

  const closeModal = () => {
    setModalReel(null);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalReel) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        navigateModal(1);
      } else if (e.key === "ArrowLeft") {
        navigateModal(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalReel, filteredReels]);

  const navigateModal = (direction) => {
    if (!modalReel) return;
    const currentIndex = filteredReels.findIndex((r) => r.id === modalReel.id);
    if (currentIndex === -1) return;
    const nextIndex =
      (currentIndex + direction + filteredReels.length) % filteredReels.length;
    setModalReel(filteredReels[nextIndex]);
    setModalIsPlaying(true);
    setModalProgress(0);
  };

  const handleModalTimeUpdate = () => {
    if (modalVideoRef.current && modalVideoRef.current.duration) {
      const p =
        (modalVideoRef.current.currentTime /
          modalVideoRef.current.duration) *
        100;
      setModalProgress(p);
    }
  };

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
      setModalIsPlaying(true);
    } else {
      modalVideoRef.current.pause();
      setModalIsPlaying(false);
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    const nextMuted = !modalMuted;
    setModalMuted(nextMuted);
    modalVideoRef.current.muted = nextMuted;
  };

  const handleSeek = (e) => {
    if (!modalVideoRef.current || !modalVideoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * modalVideoRef.current.duration;
    modalVideoRef.current.currentTime = newTime;
  };

  return (
    <section
      id="creative"
      className="py-14 sm:py-20 md:py-[5.5vw] bg-gradient-to-b from-[#eadfff] via-[#cfb3f9] to-[#6d20e0] relative overflow-hidden"
    >
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl md:max-w-[82vw] mx-auto px-4 sm:px-6 md:px-[2.5vw] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-[3vw]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-purple-300/60 shadow-sm text-[#480ed8] text-xs sm:text-sm md:text-[0.85vw] font-bold uppercase tracking-wider mb-3 md:mb-[0.8vw]"
          >
            <Sparkles className="w-4 h-4 text-[#FF5914]" />
            <span>Short-Form Video Production</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-[3.5vw] font-bold text-[#180336] mb-3 sm:mb-4 md:mb-[1vw] tracking-tight leading-tight"
          >
            Scroll-Stopping Creative.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl md:text-[1.25vw] text-[#370aa9] font-medium max-w-3xl md:max-w-[50vw] leading-relaxed"
          >
            We produce high-impact vertical reels and performance video ads that capture attention in the first 3 seconds and drive real conversions.
          </motion.p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-[0.8vw] flex-wrap mb-8 sm:mb-12 md:mb-[2.5vw]">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All"
                ? REEL_VIDEOS.length
                : REEL_VIDEOS.filter((r) => r.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-[1.2vw] md:py-[0.55vw] rounded-full text-xs sm:text-sm md:text-[0.85vw] font-bold transition-all duration-200 cursor-pointer shadow-sm flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#480ED8] text-white shadow-lg shadow-purple-900/30 scale-105"
                    : "bg-white/80 text-[#180336] hover:bg-white border border-purple-200/60 hover:text-[#480ED8]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] sm:text-xs md:text-[0.65vw] px-2 py-0.5 rounded-full font-semibold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-purple-100 text-[#480ED8]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Reels Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-[1.5vw] mb-10 md:mb-[3vw]"
        >
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel, index) => {
              // Visibility rules:
              // Mobile (< 768px): initially shows 4 videos only
              // Desktop (>= 768px): initially shows 8 videos
              // showAll = true: shows all videos
              let visibilityClass = "block";
              if (!showAll) {
                if (index >= 8) {
                  visibilityClass = "hidden";
                } else if (index >= 4) {
                  visibilityClass = "hidden md:block";
                }
              }

              return (
                <ReelCard
                  key={reel.id}
                  reel={reel}
                  activeAudioId={activeAudioId}
                  onToggleAudio={toggleAudio}
                  onOpenModal={openModal}
                  visibilityClass={visibilityClass}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Toggle Button */}
        {filteredReels.length > 4 && (
          <div
            className={`items-center justify-center ${
              filteredReels.length > 8
                ? "flex"
                : "flex md:hidden"
            }`}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 md:px-[2vw] md:py-[0.8vw] rounded-full font-bold text-sm sm:text-base md:text-[0.95vw] text-white bg-[#FF5914] hover:bg-[#e04705] shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>
                {showAll
                  ? "View Less"
                  : `View All ${filteredReels.length} Reels`}
              </span>
              {showAll ? (
                <ChevronUp className="w-5 h-5 md:w-[1.1vw] md:h-[1.1vw]" />
              ) : (
                <ChevronDown className="w-5 h-5 md:w-[1.1vw] md:h-[1.1vw]" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Video Modal Lightbox */}
      <AnimatePresence>
        {modalReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-[2vw]"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md sm:max-w-lg md:max-w-[28vw] aspect-[9/16] max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-between"
            >
              {/* Modal Video */}
              <video
                ref={modalVideoRef}
                src={modalReel.videoSrc}
                loop
                autoPlay
                playsInline
                muted={modalMuted}
                onTimeUpdate={handleModalTimeUpdate}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Top Bar with Close and Audio Controls */}
              <div className="relative z-30 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full ${modalReel.bg} text-white font-extrabold text-xs flex items-center justify-center border border-white/40 shadow`}
                  >
                    {modalReel.avatarLetter}
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">
                      {modalReel.handle}
                    </p>
                    <span className="text-[10px] text-white/70">
                      {modalReel.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Sound Toggle */}
                  <button
                    onClick={toggleModalMute}
                    className={`p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                      !modalMuted
                        ? "bg-[#FF5914] text-white"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                    aria-label="Toggle Sound"
                  >
                    {!modalMuted ? (
                      <Volume2 className="w-4 h-4" />
                    ) : (
                      <VolumeX className="w-4 h-4" />
                    )}
                  </button>

                  {/* Close Modal */}
                  <button
                    onClick={closeModal}
                    className="p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Middle Play/Pause Touch Area */}
              <div
                onClick={toggleModalPlay}
                className="relative z-20 flex-1 flex items-center justify-center cursor-pointer"
              >
                {!modalIsPlaying && (
                  <div className="w-16 h-16 rounded-full bg-[#FF5914]/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md animate-pulse">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                )}
              </div>

              {/* Navigation Left / Right Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateModal(-1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 text-white hover:bg-[#480ED8] border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateModal(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/50 text-white hover:bg-[#480ED8] border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                aria-label="Next reel"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Details & Progress Scrubber */}
              <div className="relative z-30 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent space-y-3">
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    {modalReel.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-0.5">
                    High-impact creative tailored for maximum CTR and ROAS.
                  </p>
                </div>

                {/* Clickable Progress Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full bg-white/30 h-2 rounded-full overflow-hidden cursor-pointer relative"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#FF5914] to-[#cfb3f9] rounded-full transition-all duration-100"
                    style={{ width: `${modalProgress}%` }}
                  />
                </div>

                {/* Call To Action in Modal */}
                <div className="pt-1 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-[#FF5914] hover:bg-[#e04705] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                  >
                    Want Creatives Like This? Let&apos;s Talk
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

