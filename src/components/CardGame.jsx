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
    desc: "Hiểu quy luật -> hành động đúng -> tự do."
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
    desc: "Hiểu biết càng cao -> tự do càng lớn."
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
    options: ["Nhận thức -> thực tiễn", "Ý chí -> may mắn", "Cảm xúc -> hành động", "Bỏ qua thực tiễn"],
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

const MAX_PLAYER_HITS = 3;
const MAX_HAND_CARDS = 5;
const TARGET_PLAYER_WIN_RATE = 0.2;
const DEALER_EDGE_ROUND_RATE = 1 - TARGET_PLAYER_WIN_RATE;
const DEALER_WIN_CONVERT_RATE = 0.65;

const CardGame = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameState, setGameState] = useState('betting'); 
  const [message, setMessage] = useState('Chào mừng đến với Xì Dách Biện Chứng!');
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [resultType, setResultType] = useState('neutral');
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showResultOverlay, setShowResultOverlay] = useState(false);
  const [dealerAdvantageRound, setDealerAdvantageRound] = useState(false);

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
        score += parseInt(card.value, 10);
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

  const isNguLinh = (hand) => hand.length === MAX_HAND_CARDS && calculateScore(hand) <= 21;

  const setRoundResult = (winner, nextMessage) => {
    setMessage(nextMessage);
    if (winner === 'player') setResultType('win');
    else if (winner === 'dealer') setResultType('lose');
    else setResultType('push');
  };

  const pickPlayerCardIndex = (currentDeck, currentPlayerHand) => {
    const topIndex = currentDeck.length - 1;
    if (topIndex < 0) return -1;

    if (!dealerAdvantageRound || Math.random() > 0.45) return topIndex;

    const evaluations = currentDeck.map((card, idx) => ({
      idx,
      score: calculateScore([...currentPlayerHand, card]),
    }));

    const bustCards = evaluations.filter((item) => item.score > 21);
    if (bustCards.length > 0 && Math.random() < 0.45) {
      return bustCards[Math.floor(Math.random() * bustCards.length)].idx;
    }

    const riskySafe = evaluations
      .filter((item) => item.score <= 21)
      .sort((a, b) => b.score - a.score);

    return riskySafe.length > 0 ? riskySafe[0].idx : topIndex;
  };

  const pickDealerCardIndex = (currentDeck, currentDealerHand, currentPlayerHand) => {
    const topIndex = currentDeck.length - 1;
    if (topIndex < 0) return -1;

    const evaluations = currentDeck.map((card, idx) => {
      const nextHand = [...currentDealerHand, card];
      return {
        idx,
        nextHand,
        score: calculateScore(nextHand),
      };
    });

    const safeCards = evaluations.filter((item) => item.score <= 21);
    if (safeCards.length === 0) return topIndex;

    if (!dealerAdvantageRound || Math.random() > 0.7) {
      const topSafe = safeCards.find((item) => item.idx === topIndex);
      return topSafe ? topIndex : safeCards[0].idx;
    }

    const playerScoreNow = calculateScore(currentPlayerHand);
    const playerNguLinh = isNguLinh(currentPlayerHand);

    const nguLinhOptions = safeCards.filter((item) => item.nextHand.length === MAX_HAND_CARDS);
    if (nguLinhOptions.length > 0) {
      if (playerNguLinh) {
        const winningNguLinh = nguLinhOptions
          .filter((item) => item.score < playerScoreNow)
          .sort((a, b) => b.score - a.score);
        if (winningNguLinh.length > 0) return winningNguLinh[0].idx;
      }
      return nguLinhOptions.sort((a, b) => a.score - b.score)[0].idx;
    }

    if (playerScoreNow <= 21) {
      const beatPlayer = safeCards
        .filter((item) => item.score > playerScoreNow)
        .sort((a, b) => a.score - b.score);
      if (beatPlayer.length > 0) return beatPlayer[0].idx;
    }

    return safeCards.sort((a, b) => b.score - a.score)[0].idx;
  };

  const decideRoundResult = (pHand, dHand, applyHouseEdge = false) => {
    const pScore = calculateScore(pHand);
    const dScore = calculateScore(dHand);
    const playerXB = isXiBan(pHand);
    const dealerXB = isXiBan(dHand);
    const playerXD = isXiDach(pHand);
    const dealerXD = isXiDach(dHand);
    const playerNguLinh = isNguLinh(pHand);
    const dealerNguLinh = isNguLinh(dHand);
    let winner = 'push';
    let resultMessage = 'Hòa bài (Push)!';
    let rankType = 'normal';
    if (playerXB && !dealerXB) {
      winner = 'player';
      rankType = 'xiBan';
      resultMessage = 'XÌ BÀN! Bạn thắng tuyệt đối!';
    } else if (dealerXB && !playerXB) {
      winner = 'dealer';
      rankType = 'xiBan';
      resultMessage = 'NHÀ CÁI XÌ BÀN! Bạn đã thua.';
    } else if (playerXD && !dealerXD && !dealerXB) {
      winner = 'player';
      rankType = 'xiDach';
      resultMessage = 'XÌ DÁCH! Bạn thắng ngay lập tức!';
    } else if (dealerXD && !playerXD && !playerXB) {
      winner = 'dealer';
      rankType = 'xiDach';
      resultMessage = 'NHÀ CÁI XÌ DÁCH! Bạn đã thua.';
    } else if (playerNguLinh && dealerNguLinh) {
      rankType = 'nguLinh';
      if (pScore < dScore) {
        winner = 'player';
        resultMessage = 'Cùng NGŨ LINH! Bạn thắng vì điểm thấp hơn.';
      } else if (pScore > dScore) {
        winner = 'dealer';
        resultMessage = 'Cùng NGŨ LINH! Nhà cái thắng vì điểm thấp hơn.';
      } else {
        winner = 'push';
        resultMessage = 'Cùng NGŨ LINH và cùng điểm! Hòa bài.';
      }
    } else if (playerNguLinh && !dealerNguLinh) {
      winner = 'player';
      rankType = 'nguLinh';
      resultMessage = 'NGŨ LINH! Bạn thắng.';
    } else if (dealerNguLinh && !playerNguLinh) {
      winner = 'dealer';
      rankType = 'nguLinh';
      resultMessage = 'NHÀ CÁI NGŨ LINH! Bạn đã thua.';
    } else if (pScore > 21 && dScore > 21) {
      winner = 'push';
      resultMessage = 'Cả hai cùng quắc! Hòa bài.';
    } else if (pScore > 21) {
      winner = 'dealer';
      resultMessage = 'Quá 21 điểm! Bạn đã thua.';
    } else if (dScore > 21) {
      winner = 'player';
      resultMessage = 'NHÀ CÁI QUẮC! Bạn đã thắng!';
    } else if (pScore > dScore) {
      winner = 'player';
      resultMessage = 'CHÚC MỪNG! Bạn thắng với điểm số cao hơn!';
    } else if (pScore < dScore) {
      winner = 'dealer';
      resultMessage = 'NHÀ CÁI THẮNG! Bạn đã thua rồi.';
    }
    if (
      applyHouseEdge &&
      dealerAdvantageRound &&
      winner === 'player' &&
      rankType === 'normal' &&
      Math.random() < DEALER_WIN_CONVERT_RATE
    ) {
      winner = 'dealer';
      resultMessage = 'NHÀ CÁI THẮNG! Bạn đã thua rồi.';
    }
    return {
      winner,
      message: resultMessage,
      playerScore: pScore,
      dealerScore: dScore,
    };
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
    setShowQuiz(false);
    setCurrentQuiz(null);
    setResultType('neutral');
    setDealerAdvantageRound(Math.random() < DEALER_EDGE_ROUND_RATE);
    const hasOpeningSpecial =
      isXiBan(pHand) || isXiDach(pHand) || isXiBan(dHand) || isXiDach(dHand);
    if (hasOpeningSpecial) {
      const openingResult = decideRoundResult(pHand, dHand, false);
      setGameState('finished');
      setShowResultOverlay(true);
      setRoundResult(openingResult.winner, openingResult.message);
    } else {
      setGameState('playing');
      setMessage('Muốn rút bài? Hãy trả lời đúng câu hỏi biện chứng!');
    }
    setQuizFeedback(null);
  };
  const requestHit = () => {
    if (gameState !== 'playing') return;
    const drawCount = Math.max(0, playerHand.length - 2);
    if (drawCount >= MAX_PLAYER_HITS || playerHand.length >= MAX_HAND_CARDS) {
      setMessage('Bạn đã rút tối đa 3 lá (tổng 5 lá). Hãy dừng.');
      return;
    }
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
        setRoundResult('dealer', 'BẠN ĐÃ THUA! Sai 3 câu hỏi, bạn không đủ trình độ để tiếp tục cuộc chơi!');
      } else {
        setMessage(`Sai rồi! Bạn không được rút bài lượt này. (Sai ${wrongAnswers}/3 câu)`);
      }
    }
    setShowQuiz(false);
    setQuizFeedback(null);
  };
  const executeHit = () => {
    const drawCount = Math.max(0, playerHand.length - 2);
    if (drawCount >= MAX_PLAYER_HITS || playerHand.length >= MAX_HAND_CARDS) {
      setMessage('Bạn đã rút tối đa 3 lá (tổng 5 lá). Hãy dừng.');
      return;
    }
    const newDeck = [...deck];
    if (newDeck.length === 0) {
      setGameState('dealerTurn');
      return;
    }
    const cardIndex = pickPlayerCardIndex(newDeck, playerHand);
    if (cardIndex < 0) return;
    const newCard = newDeck.splice(cardIndex, 1)[0];
    const newHand = [...playerHand, newCard];
    const score = calculateScore(newHand);
    setDeck(newDeck);
    setPlayerHand(newHand);
    setPlayerScore(score);
    if (score > 21) {
      setGameState('finished');
      setShowResultOverlay(true);
      setRoundResult('dealer', 'Quá 21 điểm! Bạn đã thua.');
      return;
    }
    if (isNguLinh(newHand)) {
      setGameState('dealerTurn');
      setMessage('Bạn đã NGŨ LINH! Chờ nhà cái lật bài...');
      return;
    }
    if (drawCount + 1 >= MAX_PLAYER_HITS) {
      setMessage('Bạn đã rút đủ 3 lá. Hãy dừng.');
      return;
    }
    setMessage('Trả lời đúng! Bạn đã nhận được một lá bài.');
  };
  const stand = () => {
    if (gameState !== 'playing') return;
    setGameState('dealerTurn');
    setMessage('Lượt của nhà cái...');
  };
  useEffect(() => {
    if (gameState === 'dealerTurn') {
      const timer = setTimeout(() => {
        const dScore = calculateScore(dealerHand);
        const pScore = calculateScore(playerHand);
        const playerNguLinh = isNguLinh(playerHand);
        const dealerNguLinh = isNguLinh(dealerHand);
        const dealerCanHit = dealerHand.length < MAX_HAND_CARDS;
        const shouldHit =
          dealerCanHit &&
          !dealerNguLinh &&
          (
            dScore < 17 ||
            (playerNguLinh && !dealerNguLinh) ||
            (dScore < pScore && pScore <= 21 && dScore < 20) ||
            (dealerAdvantageRound && pScore <= 21 && dScore <= pScore && dScore < 21)
          );
        if (shouldHit) {
          const newDeck = [...deck];
          if (newDeck.length === 0) {
            const result = decideRoundResult(playerHand, dealerHand, true);
            setPlayerScore(result.playerScore);
            setDealerScore(result.dealerScore);
            setGameState('finished');
            setShowResultOverlay(true);
            setRoundResult(result.winner, result.message);
            return;
          }
          const cardIndex = pickDealerCardIndex(newDeck, dealerHand, playerHand);
          if (cardIndex < 0) return;
          const newCard = newDeck.splice(cardIndex, 1)[0];
          const nextDealerHand = [...dealerHand, newCard];
          setDeck(newDeck);
          setDealerHand(nextDealerHand);
          setDealerScore(calculateScore(nextDealerHand));
        } else {
          const result = decideRoundResult(playerHand, dealerHand, true);
          setPlayerScore(result.playerScore);
          setDealerScore(result.dealerScore);
          setGameState('finished');
          setShowResultOverlay(true);
          setRoundResult(result.winner, result.message);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState, dealerHand, deck, playerHand, dealerAdvantageRound]);
  const playerDrawCount = Math.max(0, playerHand.length - 2);
  const remainingHits = Math.max(0, MAX_PLAYER_HITS - playerDrawCount);
  const canHit = gameState === 'playing' && remainingHits > 0 && playerHand.length < MAX_HAND_CARDS;
  const isWinResult = resultType === 'win';
  const isPushResult = resultType === 'push';

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
                isWinResult
                  ? 'bg-soviet-gold border-white text-zinc-900' 
                  : isPushResult
                  ? 'bg-zinc-600 border-zinc-400 text-white'
                  : 'bg-soviet-red border-white text-white'
              }`}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-inherit border-4 border-white rounded-full flex items-center justify-center shadow-xl">
                {isWinResult ? (
                  <Trophy className="w-12 h-12" />
                ) : isPushResult ? (
                  <RefreshCcw className="w-12 h-12" />
                ) : (
                  <XCircle className="w-12 h-12" />
                )}
              </div>
              
              <h3 className="mt-8 text-3xl font-black uppercase italic tracking-tighter leading-tight mb-4">
                {isWinResult
                  ? 'CHIẾN THẮNG!' 
                  : isPushResult
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
                  isWinResult
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
                {gameState === 'playing' && (
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter mt-1">
                    Rút còn: {remainingHits}/3
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
                disabled={!canHit}
                className={
                  'px-10 py-4 font-black uppercase tracking-widest rounded-full transition-all shadow-xl flex items-center gap-3 ' +
                  (canHit
                    ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                    : 'bg-zinc-600 text-zinc-300 cursor-not-allowed')
                }
              >
                <HelpCircle className={'w-5 h-5 ' + (canHit ? 'text-soviet-red' : 'text-zinc-400')} />
                {canHit ? 'Rút bài (Quiz) - còn ' + remainingHits + '/3' : 'Đã rút tối đa 3 lá'}
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
                  isWinResult 
                    ? 'bg-soviet-gold/10 text-soviet-gold border-soviet-gold/20' 
                    : isPushResult 
                    ? 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' 
                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                }`}
              >
                {isWinResult 
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
