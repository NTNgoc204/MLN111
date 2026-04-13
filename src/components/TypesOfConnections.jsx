import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Repeat, Zap, Shuffle, ArrowRight, Waypoints } from 'lucide-react';

const connections = [
  {
    icon: Link2,
    title: "Liên Hệ Bên Trong",
    desc: "Mối liên hệ giữa các yếu tố cấu thành nên bản chất của sự vật. Ví dụ: mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất.",
  },
  {
    icon: Repeat,
    title: "Liên Hệ Bên Ngoài",
    desc: "Mối liên hệ giữa sự vật này với sự vật khác. Ví dụ: sự tương tác giữa các loài trong hệ sinh thái.",
  },
  {
    icon: Zap,
    title: "Liên Hệ Tất Yếu",
    desc: "Mối liên hệ xuất phát từ bản chất của sự vật, thể hiện quy luật. Ví dụ: nước nóng bay hơi khi đun sôi.",
  },
  {
    icon: Shuffle,
    title: "Liên Hệ Ngẫu Nhiên",
    desc: "Mối liên hệ không xuất phát từ bản chất, có thể có hoặc không. Ví dụ: gặp bạn cũ trên đường.",
  },
  {
    icon: ArrowRight,
    title: "Liên Hệ Trực Tiếp",
    desc: "Sự vật tác động lẫn nhau không qua trung gian. Ví dụ: lửa đốt cháy giấy trực tiếp.",
  },
  {
    icon: Waypoints,
    title: "Liên Hệ Gián Tiếp",
    desc: "Sự vật tác động qua các trung gian khác. Ví dụ: ánh sáng mặt trời nuôi dưỡng cây qua quá trình quang hợp.",
  },
];

const TypesOfConnections = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-soviet-red mb-6">
            Các Loại Liên Hệ
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Nhấp vào từng loại để khám phá các hình thức liên kết khác nhau định hình thực tại.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border-2 transition-all group cursor-pointer bg-white ${
                idx === 0 
                ? 'border-soviet-orange shadow-lg' 
                : 'border-soviet-red/20 hover:border-soviet-red/50 hover:shadow-md'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ${
                idx === 0 ? 'bg-soviet-red' : 'bg-soviet-orange'
              }`}>
                <c.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className={`text-xl font-bold text-center mb-4 ${
                idx === 0 ? 'text-soviet-orange' : 'text-soviet-red'
              }`}>
                {c.title}
              </h3>
              <p className="text-zinc-600 text-center text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfConnections;
