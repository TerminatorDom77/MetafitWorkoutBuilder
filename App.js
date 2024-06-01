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
        navigation.navigate("Push Day", { screen: 'tricep press downs' })
    }
    return (
        <GestureRecognizer onSwipeRight={onSwipeRight} style={{flex: 1}}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PushExercises/balltoss.mp4')} exercise="ball toss" type="Push" />
            </View>
        </GestureRecognizer>
    )
}

function PushExc2() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/tricepdips2.mp4')} exercise="tricep dips" type="Push" />
        </View>
    )
}
function PushExc3() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/shoulderpress.mp4')} exercise="shoulder press" type="Push" />
        </View>
    )
}

function PushExc4() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/elevatedpushups.mp4')} exercise="elevated pushups" type="Push"  />
        </View>
    )
}

function PushExc5() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/singledumbbellpress.mp4')} exercise="single dumbbell press" type="Push" />
        </View>
    )
}

function PushExc6() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/bandedshoulderraise.mp4')} exercise="banded shoulder raise" type="Push" />
        </View>
    )
}

function PushExc7() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/plankedshoulderraises.mp4')} exercise="planked shoulder raises" type="Push" />
        </View>
    )
}

function PushExc8() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/singlearmchestfly.mp4')} exercise="single arm chest fly" type="Push" />
        </View>
    )
}

function PushExc9() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/flatdumbellpress.mp4')} exercise="flat dumbell press" type="Push" />
        </View>
    )
}

function PushExc10() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/landminepress.mp4')} exercise="landmine press" type="Push" />
        </View>
    )
}

function PushExc11() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/tricepkickback.mp4')} exercise="tricep kickback" type="Push" />
        </View>
    )
}

function PushExc12() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/ballslams.mp4')} exercise="ball slams" type="Push" />
        </View>
    )
}

function PushExc13() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/closegripinclinepress.mp4')} exercise="close grip incline press" type="Push" />
        </View>
    )
}

function PushExc14() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/singlearmlandminepress.mp4')} exercise="single arm landmine press" type="Push" />
        </View>
    )
}

function PushExc15() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/rotatinginclinepress.mp4')} exercise="rotating incline press" type="Push" />
        </View>
    )
}

function PushExc16() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/shoulderplatepress.mp4')} exercise="shoulder plate press" type="Push" />
        </View>
    )
}

function PushExc17() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/skullcrushers.mp4')} exercise="skull crushers" type="Push" />
        </View>
    )
}

function PushExc18() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PushExercises/singlearmshoulderraise.mp4')} exercise="single arm shoulder raise" type="Push" />
        </View>
    )
}

function PushExc19({navigation }) {
    function onSwipeLeft(gestureState){
        navigation.navigate("Push Day", {screen: 'ball toss'})
    }
    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} style={{flex: 1}}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PushExercises/triceppressdowns.mp4')} exercise="tricep press downs" type="Push" />
            </View>
        </GestureRecognizer>
    )
}


function PullExc1({ navigation }) {
    function onSwipeRight(gestureState) {
        navigation.navigate("Pull Day", { screen: 'standing rows with band' })
    }
    return (
        <GestureRecognizer onSwipeRight={onSwipeRight} style={{ flex: 1 }}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PullExercises/seatedrows.mp4')} exercise="seated rows" type="Pull" />
            </View>
        </GestureRecognizer>
    )
}

function PullExc2() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/standingroweasybar.mp4')} exercise="standing row easy bar" type="Pull" />
        </View>
    )
}

function PullExc3() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/australianpushups.mp4')} exercise="australian pushups" type="Pull" />
        </View>
    )
}

function PullExc4() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/benchrows.mp4')} exercise="bench rows" type="Pull" />
        </View>
    )
}

function PullExc5() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/bentoverbarbellrows.mp4')} exercise="bent over barbell rows" type="Pull" />
        </View>
    )
}

function PullExc6() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulldowns.mp4')} exercise="lat pull downs" type="Pull" />
        </View>
    )
}

function PullExc7() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/plankpull.mp4')} exercise="plank pull" type="Pull" />
        </View>
    )
}

function PullExc8() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/ablegsup.mp4')} exercise="ablegsup" type="Pull" />
        </View>
    )
}

function PullExc9() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/pullingtwists.mp4')} exercise="pulling twists" type="Pull" />
        </View>
    )
}

function PullExc10() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/russiantwists.mp4')} exercise="russian twists" type="Pull" />
        </View>
    )
}

function PullExc11() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulloverwedge.mp4')} exercise="lat pull over wedge" type="Pull" />
        </View>
    )
}

