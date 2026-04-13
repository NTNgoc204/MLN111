import React from 'react';
import { motion } from 'framer-motion';

const pairs = [
  { title: "Cái riêng – Cái chung", desc: "Sự thể hiện duy nhất vs. quy luật phổ quát. Mỗi giọt nước là duy nhất, nhưng đều tuân theo các quy luật thủy động lực học phổ biến." },
  { title: "Bản chất – Hiện tượng", desc: "Thực tại nội tại ẩn giấu vs. biểu hiện bên ngoài. Sự tìm tòi khoa học đi từ hiện tượng đến bản chất." },
  { title: "Nội dung – Hình thức", desc: "Các yếu tố bên trong vs. sự tổ chức bên ngoài. Nội dung quyết định hình thức, và hình thức tác động ngược lại nội dung." },
  { title: "Nguyên nhân – Kết quả", desc: "Cái tạo ra vs. cái được tạo ra. Trong mạng lưới các mối quan hệ, nguyên nhân trở thành kết quả và kết quả trở thành nguyên nhân." },
  { title: "Khả năng – Hiện thực", desc: "Các xu hướng tiềm tàng vs. trạng thái đã được hiện thực hóa. Lịch sử là quá trình khả năng trở thành hiện thực." },
  { title: "Tất nhiên – Ngẫu nhiên", desc: "Quy luật không thể tránh khỏi vs. sự biến đổi tình cờ. Cái tất nhiên vạch đường đi cho mình thông qua vô số cái ngẫu nhiên." }
];

const DialecticalPairs = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Các Cặp Phạm Trù Biện Chứng</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Các cặp phạm trù cơ bản mà thông qua đó mối liên hệ phổ biến được thể hiện và hiểu rõ.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map((pair, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, backgroundColor: '#fff5f5' }}
              className="p-8 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-soviet-red mb-3 uppercase tracking-wider border-b-2 border-soviet-gold pb-2 w-fit">{pair.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {pair.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DialecticalPairs;
