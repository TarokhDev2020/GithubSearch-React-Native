import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Container, Header, Left, Body, Right, Title, Item, Button, Text, Input} from 'native-base';
import {TouchableOpacity, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {searchRepositories} from '../../store/actions/githubAction';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{
            header: () => (
                <Container>
                    <Header iosBarStyle = {"light-content"} style = {{backgroundColor: "#7158e2", height: 65}}>
                        <Left />
                        <Body>
                            <Title style = {{color: "white"}}>Latest</Title>
                        </Body>
                        <Right />
                    </Header>
                </Container>
            )
        }}>
            <Stack.Screen name = "Home" component = {Home} />
        </Stack.Navigator>
    )
};

const SearchStackNavigator = ({searchRepositories}) => {

    const [toggle, setToggle] = useState(false);
    const [searchText, setSearchText] = useState("");

    const onSubmit = () => {
        searchRepositories(searchText);
        setSearchText("");
        Keyboard.dismiss();
    }

    return (
        <Stack.Navigator screenOptions = {{
            header: () => (
                <Container>
                    {toggle === false ? (
                        <Header iosBarStyle = {"light-content"} style = {{backgroundColor: "#7158e2"}}>
                            <Left />
                            <Body>
                                <Title style = {{color: "white"}}>Search</Title>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress = {() => setToggle(true)}>
                                    <Icon name = "search-outline" color = "white" size = {24} />
                                </TouchableOpacity>
                            </Right>
                        </Header>
                    ) : (
                        <Header iosBarStyle = {"light-content"} style = {{backgroundColor: "#7158e2"}} searchBar rounded>
                            <Item style = {{flex: 6, height: 35, backgroundColor: "white"}}>
                                <Icon name = "search-outline" size = {24} color = "black" style = {{marginLeft: 5}}/>
                                <Input placeholder = "Search" value = {searchText} onChangeText = {(value) => setSearchText(value)} 
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                returnKeyType = "search"
                                onSubmitEditing = {onSubmit}
                                />
                            </Item>
                            <Right>
                                <TouchableOpacity onPress = {() => setToggle(false)}>
                                    <Icon name = "close-outline" size = {25} color = "white" />
                                </TouchableOpacity>
                            </Right>
                        </Header>
                    )}
                </Container>
            )
        }}>
            <Stack.Screen name = "Search" component = {Search} />
        </Stack.Navigator>
    )
};

const FavoritesStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{
            header: () => (
                <Container>
                    <Header iosBarStyle = {"light-content"} style = {{backgroundColor: "#7158e2"}}>
                        <Left />
                        <Body>
                            <Title style = {{color: "white"}}>Favorites</Title>
                        </Body>
                        <Right />
                    </Header>
                </Container>
            )
        }}>
            <Stack.Screen name = "Favorites" component = {Favorites} />
        </Stack.Navigator>
    )
};

const mapStateToProps = state => {
    return {
        github: state.github
    }
}

export const ConnectedSearchStack = connect(mapStateToProps, {searchRepositories})(SearchStackNavigator);

export {HomeStackNavigator , FavoritesStackNavigator};