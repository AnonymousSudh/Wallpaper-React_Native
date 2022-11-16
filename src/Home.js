import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, ViewBase, TouchableOpacity, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height




const Home = ({ navigation }) => {
    const [image, setImage] = useState({});
    const [text, setText] = useState("");
    const [test, setTest] = useState([]);
    // const [width,setWidth] = useState("");
    // const [height,setHeight] = useState("");



    const getValue = async (searchString) => {
        const randomValue = Math.floor(Math.random() * 10) + 1;

        // const data = await fetch(`https://api.unsplash.com/search/photos?page=${randomValue}&per_page=50&orientation=portrait&query=${searchString}&client_id=yJ3bmN3AsXCNBXz5LzfvM0Lb20w1v-DgWK8x6q1VqYo`);


        // const data = await fetch(`https://api.unsplash.com/search/photos?page=${randomValue}&per_page=50&orientation=portrait&query=${searchString}&client_id=DeU-AwrYRKFKdMXuC2HCh8FueP9LnAAlAS75CygNiwg`);

        const data = await fetch(`https://api.unsplash.com/search/photos?page=${randomValue}&per_page=50&orientation=portrait&query=${searchString}&client_id=qW86BwhkMiVdODI97kW-ixVx1pwWnvRAXs5QKw9xi_M`);

        let apiData = await data.json()
        setImage(apiData)
    }
    const newSearch = () => {
        getValue(text)

    }
    const navToImageInfo = (text) => {

        navigation.navigate('imageInfo', {
            msg: text
        })
    }

    useEffect(() => {

        getValue('car');
        console.log(Dimensions.get('window').width)
        // height = Dimensions.get('window').width;
        // setWidth(Dimensions.get('window').width)
        // console.log(height);
        // console.log(width);

    }, [])



    return (
        <View style={styles.HomeView}>
            <View style={styles.TextSec}>

                <TextInput style={styles.TextBox}
                    placeholder="Search"
                    onChangeText={(e) => {
                        setText(e)
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        newSearch()
                    }}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../images/search.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.WallpaperSection}>
                <FlatList
                    style={styles.Flatlist}
                    columnWrapperStyle={{ marginTop: 10 }}
                    numColumns={2}
                    data={image.results}
                    renderItem={({ item }) =>

                        <View style={styles.imageContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    navToImageInfo(item.urls.regular)
                                }}>

                                <Image
                                    style={[{width:((width/2)-12),height:height/2.5},styles.oneImage]}
                                    source={{
                                        uri: item.urls.small
                                    }} />

                            </TouchableOpacity>
                        </View>
                    } />
            </View>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    TextSec: {

        // height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        // borderColor: "black",
        alignSelf: "center",
        // borderWidth: 1,
        backgroundColor: "white",
        maxWidth: "95%",
        borderRadius: 40,
        paddingHorizontal: 10

    },
    TextBox: {
        // borderColor: "white",

        // borderWidth: 1,
        width: "90%",

    },
    HomeView: {
        backgroundColor: "#151515",
        // height: "100%"
    },
    WallpaperSection: {
        // borderWidth: 3,
        // borderColor: "red",
        display: "flex",
        alignItems: "center",
        // minHeight: "5%",
        // alignSelf:'flex-start'
        // marginBottom:175
        // marginHorizontal:20
        // marginVertical: 20
        marginBottom:100
        
    },
    Flatlist: {
        // borderWidth: 3,
        // borderColor: "green",


        // maxWidth: "100%"
        // minHeight: "90%"

    },
    imageContainer: {
        //   borderWidth: 3,
        // borderColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        // marginVertical: 10,
        marginHorizontal: 6,
        // paddingHorizontal:50,
        // paddingVertical: 10

        // minHeight: "90%"
    },
    oneImage: {
        // width: 177,
        // height: 290,
        borderRadius: 24,
        // width: "30%",
        // height: "100%",
        // resizeMode: "contain",
        // aspectRatio: 1,

        // margin:10
    }
})





