import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = email.trim() === "" || password.trim() === "";

  return (
    <LinearGradient colors={["#F5FAFE", "#265C8E"]} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.logoSection}>
            <Image
              source={require("./images/logo_medi.png")}
              style={styles.logo}
            />
            <Text style={styles.appTitle}>PRONTOSALUD</Text>
          </View>

          <View style={styles.formSection}>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico o DNI"
              placeholderTextColor="#8AADCA"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#8AADCA"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Pressable
              style={[styles.loginButton, isDisabled && { opacity: 0.4 }]}
              disabled={isDisabled}
              onPress={() => router.replace("/home")}
            >
              <Text style={styles.loginButtonText}>Ingresar</Text>
            </Pressable>

            <Pressable
              style={styles.registerButton}
              onPress={() => router.push("/register")}
            >
              <Text style={styles.registerText}>
                ¿No tienes cuenta? Regístrate
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scroll: { flexGrow: 1, paddingHorizontal: 28 },
  logoSection: { alignItems: "center", marginTop: 90, marginBottom: 50 },
  logo: { width: 110, height: 110, resizeMode: "contain" },
  appTitle: { fontSize: 26, fontWeight: "700", color: "#265C8E" },
  input: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  loginButton: {
    backgroundColor: "#265C8E",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  loginButtonText: { color: "#fff", fontWeight: "700" },
  registerButton: { marginTop: 18, alignItems: "center" },
  registerText: { color: "#fff" },
});
