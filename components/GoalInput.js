import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = (enterText) => {
    setEnterGoal(enterText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enterGoal}
          placeholder="Enter your goals"
          style={styles.textInput}
        />
        {/* In react there is 2 ways to call or enter out value input byr adding it as a parameter or doing the second way */}
        {/* <Button title="ADD" onPress={() => props.onAddGoal(enterGoal)} /> */}
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="X" color="black" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "70%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default GoalInput;
