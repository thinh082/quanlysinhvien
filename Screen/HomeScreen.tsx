import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Xin chào, Phúc</Text>
          <Text style={styles.subtitle}>Chào mừng trở lại lớp học 📖</Text>
        </View>
        <Ionicons name="notifications-outline" size={22} color="#C9A33A" />
      </View>

      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.points}>420</Text>
        <Text style={styles.pointLabel}>Điểm hiện tại</Text>
        <Text style={styles.desc}>Còn 80 điểm để đạt phần thưởng tuần</Text>
        <TouchableOpacity style={styles.simpleBtn}>
          <Text style={styles.simpleBtnText}>Làm bài ngay</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Ionicons name="book-outline" size={18} color="#C9A33A" />
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Bài kiểm tra</Text>
        </View>
        <View style={styles.statBox}>
          <Ionicons name="time-outline" size={18} color="#C9A33A" />
          <Text style={styles.statNumber}>8h</Text>
          <Text style={styles.statLabel}>Giờ học</Text>
        </View>
        <View style={styles.statBox}>
          <Ionicons name="ribbon-outline" size={18} color="#C9A33A" />
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Phần thưởng</Text>
        </View>
      </View>

      {/* Upcoming Tests */}
      <Text style={styles.sectionTitle}>Bài kiểm tra sắp tới</Text>
      <View style={styles.testList}>
        {[
          { name: "Cân bằng phản ứng", sub: "Hóa học", time: "1 ngày" },
          { name: "Dao động cơ", sub: "Vật lý", time: "2 ngày" },
          { name: "Phương trình", sub: "Toán học", time: "3 ngày" },
        ].map((t, i) => (
          <View key={i} style={styles.testItem}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="document-text-outline"
                size={18}
                color="#C9A33A"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.testTitle}>{t.name}</Text>
            </View>
            <Text style={styles.testSub}>{t.sub}</Text>
            <Text style={styles.testTime}>⏰ Còn {t.time}</Text>
          </View>
        ))}
      </View>

      {/* Subjects */}
      <Text style={styles.sectionTitle}>Môn học</Text>
      <View style={styles.subjectGrid}>
        {[
          { name: "Toán học", icon: "calculator-outline" },
          { name: "Hóa học", icon: "flask-outline" },
          { name: "Vật lý", icon: "magnet-outline" },
          { name: "Sinh học", icon: "leaf-outline" },
        ].map((s, i) => (
          <TouchableOpacity key={i} style={styles.subjectBox}>
            <Ionicons name={s.icon} size={18} color="#C9A33A" />
            <Text style={styles.subjectText}>{s.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={20} color="#C9A33A" />
        <Ionicons name="book-outline" size={20} color="#C9A33A" />
        <Ionicons name="chatbubble-outline" size={20} color="#C9A33A" />
        <Ionicons name="person-outline" size={20} color="#C9A33A" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  hello: { fontSize: 22, fontWeight: "700", color: "#C9A33A" },
  subtitle: { fontSize: 13, color: "#777", marginTop: 4 },

  summaryCard: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EAE6DA",
    alignItems: "center",
    paddingVertical: 25,
    marginBottom: 25,
  },
  points: { fontSize: 38, fontWeight: "700", color: "#C9A33A" },
  pointLabel: { color: "#333", fontSize: 14, marginTop: 6 },
  desc: { color: "#777", fontSize: 12, marginVertical: 8 },
  simpleBtn: {
    backgroundColor: "#C9A33A",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  simpleBtnText: { color: "#fff", fontWeight: "600" },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  statBox: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAE6DA",
    alignItems: "center",
    paddingVertical: 12,
  },
  statNumber: { fontSize: 16, fontWeight: "700", color: "#C9A33A" },
  statLabel: { fontSize: 12, color: "#777", marginTop: 2 },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  testList: { marginBottom: 20 },
  testItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EAE6DA",
    padding: 14,
    marginBottom: 10,
  },
  testTitle: { fontWeight: "600", fontSize: 13, color: "#333" },
  testSub: { color: "#C9A33A", fontSize: 12, marginTop: 4 },
  testTime: { color: "#777", fontSize: 12, marginTop: 2 },

  subjectGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  subjectBox: {
    width: "48%",
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EAE6DA",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 10,
    gap: 6,
  },
  subjectText: { color: "#333", fontWeight: "600", fontSize: 13 },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
    paddingVertical: 12,
    borderTopWidth: 0.6,
    borderColor: "#EAE6DA",
  },
});
