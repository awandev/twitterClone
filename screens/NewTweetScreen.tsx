import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, TextInput } from 'react-native'
import { Text, View } from '../components/Themed'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProfilePicture from '../components/ProfilePicture'

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const onPostTweet = () => {
        console.log(`Posting the tweet: ${tweet}
        Image: ${imageUrl}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name="close" size={30} color={Colors.light.tint} />
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.newTweetContainer}>
                <ProfilePicture image={'https://scontent.fcgk16-1.fna.fbcdn.net/v/t31.0-8/25075042_10208869460928358_6429742125098608155_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGCbxrfVauha9nDD0Qs2nZjUZ4DP4LcawpRngM_gtxrClE3fhykRveeBExO6w83lv4&_nc_ohc=IOYUrhFG66sAX9ho3mS&_nc_ht=scontent.fcgk16-1.fna&oh=6893e75101a06cdc1f3fe9efdd5ccc99&oe=601DA12D'} />

                <View style={styles.inputsContainer}>
                    <TextInput
                        value={tweet}
                        numberOfLines={3}
                        onChangeText={(value) => setTweet(value)}
                        multiline={true}
                        style={styles.inputsContainer}
                        placeholder={"What's happening?"}
                    />
                    <TextInput
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        style={styles.imageInput}
                        placeholder={"Image url (optional)"}
                    />
                </View>


            </View>

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '100%',
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputsContainer: {
        marginLeft: 10,
    },
    tweetInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 20,
    },
    imageInput: {

    }
});
