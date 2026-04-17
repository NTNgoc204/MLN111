import React from 'react';
import { motion } from 'framer-motion';
import { Users, ListOrdered, BookOpen, Cpu, MessageSquare, PenTool, Terminal, Book } from 'lucide-react';

const PresentationOverview = () => {
  const members = [
    { name: "Nguyễn Thành Ngọc", id: "SE180279" },
    { name: "Nguyễn Tiến Đạt", id: "SE181844" },
    { name: "Trần Anh Tú", id: "SE183396" },
    { name: "Nguyễn Nam Thịnh", id: "SE182156" },
  ];

  const outline = [
    { title: "Mối Liên Hệ Giữa Tự Do và Tất Yếu", desc: "Nền tảng lý luận về sự liên kết giữa sự tự do và sự tất yếu." },
    { title: "Quan điểm qua các trường phái về sự tự do và sự tất yếu", desc: "Duy tâm – duy vật – thần học nhìn tự do & tất yếu thế nào?" },
    { title: "Quan điểm của Triết học Mác - Lênin", desc: "Phần quan trọng nhất – Tự do = nhận thức tất yếu" },
    { title: "Liên hệ thực tiễn & Ý nghĩa", desc: "Hành động thế nào để vừa tự do vừa đúng quy luật?" },
  ];

  const tools = [
    { name: "NotebookLM", icon: <Book className="w-6 h-6" />, color: "bg-blue-500", desc: "Tổng hợp Nội Dung và Làm Video Tổng Hợp" },
    { name: "ChatGPT", icon: <MessageSquare className="w-6 h-6" />, color: "bg-emerald-500", desc: "Tạo Promt để VibeCoding Web" },
    { name: "Figma AI", icon: <PenTool className="w-6 h-6" />, color: "bg-purple-500", desc: "Tạo UI" },
    { name: "Cursor AI", icon: <Terminal className="w-6 h-6" />, color: "bg-sky-500", desc: "VibeCoding ra web từ UI của FigmaAI và Promt của ChatGPT" },
    { name: "MyMap AI", icon: <Cpu className="w-6 h-6" />, color: "bg-orange-500", desc: "Dùng để tạo MindMap từ nội dung đã tổng hợp" },
  ];

  return (
    <section id="overview" className="min-h-screen py-32 px-6 bg-zinc-50 text-zinc-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-soviet-red/10 text-soviet-red font-bold text-sm uppercase tracking-widest mb-4">
            Môn học: Triết học Mác – Lênin
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic text-soviet-red">
            Tổng quan <span className="text-zinc-800">Thuyết trình</span>
          </h2>
          <p className="text-xl font-medium text-zinc-500 mb-8">
            Giảng viên hướng dẫn: <span className="text-zinc-900 font-bold underline decoration-soviet-red underline-offset-4">Hoàng Thắng</span>
          </p>
          <div className="w-24 h-2 bg-soviet-red mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Section 1: Team Members */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold flex items-center gap-4 uppercase tracking-widest text-soviet-red">
              <Users className="w-8 h-8" /> Đội ngũ thực hiện
            </h3>
            <div className="space-y-4">
              {members.map((member) => (
                <div 
                  key={member.id}
                  className="p-6 bg-white border-2 border-zinc-100 border-l-soviet-red hover:border-soviet-red transition-all flex justify-between items-center group shadow-sm hover:shadow-md"
                >
                  <div className="text-xl font-bold text-zinc-900 group-hover:text-soviet-red transition-colors">{member.name}</div>
                  <div className="text-soviet-red font-mono font-bold tracking-tighter text-lg">{member.id}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Outline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold flex items-center gap-4 uppercase tracking-widest text-soviet-red">
              <ListOrdered className="w-8 h-8" /> Nội dung thuyết trình
            </h3>
            <div className="space-y-6">
              {outline.map((item, index) => (
                <div key={index} className="flex gap-6 relative group">
                  <div className="flex-none w-12 h-12 rounded-full bg-soviet-red text-white flex items-center justify-center text-xl font-black italic shadow-lg shadow-soviet-red/20 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  {index !== outline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-zinc-200" />
                  )}
                  <div className="pb-8">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-soviet-orange transition-colors uppercase text-zinc-800">{item.title}</h4>
                    <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 3: Appendix - Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-12 bg-white border-2 border-zinc-100 rounded-[3rem] shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Cpu className="w-32 h-32" />
          </div>
          
          <h3 className="text-2xl font-bold text-center uppercase tracking-widest text-zinc-400 mb-12">
            Phụ lục: Công cụ hỗ trợ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center group text-center">
                <div className={`w-16 h-16 rounded-2xl ${tool.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <div className="font-bold text-zinc-800 uppercase text-xs tracking-widest mb-2">{tool.name}</div>
                <p className="text-[10px] text-zinc-500 font-medium leading-tight px-2">{tool.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresentationOverview;
