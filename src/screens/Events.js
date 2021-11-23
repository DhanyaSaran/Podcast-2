import React, {useEffect,useState} from 'react';
import {View,StyleSheet, FlatList,Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import EventItem  from '../components/EventItem';


const date = [18, 17, 16, 15, 14, 13, 12]
const Events = ({navigation}) => {
  const [search, setSearch] = useState('')

  const update = (text) => {
    setSearch(text)
  }
  return (
    <View style={styles.container}>
       <View>
        <MyHeader navigation={navigation} />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Events</Text>
        <SearchBar
          placeholder="Search for an event"
          onChangeText={(t) => update(t)}
          value={search}
          style={styles.searchbar}

        />
      </View>
      <View>
     <FlatList
            showsHorizontalScrollIndicator={false}
            data={date}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item, index }) => {
              return (
                <EventItem type={true} />
              )
            }} />
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:10
  },
  image: {
    height: (30),
    width: (60),
  },
  title: {
    fontFamily: 'Bold',
    fontSize: 20
  },
  titleText: {
    color:'black',
    justifyContent:'center',
    marginTop:100,
    fontSize: 32,
    
  },
  searchbar: {
    width: '85%',
    height: 30,
    backgroundColor: 'white'
  }
});

export default Events;