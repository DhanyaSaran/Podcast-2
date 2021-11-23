import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Header from '../components/Header';

const date = [18, 17, 16, 15, 14, 13]

export default Books = ({ navigation }) => {
  const [search, setSearch] = useState('')

  const update = (text) => {
    setSearch(text)
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header navigation={navigation} />
      <Text>Books </Text>

      <SearchBar
        placeholder="Search for a book"
        lightTheme
        onChangeText={(t) => update(t)}
        value={search}
        style={styles.searchbar}
      />
      <View style={{ marginTop: 10 }}>
        <FlatList

          data={date}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.book}>
                  <Text>{item}</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.text}>Title</Text>
                  <Text style={styles.text}>2 lines from the book</Text>
                </View>
              </View>

            )
          }}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 200 }}
        />
      </View>

    </View>
  )

}


const styles = StyleSheet.create({
  searchbar: {
    width: '85%',
    height: 30,
    backgroundColor: 'white',
    borderColor: 'white'

  },
  book: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',

    marginLeft: 30,
    marginTop: 20,

    // marginBottom:30
  },
  text: {
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  }
})