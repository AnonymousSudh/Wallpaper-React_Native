import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, ViewBase, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'




const Home = ({ navigation }) => {
    const [image, setImage] = useState({});
    const [text, setText] = useState("");
    const [test, setTest] = useState([]);



    const getValue = async (searchString) => {
        const randomValue = Math.floor(Math.random() * 10) + 1;

        const data = await fetch(`https://api.unsplash.com/search/photos?page=${randomValue}&per_page=50&orientation=portrait&query=${searchString}&client_id=yJ3bmN3AsXCNBXz5LzfvM0Lb20w1v-DgWK8x6q1VqYo`);


        // const data = await fetch(`https://api.unsplash.com/search/photos?page=${randomValue}&per_page=50&orientation=portrait&query=${searchString}&client_id=DeU-AwrYRKFKdMXuC2HCh8FueP9LnAAlAS75CygNiwg`);
        // const data = await fetch(`https://api.unsplash.com/search/photos?page=${randomValue}&per_page=50&orientation=portrait&query=${searchString}&client_id=qW86BwhkMiVdODI97kW-ixVx1pwWnvRAXs5QKw9xi_M`);

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
                    onPress={() => {``
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
                                    style={styles.oneImage}
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

        // height: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        minWidth: "100%",
        paddingHorizontal: 10

    },
    TextBox: {
        borderColor: "white",

        borderWidth: 1,
        width: "90%",

    },
    HomeView: {
        backgroundColor: "#151515",
        // height: "100%"
    },
    WallpaperSection: {
        borderColor: "green",
        // borderWidth: 10,
        // height: "90%"
        display: "flex",
        alignItems: "center",
        // marginBottom:30
        // marginHorizontal:20
        marginVertical: 20
    },
    Flatlist: {
        // borderWidth: 3,


        //  minWidth:"100%"
        // minHeight: "90%"

    },
    imageContainer: {
        borderColor: "red",
        // borderWidth: 3,
        // minWidth: "50%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 6

        // minHeight: "90%"
    },
    oneImage: {
        width: 190,
        height: 290,
        borderRadius: 20
        // width: "30%",
        // height: "100%",
        // resizeMode: "contain",
        // aspectRatio: 1,

        // margin:10
    }
})





