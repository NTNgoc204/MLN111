import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck, X } from 'lucide-react';

const meanings = [
  {
    title: 'Nhận thức và vận dụng tất yếu',
    desc: 'Tự do không tách khỏi tất yếu; phải học quy luật khách quan và dùng quy luật như công cụ hành động.',
    detail:
      'Theo tinh thần Engels trong Chống Duyrinh, con người không thể hủy bỏ quy luật tự nhiên - xã hội, nhưng có thể nhận thức và vận dụng chúng theo mục tiêu nhất định. Đây là hạt nhân phương pháp luận đầu tiên.',
    points: [
      'Tất yếu tồn tại khách quan, độc lập với ý muốn chủ quan.',
      'Phương pháp đúng là nhận diện quy luật rồi hành động phù hợp quy luật.',
      'Sai lầm phương pháp luận thường bắt nguồn từ ảo tưởng có thể phủ định quy luật bằng ý chí.'
    ]
  },
  {
    title: 'Gắn lý luận với thực tiễn cải tạo',
    desc: 'Nhận thức chỉ là điều kiện cần; tự do chỉ thành hiện thực khi được chuyển hóa thành hành động thực tiễn.',
    detail:
      'Từ mạch lập luận trong docx: hiểu quy luật chưa đủ, phải tổ chức thực tiễn phù hợp quy luật để cải tạo tự nhiên, xã hội và điều kiện sống. Hiệu quả thực tiễn là thước đo độ đúng của nhận thức.',
    points: [
      'Lý luận có giá trị khi chuyển hóa thành năng lực hành động.',
      'Hoạt động thực tiễn là cầu nối từ nhận thức tới tự do hiện thực.',
      'Mọi giải pháp cần có tiêu chí kiểm chứng bằng kết quả xã hội cụ thể.'
    ]
  },
  {
    title: 'Quan điểm lịch sử - cụ thể',
    desc: 'Không có tự do trừu tượng; mỗi nhận định phải đặt trong bối cảnh lịch sử, giai cấp và trình độ phát triển cụ thể.',
    detail:
      'Dựa trên duy vật lịch sử, cần phân tích điều kiện kinh tế - xã hội thực tế trước khi đề xuất giải pháp. Tránh sao chép máy móc mô hình hoặc đánh giá hiện tượng bằng tiêu chuẩn phi lịch sử.',
    points: [
      'Mỗi hình thái xã hội tạo ra mức độ tự do khác nhau.',
      'Không thể áp đặt cùng một công thức cho mọi bối cảnh lịch sử.',
      'Phân tích giai cấp và quan hệ sản xuất là bước bắt buộc của phương pháp luận.'
    ]
  },
  {
    title: 'Tư duy toàn diện, tránh phiến diện',
    desc: 'Xem sự vật trong hệ thống mối liên hệ, xác định đúng khâu chủ yếu để tác động hiệu quả.',
    detail:
      'Mối liên hệ phổ biến đòi hỏi phân tích cấu trúc bên trong, các tương tác bên ngoài và xu hướng vận động. Cách tiếp cận này giúp tránh cào bằng, chiết trung, từ đó đưa ra quyết định đúng trọng tâm.',
    points: [
      'Không xem xét sự vật cô lập, tĩnh tại.',
      'Phải phân biệt mối liên hệ bản chất với mối liên hệ thứ yếu.',
      'Tác động vào khâu then chốt giúp tạo chuyển biến hệ thống.'
    ]
  },
];

const MethodologicalMeaning = () => {
  const [activeMeaning, setActiveMeaning] = useState(null);

  return (
    <section className="py-10 px-6 bg-soviet-offwhite">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-soviet-red mb-2 uppercase tracking-tight">
            Ý Nghĩa Phương Pháp Luận
          </h2>
          <p className="text-sm md:text-base text-zinc-600 max-w-3xl mx-auto font-medium">
            Phần tóm tắt ngắn trên trang chính. Nhấn vào thẻ để mở cửa sổ nhỏ và đọc đầy đủ nội dung phương pháp luận.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {meanings.map((m, i) => (
            <motion.button
              key={m.title}
              type="button"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveMeaning(m)}
              className="text-left flex gap-4 items-start p-5 rounded-2xl bg-white border-2 border-soviet-red/10 hover:border-soviet-red/40 shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-soviet-red/5 p-2.5 rounded-xl shadow-inner">
                <CircleCheck className="w-5 h-5 text-soviet-red shrink-0" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-zinc-900 mb-1.5">{m.title}</h4>
                <p className="text-zinc-600 leading-relaxed text-sm">{m.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {activeMeaning && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <button
              type="button"
              aria-label="Đóng"
              onClick={() => setActiveMeaning(null)}
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-xl rounded-2xl bg-white border-2 border-soviet-red/20 shadow-2xl p-6 md:p-7"
            >
              <button
                type="button"
                onClick={() => setActiveMeaning(null)}
                className="absolute top-3 right-3 p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-soviet-red mb-3 pr-10">{activeMeaning.title}</h3>
              <p className="text-zinc-900 font-semibold text-sm mb-3">{activeMeaning.desc}</p>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">{activeMeaning.detail}</p>
              <ul className="mt-4 space-y-2">
                {activeMeaning.points.map((point) => (
                  <li key={point} className="text-zinc-700 text-sm md:text-base leading-relaxed flex gap-2">
                    <span className="text-soviet-orange">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-zinc-700 italic border-l-4 border-soviet-gold pl-3 text-sm md:text-base">
                "Con người càng nhận thức sâu sắc các quy luật khách quan bao nhiêu, thì phạm vi tự do của con người càng được mở rộng bấy nhiêu."
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MethodologicalMeaning;
