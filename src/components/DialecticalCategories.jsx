import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, BookOpen, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: "Cái Riêng - Cái Chung",
    desc: "Mối quan hệ giữa sự vật đơn lẻ và những thuộc tính phổ biến lặp lại.",
    images: ["/image/Cái%20Riêng%20Cái%20Chung.jpg"],
    definition: {
       riêng: "Là phạm trù dùng để chỉ một sự vật, hiện tượng, một quá trình riêng lẻ nhất định.",
       chung: "Là phạm trù dùng để chỉ những thuộc tính, những mặt giống nhau và được lặp lại trong các cái riêng khác nhau."
    },
    relationship: [
      "Cái chung tồn tại trong cái riêng và biểu thị thông qua cái riêng.",
      "Cái chung phản ánh cái sâu sắc, bản chất."
    ],
    lessons: [
      "Chỉ có thể tìm cái chung trong những sự vật, hiện tượng riêng lẻ, không được xuất phát từ ý muốn chủ quan.",
      "Nếu không hiểu biết những nguyên lý chung, hoạt động thực tiễn sẽ rơi vào tình trạng mò mẫm, mù quáng."
    ]
  },
  {
    title: "Bản Chất - Hiện Tượng",
    desc: "Sự đối lập và thống nhất giữa cốt lõi bên trong và biểu hiện bên ngoài.",
    images: ["/image/Bản%20Chất%20Hiện%20tượng.jpg"],
    definition: {
       bảnChất: "Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên tương đối ổn định ở bên trong; quy định sự tồn tại và phát triển.",
       hiệnTượng: "Sự biểu hiện ra bên ngoài của bản chất trong những điều kiện nhất định; phong phú và thường xuyên biến đổi."
    },
    relationship: [
      "Cả hai đều tồn tại khách quan, vừa thống nhất vừa đối lập.",
      "Thống nhất: Không có bản chất tách rời hiện tượng và ngược lại.",
      "Đối lập: Bản chất thay đổi dẫn đến hiện tượng thay đổi; bản chất mất thì hiện tượng mất theo."
    ]
  },
  {
    title: "Nội Dung - Hình Thức",
    desc: "Mối quan hệ giữa các yếu tố cấu thành và phương thức tồn tại của sự vật.",
    images: ["/image/Nội%20Dung.jpg", "/image/Hình%20thức.jpg"],
    definition: {
       nộiDung: "Phạm trù chỉ toàn bộ các mặt, các yếu tố, quá trình cấu thành nên sự vật, hiện tượng.",
       hìnhThức: "Phạm trù chỉ phương thức tồn tại của sự vật; là hệ thống các mối liên hệ giữa các yếu tố."
    },
    relationship: [
      "Sự thống nhất: Bất cứ sự vật nào cũng có cả nội dung và hình thức gắn bó chặt chẽ.",
      "Nội dung quyết định hình thức: Nội dung có khuynh hướng biến đổi, còn hình thức tương đối ổn định. Khi nội dung thay đổi, hình thức buộc phải đổi theo.",
      "Hình thức tác động lại: Phù hợp thì thúc đẩy, không phù hợp thì kìm hãm sự phát triển."
    ]
  },
  {
    title: "Nguyên Nhân - Kết Quả",
    desc: "Mối liên hệ nhân quả, tác động qua lại tạo nên sự biến đổi.",
    images: ["/image/Nguyên%20NHân%20Kết%20Quả.jpg", "/image/Nguyên%20NHân%20Kết%20Quả2.jpg"],
    definition: {
       nguyênNhân: "Sự tác động lẫn nhau giữa các mặt hoặc các sự vật, gây ra một biến đổi nhất định.",
       kếtQuả: "Những biến đổi xuất hiện do nguyên nhân gây ra."
    },
    relationship: [
      "Nguyên nhân có trước và sinh ra kết quả.",
      "Có nguyên nhân thì chắc chắn sẽ có kết quả và ngược lại.",
      "Tính chuỗi: Kết quả này có thể là nguyên nhân của một kết quả khác."
    ]
  },
  {
    title: "Khả Năng - Hiện Thực",
    desc: "Mối liên hệ giữa cái chưa xuất hiện và cái đang tồn tại thực tế.",
    images: ["/image/Khả%20năng%20Hiện%20thực.jpg"],
    definition: {
       khảNăng: "Cái chưa xuất hiện trong thực tế, nhưng sẽ xuất hiện khi có điều kiện thích hợp.",
       hiệnThực: "Những cái đang tồn tại trong thực tế và tư duy."
    },
    relationship: [
      "Khả năng và hiện thực thống nhất: Khả năng chuyển hóa thành hiện thực và hiện thực chứa khả năng mới.",
      "Điều kiện chuyển hóa: Cần có điều kiện khách quan và nhân tố chủ quan phù hợp."
    ]
  },
  {
    title: "Tất Nhiên - Ngẫu Nhiên",
    desc: "Sự khác biệt giữa cái tất yếu phải xảy ra và cái có thể xảy ra hoặc không.",
    images: ["/image/Ngẫu%20Nhiên%20Tất%20Nhiên.jpg"],
    definition: {
       tấtNhiên: "Do nguyên nhân bên trong quyết định; trong điều kiện nhất định phải xảy ra đúng như thế.",
       ngẫuNhiên: "Do nguyên nhân bên ngoài quy định; có thể xuất hiện hoặc không, có thể thế này hoặc thế khác."
    },
    relationship: [
      "Tất nhiên đóng vai trò quyết định, chi phối sự phát triển.",
      "Ngẫu nhiên ảnh hưởng làm diễn trình nhanh hay chậm, tốt hay xấu.",
      "Sự thống nhất: Cái tất nhiên vạch đường đi thông qua vô số cái ngẫu nhiên."
    ]
  }
];

