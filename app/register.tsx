import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from "react-native";

export default function Register() {
  return (
    <LinearGradient colors={["#F5FAFE", "#265C8E"]} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>PRONTOSALUD</Text>

          {[
            "Nombre",
            "Apellidos",
            "Celular",
            "DNI",
            "Clínica u hospital",
            "Seguro",
          ].map((p) => (
            <TextInput
              key={p}
              placeholder={p}
              placeholderTextColor="#8AADCA"
              style={styles.input}
            />
          ))}

          <Pressable
            style={styles.button}
            onPress={() => router.replace("/home")}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { padding: 28, paddingTop: 80 },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#265C8E",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#265C8E",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
