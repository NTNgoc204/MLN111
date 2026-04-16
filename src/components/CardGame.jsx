import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Club, Heart, Spade, Diamond, RefreshCcw, Hand, Trophy, TriangleAlert, Cpu, ArrowLeft, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SUITS = [
  { name: 'Spades', icon: <Spade className="w-6 h-6" />, color: 'text-zinc-900' },
  { name: 'Hearts', icon: <Heart className="w-6 h-6" />, color: 'text-soviet-red' },
  { name: 'Clubs', icon: <Club className="w-6 h-6" />, color: 'text-zinc-900' },
  { name: 'Diamonds', icon: <Diamond className="w-6 h-6" />, color: 'text-soviet-red' },
];

const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const QUESTIONS = [
  {
    q: "Tất yếu trong triết học Mác – Lênin được hiểu là gì?",
    options: ["Điều xảy ra ngẫu nhiên", "Điều do quy luật khách quan chi phối", "Điều không thể giải thích", "Điều xảy ra do ý muốn con người"],
    correct: 1,
    desc: "Tất yếu là cái do các quy luật khách quan quyết định."
  },
  {
    q: "Tự do theo triết học Mác – Lênin là gì?",
    options: ["Không bị ràng buộc", "Sống theo cảm xúc", "Nhận thức và hành động theo quy luật khách quan", "Làm theo ý muốn"],
    correct: 2,
    desc: "Tự do là hành động dựa trên hiểu biết quy luật."
  },
  {
    q: "Quan điểm nào cho rằng tự do là tuyệt đối?",
    options: ["Duy tâm", "Mác – Lênin", "Duy vật biện chứng", "Duy vật lịch sử"],
    correct: 0,
    desc: "Duy tâm thường tuyệt đối hóa tự do."
  },
  {
    q: "Thuyết định mệnh thuộc trường phái nào?",
    options: ["Hiện sinh", "Duy vật siêu hình", "Duy tâm", "Duy vật biện chứng"],
    correct: 1,
    desc: "Thuyết định mệnh cho rằng mọi thứ đã định sẵn."
  },
  {
    q: "Theo Mác – Lênin, cơ sở của tự do là gì?",
    options: ["Cảm xúc", "Niềm tin", "Tất yếu", "Ý chí"],
    correct: 2,
    desc: "Tự do dựa trên quy luật khách quan."
  },
  {
    q: "Tự do là kết quả của điều gì?",
    options: ["Ý chí", "Nhận thức tất yếu", "May mắn", "Cảm xúc"],
    correct: 1,
    desc: "Hiểu quy luật → hành động đúng → tự do."
  },
  {
    q: "Quan hệ giữa tự do và tất yếu là gì?",
    options: ["Không liên quan", "Biện chứng", "Đối lập", "Loại trừ nhau"],
    correct: 1,
    desc: "Hai phạm trù thống nhất với nhau."
  },
  {
    q: "Quan điểm nào phủ nhận vai trò con người?",
    options: ["Thuyết định mệnh", "Mác – Lênin", "Biện chứng", "Duy tâm"],
    correct: 0,
    desc: "Định mệnh xem con người bị chi phối hoàn toàn."
  },
  {
    q: "Điều kiện để đạt tự do là gì?",
    options: ["May mắn", "Có quyền lực", "Hiểu và vận dụng quy luật", "Có tiền"],
    correct: 2,
    desc: "Hiểu quy luật là chìa khóa."
  },
  {
    q: "Tự do nghĩa là gì?",
    options: ["Làm chủ tự nhiên nhờ hiểu quy luật", "Thoát khỏi quy luật", "Thoát khỏi tự nhiên", "Sống tách biệt"],
    correct: 0,
    desc: "Tự do là làm chủ chứ không thoát ly."
  },
  {
    q: "Vai trò của khoa học là gì?",
    options: ["Không liên quan", "Giúp hiểu quy luật", "Giải trí", "Không quan trọng"],
    correct: 1,
    desc: "Khoa học giúp nhận thức tất yếu."
  },
  {
    q: "Thực tiễn có vai trò gì?",
    options: ["Không cần thiết", "Chuyển nhận thức thành hành động", "Không liên quan", "Làm giảm tự do"],
    correct: 1,
    desc: "Thực tiễn là cầu nối."
  },
  {
    q: "Quan điểm 'mọi thứ do số phận' là gì?",
    options: ["Định mệnh", "Mác – Lênin", "Biện chứng", "Duy tâm"],
    correct: 0,
    desc: "Định mệnh phủ nhận vai trò con người."
  },
  {
    q: "Sai lầm của duy ý chí là gì?",
    options: ["Phủ nhận quy luật", "Nhận thức đúng", "Đề cao khoa học", "Tôn trọng quy luật"],
    correct: 0,
    desc: "Duy ý chí coi ý chí quyết định tất cả."
  },
  {
    q: "Nguyên tắc quan trọng là gì?",
    options: ["Không học tập", "Theo cảm tính", "Tôn trọng quy luật", "Chỉ tin bản thân"],
    correct: 2,
    desc: "Phải tôn trọng quy luật khách quan."
  },
  {
    q: "Tự do tăng khi nào?",
    options: ["Không hành động", "Hiểu rõ quy luật", "Ít hiểu biết", "Phụ thuộc"],
    correct: 1,
    desc: "Hiểu biết càng cao → tự do càng lớn."
  },
  {
    q: "Tất yếu tồn tại ở đâu?",
    options: ["Trong mơ", "Trong thế giới khách quan", "Trong ý thức", "Trong tưởng tượng"],
    correct: 1,
    desc: "Tất yếu thuộc về khách quan."
  },
  {
    q: "Biểu hiện của tự do là gì?",
    options: ["Hành động cảm tính", "Không hành động", "Hành động phù hợp quy luật", "Mù quáng"],
    correct: 2,
    desc: "Hành động đúng quy luật là tự do."
  },
  {
    q: "Con đường đến tự do là gì?",
    options: ["Nhận thức → thực tiễn", "Ý chí → may mắn", "Cảm xúc → hành động", "Bỏ qua thực tiễn"],
    correct: 0,
    desc: "Nhận thức + thực tiễn."
  },
  {
    q: "Mối quan hệ này giúp con người gì?",
    options: ["Không học", "Thụ động", "Chủ động cải tạo thế giới", "Bị ràng buộc"],
    correct: 2,
    desc: "Giúp con người chủ động."
  }
];

