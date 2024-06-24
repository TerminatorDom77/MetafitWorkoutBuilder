import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, SectionList, TouchableHighlight, Alert, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GestureRecognizer from 'react-native-swipe-gestures';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Exercise from './Exercise.js'


const myExercises = [
    {
        id: 1,
        title: "Push Exercises",
        data: [],
    },
    {
        id: 2,
        title: "Pull Exercises",
        data: [],
    },
    {
        id: 3,
        title: "Leg Exercises",
        data: [],
    },
]

function Home() {
  
    return (
        <ScrollView>
            <Text style={styles.header}>Metafit - Home</Text>
            <View style={styles.border }>
                <Text></Text>
            </View>
            <Text style={styles.instructionsHeader}>Navigating the App</Text>
            <Text style={styles.instructions}> - Swipe the screen to go to the next or previous exercise</Text>
            <Text style={styles.instructions}> - Double tap the video to save it for later, which you can find in the "My Exercises" page</Text>
            <Text style={styles.instructions}> - To view an exercise you saved, go to "My Exercises" and click on the name of the exercise</Text>

            <Text style={styles.instructionsHeader}>Workout Instructions </Text>
            <Text style={styles.instructions}> - Pick 4-5 exercises from the exercise day you are on (push, pull, or legs). </Text>
            <Text style={styles.instructions}> - Perform 2-3 sets of each exercise, each set having 10-13 repetitions and a 60 second rest between each set. </Text>
            <Text style={styles.instructions}> - This will result in 10-13 total sets each workout, which should take about 20-25 minutes. </Text>
        </ScrollView>
    );
}

async function loadExercises() {
    try {
        var savedExercises = await AsyncStorage.getAllKeys()
        var exercisesAndTypes = await AsyncStorage.multiGet(savedExercises)
        return exercisesAndTypes

    } catch (e) {
        console.error("Failed to load exercise")
    }
}

async function deleteExercise(exercise) {
    try {
        await AsyncStorage.removeItem(exercise)
        Alert.alert("Update", "Exercise deleted!", [{ text: "Ok" }])
    } catch (e) {
        //nothing
    }
}


function PushExc1({ navigation }) {
    function onSwipeRight(gestureState){
        navigation.navigate("Push Day", { screen: 'Tricep Press Downs' })
    }
    return (
        <GestureRecognizer onSwipeRight={onSwipeRight} style={{flex: 1}}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PushExercises/BallToss.mp4')} exercise="Ball Toss" type="Push" />
            </View>
        </GestureRecognizer>
    )
}

function PushExc2() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/TricepDips.mp4')} exercise="Tricep Dips" type="Push" />
        </View>
    )
}
function PushExc3() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/ShoulderPress.mp4')} exercise="Shoulder Press" type="Push" />
        </View>
    )
}

function PushExc4() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/ElevatedPushups.mp4')} exercise="Elevated Pushups" type="Push"  />
        </View>
    )
}

function PushExc5() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/SingleDumbbellPress.mp4')} exercise="Single Dumbbell Press" type="Push" />
        </View>
    )
}

function PushExc6() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/BandedShoulderRaise.mp4')} exercise="Banded Shoulder Raise" type="Push" />
        </View>
    )
}

function PushExc7() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/PlankedShoulderRaises.mp4')} exercise="Planked Shoulder Raises" type="Push" />
        </View>
    )
}

function PushExc8() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/SingleArmChestFly.mp4')} exercise="Single Arm Chest Fly" type="Push" />
        </View>
    )
}

function PushExc9() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/FlatDumbellPress.mp4')} exercise="Flat Dumbell Press" type="Push" />
        </View>
    )
}

function PushExc10() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/LandminePress.mp4')} exercise="Landmine Press" type="Push" />
        </View>
    )
}

function PushExc11() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/TricepKickback.mp4')} exercise="Tricep Kickback" type="Push" />
        </View>
    )
}

function PushExc12() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/BallSlams.mp4')} exercise="Ball Slams" type="Push" />
        </View>
    )
}

function PushExc13() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/CloseGripInclinePress.mp4')} exercise="Close Grip Incline Press" type="Push" />
        </View>
    )
}

function PushExc14() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/SingleArmLandminePress.mp4')} exercise="Single Arm Landmine Press" type="Push" />
        </View>
    )
}

function PushExc15() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/RotatingInclinePress.mp4')} exercise="Rotating Incline Press" type="Push" />
        </View>
    )
}

