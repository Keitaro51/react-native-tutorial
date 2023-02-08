import {StyleSheet, Text, View} from 'react-native'

const GoalItem = ({text}) => {
  return (
    <View style={styles.goalItem}>
      {/* this view wrapper component is used for ios devices where text component doesn't compile such styling props like border radius */}
      <Text style={styles.goalText}>{text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
})
