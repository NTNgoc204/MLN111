import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Layers } from 'lucide-react';

const theories = [
  {
    title: "Tính Khách Quan",
    icon: <Shield className="w-8 h-8 text-soviet-red" />,
    description: "Mối liên hệ là thuộc tính vốn có của thế giới vật chất, không phải là sản phẩm của tư duy. Nó tồn tại độc lập với ý thức của chúng ta."
  },
  {
    title: "Tính Phổ Biến",
    icon: <Globe className="w-8 h-8 text-soviet-red" />,
    description: "Không có đối tượng hay hiện tượng nào là tuyệt đối. Mọi thứ đều là một phần của hệ thống lớn hơn, kết nối với mọi thứ khác ở một mức độ nào đó."
  },
  {
    title: "Tính Đa Dạng",
    icon: <Layers className="w-8 h-8 text-soviet-red" />,
    description: "Các mối liên hệ không đồng nhất. Chúng thay đổi về cường độ, tính chất và chiều sâu—từ tiếp xúc vật lý trực tiếp đến các liên kết nhân quả tinh vi."
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
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Mối Liên Hệ Phổ Biến</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Chủ nghĩa duy vật biện chứng khẳng định rằng thế giới không phải là một tập hợp các sự vật sẵn có, mà là một tập hợp các quá trình không ngừng vận động.
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
              <p className="text-zinc-600 leading-relaxed">
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
