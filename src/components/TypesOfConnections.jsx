import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, Landmark, Scale, Sparkles, Quote } from 'lucide-react';

const foundations = [
  {
    title: 'Nguyên tắc duy vật biện chứng',
    points: [
      'Thừa nhận tính thứ nhất của vật chất, tính thứ hai của ý thức.',
      'Tất yếu khách quan tồn tại độc lập với ý muốn con người dưới dạng các quy luật tự nhiên, xã hội và tư duy.',
      'Ý thức và tư duy là sự phản ánh thế giới khách quan, hành động của con người phải dựa trên sự phản ánh đó.'
    ]
  },
  {
    title: 'Nguyên tắc duy vật lịch sử',
    points: [
      'Không có tự do trừu tượng, chỉ có tự do trong điều kiện lịch sử - xã hội cụ thể.',
      'Tự do chịu chi phối bởi lực lượng sản xuất, quan hệ sản xuất và cấu trúc xã hội.',
      'Trong xã hội có giai cấp, tự do luôn gắn với tương quan quyền lực và địa vị kinh tế.'
    ]
  },
  {
    title: 'Phép biện chứng duy vật về mối liên hệ phổ biến',
    points: [
      'Tự do và tất yếu không tách rời nhau.',
      'Hai mặt thống nhất, đấu tranh và chuyển hóa lẫn nhau trong tiến trình phát triển của tự nhiên, xã hội và tư duy.'
    ]
  }
];

const coreTheses = [
  {
    title: 'Luận điểm 1: Tất yếu tồn tại khách quan, con người không thể thủ tiêu',
    details: [
      'Tất yếu là những mối liên hệ bản chất, bên trong, tất nhiên và do nguyên nhân cơ bản quyết định.',
      'Tất yếu tồn tại ngoài ý muốn con người, dù con người có nhận thức được hay không.',
      'Các dạng: tất yếu tự nhiên (vật lý, hóa học, sinh học), tất yếu xã hội (kinh tế, chính trị, lịch sử), tất yếu tư duy (logic).',
      'Con người không thể phá bỏ bản chất của tất yếu, chỉ có thể nhận thức và vận dụng nó.'
    ],
    example:
      'Ví dụ: Không thể thủ tiêu quy luật hấp dẫn để vật không rơi; không thể xóa quy luật giá trị trong sản xuất hàng hóa; không thể phủ nhận quy luật lực lượng sản xuất quyết định quan hệ sản xuất.'
  },
  {
    title: 'Luận điểm 2: Tự do không tách khỏi tất yếu mà là nhận thức và vận dụng tất yếu',
    details: [
      'Đây là luận điểm trung tâm của triết học Mác - Lênin.',
      'Tự do không phải sự độc lập ảo tưởng trước quy luật tự nhiên.',
      'Tự do là khả năng nhận thức các quy luật và làm cho chúng tác động theo mục đích nhất định của con người.',
      'Con người đi từ bị chi phối mù quáng đến vị thế làm chủ quy luật thông qua học tập, thực nghiệm và tổ chức thực tiễn.'
    ],
    example:
      'Ví dụ kinh điển của Engels: Người lao động chỉ thật sự tự do khi nhận thức được quy luật kinh tế và cải tạo các quan hệ xã hội bằng thực tiễn cách mạng.'
  },
  {
    title: 'Luận điểm 3: Tự do gắn liền với hoạt động thực tiễn cải tạo thế giới',
    details: [
      'Nhận thức tất yếu mới là điều kiện cần, chưa phải điều kiện đủ.',
      'Tự do phải biểu hiện bằng hành động thực tiễn để cải tạo tự nhiên và xã hội.',
      'Tiêu chí của tự do là khả năng đạt mục đích, giải phóng sức lao động và làm chủ hoàn cảnh.'
    ],
    example:
      'Ví dụ: Nhận thức quy luật sóng điện từ là bước đầu; chế tạo hệ thống truyền phát và mạng viễn thông toàn cầu mới là tự do hiện thực.'
  },
  {
    title: 'Luận điểm 4: Tự do và tất yếu chuyển hóa lẫn nhau trong quá trình phát triển',
    details: [
      'Ban đầu, con người bị tất yếu chi phối một cách mù quáng.',
      'Khi nhận thức được quy luật, con người bắt đầu làm chủ.',
      'Khi vận dụng quy luật vào hành động, phạm vi tự do được mở rộng.',
      'Như Lênin nhấn mạnh: nhận thức khách quan càng sâu sắc, tự do càng được mở rộng.'
    ],
    example:
      'Ví dụ: Từ sợ hãi thiên tai đến dự báo khí tượng, xây đập thủy điện và phòng chống thiên tai có kế hoạch.'
  }
];

