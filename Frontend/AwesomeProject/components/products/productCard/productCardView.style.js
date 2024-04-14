import { StyleSheet } from "react-native";
import { COLOR, SIZE } from "../../../constants/index";

const styles = StyleSheet.create({
    container:{
        width:182,
        height:182,
        borderRadius:SIZE.medium,
        backgroundColor:COLOR.secondary,
        marginLeft:5
    },
    imageContainer:{
        flex:1,
        width:170,
        height:170,
        marginLeft:SIZE.small/2,
        marginTop:SIZE.small/2,
        borderRadius:SIZE.small,
        overflow: 'hidden',
    },
    image:{
        resizeMode:'cover',
        width:'100%',
        height:'100%',
    },
    details:{
        paddingLeft:SIZE.small
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZE.large,
    },
    supplier:{
        fontFamily:'regular',
        fontSize:SIZE.small,
        color:COLOR.gray
    },
    price:{
        fontFamily:'bold',
        fontSize:SIZE.medium,
    },
    addButton:{
        position:'absolute',
        right:SIZE.small,
        bottom:SIZE.small,
    }
})

export default styles;