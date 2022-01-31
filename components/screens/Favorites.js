import React, {useEffect} from 'react';
import FavoritesList from '../Favorite/FavoritesList';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {getFavorites} from '../../store/actions/githubAction';

const Favorites = ({getFavorites, github: {favorites}}) => {

    useEffect(() => {
        getFavorites();
    }, [favorites])

    return (
        favorites !== null ? (
            <View style = {[styles.container, {marginTop: 110}]}>
                <FavoritesList favorites = {favorites} />
            </View>
        ) : (
            <View style = {[styles.container, {justifyContent: "center", alignItems: "center"}]}>
                <Text style = {styles.placeholderText}>You don't have any repositories</Text>
            </View>
        )
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    placeholderText: {
        color: "gray",
        fontSize: 19
    }
})

const mapStateToProps = state => {
    return {
        github: state.github
    }
}

export default connect(mapStateToProps, {getFavorites})(Favorites);