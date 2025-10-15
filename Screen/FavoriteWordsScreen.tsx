import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import favoriteData from "../data/yeuthichtuvung.json";

type Word = {
  id: number;
  chinese: string;
  pinyin: string;
  meaning: string;
};

export default function FavoriteWordsScreen() {
  const [favorites, setFavorites] = useState<Word[]>([]);

  useEffect(() => {
    setFavorites(favoriteData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Từ Vựng Yêu Thích ❤️</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.chinese}>{item.chinese}</Text>
            <Text style={styles.pinyin}>{item.pinyin}</Text>
            <Text style={styles.meaning}>{item.meaning}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Chưa có từ yêu thích nào.</Text>
        }
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#1e293b",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  chinese: {
    fontSize: 28,
    color: "#e11d48",
    textAlign: "center",
  },
  pinyin: {
    fontSize: 18,
    color: "#475569",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 4,
  },
  meaning: {
    fontSize: 18,
    color: "#334155",
    textAlign: "center",
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 40,
  },
});