const classSocietyRows = [
  ['Cộng sản nguyên thủy', 'Tự do tự nhiên, bình đẳng sơ khai', 'Năng suất lao động thấp, phụ thuộc thiên nhiên'],
  ['Chiếm hữu nô lệ', 'Tự do của chủ nô', 'Nô lệ không có tự do'],
  ['Phong kiến', 'Tự do của lãnh chúa', 'Nông nô bị ràng buộc thân phận'],
  ['Tư bản chủ nghĩa', 'Tự do hình thức, tự do cạnh tranh', 'Người lao động bị bóc lột giá trị thặng dư'],
  ['Xã hội chủ nghĩa (quá độ)', 'Tự do định hướng tập thể, từng bước xóa bỏ bóc lột', 'Còn ràng buộc do năng suất thấp và tàn dư cũ'],
  ['Cộng sản chủ nghĩa', 'Tự do toàn diện, làm chủ tự nhiên và xã hội', 'Đạt được ở giai đoạn phát triển cao nhất']
];

const kingdomRows = [
  ['Vương quốc của tất yếu', 'Con người bị các quy luật tự nhiên - xã hội chi phối một cách mù quáng, thụ động.'],
  ['Quá độ', 'Con người dần nhận thức, làm chủ quy luật và cải tạo xã hội có ý thức.'],
  ['Vương quốc của tự do', 'Con người làm chủ tự nhiên, xã hội và bản thân; lao động từ nghĩa vụ thành nhu cầu bậc nhất.']
];

const comparisonRows = [
  ['Bản chất tất yếu', 'Khách quan, cơ học', 'Tinh thần tuyệt đối', 'Phủ nhận hoặc chủ quan', 'Khách quan, biện chứng'],
  ['Bản chất tự do', 'Ảo giác', 'Nhận thức tinh thần', 'Tuyệt đối, vô điều kiện', 'Nhận thức + hành động thực tiễn'],
  ['Mối quan hệ tự do - tất yếu', 'Tất yếu nuốt tự do', 'Thống nhất thần bí', 'Tách rời, đối lập', 'Biện chứng, thống nhất, chuyển hóa'],
  ['Cơ sở của tự do', 'Không có', 'Ý niệm', 'Ý chí cá nhân', 'Hoạt động thực tiễn cải tạo thế giới'],
  ['Giải pháp', 'Bi quan, bất lực', 'Chiêm nghiệm, nghệ thuật, tôn giáo', 'Lựa chọn cá nhân, hành động phi lý', 'Cách mạng xã hội, phát triển lực lượng sản xuất']
];

const classicExamples = [
  {
    title: 'Ví dụ 1: Tự do trong lĩnh vực vật lý',
    text: 'Con người không thể bay bằng cách vẫy tay vì trọng lực là tất yếu. Nhưng khi hiểu khí động học và chế tạo máy bay, con người bay được. Tự do ở đây là lợi dụng quy luật, không phải thoát khỏi quy luật.'
  },
  {
    title: 'Ví dụ 2: Tự do trong lĩnh vực kinh tế',
    text: 'Công nhân trong xã hội tư bản tưởng như tự do bán sức lao động, nhưng thực chất chịu chi phối bởi quy luật cung - cầu. Khi nhận thức quy luật và tổ chức đấu tranh, họ mới từng bước làm chủ điều kiện lao động.'
  },
  {
    title: 'Ví dụ 3: Tự do trong lĩnh vực chính trị',
    text: 'Tự do báo chí trong xã hội tư bản thường là tự do của người có tư bản. Tự do thực sự đòi hỏi điều kiện vật chất xã hội để mọi người có cơ hội tiếp cận thông tin ngang nhau.'
  }
];