function PushExc16() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/ShoulderPlatePress.mp4')} exercise="Shoulder Plate Press" type="Push" />
        </View>
    )
}

function PushExc17() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/SkullCrushers.mp4')} exercise="Skull Crushers" type="Push" />
        </View>
    )
}

function PushExc18() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/SingleArmShoulderRaise.mp4')} exercise="Single Arm Shoulder Raise" type="Push" />
        </View>
    )
}

function PushExc19({navigation }) {
    function onSwipeLeft(gestureState){
        navigation.navigate("Push Day", {screen: 'Ball Toss'})
    }
    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} style={{flex: 1}}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PushExercises/TricepPressDowns.mp4')} exercise="Tricep Press Downs" type="Push" />
            </View>
        </GestureRecognizer>
    )
}


function PullExc1({ navigation }) {
    function onSwipeRight(gestureState) {
        navigation.navigate("Pull Day", { screen: 'Standing Rows With Band' })
    }
    return (
        <GestureRecognizer onSwipeRight={onSwipeRight} style={{ flex: 1 }}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PullExercises/seatedrows.mp4')} exercise="Seated Rows" type="Pull" />
            </View>
        </GestureRecognizer>
    )
}

function PullExc2() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/standingroweasybar.mp4')} exercise="Standing Row Easy Bar" type="Pull" />
        </View>
    )
}

function PullExc3() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/australianpushups.mp4')} exercise="Australian Pushups" type="Pull" />
        </View>
    )
}

function PullExc4() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/benchrows.mp4')} exercise="Bench Rows" type="Pull" />
        </View>
    )
}

function PullExc5() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/bentoverbarbellrows.mp4')} exercise="Bent Over Barbell Rows" type="Pull" />
        </View>
    )
}

function PullExc6() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulldowns.mp4')} exercise="Lat Pull Downs" type="Pull" />
        </View>
    )
}

function PullExc7() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/plankpull.mp4')} exercise="Plank Pull" type="Pull" />
        </View>
    )
}

function PullExc8() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/ablegsup.mp4')} exercise="Ab Legs Up" type="Pull" />
        </View>
    )
}

function PullExc9() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/pullingtwists.mp4')} exercise="Pulling Twists" type="Pull" />
        </View>
    )
}

function PullExc10() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/russiantwists.mp4')} exercise="Russian Twists" type="Pull" />
        </View>
    )
}

function PullExc11() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulloverwedge.mp4')} exercise="Lat Pull Over Wedge" type="Pull" />
        </View>
    )
}

function PullExc12() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/weightedkneetucks.mp4')} exercise="Weighted Knee Tucks" type="Pull" />
        </View>
    )
}

function PullExc13() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/standinglandminepull.mp4')} exercise="Standing Landmine Pull" type="Pull" />
        </View>
    )
}

function PullExc14() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/landminebentoverrow.mp4')} exercise="Landmine Bent Over Row" type="Pull" />
        </View>
    )
}

function PullExc15() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulloverwithcrunch.mp4')} exercise="Lat Pull Over With Crunch" type="Pull" />
        </View>
    )
}

function PullExc16() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/seatedrowbenchsupport.mp4')} exercise="Seated Row Bench Support" type="Pull" />
        </View>
    )
}

function PullExc17() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulldownlowerangle.mp4')} exercise="Lat Pull Down Lower Angle" type="Pull" />
        </View>
    )
}

function PullExc18() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/lawnmowerlandminepull.mp4')} exercise="Lawnmower Landmine Pull" type="Pull" />
        </View>
    )
}

function PullExc19() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/standingrowscabletower.mp4')} exercise="Standing Rows Cable Tower" type="Pull" />
        </View>
    )
}

function PullExc20() {
    return (
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PullExercises/standingrowswithband.mp4')} exercise="Standing Rows With Band" type="Pull" />
            </View>
    )
}

function PullExc21({ navigation }) {
    function onSwipeLeft(gestureState) {
        navigation.navigate("Pull Day", { screen: "Seated Rows" })
    }
    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} style={{ flex: 1 }}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PullExercises/cablepulldowns.mp4')} exercise="Cable Pull Downs" type="Pull" />
            </View>
        </GestureRecognizer>
    )
}

