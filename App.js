import {useState} from 'react'
import {StyleSheet, View, ScrollView, FlatList} from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enterGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enterGoalText, id: Math.random().toString()},
    ])
  }

  const deleteGoalHandler = (itemId) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== itemId)
    )
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})
