import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>👋 Chào mừng bạn trở lại!</Text>
      <Text style={styles.title}>Đăng nhập</Text>

      {/* Input tài khoản */}
      <View
        style={[
          styles.inputContainer,
          focusedInput === "username" && styles.inputFocused,
        ]}
      >
        <Ionicons
          name="person-outline"
          size={22}
          color="#555"
          style={styles.icon}
        />
        <TextInput
          placeholder="Tài khoản"
          style={styles.input}
          onFocus={() => setFocusedInput("username")}
          onBlur={() => setFocusedInput(null)}
        />
      </View>

      {/* Input mật khẩu */}
      <View
        style={[
          styles.inputContainer,
          focusedInput === "password" && styles.inputFocused,
        ]}
      >
        <Ionicons
          name="lock-closed-outline"
          size={22}
          color="#555"
          style={styles.icon}
        />
        <TextInput
          placeholder="Mật khẩu"
          secureTextEntry={!passwordVisible}
          style={styles.input}
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      {/* Nút đăng nhập */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Liên kết phụ */}
      <View style={styles.footerLinks}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.linkText, { color: "#4A90E2" }]}>
            Đăng ký tài khoản mới
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  greeting: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    marginBottom: 18,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#f2f2f2",
  },
  inputFocused: {
    borderColor: "#4A90E2",
    backgroundColor: "#fff",
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 15,
    color: "#333",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  footerLinks: {
    marginTop: 20,
    alignItems: "center",
    gap: 8,
  },
  linkText: {
    color: "#777",
    fontSize: 14,
  },
});
