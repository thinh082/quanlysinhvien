import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import các màn hình
import HomeScreen from "./Screen/HomeScreen";
import VocabularyListScreen from "./Screen/VocabularyListScreen";
import VocabularyDetailScreen from "./Screen/VocabularyDetailScreen";
import SettingsScreen from "./Screen/SettingsScreen";
import FavoriteWordsScreen from "./Screen/FavoriteWordsScreen";
import QuizScreen from "./Screen/QuizScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Thanh trạng thái màu tối, chữ trắng */}
      <StatusBar style="dark" backgroundColor="pink" />

      {/* Màn hình hiển thị chính */}
      <VocabularyDetailScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "pink", // nền dịu, sáng hiện đại
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
