import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageInfo = ({ route, navigation }) => {

    const nextImage = () => {

    }

    return (
        <View>
            <Image
                style={styles.oneImage}
                source={{
                    uri: route.params.msg
                }} />
            <View style={styles.downloadSection}>

                <TouchableOpacity >
                    <View style={styles.infoButton}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require('../images/save.png')}
                        />

                        {/* <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Download</Text> */}
                    </View>

                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.infoButton}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require('../images/next.png')}
                        />

                        {/* <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Download</Text> */}
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ImageInfo

const styles = StyleSheet.create({
    oneImage: {
        width: 400,
        // height: 740,
        // width: "30%",
        height: "100%",
        // resizeMode: "contain",
        // aspectRatio: 1,

        // margin:10
    },
    downloadSection: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        // borderColor: "black",
        // borderWidth: 1,
        position: "absolute",
        bottom: 15,
        justifyContent: "space-around"
        // flexDirection:"horizontal"

    },
    infoButton: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        height: 60,
        width: 60,
        opacity: 0.5,
        backgroundColor: "#DBE0E4",
    }
})