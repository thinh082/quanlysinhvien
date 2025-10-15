import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import quizData from "../data/quiz.json";

type Quiz = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export default function QuizScreen() {
  const [questions, setQuestions] = useState<Quiz[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Lấy 5 câu đầu tiên từ dữ liệu (hoặc toàn bộ)
    setQuestions(quizData.slice(0, 5));
  }, []);

  if (questions.length === 0) return <Text>Đang tải...</Text>;

  const question = questions[index];

  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === question.correctAnswer) setScore(score + 1);
    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(index + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultTitle}>🎉 Hoàn thành!</Text>
        <Text style={styles.resultText}>
          Bạn đạt {score}/{questions.length} điểm
        </Text>
        <TouchableOpacity
          style={styles.restartBtn}
          onPress={() => {
            setIndex(0);
            setScore(0);
            setSelected(null);
            setShowResult(false);
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Làm lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        Câu {index + 1}/{questions.length}
      </Text>
      <Text style={styles.question}>{question.question}</Text>

      {question.options.map((opt, i) => {
        const isCorrect = selected && opt === question.correctAnswer;
        const isWrong = selected === opt && opt !== question.correctAnswer;
        return (
          <TouchableOpacity
            key={i}
            style={[
              styles.option,
              isCorrect ? styles.correct : {},
              isWrong ? styles.wrong : {},
            ]}
            disabled={!!selected}
            onPress={() => handleSelect(opt)}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        );
      })}

      <Text style={styles.score}>Điểm hiện tại: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  counter: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  question: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "90%",
    marginVertical: 6,
    alignItems: "center",
  },
  optionText: { fontSize: 18, color: "#333" },
  correct: { backgroundColor: "#2ecc71" },
  wrong: { backgroundColor: "#e74c3c" },
  score: {
    marginTop: 25,
    fontSize: 18,
    color: "#34495e",
    fontWeight: "600",
  },
  resultTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  resultText: { fontSize: 20, color: "#27ae60", marginBottom: 25 },
  restartBtn: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
});
