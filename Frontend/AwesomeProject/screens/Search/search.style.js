import { StyleSheet } from "react-native";
import { COLOR, SIZE } from "../../constants/index";

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent: 'center',
        marginHorizontal:SIZE.small,
        backgroundColor:COLOR.secondary,
        borderRadius:SIZE.medium,
        marginVertical:SIZE.medium,
        height:50
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLOR.gray,
        marginTop:SIZE.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLOR.secondary,
        marginRight: SIZE.small,
        borderRadius:SIZE.small,
    },
    searchInput:{
        fontFamily:'regular',
        width:'100%',
        height:'100%',
        paddingHorizontal:SIZE.small
    },
    searchButton:{
        width:50,
        height:'100%',
        borderRadius:SIZE.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLOR.primary,
    },
    searchImage:{
        resizeMode:'contain',
        width:SIZE.width,
        height:SIZE.width,
        opacity:0.9
    }
})

export default styles;