import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [enteredTexts, setEnteredTexts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = currentGoal => {
    let newGoals = [...enteredTexts];
    if (newGoals.length === 0) {
      newGoals.push({ key: 1, goal: currentGoal });
    } else {
      let lastId = newGoals[newGoals.length - 1].key;
      newGoals.push({ key: (lastId += 1), goal: currentGoal });
    }
    setEnteredTexts(newGoals);
    setModalVisible(false);
  };

  const deleteGoalHander = id => {
    setEnteredTexts(currentGoals => {
      return currentGoals.filter(goal => goal.key !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
        <View style={styles.goalsArea}>
          <FlatList
            data={enteredTexts}
            renderItem={itemData => {
              return (
                <GoalItem
                  goal={itemData.item}
                  onDeleteItem={deleteGoalHander}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  goalsArea: {
    flex: 5,
    paddingTop: 20,
  },
});
