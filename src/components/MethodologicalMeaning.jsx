import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

const meanings = [
  {
    title: "Quan Điểm Toàn Diện",
    desc: "Khi xem xét sự vật, cần đặt nó trong mối liên hệ với các sự vật khác và trong các mối liên hệ nội tại của chính nó.",
  },
  {
    title: "Tránh Quan Điểm Phiến Diện",
    desc: "Không được chỉ nhìn thấy một mặt, một mối liên hệ mà bỏ qua các mặt, các mối liên hệ khác.",
  },
  {
    title: "Tránh Quan Điểm Chiết Trung",
    desc: "Cần phân biệt được vị trí, vai trò của từng mối liên hệ, không được cào bằng hay kết hợp một cách vô nguyên tắc.",
  },
];

const MethodologicalMeaning = () => {
  return (
    <section className="py-24 px-6 bg-soviet-offwhite">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-soviet-red mb-8 uppercase tracking-tighter">
              Ý Nghĩa Phương Pháp Luận
            </h2>
            <div className="h-2 w-24 bg-soviet-gold mb-8 shadow-sm" />
            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
              Nguyên lý về mối liên hệ phổ biến không chỉ là lý thuyết mà còn là kim chỉ nam cho tư duy khoa học và hoạt động thực tiễn.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            {meanings.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 items-start p-8 rounded-2xl bg-white border-2 border-soviet-red/10 hover:border-soviet-red/40 shadow-xl transition-all"
              >
                <div className="bg-soviet-red/5 p-3 rounded-xl shadow-inner">
                  <CircleCheck className="w-8 h-8 text-soviet-red shrink-0" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-3 uppercase tracking-tight">{m.title}</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologicalMeaning;