const Card = ({ card, hidden }) => (
  <motion.div
    initial={{ scale: 0, rotateY: 180 }}
    animate={{ scale: 1, rotateY: hidden ? 180 : 0 }}
    className={`w-24 h-36 bg-white rounded-xl border-2 border-zinc-200 shadow-lg flex flex-col items-center justify-center relative overflow-hidden ${hidden ? 'bg-soviet-red shadow-[0_0_20px_rgba(220,38,38,0.3)]' : ''}`}
  >
    {hidden ? (
      <div className="w-full h-full flex items-center justify-center bg-soviet-red">
        <div className="w-12 h-20 border-2 border-white/20 rounded-lg flex items-center justify-center text-white/20 font-black text-2xl italic">?</div>
      </div>
    ) : (
      <>
        <div className={`absolute top-2 left-2 font-black text-lg ${card.suit.color}`}>{card.value}</div>
        <div className={`${card.suit.color} scale-125`}>{card.suit.icon}</div>
        <div className={`absolute bottom-2 right-2 font-black text-lg rotate-180 ${card.suit.color}`}>{card.value}</div>
      </>
    )}
  </motion.div>
);

const CardGame = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameState, setGameState] = useState('betting'); 
  const [message, setMessage] = useState('Chào mừng đến với Xì Dách Biện Chứng!');
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showResultOverlay, setShowResultOverlay] = useState(false);

  const isXiBan = (hand) => hand.length === 2 && hand.every(c => c.value === 'A');
  const isXiDach = (hand) => hand.length === 2 && hand.some(c => c.value === 'A') && hand.some(c => ['10', 'J', 'Q', 'K'].includes(c.value));

  const calculateScore = (hand) => {
    if (!hand || hand.length === 0) return 0;
    let score = 0;
    let aces = 0;
    for (let card of hand) {
      if (card.value === 'A') {
        aces += 1;
        score += 11;
      } else if (['J', 'Q', 'K'].includes(card.value)) {
        score += 10;
      } else {
        score += parseInt(card.value);
      }
    }
    while (score > 21 && aces > 0) {
      score -= 10;
      aces -= 1;
    }
    return score;
  };

  const createDeck = () => {
    const newDeck = [];
    for (let suit of SUITS) {
      for (let value of VALUES) {
        newDeck.push({ suit, value });
      }
    }
    return newDeck.sort(() => Math.random() - 0.5);
  };

  const startGame = () => {
    const newDeck = createDeck();
    const pHand = [newDeck.pop(), newDeck.pop()];
    const dHand = [newDeck.pop(), newDeck.pop()];
    
    setDeck(newDeck);
    setPlayerHand(pHand);
    setDealerHand(dHand);
    setPlayerScore(calculateScore(pHand));
    setDealerScore(calculateScore(dHand));
    setWrongAnswers(0);
    setShowResultOverlay(false);

    // Check Special Hands Immediately
    const playerXB = isXiBan(pHand);
    const playerXD = isXiDach(pHand);
    const dealerXB = isXiBan(dHand);
    const dealerXD = isXiDach(dHand);

    if (playerXB || playerXD || dealerXB || dealerXD) {
      setGameState('finished');
      setShowResultOverlay(true);
      if (playerXB && !dealerXB) setMessage("XÌ BÀN! Bạn thắng tuyệt đối!");
      else if (dealerXB && !playerXB) setMessage("NHÀ CÁI XÌ BÀN! Bạn đã thua.");
      else if (playerXD && !dealerXD && !dealerXB) setMessage("XÌ DÁCH! Bạn thắng ngay lập tức!");
      else if (dealerXD && !playerXD && !playerXB) setMessage("NHÀ CÁI XÌ DÁCH! Bạn đã thua.");
      else setMessage("Cả hai cùng có bộ bài đặc biệt! Hòa bài (Push)!");
    } else {
      setGameState('playing');
      setMessage('Muốn rút bài? Hãy trả lời đúng câu hỏi biện chứng!');
    }
    setQuizFeedback(null);
  };

  const requestHit = () => {
    if (gameState !== 'playing') return;
    const randomQuiz = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    setCurrentQuiz(randomQuiz);
    setQuizFeedback(null);
    setShowQuiz(true);
  };

  const handleQuizAnswer = (index) => {
    if (index === currentQuiz.correct) {
      setQuizFeedback('correct');
      // Không tự động đóng, để người chơi đọc giải thích
    } else {
      setQuizFeedback('incorrect');
      setWrongAnswers(prev => prev + 1);
    }
  };

  const closeQuiz = () => {
    if (quizFeedback === 'correct') {
      executeHit();
    } else if (quizFeedback === 'incorrect') {
      if (wrongAnswers >= 3) {
        setGameState('finished');
        setShowResultOverlay(true);
        setMessage("BẠN ĐÃ THUA! Sai 3 câu hỏi, bạn không đủ trình độ để tiếp tục cuộc chơi!");
      } else {
        setMessage(`Sai rồi! Bạn không được rút bài lượt này. (Sai ${wrongAnswers}/3 câu)`);
      }
    }
    setShowQuiz(false);
    setQuizFeedback(null);
  };

  const executeHit = () => {
    const newDeck = [...deck];
    if (newDeck.length === 0) return;
    const newCard = newDeck.pop();
    const newHand = [...playerHand, newCard];
    setDeck(newDeck);
    setPlayerHand(newHand);
    const score = calculateScore(newHand);
    setPlayerScore(score);

    if (score > 21) {
      setGameState('finished');
      setShowResultOverlay(true);
      setMessage('Quá 21 điểm! Bạn đã thua.');
    } else {
      setMessage("Trả lời đúng! Bạn đã nhận được một lá bài.");
    }
  };

  const stand = () => {
    if (gameState !== 'playing') return;
    setGameState('dealerTurn');
    setMessage('Lượt của Nhà cái...');
  };

  useEffect(() => {
    if (gameState === 'dealerTurn') {
      const timer = setTimeout(() => {
        const dScore = calculateScore(dealerHand);
        const pScore = calculateScore(playerHand);
        
        // Logic Nhà cái thông minh & may mắn hơn:
        // 1. Rút nếu dưới 17 (bắt buộc)
        // 2. Rút nếu vẫn thua điểm người chơi và người chơi chưa quắc (đến ngưỡng 19 điểm)
        const shouldHit = dScore < 17 || (dScore < pScore && pScore <= 21 && dScore < 19);

        if (shouldHit) {
          let newDeck = [...deck];
          if (newDeck.length === 0) return;
          
          let nextCard = newDeck[newDeck.length - 1];
          
          // "Vận may biện chứng": Nếu rút quân tiếp theo bị quắc, có 40% cơ hội tráo con khác an toàn hơn
          if (calculateScore([...dealerHand, nextCard]) > 21 && Math.random() < 0.4) {
            const safeCardIdx = newDeck.findIndex(c => calculateScore([...dealerHand, c]) <= 21);
            if (safeCardIdx !== -1) {
              // Tráo quân bài an toàn lên đầu để rút
              const safeCard = newDeck.splice(safeCardIdx, 1)[0];
              newDeck.push(safeCard);
              nextCard = safeCard;
            }
          }

          const newCard = newDeck.pop();
          const nextDealerHand = [...dealerHand, newCard];
          setDeck(newDeck);
          setDealerHand(nextDealerHand);
          setDealerScore(calculateScore(nextDealerHand));
        } else {
          setGameState('finished');
          setShowResultOverlay(true);
          if (dScore > 21) setMessage('NHÀ CÁI QUẮC! Bạn đã thắng!');
          else if (pScore > dScore) setMessage('CHÚC MỪNG! Bạn thắng với điểm số cao hơn!');
          else if (pScore < dScore) setMessage('NHÀ CÁI THẮNG! Bạn đã thua rồi.');
          else setMessage('Hòa bài (Push)!');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState, dealerHand, deck, playerHand]);

  return (
    <section className="min-h-screen bg-zinc-900 pt-32 pb-20 px-6 flex flex-col items-center overflow-x-hidden relative">
      <AnimatePresence>
        {showResultOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowResultOverlay(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, rotate: -10 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.5, y: 100, opacity: 0 }}
              className={`relative max-w-sm w-full p-8 rounded-[3rem] border-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center ${
                message.includes('Bạn thắng') || message.includes('XÌ BÀN') || message.includes('XÌ DÁCH') || message.includes('Bạn đã thắng')
                  ? 'bg-soviet-gold border-white text-zinc-900' 
                  : message.includes('Hòa')
                  ? 'bg-zinc-600 border-zinc-400 text-white'
                  : 'bg-soviet-red border-white text-white'
              }`}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-inherit border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                {message.includes('Bạn thắng') || message.includes('XÌ BÀN') || message.includes('XÌ DÁCH') || message.includes('Bạn đã thắng') ? (
                  <Trophy className="w-12 h-12" />
                ) : message.includes('Hòa') ? (
                  <RefreshCcw className="w-12 h-12" />
                ) : (
                  <XCircle className="w-12 h-12" />
                )}
              </div>
              
              <h3 className="mt-8 text-3xl font-black uppercase italic tracking-tighter leading-tight mb-4">
                {message.includes('Bạn thắng') || message.includes('XÌ BÀN') || message.includes('XÌ DÁCH') || message.includes('Bạn đã thắng')
                  ? 'CHIẾN THẮNG!' 
                  : message.includes('Hòa')
                  ? 'KẾT QUẢ HÒA'
                  : 'THẤT BẠI!'}
              </h3>
              
              <p className="font-bold text-lg leading-tight mb-8 opacity-90">
                {message}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startGame();
                }}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95 ${
                  message.includes('Bạn thắng') || message.includes('XÌ BÀN') || message.includes('XÌ DÁCH') || message.includes('Bạn đã thắng')
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-900'
                }`}
              >
                Chơi ván mới
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl w-full">
        <div className="mb-8 flex justify-start">
          <Link to="/" className="text-zinc-500 hover:text-white flex items-center gap-2 font-bold uppercase text-xs transition-colors">
            <ArrowLeft className="w-4 h-4" /> Quay về trang chủ
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-soviet-red mb-4 uppercase tracking-tighter italic">
            Xì Dách <span className="text-white">Biện Chứng</span>
          </h2>
          <div className="h-1.5 w-20 bg-soviet-gold mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm px-4">{message}</p>
        </motion.div>

        <div className="grid gap-12">
          {/* Dealer Area */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-white px-4">
              <span className="font-black uppercase tracking-widest text-xs opacity-50 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Nhà cái
              </span>
              <span className="font-mono font-bold text-soviet-gold text-xl">
                {gameState === 'finished' ? dealerScore : (dealerHand.length > 0 ? '??' : '0')}
              </span>
            </div>
            <div className="flex justify-center gap-4 flex-wrap min-h-[160px] p-8 bg-black/40 rounded-[2rem] border-2 border-dashed border-white/5">
              {dealerHand.map((card, i) => (
                <Card key={`dealer-${i}`} card={card} hidden={i === 1 && gameState === 'playing'} />
              ))}
            </div>
          </div>

          {/* Player Area */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-white px-4">
              <div className="flex flex-col">
                <span className="font-black uppercase tracking-widest text-xs opacity-50 flex items-center gap-2">
                  <Hand className="w-4 h-4" /> Bạn
                </span>
                {wrongAnswers > 0 && (
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-tighter mt-1">
                    Lỗi: {wrongAnswers}/3
                  </span>
                )}
              </div>
              <span className="font-mono font-bold text-soviet-red text-xl">{playerScore}</span>
            </div>
            <div className="flex justify-center gap-4 flex-wrap min-h-[160px] p-8 bg-black/40 rounded-[2rem] border-2 border-soviet-red/10 shadow-[0_0_50px_rgba(220,38,38,0.05)]">
              {playerHand.map((card, i) => (
                <Card key={`player-${i}`} card={card} />
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {gameState === 'betting' && (
            <button
              onClick={startGame}
              className="px-12 py-5 bg-soviet-red text-white font-black uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
            >
              Bắt đầu ván bài
            </button>
          )}

          {gameState === 'playing' && (
            <>
              <button
                onClick={requestHit}
                className="px-10 py-4 bg-white text-zinc-900 font-black uppercase tracking-widest rounded-full hover:bg-zinc-100 transition-all shadow-xl flex items-center gap-3"
              >
                <HelpCircle className="w-5 h-5 text-soviet-red" /> Rút bài (Trả lời Quiz)
              </button>
              <button
                onClick={stand}
                className="px-10 py-4 bg-soviet-red text-white font-black uppercase tracking-widest rounded-full hover:bg-red-700 transition-all shadow-xl flex items-center gap-3"
              >
                <Hand className="w-5 h-5" /> Dừng
              </button>
            </>
          )}

          {gameState === 'finished' && (
            <div className="flex flex-col items-center gap-8 w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-xl md:text-3xl font-black uppercase tracking-tighter p-6 rounded-3xl border-2 text-center ${
                  message.includes('Bạn thắng') || message.includes('XÌ BÀN') || message.includes('XÌ DÁCH') || message.includes('Bạn đã thắng') 
                    ? 'bg-soviet-gold/10 text-soviet-gold border-soviet-gold/20' 
                    : message.includes('Hòa') 
                    ? 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' 
                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                }`}
              >
                {message.includes('Bạn thắng') || message.includes('XÌ BÀN') || message.includes('XÌ DÁCH') || message.includes('Bạn đã thắng') 
                  ? <Trophy className="inline w-8 h-8 mr-3 mb-1" /> 
                  : <TriangleAlert className="inline w-8 h-8 mr-3 mb-1" />}
                {message}
              </motion.div>
              <button
                onClick={startGame}
                className="px-12 py-5 bg-white text-zinc-900 font-black uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95"
              >
                Chơi ván mới
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && currentQuiz && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={quizFeedback ? closeQuiz : null}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-soviet-red" />
              
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-soviet-red/10 rounded-2xl flex items-center justify-center text-soviet-red">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-zinc-400 font-black uppercase text-xs tracking-widest italic">Engels & Tự nhiên</h3>
                  <p className="text-zinc-900 font-bold text-lg leading-tight">{currentQuiz.q}</p>
                </div>
              </div>

              <div className="grid gap-4">
                {currentQuiz.options.map((option, idx) => (
                  <button
                    key={idx}
                    disabled={quizFeedback !== null}
                    onClick={() => handleQuizAnswer(idx)}
                    className={`p-5 rounded-2xl border-2 text-left font-bold transition-all flex justify-between items-center group ${
                      quizFeedback === null 
                        ? 'border-zinc-100 hover:border-soviet-red hover:bg-soviet-red/5 text-zinc-700'
                        : idx === currentQuiz.correct
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : quizFeedback === 'incorrect' && idx !== currentQuiz.correct
                        ? 'border-zinc-100 text-zinc-300 opacity-50'
                        : 'border-zinc-100'
                    }`}
                  >
                    <span>{idx + 1}. {option}</span>
                    {quizFeedback !== null && idx === currentQuiz.correct && <CheckCircle2 className="text-green-500 w-6 h-6" />}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {quizFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 p-6 rounded-2xl border-2 flex items-start gap-4 ${
                      quizFeedback === 'correct' 
                        ? 'bg-green-50 border-green-200 text-green-800' 
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                  >
                    {quizFeedback === 'correct' ? (
                      <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 shrink-0 mt-1" />
                    )}
                    <div>
                      <p className="font-black uppercase text-xs tracking-widest mb-1">
                        {quizFeedback === 'correct' ? 'Chính xác!' : 'Chưa đúng rồi!'}
                      </p>
                      <p className="text-sm font-medium leading-relaxed">{currentQuiz.desc}</p>
                      
                      <button
                        onClick={closeQuiz}
                        className={`mt-4 px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                          quizFeedback === 'correct' 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                      >
                        Tiếp tục ván bài
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CardGame;
