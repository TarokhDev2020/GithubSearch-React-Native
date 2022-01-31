import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {List, ListItem} from 'native-base';

const FavoritesList = ({favorites}) => {
    return (
        <List 
        showsVerticalScrollIndicator = {false}
        dataArray = {favorites}
        renderItem = {({item}) => {
            return (
                <ListItem>
                    <View style = {{flexDirection: "row"}}>
                        <View style = {{flexDirection: "column"}}>
                            <Text style = {styles.repTitle}>{`${item.full_name}`}</Text>
                            <Text style = {styles.descTitle} numberOfLines = {2}>{`${item.description}`}</Text>
                        </View>
                    </View>
                </ListItem>
            )
        }}
        />
    )
};

const styles = StyleSheet.create({
    repTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    descTitle: {
        color: "gray",
        marginTop: 5
    }
})

export default FavoritesList;