const conclusionPoints = [
  'Tất yếu tồn tại khách quan, con người không thể thủ tiêu.',
  'Tự do không phải độc lập với tất yếu mà là nhận thức và vận dụng tất yếu.',
  'Tự do gắn liền với hoạt động thực tiễn cải tạo thế giới.',
  'Tự do và tất yếu chuyển hóa lẫn nhau trong quá trình phát triển.',
  'Chỉ trong xã hội cộng sản chủ nghĩa ở trình độ phát triển cao, con người mới thực sự bước từ vương quốc của tất yếu sang vương quốc của tự do.'
];

const TypesOfConnections = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-50 via-white to-red-50/50">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-soviet-red text-white px-4 py-2 rounded-full text-xs md:text-sm tracking-wide font-bold uppercase">
            <Landmark className="w-4 h-4" />
            Quan điểm trọng tâm
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-soviet-red mt-5 mb-5 leading-tight">
            Quan điểm Triết học Mác - Lênin
          </h2>
          <p className="text-zinc-700 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Triết học Mác - Lênin kế thừa hạt nhân hợp lý của lịch sử triết học, đặc biệt là phép biện chứng của Hegel,
            đồng thời vượt qua các giới hạn trước đó bằng lập trường duy vật biện chứng và duy vật lịch sử.
            Hạt nhân của quan điểm này là giải quyết quan hệ giữa tự do và tất yếu trong thực tiễn cải tạo thế giới.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl border border-soviet-red/20 bg-white shadow-xl shadow-red-100/40 p-6 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpenText className="w-6 h-6 text-soviet-red" />
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">I. Cơ sở lý luận của quan điểm Mác - Lênin</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {foundations.map((item, idx) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5">
                <div className="text-xs font-black tracking-[0.2em] text-soviet-orange uppercase mb-2">Nền tảng {idx + 1}</div>
                <h4 className="text-lg font-bold text-zinc-900 mb-3">{item.title}</h4>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-zinc-700 text-sm leading-relaxed flex gap-2">
                      <Sparkles className="w-4 h-4 text-soviet-red shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl border border-soviet-red/20 bg-white p-6 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-soviet-red" />
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">II. Nội dung cốt lõi của quan điểm Mác - Lênin</h3>
          </div>

          <div className="space-y-4">
            {coreTheses.map((thesis) => (
              <div key={thesis.title} className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-white to-amber-50/40 p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-bold text-soviet-red mb-3">{thesis.title}</h4>
                <ul className="space-y-2 mb-4">
                  {thesis.details.map((detail) => (
                    <li key={detail} className="text-zinc-700 leading-relaxed flex gap-2 text-sm md:text-base">
                      <span className="text-soviet-orange mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-800 text-sm md:text-base italic border-l-4 border-soviet-gold pl-4">{thesis.example}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl border border-soviet-red/20 bg-white p-6 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">III. Tự do trong xã hội có giai cấp (Duy vật lịch sử)</h3>
          <p className="text-zinc-700 mb-6 leading-relaxed">
            Tự do không phải khái niệm trừu tượng mà gắn chặt với điều kiện lịch sử cụ thể. Tự do thực sự chỉ mở ra cùng tiến trình
            xóa bỏ áp bức, bóc lột và nâng cao năng lực làm chủ đời sống xã hội của con người.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-zinc-100 text-zinc-800">
                <tr>
                  <th className="text-left p-3 font-bold">Hình thái kinh tế - xã hội</th>
                  <th className="text-left p-3 font-bold">Tự do đặc trưng</th>
                  <th className="text-left p-3 font-bold">Hạn chế</th>
                </tr>
              </thead>
              <tbody>
                {classSocietyRows.map((row) => (
                  <tr key={row[0]} className="border-t border-zinc-200">
                    <td className="p-3 font-semibold text-zinc-900">{row[0]}</td>
                    <td className="p-3 text-zinc-700">{row[1]}</td>
                    <td className="p-3 text-zinc-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl border border-soviet-red/20 bg-white p-6 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">IV. Tiến trình lịch sử: từ vương quốc của tất yếu đến vương quốc của tự do</h3>
          <p className="text-zinc-700 mb-6 leading-relaxed">
            Theo Engels, sự can thiệp có ý thức của con người vào quá trình xã hội thay cho tác động mù quáng của các lực lượng tự phát
            chính là con đường lịch sử để mở rộng tự do.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {kingdomRows.map((row) => (
              <div key={row[0]} className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50/60">
                <h4 className="font-bold text-soviet-red mb-2">{row[0]}</h4>
                <p className="text-zinc-700 text-sm leading-relaxed">{row[1]}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-zinc-700 italic text-sm md:text-base">
            Ví dụ: Khủng hoảng kinh tế định kỳ trong xã hội tư bản thể hiện sự chi phối của tất yếu một cách mù quáng. Khi nền kinh tế được
            điều tiết có kế hoạch và định hướng xã hội, mức độ bị động giảm xuống, mở đầu cho bước chuyển sang phạm vi tự do rộng hơn.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl border border-soviet-red/20 bg-white p-6 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">V. So sánh với các quan điểm trước</h3>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full min-w-[920px] text-sm">
              <thead className="bg-zinc-100 text-zinc-800">
                <tr>
                  <th className="text-left p-3 font-bold">Tiêu chí</th>
                  <th className="text-left p-3 font-bold">Duy vật siêu hình (Holbach)</th>
                  <th className="text-left p-3 font-bold">Duy tâm khách quan (Hegel)</th>
                  <th className="text-left p-3 font-bold">Duy tâm chủ quan (Sartre)</th>
                  <th className="text-left p-3 font-bold">Mác - Lênin</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-t border-zinc-200">
                    <td className="p-3 font-semibold text-zinc-900">{row[0]}</td>
                    <td className="p-3 text-zinc-600">{row[1]}</td>
                    <td className="p-3 text-zinc-600">{row[2]}</td>
                    <td className="p-3 text-zinc-600">{row[3]}</td>
                    <td className="p-3 text-soviet-red font-semibold">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl border border-soviet-red/20 bg-white p-6 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-5">VI. Các ví dụ kinh điển minh họa</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {classicExamples.map((item) => (
              <div key={item.title} className="rounded-2xl p-5 border border-zinc-200 bg-gradient-to-b from-white to-red-50/40">
                <h4 className="font-bold text-soviet-red mb-2">{item.title}</h4>
                <p className="text-zinc-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl bg-soviet-red text-white p-6 md:p-10 shadow-2xl shadow-red-300/30"
        >
          <div className="flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5" />
            <h3 className="text-2xl md:text-3xl font-bold">VII. Kết luận về quan điểm Mác - Lênin</h3>
          </div>
          <ul className="space-y-2 mb-5">
            {conclusionPoints.map((point, idx) => (
              <li key={point} className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
                <span className="font-black text-soviet-gold mt-0.5">{idx + 1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/95 border-l-4 border-soviet-gold pl-4 italic leading-relaxed">
            Luận điểm kết thúc của Engels: Tự do là ở chỗ con người không những nhận thức được tất yếu mà còn hành động theo sự nhận thức ấy
            để cải tạo hiện thực. Đó là đỉnh cao của tự do trong lịch sử loài người.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default TypesOfConnections;
