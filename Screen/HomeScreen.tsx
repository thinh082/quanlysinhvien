import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Platform,
} from "react-native";

const categories = [
  { id: "1", title: "📘 Từ vựng", screen: "VocabularyList", color: "#60a5fa" },
  {
    id: "2",
    title: "💬 Câu giao tiếp",
    screen: "SentenceList",
    color: "#34d399",
  },
  { id: "3", title: "🧠 Bài kiểm tra", screen: "Quiz", color: "#fbbf24" },
  { id: "4", title: "❤️ Yêu thích", screen: "Favorites", color: "#f87171" },
  { id: "5", title: "⚙️ Cài đặt", screen: "Settings", color: "#a78bfa" },
];

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      }}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>🌸 Học Tiếng Hàn Cơ Bản 🌸</Text>

        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.card, { backgroundColor: item.color }]}
            >
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 80 : 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#fff",
    marginBottom: 40,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  listContainer: {
    paddingBottom: 60,
  },
  card: {
    borderRadius: 18,
    paddingVertical: 18,
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    transform: [{ scale: 1 }],
  },
  cardText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
