import {Pressable, StyleSheet, Text, View} from 'react-native'

const GoalItem = ({item, onDeleteItem}) => {
  return (
    <View style={styles.goalItem}>
      {/* this view wrapper component is used for ios devices where text component doesn't compile such styling props like border radius */}
      <Pressable
        android_ripple={{color: '#3e0885'}}
        style={({pressed}) => pressed && styles.pressedItem} //for ios feedback
        onPress={() => onDeleteItem(item.id)}
      >
        {/* Other syntax with bind funct. <Pressable onPress={onDeleteItem.bind(this, item.id)}> */}
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
})
