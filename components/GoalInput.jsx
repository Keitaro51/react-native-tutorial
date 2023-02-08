import {useState} from 'react'
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native'

const GoalInput = ({onAddGoal, showModal, onCancel}) => {
  const [enterGoalText, setEnterGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enterGoalText)
    setEnterGoalText('')
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
