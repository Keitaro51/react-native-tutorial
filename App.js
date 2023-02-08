import {useState} from 'react'
import {StyleSheet, View, ScrollView, FlatList, Button} from 'react-native'
import {StatusBar} from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  // const startAddGoalHandler = () => {
  //   setModalIsVisible(true)
  // }

  // const endAddGoalHandler = () => {
  //   setModalIsVisible(false)
  // }

  const toggleModalHandler = () => {
    setModalIsVisible(!modalIsVisible)
  }

  const addGoalHandler = (enterGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enterGoalText, id: Math.random().toString()},
    ])
    toggleModalHandler()
  }

  const deleteGoalHandler = (itemId) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== itemId)
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#a065ec"
          onPress={toggleModalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={modalIsVisible}
          onCancel={toggleModalHandler}
        />
        <View style={styles.goalsContainer}>
          {/*scrollview component not recommanded for dynamic/long lists. Prefer flatlist coponent for lazy loading behaviour*/}
          {/* <ScrollView> 
          {courseGoals.map((goal, index) => (
            <View
              key={index}
              style={
                styles.goalItem
              }  
            >
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          {/*keyExtractor needed only if data have no prop called key*/}
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
})
