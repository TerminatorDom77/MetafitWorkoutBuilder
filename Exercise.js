import React from 'react'
import { StyleSheet, Platform, View, ActivityIndicator, Alert} from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
import { Asset } from 'expo-asset'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler"


export default function Exercise(props) {
    if (Platform.OS == "android") {
        videos = ["Single Dumbbell Press", "Hip Thruster", "Shoulder Press", "Single Arm Chest Fly", "Single Arm Shoulder Raise", "Standing Rows With Band", "Standing Rows Cable Tower"]
        var useControls = true
    } else if (Platform.OS == "ios") {
        videos = []
        var useControls = false
    }
    const video = React.useRef()
    const [status, setStatus] = React.useState({});
    var playVideo = React.useRef(true)
    const shouldAnimate = React.useRef(true)
    vidModule = props.exerciseVid
    vidAsset = Asset.fromModule(vidModule)
    
    try {
        vidFile = vidAsset.downloadAsync()
    } catch (e) {
        console.error("Asset download rejected")
        vidFile = vidAsset.downloadAsync()
    }
    if (vidAsset.downloaded == false) {
        uri = vidAsset.uri
    } else {
        uri = vidFile._j.localUri
    }

    const result = React.useRef(null)
    async function getValue(exercise, type) {
        result.current = await findExercise(exercise)
        result.current ?
            Alert.alert("Update", "Exercise saved!", [{ text: "Cancel" }, { text: "Ok", onPress: () => saveExercise(exercise, type) }]) :
            Alert.alert("Update", "This exercise is already saved", [{ text: "Ok" }])
    }
    async function findExercise(exercise) {
        item = await AsyncStorage.getItem(exercise)
        if (item == null) {
            return true
        } else {
            return false
        }
    }

    async function saveExercise(exercise, type) {
        try {
            const value = await AsyncStorage.getItem(exercise)
            if (value == null) {
                await AsyncStorage.setItem(exercise, type)
            }
        } catch (e) {
            console.error("Failed to save exercise")
        }
    }
    const doubleTap = Gesture.Tap().numberOfTaps(2).onEnd((_event, success) => {
        if (success) {
            getValue(props.exercise, props.type)
        }
    })
    useFocusEffect(
        React.useCallback(() => {
            playVideo.current = true
            video.current.playAsync()
            return () => {
                playVideo.current = false
                video.current.pauseAsync()
            };
        }, [])
    );
    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <ActivityIndicator style={{ zIndex: 1, marginTop: 725 }} size="large" animating={shouldAnimate.current} color="#a6edff" />
            </View>
            <GestureDetector gesture={doubleTap }>
                <Video
                    style={styles.video}
                    ref={video}
                    resizeMode={Platform.OS == "ios" ? ResizeMode.CONTAIN : null} //either CONTAIN or COVER

                    source={{
                        uri: uri
                    }}
                    useNativeControls={useControls}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    onLoad={() => shouldAnimate.current = false}

                />
            </GestureDetector>
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    },
    videoContainer: {
        backgroundColor: '#000'
    },
    alteredVideo: {
        marginTop: 50,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})