const DialecticalCategories = () => {
  const [selected, setSelected] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  const handleOpen = (item) => {
    setSelected(item);
    setImgIdx(0);
  };

  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-soviet-red mb-6 uppercase tracking-tighter italic">
            6 Cặp Phạm Trù Biện Chứng
          </h2>
          <div className="h-2 w-24 bg-soviet-gold mx-auto mb-8 rounded-full" />
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto font-medium">
            Khám phá các quy luật vận động nội tại của thế giới thông qua các cặp phạm trù cơ bản của chủ nghĩa duy vật biện chứng.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleOpen(item)}
              className="group cursor-pointer bg-white rounded-3xl border-2 border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-soviet-red/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-black uppercase tracking-widest bg-soviet-red px-3 py-1 rounded-full">Chi tiết</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-zinc-800 mb-3 uppercase tracking-tight group-hover:text-soviet-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-zinc-900/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border-4 border-soviet-red/20"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-soviet-red text-zinc-800 hover:text-white p-3 rounded-full backdrop-blur-md transition-all border-2 border-zinc-100"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="lg:w-1/2 h-72 lg:h-auto relative bg-zinc-900 flex items-center justify-center group/img">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selected.images[imgIdx]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={selected.images[imgIdx]} 
                    alt={selected.title}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </AnimatePresence>
                
                {selected.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImgIdx(prev => (prev === 0 ? selected.images.length - 1 : prev - 1)); }}
                      className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImgIdx(prev => (prev === selected.images.length - 1 ? 0 : prev + 1)); }}
                      className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 flex gap-2">
                      {selected.images.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setImgIdx(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? 'bg-soviet-red w-4' : 'bg-white/40'}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[60vh] lg:max-h-[80vh] bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-soviet-red/10 text-soviet-red px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Cặp phạm trù biện chứng
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-4 uppercase tracking-tighter italic">
                  {selected.title}
                </h3>
                <div className="h-1.5 w-20 bg-soviet-gold mb-8 rounded-full" />

                <div className="space-y-8">
                  {/* Định nghĩa */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-soviet-red font-black uppercase text-xs tracking-widest">
                      <BookOpen className="w-4 h-4" /> Định nghĩa
                    </h4>
                    <div className="grid gap-3">
                      {Object.entries(selected.definition).map(([key, val], i) => (
                        <div key={i} className="bg-zinc-50 p-4 rounded-xl border-l-4 border-soviet-red">
                          <span className="font-black text-zinc-900 uppercase text-[10px] block mb-1 opacity-70">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <p className="text-zinc-600 text-xs leading-relaxed">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mối quan hệ */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-soviet-red font-black uppercase text-xs tracking-widest">
                      <Info className="w-4 h-4" /> Mối quan hệ & Ý nghĩa
                    </h4>
                    <ul className="space-y-2">
                      {selected.relationship.map((text, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-600 text-xs leading-relaxed">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-soviet-gold flex-shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bài học thực tiễn */}
                  {selected.lessons && (
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-soviet-red font-black uppercase text-xs tracking-widest">
                        <Lightbulb className="w-4 h-4" /> Bài học thực tiễn
                      </h4>
                      <div className="bg-soviet-red/5 p-5 rounded-xl border-2 border-soviet-red/10">
                        <ul className="space-y-2">
                          {selected.lessons.map((text, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-700 text-xs font-medium leading-relaxed">
                              <span className="text-soviet-red font-black">•</span>
                              {text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DialecticalCategories;
