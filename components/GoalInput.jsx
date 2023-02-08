import {useState} from 'react'
import {View, TextInput, StyleSheet, Button, Modal, Image} from 'react-native'

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
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="#120438"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
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
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
