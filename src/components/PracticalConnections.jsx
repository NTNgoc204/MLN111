import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Waves, X, ExternalLink, Radio, Factory, CloudRain } from 'lucide-react';

const caseStudies = [
  {
    id: 'physics-flight',
    title: 'Vật lý: Từ trọng lực đến hàng không',
    summary: 'Không thoát khỏi trọng lực, con người dùng trọng lực và khí động học để bay.',
    context:
      'Luận điểm kinh điển của Engels trong docx nhấn mạnh: quy luật tự nhiên là khách quan, con người không thể xóa bỏ mà phải nhận thức và vận dụng.',
    analysis:
      'Từ trạng thái bị tự nhiên chi phối, con người nghiên cứu lực nâng, lực cản, áp suất, động cơ phản lực. Khi thiết kế máy bay đúng quy luật, trọng lực từ "rào cản" trở thành yếu tố đã được tính trước trong hệ thống kỹ thuật.',
    points: [
      'Tất yếu tự nhiên tồn tại khách quan, con người không thể thủ tiêu trọng lực.',
      'Con người học quy luật, thiết kế cánh, động cơ, luồng khí để biến quy luật thành công cụ.',
      'Tự do đạt được bằng hành động thực tiễn phù hợp quy luật, không phải bằng ý chí chủ quan.'
    ],
    linkedThesis: 'Luận điểm 2 và 3: tự do là nhận thức + vận dụng tất yếu trong thực tiễn.',
    practicalValue: 'Bài học phương pháp luận: trước vấn đề kỹ thuật, cần truy về quy luật nền tảng thay vì xử lý cảm tính.',
    quote:
      '"Tự do không phải là sự độc lập ảo tưởng đối với các quy luật của tự nhiên, mà là sự nhận thức các quy luật ấy và khả năng làm cho chúng tác động theo những mục đích nhất định của con người."',
    icon: TrendingUp,
    tone: 'text-soviet-red'
  },
  {
    id: 'telecom-maxwell',
    title: 'Khoa học - công nghệ: Từ Maxwell đến viễn thông',
    summary: 'Hiểu sóng điện từ mới chỉ là điều kiện cần, tự do liên lạc chỉ có khi biến tri thức thành công nghệ.',
    context:
      'Trong docx, ví dụ Maxwell minh họa rõ luận điểm: nhận thức tất yếu chưa đủ, cần hoạt động thực tiễn cải tạo thế giới.',
    analysis:
      'Quy luật sóng điện từ được khám phá trong phòng thí nghiệm, sau đó được cụ thể hóa thành máy thu phát, trạm phát sóng, vệ tinh, mạng di động. Con người từ lệ thuộc khoảng cách vật lý sang khả năng giao tiếp tức thời toàn cầu.',
    points: [
      'Tri thức khoa học là điểm xuất phát, không phải điểm kết thúc của tự do.',
      'Tự do thực tiễn được đo bằng năng lực biến quy luật thành công cụ xã hội.',
      'Cải tiến công nghệ liên tục làm mở rộng thêm phạm vi tự do liên lạc.'
    ],
    linkedThesis: 'Luận điểm 3: tự do gắn liền với thực tiễn cải tạo.',
    practicalValue: 'Bài học phương pháp luận: muốn giải bài toán xã hội, phải đi đủ chuỗi nhận thức - công nghệ - tổ chức triển khai.',
    quote:
      '"Nhận thức quy luật mới chỉ là bước đầu; tự do hiện thực đòi hỏi năng lực tổ chức hành động theo quy luật ấy."',
    icon: Radio,
    tone: 'text-soviet-orange'
  },
  {
    id: 'labor-market',
    title: 'Kinh tế: Thị trường lao động và tự do thực chất',
    summary: 'Tự do bán sức lao động về hình thức chưa đồng nghĩa tự do trong bản chất.',
    context:
      'Docx nêu rõ: trong xã hội tư bản, người lao động bị quy luật cung - cầu và cạnh tranh chi phối một cách mù quáng nếu không nhận thức và tổ chức thực tiễn.',
    analysis:
      'Khi chỉ đứng ở cấp độ cá nhân, người lao động dễ bị động trước thất nghiệp và biến động tiền lương. Khi nắm quy luật kinh tế, tổ chức công đoàn, thương lượng tập thể và đấu tranh cho điều kiện lao động, họ từng bước chuyển từ bị động sang chủ động.',
    points: [
      'Phải phân biệt tự do hình thức với tự do thực chất.',
      'Nhận thức quy luật kinh tế là tiền đề của hành động tập thể có mục tiêu.',
      'Tổ chức xã hội đúng hướng giúp mở rộng quyền tự quyết của người lao động.'
    ],
    linkedThesis: 'Luận điểm 1, 2 và phần III: tự do trong xã hội có giai cấp.',
    practicalValue: 'Bài học phương pháp luận: phân tích mọi chính sách lao động bằng điều kiện lịch sử - cụ thể, không dừng ở khẩu hiệu pháp lý.',
    quote:
      '"Từ nhận thức quy luật đến thực tiễn tổ chức xã hội là con đường mở rộng tự do của người lao động."',
    icon: Factory,
    tone: 'text-zinc-800'
  },
  {
    id: 'press-freedom',
    title: 'Chính trị: Tự do báo chí và điều kiện vật chất',
    summary: 'Quyền tự do chỉ thực sự phổ quát khi mọi người có điều kiện tiếp cận thông tin ngang nhau.',
    context:
      'Theo ví dụ trong docx về Lênin: tự do báo chí trong xã hội tư bản thường nghiêng về người có tư bản mua, thuê và chi phối truyền thông.',
    analysis:
      'Nếu hạ tầng truyền thông, nền tảng phát ngôn và nguồn lực tiếp cận chỉ tập trung ở thiểu số, quyền tự do dễ trở thành đặc quyền. Tự do thực chất đòi hỏi cải tạo điều kiện vật chất xã hội, bảo đảm cơ hội thông tin cho đa số nhân dân.',
    points: [
      'Không tuyệt đối hóa tự do như khái niệm trừu tượng ngoài lịch sử.',
      'Phân tích tự do phải gắn với cấu trúc quyền lực và sở hữu tư liệu truyền thông.',
      'Mở rộng bình đẳng tiếp cận thông tin là điều kiện của tự do chính trị thực chất.'
    ],
    linkedThesis: 'Phần III: tự do trong xã hội có giai cấp và quan điểm lịch sử - cụ thể.',
    practicalValue: 'Bài học phương pháp luận: đánh giá quyền tự do phải đặt trong tương quan vật chất - thể chế cụ thể.',
    quote:
      '"Tự do thực sự chỉ có khi mọi người đều có cơ hội ngang nhau trong tiếp cận thông tin và tham gia đời sống chính trị."',
    icon: ExternalLink,
    tone: 'text-soviet-red'
  },
  {
    id: 'disaster-prevention',
    title: 'Thiên nhiên: Từ sợ hãi thiên tai đến dự báo và phòng chống',
    summary: 'Nhận thức quy luật khí tượng - địa chất giúp con người mở rộng tự do trước tự nhiên.',
    context:
      'Docx mô tả rõ tiến trình: ban đầu con người bị tất yếu tự nhiên chi phối mù quáng, sau đó dần nhận thức và hành động theo quy luật.',
    analysis:
      'Từ trạng thái bị động trước bão lũ, xã hội phát triển khí tượng học, mô hình dự báo, hệ thống cảnh báo sớm và quy hoạch phòng chống thiên tai. Tất yếu không biến mất, nhưng năng lực ứng phó của con người tăng mạnh.',
    points: [
      'Tất yếu tự nhiên luôn tồn tại, không thể thủ tiêu.',
      'Khoa học dự báo làm thay đổi chất lượng phản ứng xã hội trước rủi ro.',
      'Tổ chức phòng chống thiên tai thể hiện bước mở rộng tự do một cách lịch sử.'
    ],
    linkedThesis: 'Luận điểm 4: tự do và tất yếu chuyển hóa lẫn nhau trong phát triển.',
    practicalValue: 'Bài học phương pháp luận: quản trị rủi ro hiệu quả cần kết hợp khoa học dữ liệu, quản trị nhà nước và hành động cộng đồng.',
    quote:
      '"Từ chỗ bị quy luật chi phối mù quáng, con người có thể từng bước làm chủ hoàn cảnh bằng nhận thức và thực tiễn."',
    icon: CloudRain,
    tone: 'text-soviet-orange'
  },
  {
    id: 'economic-regulation',
    title: 'Quản trị xã hội: Từ khủng hoảng chu kỳ đến điều tiết có kế hoạch',
    summary: 'Nhận thức quy luật kinh tế là cơ sở để giảm tính mù quáng trong vận động xã hội.',
    context:
      'Trong docx, ví dụ vương quốc của tất yếu và vương quốc của tự do gắn với khả năng điều tiết có ý thức các quá trình xã hội.',
    analysis:
      'Khủng hoảng kinh tế định kỳ biểu hiện tác động mù quáng của quy luật thị trường. Khi năng lực phân tích, dự báo và điều tiết vĩ mô được nâng cao theo định hướng xã hội, biên độ khủng hoảng có thể được hạn chế, phạm vi chủ động xã hội được mở rộng.',
    points: [
      'Từ tự phát sang tự giác là trục vận động quan trọng của tự do xã hội.',
      'Cải tiến thể chế kinh tế giúp giảm tổn thất do biến động chu kỳ.',
      'Mục tiêu cuối cùng là nâng cao năng lực làm chủ đời sống của con người.'
    ],
    linkedThesis: 'Phần IV: từ vương quốc của tất yếu đến vương quốc của tự do.',
    practicalValue: 'Bài học phương pháp luận: chính sách công cần dựa trên quy luật khách quan và dữ liệu thực tiễn, tránh duy ý chí.',
    quote:
      '"Sự can thiệp có ý thức của con người vào quá trình xã hội thay thế tác động mù quáng của các lực lượng xã hội."',
    icon: Waves,
    tone: 'text-zinc-800'
  }
];

