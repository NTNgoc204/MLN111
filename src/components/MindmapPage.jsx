import React from "react";
import { motion } from "framer-motion";

const MindmapPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-soviet-offwhite via-white to-soviet-gold/10 py-20 px-6 pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-soviet-red tracking-tight">
            🗺️ Sơ đồ Tư duy
          </h1>
          <p className="text-lg text-zinc-600 font-bold">
            Mối liên hệ phổ biến và các phạm trù biện chứng
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-2xl p-8 border-4 border-soviet-red overflow-hidden"
        >
          <iframe
            src="https://gitmind.com/app/docs/m08fle2h"
            title="Sơ đồ Tư duy - Mối liên hệ phổ biến"
            style={{
              width: "100%",
              height: "700px",
              border: "none",
              borderRadius: "8px",
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-soviet-offwhite to-white rounded-lg p-8 border-2 border-soviet-gold"
        >
          <p className="text-lg font-black text-soviet-red mb-4">
            💡 Về Sơ đồ Tư duy này
          </p>
          <p className="text-base text-zinc-700 leading-relaxed mb-6">
            Sơ đồ tư duy này thể hiện mối quan hệ biện chứng giữa hai phạm trù
            cốt lõi trong triết học Mác - Lênin là Tự do và Tất yếu, mô tả quá
            trình con người nhận thức quy luật để đi từ sự thụ thuộc đến việc
            làm chủ thế giới khách quan.
          </p>

          <div className="space-y-3">
            <p className="font-black text-zinc-700">Các khái niệm chính:</p>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start gap-3">
                <span className="text-soviet-red font-black">•</span>
                <span>
                  <strong>Tất yếu</strong> - Những quy luật khách quan của tự
                  nhiên và xã hội, tồn tại và vận hành hoàn toàn độc lập với ý
                  chí con người.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soviet-red font-black">•</span>
                <span>
                  <strong>Tự do</strong> - Sự biến đổi liên tục từ lượng sang
                  chấtSự nhận thức được cái tất yếu và năng lực vận dụng các quy
                  luật đó một cách có ý thức vào hoạt động thực tiễn.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soviet-red font-black">•</span>
                <span>
                  <strong>Mối quan hệ biện chứng</strong> - Tất yếu là tiền đề
                  của tự do; thông qua hoạt động thực tiễn, con người biến quy
                  luật khách quan thành công cụ để phục vụ lợi ích của mình.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MindmapPage;
