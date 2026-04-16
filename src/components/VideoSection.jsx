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
            Video Thảo Luận: Tự do và Tất yếu
          </h1>

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
                  alt="Ph. Ăng-ghen"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <p className="text-xl font-black text-soviet-red">Ph. Ăng-ghen</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-soviet-offwhite rounded-lg shadow-2xl p-12 border-4 border-soviet-gold"
            >
              <p className="text-3xl md:text-4xl font-black italic text-soviet-red mb-8 leading-relaxed">
                &quot;Tự do là sự nhận thức được tất yếu.&quot;
              </p>
              <p className="text-xl text-zinc-600 font-bold">- Ph. Ăng-ghen</p>
              <p className="text-sm text-zinc-500 mt-6 italic">
                Video trình bày chi tiết mối quan hệ giữa tự do và tất yếu dưới góc nhìn
                triết học Mác - Lênin.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-2xl p-8 border-4 border-soviet-red"
        >
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
            <video
              controls
              preload="metadata"
              className="w-full h-full"
              src="/video/T%E1%BB%B1_do_v%C3%A0_T%E1%BA%A5t_y%E1%BA%BFu.mp4"
            >
              Trình duyệt của bạn không hỗ trợ phát video.
            </video>
          </div>

          <div className="space-y-6">
            <div className="text-center pb-6 border-b-2 border-soviet-gold">
              <p className="text-lg font-black text-soviet-red mb-2">Video: Tự do và Tất yếu</p>
              <p className="text-sm text-zinc-500">
                Video đi qua các phần: khái niệm nền tảng, định nghĩa tự do đích thực,
                quan hệ biện chứng, ý nghĩa thực tiễn và kết luận mở cho hiện tại.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-soviet-offwhite to-white rounded-lg p-8 border-2 border-soviet-gold"
            >
              <p className="text-lg font-black text-soviet-red mb-4">Trọng tâm học tập</p>
              <p className="text-base font-bold text-zinc-700 leading-relaxed">
                Tự do không phải là làm mọi điều mình thích, mà là năng lực nhận thức và
                vận dụng quy luật khách quan để hành động đúng, hiệu quả và có trách nhiệm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-lg p-8 border-2 border-soviet-red"
            >
              <div className="space-y-3">
                <p className="font-black text-zinc-700 text-lg mb-4">Nội dung video tóm tắt theo 5 phần:</p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="text-soviet-red font-black mt-1">•</span>
                    <span>
                      <strong>1. Khái niệm nền tảng: Tất yếu và ngẫu nhiên</strong> - Tất yếu là cái
                      nhất định phải xảy ra từ bản chất bên trong; ngẫu nhiên phụ thuộc nhiều yếu tố
                      bên ngoài. Cả hai đều tồn tại khách quan, độc lập với ý muốn con người.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-soviet-red font-black mt-1">•</span>
                    <span>
                      <strong>2. Định nghĩa về tự do đích thực</strong> - Tự do không phải phá bỏ mọi
                      rào cản, mà là hiểu và vận dụng quy luật. Tri thức về quy luật giúp con người
                      buộc chúng phục vụ mục đích của mình.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-soviet-red font-black mt-1">•</span>
                    <span>
                      <strong>3. Quan hệ biện chứng giữa tự do và tất yếu</strong> - Khi chưa hiểu quy luật,
                      con người là &quot;nô lệ&quot; của tất yếu mù quáng; khi nhận thức đúng quy luật, con người
                      trở thành &quot;người chủ&quot; để cải tạo tự nhiên và xã hội.
                    </span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">4.</span>
                    <span>
                      <strong>Ý nghĩa thực tiễn và vận dụng lịch sử</strong> - Hành động phải dựa vào
                      cái tất yếu, không trông chờ may rủi. Trong lịch sử Việt Nam, Chủ tịch Hồ Chí Minh
                      đã nhận thức đúng tất yếu giải phóng dân tộc để làm nền tảng cho tự do cá nhân.
                    </span>
                  </li>
                  <li className="ml-8 flex items-start gap-3">
                    <span className="text-soviet-gold font-black">5.</span>
                    <span>
                      <strong>Kết luận mở</strong> - Tự do là thành quả lịch sử của tri thức và hành động.
                      Mức độ tự do hôm nay phụ thuộc vào cách chúng ta ứng xử trước các tất yếu mới như
                      biến đổi khí hậu và cách mạng công nghệ 4.0.
                    </span>
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