const PracticalConnections = () => {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-soviet-red mb-2 uppercase tracking-tight">
            Ứng Dụng Thực Tiễn (Case Study)
          </h2>
          <p className="text-sm md:text-base text-zinc-600 max-w-3xl mx-auto font-medium">
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((item, idx) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setActiveCase(item)}
              className="text-left p-5 rounded-2xl border-2 border-soviet-red/15 bg-gradient-to-b from-white to-zinc-50 hover:border-soviet-red/50 hover:shadow-lg transition-all"
            >
              <item.icon className={`w-6 h-6 ${item.tone} mb-3`} />
              <h3 className="text-base md:text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">{item.summary}</p>
              <span className="text-xs uppercase tracking-wider font-black text-soviet-red">Nhấn vào để mở</span>
            </motion.button>
          ))}
        </div>

        {activeCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <button
              type="button"
              aria-label="Đóng"
              onClick={() => setActiveCase(null)}
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-3xl rounded-2xl bg-white border-2 border-soviet-red/20 shadow-2xl p-6 md:p-7 max-h-[85vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveCase(null)}
                className="absolute top-3 right-3 p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl md:text-2xl font-bold text-soviet-red mb-3 pr-10">{activeCase.title}</h3>
              <p className="text-zinc-900 font-semibold text-sm mb-3">{activeCase.summary}</p>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base mb-3">{activeCase.context}</p>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">{activeCase.analysis}</p>
              <ul className="mt-4 space-y-2">
                {activeCase.points.map((point) => (
                  <li key={point} className="text-zinc-700 text-sm md:text-base leading-relaxed flex gap-2">
                    <span className="text-soviet-orange">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                <div className="text-xs uppercase tracking-wider font-black text-zinc-500 mb-1">Luận điểm liên hệ</div>
                <p className="text-sm md:text-base text-zinc-800 font-semibold">{activeCase.linkedThesis}</p>
              </div>
              <div className="mt-3 rounded-xl border border-soviet-red/20 bg-red-50/40 p-3">
                <div className="text-xs uppercase tracking-wider font-black text-soviet-red mb-1">Giá trị ứng dụng</div>
                <p className="text-sm md:text-base text-zinc-800">{activeCase.practicalValue}</p>
              </div>
              <p className="mt-4 text-zinc-700 italic border-l-4 border-soviet-gold pl-3 text-sm md:text-base">{activeCase.quote}</p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticalConnections;