function LegExc1({navigation }) {

    function onSwipeRight(gestureState) {
        navigation.navigate("Leg Day", { screen: 'Flutter Kicks' })
    }
    return (
        <GestureRecognizer onSwipeRight={onSwipeRight} style={{flex:1 }}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/LegExercises/gobletsquats.mp4')} exercise="Goblet Squats" type="Leg" />
            </View>
        </GestureRecognizer>
    )
}
function LegExc2() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/widesquats.mp4')} exercise="Wide Squat" type="Leg" />
        </View>
    )
}

function LegExc3() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/hipthruster.mp4')} exercise="Hip Thruster" type="Leg" />
        </View>
    )
}

function LegExc4() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/reverselunges.mp4')} exercise="Reverse Lunges" type="Leg" />
        </View>
    )
}

function LegExc5() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/curtsylunges.mp4')} exercise="Curtsy Lunges" type="Leg" />
        </View>
    )
}

function LegExc6() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/sumosquats.mp4')} exercise="Sumo Squats" type="Leg" />
        </View>
    )
}

function LegExc7() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/bulgariansplitsquats.mp4')} exercise="Bulgarian Split Squats" type="Leg" />
        </View>
    )
}

function LegExc8() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/dumbbelldeadlifts.mp4')} exercise="Dumbbell Deadlifts" type="Leg" />
        </View>
    )
}

function LegExc9() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/benchabductions.mp4')} exercise="Bench Abductions" type="Leg" />
        </View>
    )
}

function LegExc10() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/traditionaldumbbellsquats.mp4')} exercise="Traditional Dumbbell Squats" type="Leg" />
        </View>
    )
}

function LegExc11() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/sidetosidehalfsquats.mp4')} exercise="Side To Side Half Squats" type="Leg" />
        </View>
    )
}

function LegExc12() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/bandedhamstringcurls.mp4')} exercise="Banded Hamstring Curls" type="Leg" />
        </View>
    )
}

function LegExc13() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/hacksquatwithlandmine.mp4')} exercise="Hacksquat With Landmine" type="Leg" />
        </View>
    )
}

function LegExc14() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/legextension.mp4')} exercise="Leg Extension" type="Leg" />
        </View>
    )
}

function LegExc15() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/legabductions.mp4')} exercise="Leg Abductions" type="Leg" />
        </View>
    )
}

function LegExc16() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/walkinglunges.mp4')} exercise="Walking Lunges" type="Leg" />
        </View>
    )
}

function LegExc17({navigation }) {
    function onSwipeLeft(gestureState) {
        navigation.navigate("Leg Day", { screen: 'Goblet Squats' })
    }
    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} style={{flex: 1}}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/LegExercises/flutterkicks.mp4')} exercise="Flutter Kicks" type="Leg" />
            </View>
        </GestureRecognizer>

    )
}


