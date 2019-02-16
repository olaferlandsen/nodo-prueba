import React from 'react';
import {View, Image, FlatList, ActivityIndicator, StyleSheet, ScrollView} from 'react-native'
import { Avatar, Card, ListItem, Button, Icon, Text } from 'react-native-elements'



export default class CharacterScreen extends React.Component {
  static navigationOptions = {
    title: 'Personaje',
  };

    constructor(props){
        super(props);
        this.state ={ isLoading: true, character: null}
    }

    componentDidMount () {
        const { navigation } = this.props;

        fetch('https://api.got.show/api/characters/byId/' + navigation.getParam('id'))
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    character: responseJson.data,
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }


    renderItem = ({ item }) => (
        <ListItem title={item}/>
    )

    keyExtractor = (item, index) => index.toString();


    render() {

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        let avatar;
        if (this.state.character.imageLink) {
            avatar = (
                <View style={styles.image_view}>
                    <Avatar
                        size="xlarge"
                        rounded
                        title="CR"
                        source={{uri: 'https://api.got.show' + this.state.character.imageLink}}/>
                </View>
            )
        }

      return (
          <View>
              <ScrollView>

              <Card title={this.state.character.name}>
                <Text>{this.state.character.slug}; Rank #{this.state.character.pageRank}</Text>
                  { avatar }
                  <Text h4>Libros</Text>
                  <FlatList
                      data={this.state.character.books}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}/>

                  <Text h4>Titulos</Text>
                  <FlatList
                      data={this.state.character.titles}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}/>
              </Card>
              </ScrollView>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    image_view: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
});
