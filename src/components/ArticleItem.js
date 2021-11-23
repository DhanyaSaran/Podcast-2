import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ArticleItem = ({ page }) => {

    return (
        <ScrollView>
<View style={page ? styles.listscreen : styles.container}>
            <TouchableOpacity >
                <View style={page?{flexDirection:'column',flexDirection:'row'}:''}>
                    <View style={page?styles.listview:styles.view}>
                        <Image source={{ uri: 'https://toppng.com/uploads/preview/school-books-stack-115502530125lf0mr3ly5.png' }} style={page ? styles.imagelist : styles.image}></Image>
                     <Ionicons name={page?'':"arrow-forward-circle-outline"} color='black' size={30} />
                    </View>
                    <View style={page?{width:'70%'}:{}} >

                        <Text>Title</Text>
                        <Text numberOfLines={2}> An article writing is a kind of writing that is written to reach a massive audience with the help of the press. ... Writing a newspaper article, or writing a magazine article is not easy. It requires a lot of research and writing skills. It is written in such a way that it can inform the mass about a certain topic.</Text>
                    </View>
                </View>
            </TouchableOpacity>
</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        marginTop: 5,
        width: 270,
        height: 140,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
        flexDirection: 'column',
       

    },
    view: {
         flexDirection: 'row', 
       justifyContent:'space-between'
},
listview:{
    width:'30%',
    backgroundColor:'white'
},
    listscreen: {
        marginTop: 5,
        marginLeft: 15,
        backgroundColor: 'white',
        

    },
    texts: {
        fontFamily: 'Regular'
    },

    image: {
        height: 40,
        width: 40,
    },
    imagelist: {
        height: 80,
        width: 80,
    }
});

export default ArticleItem;