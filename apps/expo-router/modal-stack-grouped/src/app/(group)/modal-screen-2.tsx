import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ModalScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Screen 2</Text>
      <Link style={styles.link} href="/(group)/modal-screen-1">modal-screen-1</Link>
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
