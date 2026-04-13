import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Waves } from 'lucide-react';

const PracticalConnections = () => {
  const [year, setYear] = useState(1960);
  
  // Data approximation for simulation
  const getCO2 = (y) => Math.round(315 + (y - 1960) * 1.8);
  const getTemp = (y) => (13.9 + (y - 1960) * 0.02).toFixed(1);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-soviet-red mb-6 uppercase">
            Liên Hệ Thực Tiễn
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
            Các ví dụ thực tế chứng minh mối liên hệ phổ biến của các hiện tượng.
          </p>
        </motion.div>
{/* 123 */}
        {/* Climate Case */}
        <div className="bg-white p-10 md:p-16 rounded-3xl border-2 border-soviet-red shadow-2xl mb-16 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-soviet-red mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" /> Biến Đổi Khí Hậu: CO2 → Nhiệt Độ
            </h3>
            
            <p className="text-zinc-600 mb-12 max-w-4xl leading-relaxed">
              Khí thải CO₂ công nghiệp không tồn tại cô lập—chúng kích hoạt chuỗi các tác động liên kết: nóng lên bầu khí quyển, băng tan, axit hóa đại dương và sụp đổ hệ sinh thái.
            </p>

            <div className="space-y-12">
              <div className="relative">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest">Tiến Trình Kỷ Nguyên Công Nghiệp</span>
                  <span className="text-soviet-red font-bold text-xl">Năm {year}</span>
                </div>
                
                <input 
                  type="range" 
                  min="1960" 
                  max="2024" 
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-soviet-red"
                />
                
                <div className="flex justify-between mt-4">
                  <div className="w-1/2 p-8 rounded-2xl border-2 border-soviet-red bg-white shadow-xl shadow-soviet-red/5">
                    <div className="text-4xl font-bold text-soviet-red mb-1">{getCO2(year)} ppm</div>
                    <div className="text-xs text-zinc-400 uppercase font-bold tracking-widest">CO₂ Khí Quyển</div>
                  </div>
                  <div className="w-1/2 ml-4 p-8 rounded-2xl border-2 border-soviet-orange bg-white shadow-xl shadow-soviet-orange/5">
                    <div className="text-4xl font-bold text-soviet-orange mb-1">{getTemp(year)}°C</div>
                    <div className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Nhiệt Độ Toàn Cầu</div>
                  </div>
                </div>
              </div>
              
              <div className="h-1.5 w-full bg-gradient-to-r from-green-500 via-soviet-orange to-soviet-red rounded-full relative">
                <motion.div 
                  animate={{ left: `${((year - 1960) / (2024 - 1960)) * 100}%` }}
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-soviet-red rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marine Case */}
        <div className="bg-white p-1 md:p-1 rounded-3xl border-2 border-soviet-orange shadow-2xl relative overflow-hidden group">
          <div className="p-10 md:p-12 relative z-10">
            <h3 className="text-2xl font-bold text-soviet-orange mb-8 flex items-center gap-3">
              <Waves className="w-8 h-8" /> Chuỗi Thức Ăn Hệ Sinh Thái Biển
            </h3>
            
            <div className="rounded-2xl overflow-hidden mb-12 h-80 relative group-hover:shadow-2xl transition-all duration-700">
              <img 
                src="https://www.greenlivinganswers.com/blog/wp-content/uploads/2024/01/ocean-and-marine-ecosystems-1.jpg" 
                alt="Marine Ecosystem"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Thực Vật Phù Du", role: "Sinh Vật Sản Xuất", color: "bg-green-500", border: "border-green-500" },
                { label: "Động Vật Phù Du", role: "Sinh Vật Tiêu Thụ Cấp 1", color: "bg-soviet-orange", border: "border-soviet-orange" },
                { label: "Cá Nhỏ", role: "Sinh Vật Tiêu Thụ Cấp 2", color: "bg-soviet-red", border: "border-soviet-red" },
                { label: "Động Vật Ăn Thịt Đỉnh Cao", role: "Sinh Vật Tiêu Thụ Cấp 3", color: "bg-zinc-800", border: "border-zinc-800" },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${item.border} bg-white shadow-sm`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className={`text-sm font-bold ${item.color.replace('bg-', 'text-')}`}>{item.label}</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">{item.role}</div>
                </div>
              ))}
            </div>

            <p className="text-zinc-500 text-sm italic font-medium">
              Loại bỏ một mắt xích, toàn bộ hệ thống sẽ sụp đổ. Mỗi sinh vật chỉ tồn tại thông qua mối quan hệ với những sinh vật khác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalConnections;
