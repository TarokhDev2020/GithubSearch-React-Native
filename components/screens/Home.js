import React, {useEffect} from 'react';
import Latest from '../Latest/Latest';
import {View, StyleSheet, Text} from 'react-native';
import {Spinner} from 'native-base';
import {connect} from 'react-redux';
import {getLatest} from '../../store/actions/githubAction';

const Home = ({getLatest, github: {latest}}) => {

    useEffect(() => {
        getLatest();
    }, [])

    return (
        latest !== null ? (
            <View style = {styles.container}>
                <Latest latest = {latest} />
            </View>
        ) : (
            <View style = {[styles.container, {justifyContent: "center", alignItems: "center"}]}>
                <Spinner color = "#7158e2" />
            </View>
        )
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 110,
        flex: 1,
    }
})

const mapStateToProps = state => {
    return {
        github: state.github
    }
}

export default connect(mapStateToProps, {getLatest})(Home);