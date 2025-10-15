import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import vocabularyData from "../data/words.json";

// Bật animation trên Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Word = {
  id: number;
  topicId: number;
  chinese: string;
  pinyin: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
};

const topicNames: Record<number, string> = {
  1: "Gia đình 👪",
  2: "Màu sắc 🎨",
  3: "Động vật 🐶",
  4: "Số đếm 🔢",
  5: "Đồ ăn 🍜",
};

const topicColors: Record<number, string> = {
  1: "#FFF4E0",
  2: "#E6FFF8",
  3: "#F6F0FF",
  4: "#FFFDE1",
  5: "#E8FFE8",
};

export default function VocabularyListScreen() {
  const [groupedData, setGroupedData] = useState<Record<number, Word[]>>({});
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const grouped: Record<number, Word[]> = {};
    vocabularyData.forEach((item) => {
      if (!grouped[item.topicId]) grouped[item.topicId] = [];
      grouped[item.topicId].push(item);
    });
    setGroupedData(grouped);
  }, []);

  const toggleExpand = (id: number) => {
    LayoutAnimation.easeInEaseOut();
    setExpanded(expanded === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📘 Học Từ Vựng Tiếng Hàn</Text>

      {Object.entries(groupedData).map(([topicId, words]) => (
        <View
          key={topicId}
          style={[
            styles.topicSection,
            { backgroundColor: topicColors[Number(topicId)] || "#f5f5f5" },
          ]}
        >
          <Text style={styles.topicTitle}>
            {topicNames[Number(topicId)] || `Chủ đề ${topicId}`}
          </Text>

          {words.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.9}
              onPress={() => toggleExpand(item.id)}
            >
              <View style={styles.wordBox}>
                <Text style={styles.chinese}>{item.chinese}</Text>
                <Text style={styles.pinyin}>{item.pinyin}</Text>
                <Text style={styles.meaning}>{item.meaning}</Text>
              </View>

              {expanded === item.id && (
                <View style={styles.exampleBox}>
                  <Text style={styles.example}>{item.example}</Text>
                  <Text style={styles.exampleMeaning}>
                    {item.exampleMeaning}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
    color: "#1f2937",
  },
  topicSection: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  wordBox: {
    alignItems: "center",
  },
  chinese: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e11d48",
  },
  pinyin: {
    fontSize: 16,
    color: "#555",
    fontStyle: "italic",
  },
  meaning: {
    fontSize: 16,
    color: "#333",
    marginTop: 4,
  },
  exampleBox: {
    marginTop: 10,
    backgroundColor: "#f0f9ff",
    padding: 10,
    borderRadius: 10,
  },
  example: {
    fontSize: 15,
    color: "#2563eb",
  },
  exampleMeaning: {
    fontSize: 14,
    color: "#374151",
    marginTop: 4,
  },
});
