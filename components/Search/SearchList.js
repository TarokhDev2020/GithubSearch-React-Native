import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import {List, ListItem, ActionSheet, Toast} from 'native-base';
import {connect} from 'react-redux';
import {addToFavorites} from '../../store/actions/githubAction';

const SearchList = ({repos, addToFavorites}) => {

    const buttons = ["Add to favorites", "Preview", "Cancel"]

    return (
        <List 
        showsVerticalScrollIndicator = {false}
        dataArray = {repos}
        renderItem = {({item}) => {
            return (
                <ListItem>
                    <TouchableOpacity onPress = {() => {
                        ActionSheet.show(
                            {
                                options: buttons,
                                title: "Choose your action",
                                cancelButtonIndex: 2,  
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
                                        Linking.openURL(item.html_url);
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
                                <Text style = {styles.descTitle} numberOfLines = {2}>{`${item.description}`}</Text>
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

export default connect(null, {addToFavorites})(SearchList);