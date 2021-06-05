import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // better syntx for updating our arry of goal and adding to it
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    //(key or id, uid) whatever we add in there we want it to have a random key and value of what we entered
    // after we add a new thing we want to set it to false
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Text>Goals</Text>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        onCancel={cancelGoal}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  );
}

// StyleSheet Object
const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
