import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, BookOpen, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: "Quan điểm duy vật siêu hình (Thuyết định mệnh)",
    desc: "",
    images: ["/image/Gemini_Generated_Image_dszxwxdszxwxdszx.png"],
    definition: [
      "Mọi sự vật, hiện tượng, kể cả hành vi của con người, đều chịu sự chi phối tất yếu nghiêm ngặt của các quy luật tự nhiên (nguyên lý nhân quả cứng nhắc).",
      "Con người tưởng mình tự do chỉ vì không biết đến những nguyên nhân đã quyết định hành vi của mình.",
      "Con người tưởng mình tự do cũng giống như con chim sẻ tưởng mình tự do bay lượn, nhưng thực chất nó bị quy luật khí động học và bản năng chi phối hoàn toàn."
    ],
    relationship: [
      "Ưu điểm: Khẳng định tính khách quan của tất yếu. Phản đối quan điểm thần học, duy tâm về (ý chí tự do siêu nhiên).",
      "Hạn chế: Phủ nhận hoàn toàn tự do của con người. Quy con người về một cỗ máy vô hồn, không có ý chí, trách nhiệm đạo đức. Dẫn đến thuyết định mệnh bi quan: dù có cố gắng thế nào cũng không thay đổi được số phận."
      
    ],
    lessons: [
      "Paul Holbach (1723–1789)",
      "Julien Offray de La Mettrie (1709–1751)",
      "Pierre-Simon Laplace (1749–1827) – với khái niệm (con quỷ Laplace)"
    ]
  },
  {
    title: "Quan điểm duy tâm khách quan (Hegel)",
    desc: "",
    images: ["/image/Gemini_Generated_Image_6c7w4q6c7w4q6c7w.png"],
    definition: [
      "Tất yếu là sự vận động của Tinh thần tuyệt đối (ý niệm) trong lịch sử.",
      "Tự do không phải là làm theo ý muốn chủ quan, mà là nhận thức và hành động theo tinh thần tất yếu của lịch sử.",
      "Hegel nổi tiếng với câu nói: “Tự do là sự nhận thức được tất yếu.”",
      "Tự do chỉ đạt được ở giai đoạn phát triển cao nhất của tinh thần (nhà nước pháp quyền, nghệ thuật, tôn giáo, triết học)."
    ],
    relationship: [
      "Ưu điểm: Lần đầu tiên thống nhất được tự do và tất yếu trong một hệ thống biện chứng. Có công lao to lớn trong việc khắc phục quan điểm siêu hình, tách rời hai phạm trù. Ảnh hưởng mạnh mẽ đến triết học Mác sau này.",
      "Hạn chế: Duy tâm, thần bí: coi tất yếu là sản phẩm của (Tinh thần tuyệt đối), không phải từ thế giới vật chất. Tự do cuối cùng chỉ là phục tùng tinh thần thế giới, mang màu sắc tôn giáo. Xem nhẹ vai trò của thực tiễn cách mạng, cải tạo thế giới."
    ],
    lessons: [
      "Georg Wilhelm Friedrich Hegel (1770–1831)"
      ]
  },
  {
    title: "Quan điểm duy tâm chủ quan (Hiện sinh)",
    desc: "",
    images: ["/image/Gemini_Generated_Image_g6v6oog6v6oog6v6.png"],
    definition: [
       "Con người bị kết án phải tự do (Sartre).",
       "Con người sinh ra không có bản chất định sẵn, tự do là tuyệt đối, không bị ràng buộc bởi bất kỳ tất yếu khách quan nào (kể cả Chúa, quy luật tự nhiên hay xã hội).",
       "Tất yếu nếu có chỉ do chính con người tự đặt ra và có thể thay đổi bất cứ lúc nào",
       "Hành vi của con người là hoàn toàn tự do, do đó phải chịu trách nhiệm tuyệt đối."
    ],
    relationship: [
      "Ưu điểm: Đề cao tính chủ động, sáng tạo, trách nhiệm cá nhân. Chống lại thuyết định mệnh, chủ nghĩa duy vật tầm thường.",
      "Hạn chế: Tuyệt đối hóa tự do, phủ nhận mọi tất yếu khách quan (quy luật tự nhiên, quy luật xã hội, di truyền, hoàn cảnh…). Rơi vào chủ nghĩa phi lý: không giải thích được vì sao con người không thể bay, không thể sống mà không cần ăn, không thể tùy tiện vi phạm pháp luật mà không bị trừng phạt. Dẫn đến khủng hoảng đạo đức: nếu mọi thứ đều do tôi tự do lựa chọn, thì tôi cũng có thể chọn cái ác mà không có cơ sở nào để phê phán."
    ],
    lessons: [
      "Jean-Paul Sartre (1905–1980)",
      "Albert Camus (1913–1960) (một phần)"
    ]
  },
  {
    title: "Quan điểm thần học (Kitô giáo, Hồi giáo, Phật giáo có yếu tố thần học)",
    desc: "",
    images: ["/image/Gemini_Generated_Image_n99ze8n99ze8n99z.png"],
    definition: [
       "Tất yếu là ý Chúa (thiên mệnh, định mệnh thiêng liêng).",
       "Tự do là sự lựa chọn của con người trong khuôn khổ do Chúa cho phép.",
        "Con người có ý chí tự do để quyết định hành vi của mình, nhưng kết quả cuối cùng vẫn do Chúa sắp đặt.",
        "Mâu thuẫn giữa tiền định của Chúa và tự do của con người là một bí ẩn, phải chấp nhận bằng đức tin."
    ],
    relationship: [
      "Ưu điểm: Giải thích được nhu cầu tự do ý chí gắn với trách nhiệm đạo đức và tôn giáo. Có ảnh hưởng sâu rộng trong lịch sử văn minh phương Tây.",
      "Hạn chế: Phi khoa học, duy tâm, thần bí. Không giải quyết được mâu thuẫn logic giữa tiền định của Chúa và tự do của con người (phải dùng đến mầu nhiệm). Không thể kiểm chứng bằng thực tiễn.",
      "Các nhà thần học Hồi giáo thời trung cổ"
    ],
    lessons: [
      "Thánh Augustine (354–430)",
      "Thomas Aquinas (1225–1274)",
      "Phật giáo: Có yếu tố thần học nhưng không hoàn toàn tương đồng với quan điểm thần học phương Tây."
    ]
  }
];

