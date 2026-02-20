import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <LinearGradient colors={["#F5FAFE", "#265C8E"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>PRONTOSALUD</Text>

        <Pressable onPress={() => router.push("/emergency")}>
          <LinearGradient
            colors={["#FF3B3B", "#FFFFFF"]}
            style={styles.emergency}
          >
            <Text style={styles.emergencyText}>EMERGENCIA</Text>
          </LinearGradient>
        </Pressable>

        {[1, 2, 3, 4, 5].map((i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.name}>Usuario {i}</Text>
            <Text>(Parentesco)</Text>
            <Text>Edad: --</Text>
            <Text>📞 --------</Text>
          </View>
        ))}

        <LinearGradient colors={["#1E90FF", "#FFFFFF"]} style={styles.add}>
          <Pressable>
            <Text style={styles.addText}>Registrar usuario</Text>
          </Pressable>
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingTop: 70 },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color: "#265C8E",
    marginBottom: 20,
  },
  emergency: {
    borderRadius: 18,
    padding: 22,
    marginBottom: 25,
    alignItems: "center",
  },
  emergencyText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#B00000",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  name: { fontWeight: "700" },
  add: {
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },
  addText: { fontWeight: "700", color: "#0A3D91" },
});
