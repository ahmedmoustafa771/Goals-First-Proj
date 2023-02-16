import { StyleSheet, View, Text, Pressable } from 'react-native';
export default function GoalItem({ goal, onDeleteItem }) {
  return (
    <View style={styles.goalView}>
      <Pressable
        onPress={() => onDeleteItem(goal.key)}
        android_ripple={{ color: '#210644' }}
      >
        <Text style={styles.goalText}>{goal.goal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalView: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 12,
  },
});