function PullExc12() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/weightedkneetucks.mp4')} exercise="weighted knee tucks" type="Pull" />
        </View>
    )
}

function PullExc13() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/standinglandminepull.mp4')} exercise="standing landmine pull" type="Pull" />
        </View>
    )
}

function PullExc14() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/landminebentoverrow.mp4')} exercise="landmine bent over row" type="Pull" />
        </View>
    )
}

function PullExc15() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulloverwithcrunch.mp4')} exercise="lat pull over with crunch" type="Pull" />
        </View>
    )
}

function PullExc16() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/seatedrowbenchsupport.mp4')} exercise="seated row bench support" type="Pull" />
        </View>
    )
}

function PullExc17() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/latpulldownlowerangle.mp4')} exercise="lat pull down lower angle" type="Pull" />
        </View>
    )
}

function PullExc18() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/lawnmowerlandminepull.mp4')} exercise="lawnmower landmine pull" type="Pull" />
        </View>
    )
}

function PullExc19() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/PullExercises/standingrowscabletower.mp4')} exercise="standing rows cable tower" type="Pull" />
        </View>
    )
}

function PullExc20() {
    return (
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PullExercises/standingrowswithband.mp4')} exercise="standing rows with band" type="Pull" />
            </View>
    )
}

function PullExc21({ navigation }) {
    function onSwipeLeft(gestureState) {
        navigation.navigate("Pull Day", { screen: 'seated row' })
    }
    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} style={{ flex: 1 }}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/PullExercises/cablepulldowns.mp4')} exercise="cable pull downs" type="Pull" />
            </View>
        </GestureRecognizer>
    )
}

function LegExc1({navigation }) {

    function onSwipeRight(gestureState) {
        navigation.navigate("Leg Day", { screen: 'flutter kicks' })
    }
    return (
        <GestureRecognizer onSwipeRight={onSwipeRight} style={{flex:1 }}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/LegExercises/gobletsquats.mp4')} exercise="goblet squats" type="Leg" />
            </View>
        </GestureRecognizer>
    )
}
function LegExc2() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/widesquats.mp4')} exercise="wide squat" type="Leg" />
        </View>
    )
}

function LegExc3() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/hipthruster.mp4')} exercise="hip thruster" type="Leg" />
        </View>
    )
}

function LegExc4() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/reverselunges.mp4')} exercise="reverse lunges" type="Leg" />
        </View>
    )
}

function LegExc5() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/curtsylunges2.mov')} exercise="curtsy lunges" type="Leg" />
        </View>
    )
}

function LegExc6() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/sumosquats.mp4')} exercise="sumo squats" type="Leg" />
        </View>
    )
}

function LegExc7() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/bulgariansplitsquats.mp4')} exercise="bulgarian split squats" type="Leg" />
        </View>
    )
}

function LegExc8() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/dumbbelldeadlifts.mp4')} exercise="dumbbell deadlifts" type="Leg" />
        </View>
    )
}

function LegExc9() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/benchadductions.mp4')} exercise="bench Adductions" type="Leg" />
        </View>
    )
}

function LegExc10() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/traditionaldumbbellsquats.mp4')} exercise="traditional dumbbell squats" type="Leg" />
        </View>
    )
}

function LegExc11() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/sidetosidehalfsquats.mp4')} exercise="side to side half squats" type="Leg" />
        </View>
    )
}

function LegExc12() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/bandedhamstringcurls.mp4')} exercise="banded hamstring curls" type="Leg" />
        </View>
    )
}

function LegExc13() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/hacksquatwithlandmine.mp4')} exercise="hacksquat with landmine" type="Leg" />
        </View>
    )
}

function LegExc14() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/legextension.mp4')} exercise="leg extension" type="Leg" />
        </View>
    )
}

function LegExc15() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/legabductions.mp4')} exercise="leg Abductions" type="Leg" />
        </View>
    )
}

function LegExc16() {
    return (
        <View style={styles.exerciseRoot}>
            <Exercise exerciseVid={require('./assets/LegExercises/walkinglunges.mp4')} exercise="walking lunges" type="Leg" />
        </View>
    )
}

