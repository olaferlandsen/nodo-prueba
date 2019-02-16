import React from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import { Header, ListItem } from 'react-native-elements'

export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: 'Personajes',
    };

    constructor(props){
        super(props);
        this.state ={ isLoading: true, navigationOptions: "Personajes"}
    }

    componentDidMount () {
        fetch('https://api.got.show/api/characters')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    keyExtractor = (item, index) => item._id;

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.house}
            leftAvatar={{ source: { uri: 'https://api.got.show' + item.imageLink } }}
            onPress={() =>
                this.props.navigation.navigate('Character', {id: item._id})
            }
        />
    )


    render() {



        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
