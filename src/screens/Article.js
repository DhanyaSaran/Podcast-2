import React, { useState } from 'react';
import { Text, View,StyleSheet,FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ArticleItem from '../components/ArticleItem';
import Header from '../components/Header';

const date = [18, 17, 16, 15, 14, 13]

export default Article = ({navigation}) => {
    const [search, setSearch] = useState('')

const update=(text)=>{
setSearch(text)
}

    return (
        <View style={{ flex: 1,backgroundColor:'white'}}>
            <Header  navigation={navigation}/>
            <Text>Articles list </Text>

            <SearchBar
                placeholder="Search for an article"
                lightTheme
                onChangeText={(t) => update(t)}
                value={search}
                style={styles.searchbar}
                // inputStyle={{backgroundColor: 'white'}}
                // containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
 
            />
            <View style={{marginTop:10}}>
            <FlatList    
             data={date}
             keyExtractor={(item) => item.toString()}
             renderItem={({ item, index }) => {
               return (
                 <ArticleItem page={true} />
               )
             }} />
            </View>
           
        </View>
    )

}


const styles=StyleSheet.create({
    searchbar:{
        width:'85%',
        height:30,
        backgroundColor:'white',
        borderColor:'white'
        
    }
})