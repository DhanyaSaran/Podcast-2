import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import ListView from "deprecated-react-native-listview";
import Poditem from '../components/Poditem';
import EventItem from '../components/EventItem';
import ArticleItem from '../components/ArticleItem'
import Header from '../components/Header';

// const month = new Date().getMonth() + 1;
// const year = new Date().getFullYear();
// console.log(month,year)
// const today  = new Date().getDate();
// const yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);


const date = [18, 17, 16, 15, 14, 13]


const Mainhome = ({ navigation }) => {

  return (
    <ScrollView>
      <View>
        <StatusBar style="auto" translucent={false} />
        <Header navigation={navigation}/>
        <View>
          <Text>TODAY"S PODCAST</Text>
          <TouchableOpacity style={{ backgroundColor: 'black', width: '100%', height: 40 }}></TouchableOpacity>
        </View>


        {/* //Recent podcasts */}
        <View>
          <View style={styles.header}>
            <Text style={styles.texts}> RECENT PODCASTS </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Podcast')}>
              <Text style={styles.texts} > More {'>'} </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={date}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <Poditem item={item} color={'white'} textColor={'black'} />
                    <Text style={[styles.texts, { marginLeft: 10 }]} >Episode {item + 3}</Text>
                  </View>
                )
              }} />

          </View>
        </View>

        {/* // Events */}
        <View>
          <View style={styles.header}>
            <Text style={styles.texts}> EVENTS </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
              <Text style={styles.texts} > More {'>'} </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={date}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => {
                return (
                  <EventItem type={''} />
                )
              }} />

          </View>
        </View>



        {/* // Articles */}
        <View>
          <View style={styles.header}>
            <Text style={styles.texts}> ARTICLES </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
              <Text style={styles.texts} > More {'>'} </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={date}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => {
                return (
                  <ArticleItem page={false} />
                )
              }} />

          </View>
        </View>


        {/* // Books */}
        <View>
          <View style={styles.header}>
            <Text style={styles.texts}> BOOKS </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Books')}>
              <Text style={styles.texts} > More {'>'} </Text>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'space-between'}}>
            <FlatList
              
              data={date}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => {
                return (
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                    <TouchableOpacity style={styles.book}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                    <Text>Title</Text>
                  </View>

                )
              }}
              ListFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 100 }}
              numColumns={2}
            /> 
             {/* <ListView
          dataSource={date}
          renderRow={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity style={styles.book}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              </View>

            )
          }}

          pageSize={2}
        /> */}

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 25
  },


  texts: {
    fontFamily: 'Regular'
  },
  book: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 80,
    marginLeft: 30,
   marginTop:20,
    justifyContent: 'space-between'
    // marginBottom:30
  }

});

export default Mainhome;