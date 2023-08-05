import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Modal Stack w/ Path</Text>

      <Link style={styles.link} href="/modal-stack">modal-stack path</Link>

      <Link style={styles.link} href="/modal-stack/modal-screen-1">modal-screen-1</Link>

      <Link style={styles.link} href="/modal-stack/modal-screen-2">modal-screen-2</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "#023047",
  },
  subtitle: {
    fontSize: 20,
    color: "#555",
    marginBottom: 30
  },
  link: {
    color: "#4361EE",
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  }
})
