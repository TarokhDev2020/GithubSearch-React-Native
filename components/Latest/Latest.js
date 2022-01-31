import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet, Text, LogBox, Alert, TouchableOpacity, Linking} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {List, ListItem, Button, ActionSheet, Toast} from 'native-base';
import {connect} from 'react-redux';
import {addToFavorites} from '../../store/actions/githubAction';

const Latest = ({latest, addToFavorites}) => {

    const buttons = ["Add to favorites", "Preview", "Cancel"]

    useEffect(() => {
        LogBox.ignoreAllLogs();
    })

    return (
        <List
            showsVerticalScrollIndicator = {false}
            dataArray = {latest}
            renderItem = {({item, index}) => {
                return (
                    <ListItem>
                        <TouchableOpacity onPress = {() => {
                            ActionSheet.show(
                                {
                                    options: buttons,
                                    cancelButtonIndex: 2,
                                    title: "Choose your action",
                                },
                                buttonIndex => {
                                    switch (buttonIndex) {
                                        case 0:
                                            addToFavorites({
                                                full_name: item.full_name,
                                                description: item.description,
                                                html_url: item.html_url
                                            }, Toast.show({
                                                text: "Added to your favorites successfully",
                                                buttonText: "OK"
                                            }))
                                            break;
                                        case 1:
                                            Linking.openURL(item.html_url)
                                            break;
                                        default:
                                            return;    
                                    }
                                }
                            )
                        }}>
                            <View style = {{flexDirection: "row"}}>
                                <View style = {{flexDirection: "column"}}>
                                    <Text style = {styles.repTitle}>{`${item.full_name}`}</Text>
                                    <Text numberOfLines = {2} style = {styles.descTitle}>{`${item.description}`}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                )
            }}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    repTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    descTitle: {
        color: "gray",
        marginTop: 5
    }
})

export default connect(null, {addToFavorites})(Latest);