function MyExercisesPage({ navigation }) {
    const [state, setState] = useState(myExercises)
    //The function below is the exact same as the funciton editList. This one has to be in the outer scope
    function editExercise(id, newValue) {
        var newState = [...state]
        var itemIndex = newState.find((item) => item.id == id)
        newState[itemIndex] = {
            ...newState[itemIndex],
            ...newValue,
        }
        setState(newState);
    }
    function removeExercise(itemId, exercise) {
        var currentItem
        if (itemId == 1) {
            currentItem = state.find((item) => item.id == itemId);
        } else if (itemId == 2) {
            currentItem = state[1]
        } else {
            currentItem = state[2]
        }
        currentItem.data = currentItem.data.filter((item) => item != exercise);
        editExercise(itemId, currentItem)
        deleteExercise(exercise)
    }
    function Item({ item, section }) {
        return (
            <View style={styles.row}>
                <TouchableHighlight onPress={() => {
                    var root
                    if (section.title[3] == ' ') {
                        root = section.title[0] + section.title[1] + section.title[2]
                    } else {
                        root = section.title[0] + section.title[1] + section.title[2] + section.title[3]
                    }
                    root += " Day"
                    navigation.navigate(root, { screen: { item }.item })
                }}><View style={styles.exerciseButtonContainer}><Text style={styles.exerciseButton}>{item}</Text></View></TouchableHighlight>
                <TouchableHighlight style={styles.removeButton} onPress={() => { removeExercise(section.id, item) }}>
                    <Text style={styles.buttonText}>Remove</Text>
                </TouchableHighlight>
            </View>
        );
    }

    useFocusEffect(
        React.useCallback(() => {
            function editList(id, newValue) {
                var newState = [...state]
                var itemIndex = newState.find((item) => item.id == id)
                newState[itemIndex] = {
                    ...newState[itemIndex],
                    ...newValue,
                }
                setState(newState);
            }
            function addExercise(exercise, type, id) {
                var currentItem
                if (type == "Push") {
                    currentItem = state.find((item) => item.id == id)
                    if (!currentItem.data.includes(exercise)) {
                        currentItem.data.push(exercise)
                        editList(id, currentItem)
                    }
                } else if (type == "Pull") {
                    currentItem = state[1]
                    if (!currentItem.data.includes(exercise)) {
                        currentItem.data.push(exercise)
                        editList(id, currentItem)
                    }
                } else {
                    currentItem = state[2]
                    if (!currentItem.data.includes(exercise)) {
                        currentItem.data.push(exercise)
                        editList(id, currentItem)
                    }
                }
            }
            let isActive = true;
            var loadedExercises = null
            if (isActive) {
                const promise = Promise.resolve(loadExercises())
                promise.then((value) => {
                    loadedExercises = value
                    loadedExercises.pop()
                    length = Object.keys(loadedExercises).length
                    for (i = 0; i < length; i++) {
                        if (loadedExercises[i][1] == 'Push') {
                            id = 1
                        } else if (loadedExercises[i][1] == "Pull") {
                            id = 2
                        } else {
                            id = 3
                        }
                        if (loadedExercises[i][0] != "SnackDeviceId") {
                            addExercise(loadedExercises[i][0], loadedExercises[i][1], id)
                        }
                    }
                })
            }
            return () => {
                isActive = false;
            };
        }, [state, setState])
    );

    return (
        <SectionList
            style={styles.listContainer}
            sections={myExercises}
            renderItem={Item}
            renderSectionHeader={({ section }) => (
                <Text style={styles.listHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => item + index}
        />
    )
}

const Tab = createBottomTabNavigator();
const PushDay = createMaterialTopTabNavigator();
const PullDay = createMaterialTopTabNavigator();
const LegDay = createMaterialTopTabNavigator();
const MyExercises = createMaterialTopTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home'
                        } else if (route.name === 'Push Day') {
                            iconName = 'weight-lifter'
                        } else if (route.name === 'Pull Day') {
                            iconName = 'arm-flex'
                        } else if (route.name === 'Leg Day') {
                            iconName = 'walk'
                        } else {
                            iconName = 'dumbbell'
                        }

                        return <MaterialCommunityIcons name={iconName} size={size} color={'black'} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}>
                </Tab.Screen>
                <Tab.Screen name="Push Day" options={{ headerShown: false }}>
                    {() => (
                        <PushDay.Navigator tabBar={() => null} screenOptions={{ lazy: true }}>
                            <PushDay.Screen name="Ball Toss" component={PushExc1} />
                            <PushDay.Screen name="Tricep Dips" component={PushExc2} />
                            <PushDay.Screen name="Shoulder Press" component={PushExc3} />
                            <PushDay.Screen name="Elevated Pushups" component={PushExc4} />
                            <PushDay.Screen name="Single Dumbbell Press" component={PushExc5} />
                            <PushDay.Screen name="Banded Shoulder Raise" component={PushExc6} />
                            <PushDay.Screen name="Planked Shoulder Raises" component={PushExc7} />
                            <PushDay.Screen name="Single Arm Chest Fly" component={PushExc8} />
                            <PushDay.Screen name="Flat Dumbell Press" component={PushExc9} />
                            <PushDay.Screen name="Landmine Press" component={PushExc10} />
                            <PushDay.Screen name="Tricep Kickback" component={PushExc11} />
                            <PushDay.Screen name="Ball Slams" component={PushExc12} />
                            <PushDay.Screen name="Close Grip Incline Press" component={PushExc13} />
                            <PushDay.Screen name="Single Arm Landmine Press" component={PushExc14} />
                            <PushDay.Screen name="Rotating Incline Press" component={PushExc15} />
                            <PushDay.Screen name="Shoulder Plate Press" component={PushExc16} />
                            <PushDay.Screen name="Skull Crushers" component={PushExc17} />
                            <PushDay.Screen name="Single Arm Shoulder Raise" component={PushExc18} />
                            <PushDay.Screen name="Tricep Press Downs" component={PushExc19} />
                        </PushDay.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Pull Day" options={{ headerShown: false }}>
                    {() => (
                        <PullDay.Navigator tabBar={() => null} screenOptions={{ lazy: true }}>
                            <PullDay.Screen name="Seated Rows" component={PullExc1} />
                            <PullDay.Screen name="Standing Row Easy Bar" component={PullExc2} />
                            <PullDay.Screen name="Australian Pushups" component={PullExc3} />
                            <PullDay.Screen name="Bench Rows" component={PullExc4} />
                            <PullDay.Screen name="Bent Over Barbell Rows" component={PullExc5} />
                            <PullDay.Screen name="Lat Pull Downs" component={PullExc6} />
                            <PullDay.Screen name="Plank Pull" component={PullExc7} />
                            <PullDay.Screen name="Ab Legs Up" component={PullExc8} />
                            <PullDay.Screen name="Pulling Twists" component={PullExc9} />
                            <PullDay.Screen name="Russian Twists" component={PullExc10} />
                            <PullDay.Screen name="Lat Pull Over Wedge" component={PullExc11} />
                            <PullDay.Screen name="Weighted Knee Tucks" component={PullExc12} />
                            <PullDay.Screen name="Standing Landmine Pull" component={PullExc13} />
                            <PullDay.Screen name="Landmine Bent Over Row" component={PullExc14} />
                            <PullDay.Screen name="Lat Pull Over With Crunch" component={PullExc15} />
                            <PullDay.Screen name="Seated Row Bench Support" component={PullExc16} />
                            <PullDay.Screen name="Lat Pull Down Lower Angle" component={PullExc17} />
                            <PullDay.Screen name="Lawnmower Landmine Pull" component={PullExc18} />
                            <PullDay.Screen name="Standing Rows Cable Tower" component={PullExc19} />
                            <PullDay.Screen name="Standing Rows With Band" component={PullExc20} />
                            <PullDay.Screen name="Cable Pull Downs" component={PullExc21} />
                        </PullDay.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Leg Day" options={{ headerShown: false }}>
                    {() => (
                        <LegDay.Navigator tabBar={() => null} screenOptions={{ lazy: true }}>
                            <LegDay.Screen name="Goblet Squats" component={LegExc1} />
                            <LegDay.Screen name="Wide Squat" component={LegExc2} />
                            <LegDay.Screen name="Hip Thruster" component={LegExc3} />
                            <LegDay.Screen name="Reverse Lunges" component={LegExc4} />
                            <LegDay.Screen name="Curtsy Lunges" component={LegExc5} />
                            <LegDay.Screen name="Sumo Squats" component={LegExc6} />
                            <LegDay.Screen name="Bulgarian Split Squats" component={LegExc7} />
                            <LegDay.Screen name="Dumbbell Deadlifts" component={LegExc8} />
                            <LegDay.Screen name="Bench Abductions" component={LegExc9} />
                            <LegDay.Screen name="Traditional Dumbbell Squats" component={LegExc10} />
                            <LegDay.Screen name="Side To Side Half Squats" component={LegExc11} />
                            <LegDay.Screen name="Banded Hamstring Curls" component={LegExc12} />
                            <LegDay.Screen name="Hacksquat With Landmine" component={LegExc13} />
                            <LegDay.Screen name="Leg Extension" component={LegExc14} />
                            <LegDay.Screen name="Leg Abductions" component={LegExc15} />
                            <LegDay.Screen name="Walking Lunges" component={LegExc16} />
                            <LegDay.Screen name="Flutter Kicks" component={LegExc17} />
                        </LegDay.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="My Exercises" options={{ headerShown: false }}>
                    {() => (
                        <MyExercises.Navigator tabBar={() => null}>
                            <MyExercises.Screen name="MyExercises" component={MyExercisesPage} />
                        </MyExercises.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
    },
    border: {
        borderBottomWidth: 5,
        borderBottomColor: 'black'
    },
    listContainer: {
        flex: 1,
        marginTop: 40
    },
    row: {
        padding: 10,
        marginBottom: 5,
        marginRight: 50,
        flex: 1,
        flexDirection: 'row',
    },
    listHeader: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold'
    },
    removeButton: {
        width: 70,
        height: 35,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 5,
    },
    exerciseButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    exerciseButtonContainer: {
        width: 110,
        height: 35,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: "#737373",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    exerciseRoot: {
        flex: 1
    },
    instructionsHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginTop: 50,
    },
    instructions: {
        marginTop: 20,
        fontSize: 14,
        marginLeft: 10,
        alignItems: 'center',
    }
});
