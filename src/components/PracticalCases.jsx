import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Wind, Droplets, CircleAlert } from 'lucide-react';

const PracticalCases = () => {
  const [co2, setCo2] = useState(400);

  const getTemp = (val) => ((val - 400) * 0.05).toFixed(1);

  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-20 text-center tracking-tight">Biểu Hiện Thực Tiễn</h2>

        <div className="mb-32">
          <h3 className="text-2xl font-bold text-soviet-red mb-10 flex items-center gap-3">
            <CircleAlert className="w-6 h-6" /> Chuỗi Nhân Quả Khí Hậu
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-white border-2 border-zinc-100 shadow-sm">
                <label className="block text-zinc-500 mb-6 uppercase tracking-widest text-xs font-bold">Mô phỏng nồng độ CO2 (ppm)</label>
                <input 
                  type="range" 
                  min="400" 
                  max="600" 
                  value={co2} 
                  onChange={(e) => setCo2(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-soviet-red"
                />
                <div className="flex justify-between mt-6 text-zinc-900 font-bold text-xl">
                  <span>{co2} ppm</span>
                  <span className="text-soviet-red">+{getTemp(co2)}°C</span>
                </div>
              </div>

              <div className="relative pt-4">
                {[
                  { icon: <Wind />, label: "Khí phát thải", color: "text-zinc-400" },
                  { icon: <Droplets />, label: "Đại dương ấm lên", color: "text-blue-500" },
                  { icon: <Thermometer />, label: "Băng tan ở Bắc Cực", color: "text-cyan-500" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    animate={{ x: [0, 8, 0], opacity: co2 > 450 ? 1 : 0.6 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <div className={`p-4 rounded-xl bg-white shadow-sm border border-zinc-100 ${item.color}`}>{item.icon}</div>
                    <div className="h-0.5 flex-1 bg-zinc-200" />
                    <span className="text-zinc-700 font-bold uppercase text-xs tracking-widest">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-soviet-gold/30 shadow-lg relative">
              <div className="absolute -top-4 -left-4 bg-soviet-gold text-white p-2 rounded-lg font-bold text-xs uppercase tracking-widest shadow-md">Phân tích</div>
              <h4 className="text-zinc-900 font-bold mb-4 italic text-lg">Mối liên hệ biện chứng:</h4>
              <p className="text-zinc-600 leading-relaxed text-lg">
                Biến đổi khí hậu không phải là một sự kiện đơn lẻ mà là một <span className="text-soviet-red font-bold">quá trình biện chứng</span>. 
                Sự thay đổi về lượng (phát thải) cuối cùng dẫn đến những thay đổi về chất (sụp đổ hệ sinh thái), chứng minh quy luật chuyển hóa của phép biện chứng.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm border-l-8 border-l-soviet-red">
            <h4 className="text-zinc-900 font-bold text-xl mb-4">Hệ Sinh Thái Biển</h4>
            <p className="text-zinc-600 leading-relaxed">
              Việc loại bỏ một loài săn mồi đầu bảng tạo ra những gợn sóng xuyên suốt toàn bộ lưới thức ăn, chứng minh rằng không có loài nào tồn tại biệt lập.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm border-l-8 border-l-soviet-gold">
            <h4 className="text-zinc-900 font-bold text-xl mb-4">COVID-19: Tất yếu & Ngẫu nhiên</h4>
            <p className="text-zinc-600 leading-relaxed">
              Sự đột biến cụ thể là một sự <span className="italic font-bold text-soviet-red">ngẫu nhiên</span>, nhưng sự lây lan toàn cầu thông qua các mạng lưới kết nối là một <span className="italic font-bold text-soviet-red">tất yếu lịch sử</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalCases;
