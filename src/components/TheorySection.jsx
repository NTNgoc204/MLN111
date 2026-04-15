import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Layers } from 'lucide-react';

const theories = [
  {
    title: "Khái niệm Tất yếu",
    icon: <Shield className="w-8 h-8 text-soviet-red" />,
    description: "Tất yếu là những mối liên hệ bản chất, bên trong, tất nhiên, do nguyên nhân cơ bản quyết định, và trong những điều kiện nhất định nó nhất định phải xảy ra như thế, không thể khác."
  },
  {
    title: "Khái niệm Tự do",
    icon: <Globe className="w-8 h-8 text-soviet-red" />,
    description: "Tự do là khả năng con người hành động theo ý chí của mình trên cơ sở nhận thức và tuân theo tất yếu khách quan. Không có tự do tuyệt đối, chỉ có tự do trong khuôn khổ của tất yếu."
  },
  {
    title: "Mối quan hệ biện chứng giữa Tự do và Tất yếu",
    icon: <Layers className="w-8 h-8 text-soviet-red" />,
    description: "Thống nhất: Không có tất yếu thì không có cơ sở để tự do; không có tự do thì tất yếu là áp đặt thuần túy. \n Đấu tranh: Tự do là vượt qua sự chi phối thô bạo của tất yếu, nhưng không phải phủ nhận nó. \n Chuyển hóa: Khi nhận thức được tất yếu, nó từ “lực cản” thành “công cụ” của tự do."
  }
];

const TheorySection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Mối Liên Hệ Giữa Tự Do và Tất Yếu</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg leading-relaxed">
           Trong triết học Mác – Lênin, tự do và tất yếu không đối lập tuyệt đối mà có mối quan hệ biện chứng, thống nhất và chuyển hóa lẫn nhau. Hiểu đúng mối liên hệ này là chìa khóa để giải quyết mọi vấn đề về tự do trong nhận thức và hành động.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {theories.map((theory, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glow-card p-8 rounded-xl group border-t-4 border-t-soviet-red shadow-lg"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-lg w-fit">
                {theory.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4 tracking-wide">{theory.title}</h3>
              <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
                {theory.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