function LegExc17({navigation }) {
    function onSwipeLeft(gestureState) {
        navigation.navigate("Leg Day", { screen: 'goblet squats' })
    }
    return (
        <GestureRecognizer onSwipeLeft={onSwipeLeft} style={{flex: 1}}>
            <View style={styles.exerciseRoot}>
                <Exercise exerciseVid={require('./assets/LegExercises/flutterkicks.mp4')} exercise="flutter kicks" type="Leg" />
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
                            <PushDay.Screen name="ball toss" component={PushExc1} />
                            <PushDay.Screen name="tricep dip" component={PushExc2} />
                            <PushDay.Screen name="shoulder press" component={PushExc3} />
                            <PushDay.Screen name="elevated pushups" component={PushExc4} />
                            <PushDay.Screen name="single dumbell press" component={PushExc5} />
                            <PushDay.Screen name="deltoid raise" component={PushExc6} />
                            <PushDay.Screen name="planked shoulder raises" component={PushExc7} />
                            <PushDay.Screen name="single arm chest fly" component={PushExc8} />
                            <PushDay.Screen name="flat dumbell press" component={PushExc9} />
                            <PushDay.Screen name="landmine press" component={PushExc10} />
                            <PushDay.Screen name="tricep kickback" component={PushExc11} />
                            <PushDay.Screen name="ball slam" component={PushExc12} />
                            <PushDay.Screen name="close grip incline press" component={PushExc13} />
                            <PushDay.Screen name="single arm landmine press" component={PushExc14} />
                            <PushDay.Screen name="rotating incline press" component={PushExc15} />
                            <PushDay.Screen name="shoulder plate press" component={PushExc16} />
                            <PushDay.Screen name="skull crushers" component={PushExc17} />
                            <PushDay.Screen name="single arm shoulder raise" component={PushExc18} />
                            <PushDay.Screen name="tricep press downs" component={PushExc19} />
                        </PushDay.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Pull Day" options={{ headerShown: false }}>
                    {() => (
                        <PullDay.Navigator tabBar={() => null} screenOptions={{ lazy: true }}>
                            <PullDay.Screen name="seated row" component={PullExc1} />
                            <PullDay.Screen name="standing row easy bar" component={PullExc2} />
                            <PullDay.Screen name="australian pushups" component={PullExc3} />
                            <PullDay.Screen name="Bench Rows" component={PullExc4} />
                            <PullDay.Screen name="bent over barbell rows" component={PullExc5} />
                            <PullDay.Screen name="lat pull downs" component={PullExc6} />
                            <PullDay.Screen name="plank pull" component={PullExc7} />
                            <PullDay.Screen name="ab legs up" component={PullExc8} />
                            <PullDay.Screen name="pulling twists" component={PullExc9} />
                            <PullDay.Screen name="russian twists" component={PullExc10} />
                            <PullDay.Screen name="lat pullover wedge" component={PullExc11} />
                            <PullDay.Screen name="weighted knee tucks" component={PullExc12} />
                            <PullDay.Screen name="standing landmine pull" component={PullExc13} />
                            <PullDay.Screen name="landmine bent over row" component={PullExc14} />
                            <PullDay.Screen name="lat pull over with crunch" component={PullExc15} />
                            <PullDay.Screen name="seated row bench support" component={PullExc16} />
                            <PullDay.Screen name="lat pull down lower angle" component={PullExc17} />
                            <PullDay.Screen name="lawnmower landmine pull" component={PullExc18} />
                            <PullDay.Screen name="standing rows cable tower" component={PullExc19} />
                            <PullDay.Screen name="standing rows with band" component={PullExc20} />
                            <PullDay.Screen name="cable pull downs" component={PullExc21} />
                        </PullDay.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Leg Day" options={{ headerShown: false }}>
                    {() => (
                        <LegDay.Navigator tabBar={() => null} screenOptions={{ lazy: true }}>
                            <LegDay.Screen name="goblet squats" component={LegExc1} />
                            <LegDay.Screen name="wide squat" component={LegExc2} />
                            <LegDay.Screen name="jip thruster" component={LegExc3} />
                            <LegDay.Screen name="reverse lunges" component={LegExc4} />
                            <LegDay.Screen name="curtsy lunges" component={LegExc5} />
                            <LegDay.Screen name="sumo squats" component={LegExc6} />
                            <LegDay.Screen name="split squats" component={LegExc7} />
                            <LegDay.Screen name="dumbbell deadlift" component={LegExc8} />
                            <LegDay.Screen name="bench adductions" component={LegExc9} />
                            <LegDay.Screen name="traditional dumbbel squats" component={LegExc10} />
                            <LegDay.Screen name="side to side half squats" component={LegExc11} />
                            <LegDay.Screen name="banded hamstring curls" component={LegExc12} />
                            <LegDay.Screen name="hacksquat with landmine" component={LegExc13} />
                            <LegDay.Screen name="leg extension" component={LegExc14} />
                            <LegDay.Screen name="leg abductions" component={LegExc15} />
                            <LegDay.Screen name="walking lunges" component={LegExc16} />
                            <LegDay.Screen name="flutter kicks" component={LegExc17} />
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
