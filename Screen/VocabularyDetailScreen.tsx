import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import vocabularyData from "../data/words.json";

type Word = {
  id: number;
  topicId: number;
  chinese: string;
  pinyin: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
};

export default function VocabularyDetailScreen() {
  const [word, setWord] = useState<Word | null>(null);
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    const fixedWord = vocabularyData.find((x) => x.id === 1);
    setWord(fixedWord || null);
  }, []);

  if (!word)
    return (
      <View style={styles.center}>
        <Text style={styles.loading}>Đang tải dữ liệu...</Text>
      </View>
    );

  const handleFavorite = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }),
    ]).start();

    Alert.alert("❤️ Đã thêm!", `"${word.chinese}" đã được thêm vào yêu thích.`);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
      >
        <Text style={styles.chinese}>{word.chinese}</Text>
        <Text style={styles.pinyin}>{word.pinyin}</Text>
        <Text style={styles.meaning}>{word.meaning}</Text>

        <View style={styles.exampleBox}>
          <Text style={styles.example}>{word.example}</Text>
          <Text style={styles.exampleMeaning}>{word.exampleMeaning}</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 18,
    color: "#666",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    paddingHorizontal: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  chinese: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#e11d48",
  },
  pinyin: {
    fontSize: 20,
    color: "#6b7280",
    fontStyle: "italic",
    marginTop: 8,
  },
  meaning: {
    fontSize: 24,
    color: "#1f2937",
    marginTop: 12,
    fontWeight: "600",
  },
  exampleBox: {
    backgroundColor: "#eff6ff",
    borderRadius: 12,
    padding: 12,
    marginTop: 24,
    width: "100%",
  },
  example: {
    color: "#2563eb",
    fontSize: 18,
    marginBottom: 6,
  },
  exampleMeaning: {
    color: "#374151",
    fontSize: 16,
  },
  favoriteBtn: {
    marginTop: 30,
    backgroundColor: "#3b82f6",
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 28,
    shadowColor: "#3b82f6",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  favoriteText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
