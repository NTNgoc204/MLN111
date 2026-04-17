import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleCheck, CircleAlert } from 'lucide-react';

const orderedChallengeItems = [
  {
    id: 'E',
    sentence: 'Phải kiếm tiền để sống (nhu cầu sinh tồn).',
    explanation: 'Trước hết, ai cũng phải kiếm tiền để sống - đó là tất yếu đầu tiên.',
  },
  {
    id: 'F',
    sentence: 'Phải học một nghề/có chuyên môn (nếu không thì chỉ làm việc chân tay bấp bênh).',
    explanation: 'Muốn kiếm tiền ổn định thì phải có nghề/chuyên môn - tất yếu thứ hai.',
  },
  {
    id: 'B',
    sentence: 'Phải có việc làm ổn định để không bị phụ thuộc vào trợ cấp hay vay nợ.',
    explanation: 'Có nghề rồi cần việc làm ổn định để khỏi bị lệ thuộc.',
  },
  {
    id: 'C',
    sentence: 'Có kỹ năng hoặc bằng cấp -> dễ xin việc hơn, không bị ép làm việc bất kỳ lúc nào.',
    explanation: 'Có kỹ năng tốt thì không bị ép làm thêm giờ, có thể từ chối làm việc trái ý.',
  },
  {
    id: 'A',
    sentence: 'Có tiền nhàn rỗi -> được lựa chọn nghỉ ngơi, học tập, du lịch (tự do thời gian).',
    explanation: 'Có tiền nhàn rỗi -> mới có tự do thời gian, tự do tiêu dùng.',
  },
  {
    id: 'D',
    sentence: 'Được chọn nơi làm việc phù hợp với sở thích -> bắt đầu có tự do nghề nghiệp.',
    explanation: 'Được chọn nơi làm việc mình thích - tự do nghề nghiệp.',
  },
  {
    id: 'G',
    sentence: 'Chủ động từ chối những công việc độc hại, trái lương tâm -> tự do thực sự.',
    explanation: 'Cao nhất: tự do từ chối việc xấu, sống đúng giá trị mình muốn.',
  },
];

const randomShuffle = (items) => [...items].sort(() => Math.random() - 0.5);

const shuffleWithoutCorrectPositions = (items) => {
  // Try to generate a derangement so no card starts in its correct slot.
  const maxAttempts = 200;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const shuffled = randomShuffle(items);
    const hasCorrectPosition = shuffled.some((item, index) => item.id === items[index].id);

    if (!hasCorrectPosition) {
      return shuffled;
    }
  }

  // Safe fallback: rotate list by one slot (guaranteed for list length > 1).
  if (items.length > 1) {
    return [...items.slice(1), items[0]];
  }

  return [...items];
};

const moveItem = (list, fromIndex, toIndex) => {
  const nextList = [...list];
  const [moved] = nextList.splice(fromIndex, 1);
  nextList.splice(toIndex, 0, moved);
  return nextList;
};

const getCorrectPrefixLength = (cards) => {
  let count = 0;
  while (count < cards.length && cards[count].id === orderedChallengeItems[count].id) {
    count += 1;
  }
  return count;
};

const InteractiveGame = () => {
  const [cards, setCards] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCards(shuffleWithoutCorrectPositions(orderedChallengeItems));
  }, []);

  const correctPrefixLength = getCorrectPrefixLength(cards);

  useEffect(() => {
    if (!cards.length) {
      return;
    }

    const allCorrect = getCorrectPrefixLength(cards) === orderedChallengeItems.length;
    setSuccess(allCorrect);
  }, [cards]);

  const handleDropAt = (dropIndex) => {
    if (draggingIndex === null) {
      setError('Hãy kéo một ô câu trước khi thả.');
      setTimeout(() => setError(null), 1800);
      return;
    }

    if (draggingIndex === dropIndex) {
      setDraggingIndex(null);
      return;
    }

    setCards((prev) => moveItem(prev, draggingIndex, dropIndex));
    setDraggingIndex(null);
    setError(null);
  };

  const handleReset = () => {
    setCards(shuffleWithoutCorrectPositions(orderedChallengeItems));
    setDraggingIndex(null);
    setSuccess(false);
    setError(null);
  };

  return (
    <section className="py-24 px-6 bg-white border-y border-zinc-100 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-soviet-red mb-6 uppercase tracking-tight">
            Thử Thách Tự Do
          </h2>
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Kéo và thả các ô câu để sắp xếp theo đúng trình tự từ tất yếu đến tự do trong đời sống thực tế.
            Ô nào vào đúng vị trí sẽ hiện ngay diễn giải thực tế tương ứng.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-soviet-red text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Sắp Xếp Theo Thứ Tự Đúng
            </span>
          </div>

          <div className="space-y-4">
            {cards.map((item, index) => {
              const isCorrect = index < correctPrefixLength;
              const isCurrentTarget = index === correctPrefixLength;

              return (
                <motion.div
                  key={item.id}
                  layout
                  draggable
                  onDragStart={() => setDraggingIndex(index)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={() => handleDropAt(index)}
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-2xl border-2 bg-white transition-all shadow-sm ${
                    isCorrect
                      ? 'border-green-500/70 shadow-green-100'
                      : isCurrentTarget
                      ? 'border-soviet-red/50 hover:border-soviet-red hover:shadow-md cursor-move'
                      : 'border-zinc-100 hover:border-zinc-300 hover:shadow-md cursor-move'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="w-9 h-9 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center font-black text-sm mt-1">
                        {index + 1}
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">Ô {item.id}</div>
                        <p className="text-zinc-800 font-semibold leading-relaxed">{item.sentence}</p>
                      </div>
                    </div>

                    {isCorrect && <CircleCheck className="w-6 h-6 text-green-500 mt-1 shrink-0" />}
                  </div>

                  <AnimatePresence>
                    {isCorrect && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200"
                      >
                        <p className="text-sm font-bold uppercase tracking-wider text-green-700 mb-1">Diễn giải thực tế</p>
                        <p className="text-green-800 leading-relaxed">{item.explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-500 font-medium">
              {success
                ? 'Bạn đã hoàn thành toàn bộ theo đúng thứ tự.'
                : `Đang chấm tuần tự: cần đúng đến ô ${correctPrefixLength + 1}.`}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 rounded-full border-2 border-zinc-200 text-zinc-700 font-bold hover:border-soviet-red hover:text-soviet-red transition-colors"
            >
              Trộn Lại Các Ô
            </button>
          </div>
        </div>

        {/* Feedback Message */}
        <div className="h-12 mt-8 flex justify-center items-center">
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-soviet-red font-bold"
              >
                <CircleAlert className="w-5 h-5" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-16 p-12 bg-white border-4 border-soviet-gold rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(245,158,11,0.3)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-soviet-red via-soviet-gold to-soviet-red" />
              <h4 className="text-4xl font-black text-zinc-900 mb-6 uppercase tracking-tighter">Bạn Đã Sắp Xếp Đúng Toàn Bộ</h4>
              <p className="text-soviet-red text-2xl italic font-serif leading-tight">
                "Từ gánh nặng sinh tồn đến cánh chim tự do - bạn đã sắp xếp đúng hành trình của một đời người."
              </p>
              <div className="mt-8 text-zinc-400 font-black uppercase tracking-[0.2em] text-xs">
                Hoàn tất thử thách tự do
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveGame;
