import { motion } from "framer-motion";
import { Coffee, ChevronRight, PlayCircle } from "lucide-react";

// Video Imports
import video1 from "@/assets/videos/video9.mp4"; 
import video2 from "@/assets/videos/video2.mp4";
import video3 from "@/assets/videos/video3.mp4";
import video4 from "@/assets/videos/video4.mp4";
import video5 from "@/assets/videos/video5.mp4";
import video6 from "@/assets/videos/video6.mp4";
import video7 from "@/assets/videos/video8.mp4";
import video8 from "@/assets/videos/video10.mp4";

const cafeVideos = [
  { src: video1, label: "Cafe Vibe" },
  { src: video2, label: "Specialty Sips" },
  { src: video3, label: "Signature Mood" },
  { src: video4, label: "Atmosphere" },
  { src: video5, label: "Live Screening" },
  { src: video6, label: "Celebration" },
  { src: video7, label: "Fresh Pizza" },
  { src: video8, label: "Budget Friendly" },
];

const VideoSection = () => {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            <PlayCircle size={12} />
            The Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Cinematic <span className="text-primary italic italic-font">Atmosphere</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm md:text-lg">
            Experience the soul of Dark Cafe. From brewing the perfect cup to the premium vibe of our space.
          </p>
        </div>

        <div className="text-primary flex items-center gap-2 text-sm font-medium">
          Scroll to Explore
          <ChevronRight size={16} className="animate-pulse" />
        </div>
      </motion.div>

      {/* VIDEO HORIZONTAL SCROLL */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x">
          {cafeVideos.map((video, i) => (
            <div key={i} className="flex-shrink-0 w-[240px] md:w-[320px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/20 snap-center group relative"
              >
                {/* VIDEO PLAYER */}
                <video
                  className="w-full h-full object-cover"
                  src={video.src}
                  controls
                  loop
                  muted
                  playsInline
                />
                
                {/* INFO OVERLAY */}
                <div className="absolute top-4 left-4">
                   <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white/80 uppercase font-medium">
                    {video.label}
                   </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* OVERLAYS FOR DEPTH */}
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-background to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none hidden md:block" />
      </div>

      {/* BACKGROUND DECO */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
};

export default VideoSection;
