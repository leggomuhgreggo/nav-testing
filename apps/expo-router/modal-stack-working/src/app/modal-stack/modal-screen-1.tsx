import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ModalScreen1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Screen 1</Text>
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
    marginBottom: 30
  },
  link: {
    color: "#4361EE",
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  }
})
