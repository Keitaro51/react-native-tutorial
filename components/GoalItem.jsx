import {Pressable, StyleSheet, Text, View} from 'react-native'

const GoalItem = ({item, onDeleteItem}) => {
  return (
    <Pressable onPress={() => onDeleteItem(item.id)}>
      {/* Other syntax with bind funct. <Pressable onPress={onDeleteItem.bind(this, item.id)}> */}
      <View style={styles.goalItem}>
        {/* this view wrapper component is used for ios devices where text component doesn't compile such styling props like border radius */}
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
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
