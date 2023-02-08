import {useState} from 'react'
import {View, TextInput, StyleSheet, Button} from 'react-native'

const GoalInput = ({onAddGoal}) => {
  const [enterGoalText, setEnterGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enterGoalText)
    setEnterGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})
