import React from 'react';
import { motion } from 'framer-motion';

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
            src="https://www.mymap.ai/share/nguyn-l-mi-lin-h-ph-bin-vVAuHEDUGtXjZ"
            title="Sơ đồ Tư duy - Mối liên hệ phổ biến"
            style={{ width: '100%', height: '700px', border: 'none', borderRadius: '8px' }}
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
          <p className="text-lg font-black text-soviet-red mb-4">💡 Về Sơ đồ Tư duy này</p>
          <p className="text-base text-zinc-700 leading-relaxed mb-6">
            Sơ đồ tư duy này thể hiện mối liên hệ toàn diện giữa các khái niệm cơ bản trong triết học biện chứng duy vật, 
            bao gồm 6 cặp phạm trù chính và cách chúng tương tác với nhau trong quá trình phát triển.
          </p>
          
          <div className="space-y-3">
            <p className="font-black text-zinc-700">Các khái niệm chính:</p>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex items-start gap-3">
                <span className="text-soviet-red font-black">•</span>
                <span><strong>Mối liên hệ phổ biến</strong> - Mọi sự vật đều có liên hệ toàn diện</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soviet-red font-black">•</span>
                <span><strong>Phát triển</strong> - Sự biến đổi liên tục từ lượng sang chất</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soviet-red font-black">•</span>
                <span><strong>Biện chứng</strong> - Mâu thuẫn là nguồn động lực phát triển</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MindmapPage;
