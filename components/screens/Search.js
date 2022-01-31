import React, {useEffect} from 'react';
import SearchList from '../Search/SearchList';
import {connect} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import {Spinner} from 'native-base';

const Search = ({github: {repos}}) => {

    return (
        repos !== null ? (
            <View style = {[styles.container, {marginTop: 110}]}>
                <SearchList repos = {repos} />
            </View>
        ) : (
            <View style = {[styles.container, {justifyContent: "center", alignItems: "center"}]}>
                <Text style = {styles.placeholderText}>Tap the search icon to search</Text>
            </View>
        )
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 110
    },
    placeholderText: {
        color: "gray",
        fontSize: 19
    }
});

const mapStateToProps = state => {
    return {
        github: state.github
    }
}

export default connect(mapStateToProps)(Search);