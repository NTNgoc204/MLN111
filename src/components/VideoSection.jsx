import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-soviet-offwhite via-white to-soviet-gold/10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-soviet-red tracking-tight mb-6">
            Video minh họa mối quan hệ giữa Tự do và Tất yếu
          </h1>
          <p className="max-w-4xl mx-auto text-base md:text-lg text-zinc-600 leading-relaxed font-medium">
            Video minh họa quá trình con người từ bị chi phối bởi các quy luật khách quan đến việc
            nhận thức, vận dụng và làm chủ chúng. Qua đó thể hiện mối quan hệ giữa tự do và tất yếu
            theo quan điểm triết học Mác – Lênin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl mx-auto bg-white rounded-[2rem] border-2 border-soviet-red/20 shadow-2xl p-4 md:p-8"
        >
          <div className="aspect-video bg-black rounded-2xl overflow-hidden">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-contain"
              src="/video/Minh_H%E1%BB%8Da__T%E1%BB%B1_do_v%C3%A0_T%E1%BA%A5t_y%E1%BA%BFu.mp4"
            >
              Trình duyệt của bạn không hỗ trợ phát video.
            </video>
          </div>

          <p className="text-center mt-6 text-lg md:text-2xl font-black text-soviet-red tracking-tight">
            Hiểu quy luật → Vận dụng → Làm chủ → Tự do
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
