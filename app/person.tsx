import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PersonDetail() {
  const router = useRouter();
  const { name, age, address, phone } = useLocalSearchParams();

  return (
    <LinearGradient colors={["#8B0000", "#FFFFFF"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* EMERGENCIA */}
        <LinearGradient
          colors={["#FF3B3B", "#FFFFFF"]}
          style={styles.emergency}
        >
          <Text style={styles.emergencyText}>EMERGENCIA</Text>
        </LinearGradient>

        {/* DATOS PERSONA */}
        <LinearGradient
          colors={["#1E90FF", "#FFFFFF"]}
          style={styles.personBox}
        >
          <Text style={styles.personName}>{name}</Text>
          <Text style={styles.personInfo}>Edad: {age}</Text>
          <Text style={styles.personInfo}>Dirección: {address}</Text>
          <Text style={styles.personInfo}>📞 {phone}</Text>
        </LinearGradient>

        {/* HISTORIAL */}
        <LinearGradient colors={["#FFFFFF", "#F2F2F2"]} style={styles.history}>
          <Text style={styles.sectionTitle}>Historial Clínico</Text>
          <ScrollView style={{ maxHeight: 140 }}>
            <Text style={styles.historyItem}>• Asma diagnosticada (2018)</Text>
            <Text style={styles.historyItem}>• Alergia a penicilina</Text>
            <Text style={styles.historyItem}>• Última atención: Feb 2026</Text>
            <Text style={styles.historyItem}>
              • Medicación habitual: Salbutamol
            </Text>
            <Text style={styles.historyItem}>• No cirugías previas</Text>
          </ScrollView>
        </LinearGradient>

        {/* MAPA */}
        <View style={styles.map}>
          <Text style={{ color: "#666" }}>MAPA (ejemplo)</Text>
        </View>

        {/* BOTÓN */}
        <Pressable onPress={() => router.push("/bwaze")}>
          <LinearGradient colors={["#FF0000", "#FFFFFF"]} style={styles.button}>
            <Text style={styles.buttonText}>EN CAMINO</Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingTop: 60,
  },

  emergency: {
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  emergencyText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#B00000",
  },

  personBox: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },
  personName: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
  },
  personInfo: {
    fontSize: 14,
  },

  section: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: "800",
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 14,
  },

  history: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
  },
  historyItem: {
    fontSize: 13,
    marginBottom: 4,
  },

  map: {
    height: 160,
    backgroundColor: "#EEE",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },

  button: {
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "900",
    color: "#8B0000",
    fontSize: 16,
  },
});
