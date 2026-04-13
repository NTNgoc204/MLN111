import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

const Methodology = () => {
  const points = [
    {
      title: "Quan điểm toàn diện",
      desc: "Phân tích các hiện tượng không phải là các mảnh vụn biệt lập, mà là các phần không thể tách rời của một chỉnh thể thống nhất."
    },
    {
      title: "Phân tích Lịch sử – Cụ thể",
      desc: "Nghiên cứu các đối tượng trong bối cảnh cụ thể của chúng, theo dõi nguồn gốc, sự phát triển và sự chuyển hóa cuối cùng của chúng."
    },
    {
      title: "Mắt xích quyết định",
      desc: "Xác định mối liên hệ chủ chốt trong mạng lưới quyết định sự vận động của toàn bộ hệ thống."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">Phương Pháp Luận</h2>
            <div className="h-2 w-20 bg-soviet-gold mb-8 shadow-sm" />
            <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
              Để vận dụng nguyên lý về mối liên hệ phổ biến, người ta phải áp dụng một khung nhận thức nghiêm ngặt, vượt ra ngoài những biểu hiện bề ngoài.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-soviet-red/30 transition-colors"
              >
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <CircleCheck className="w-6 h-6 text-soviet-red shrink-0" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold mb-2 text-lg uppercase tracking-tight">{point.title}</h4>
                  <p className="text-zinc-600 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
