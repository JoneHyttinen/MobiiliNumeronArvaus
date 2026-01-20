import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Guess a number between 1-100");
  const [winner] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuess = () => {
    if (Number(guess) === winner) {
      setCount(count + 1);
      Alert.alert("You guessed the number in " + count + " guesses");
    } else if (Number(guess) < winner) {
      setCount(count + 1);
      setText("Your guess " + guess + " is too low");
    } else {
      setCount(count + 1);
      setText("Your guess " + guess + " is too high");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        placeholder="Enter guess..."
        onChangeText={(guess) => setGuess(guess)}
        value={guess}
      />
      <Button onPress={handleGuess} title="MAKE GUESS" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