const DialecticalCategories = () => {
  const [selected, setSelected] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  const getDefinitionItems = (definition) => {
    if (!definition) return [];
    if (Array.isArray(definition)) return definition;
    if (typeof definition === 'object') return Object.values(definition);
    return [definition];
  };

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
            CÁC QUAN ĐIỂM TRIẾT HỌC TRƯỚC MÁC VỀ TỰ DO VÀ TẤT YẾU
          </h2>
          <div className="h-2 w-24 bg-soviet-gold mx-auto mb-8 rounded-full" />
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto font-medium">
            Trước khi triết học Mác – Lênin xuất hiện, đã có nhiều trường phái triết học bàn về mối quan hệ giữa tự do và tất yếu. Nhìn chung, các quan điểm này đều chưa giải quyết triệt để mối quan hệ biện chứng giữa hai phạm trù, và thường rơi vào một trong hai khuynh hướng: tuyệt đối hóa tất yếu hoặc tuyệt đối hóa tự do
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
                      {getDefinitionItems(selected.definition).map((val, i) => (
                        <div key={i} className="bg-zinc-50 p-4 rounded-xl border-l-4 border-soviet-red">
                          <p className="text-zinc-600 text-xs leading-relaxed">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mối quan hệ */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-soviet-red font-black uppercase text-xs tracking-widest">
                      <Info className="w-4 h-4" /> Ưu điểm & Hạn chế
                    </h4>
                    <ul className="space-y-2">
                      {(selected.relationship || []).map((text, i) => (
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
                        <Lightbulb className="w-4 h-4" /> Đại diện tiêu biểu:
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
