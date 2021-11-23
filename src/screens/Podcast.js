import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Poditem from '../components/Poditem';
import MyHeader from '../components/Header';



const date = [18, 17, 16, 15, 14, 13, 12]

const Podcast = ({ navigation }) => {
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
        <Text style={styles.title}>Podcasts</Text>
        <SearchBar
          placeholder="Search for an podcast"
          onChangeText={(t) => update(t)}
          value={search}
          style={styles.searchbar}

        />
      </View>
      <View style={{ marginTop: 5 }}>

        <FlatList
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 200 }}
          data={date}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.viewcontainer}>
                <Poditem item={item} color={'black'} textColor={'white'} />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.text} >Episode {item + 3}</Text>
                  <Text style={styles.text} >Podcast title</Text>
                </View>

              </View>
            )
          }} />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontFamily: 'Bold',
    fontSize: 20
  },
  viewcontainer: {
    flexDirection: 'row',

    marginBottom: 40,
    alignItems: 'center'
  },
  text: {
    justifyContent: 'center',
    marginLeft: 10
  },

  searchbar: {
    width: '85%',
    height: 30,
    backgroundColor: 'white'
  }

});

export default Podcast;