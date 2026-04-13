import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-soviet-offwhite via-white to-soviet-gold/10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-12 text-soviet-red tracking-tight text-center">
            🎥 Video Thảo luận
          </h1>
          
          {/* Quote Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-b from-soviet-red via-soviet-red to-soviet-gold rounded-lg shadow-2xl border-4 border-soviet-gold p-4 mb-4 max-w-xs mx-auto">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Friedrich_Engels_portrait_%28cropped%29.jpg"
                  alt="Friedrich Engels"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <p className="text-xl font-black text-soviet-red">Friedrich Engels</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-soviet-offwhite rounded-lg shadow-2xl p-12 border-4 border-soviet-gold"
            >
              <p className="text-3xl md:text-4xl font-black italic text-soviet-red mb-8 leading-relaxed">
                "In nature nothing takes place in isolation"
              </p>
              <p className="text-xl text-zinc-600 font-bold">— Friedrich Engels</p>
              <p className="text-sm text-zinc-500 mt-6 italic">
                Một trong những nguyên lý cơ bản của triết học biện chứng
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-2xl p-8 border-4 border-soviet-red"
        >
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UxFqUaQWeak"
              title="Friedrich Engels - In nature nothing takes place in isolation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="space-y-6">
            <div className="text-center pb-6 border-b-2 border-soviet-gold">
              <p className="text-lg font-black text-soviet-red mb-2">🎬 Video Thảo luận</p>
              <p className="text-sm text-zinc-500">Khám phá các nguyên lý cơ bản của biện chứng duy vật qua video</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-soviet-offwhite to-white rounded-lg p-8 border-2 border-soviet-gold"
            >
              <p className="text-lg font-black text-soviet-red mb-4">🤖 Tạo bởi AI</p>
              <p className="text-base font-bold text-zinc-700 leading-relaxed">
                Được tổng hợp và phân tích bởi AI
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-lg p-8 border-2 border-soviet-red"
            >
              <div className="space-y-3">
                <p className="font-black text-zinc-700 text-lg mb-4">💡 Nội dung video tóm tắt:</p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="text-soviet-red font-black mt-1">•</span>
                    <span><strong>Mối liên hệ phổ biến</strong> - Những liên kết toàn diện giữa các hiện tượng trong tự nhiên và xã hội</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-soviet-red font-black mt-1">•</span>
                    <span><strong>6 Cặp Phạm Trù Biện Chứng</strong>:</span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">1.</span>
                    <span>Thể và Chất - Mối quan hệ giữa hình thức và nội dung</span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">2.</span>
                    <span>Hiện tượng và Bản chất - Sự phân biệt giữa ngoại hình và thực chất</span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">3.</span>
                    <span>Cái Chung và Cái Riêng - Mối quan hệ giữa quy luật chung và trường hợp đặc thù</span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">4.</span>
                    <span>Khả năng và Hiện thực - Quá trình biến đổi từ tiềm năng thành thực tế</span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">5.</span>
                    <span>Nguyên nhân và Kết quả - Mối liên kết nhân quả trong phát triển</span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">6.</span>
                    <span>Tất yếu và Ngẫu nhiên - Sự kết hợp giữa quy luật khách quan và yếu tố ngẫu nhiên</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
