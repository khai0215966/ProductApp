import { StyleSheet } from "react-native";
import { COLOR, SHADOWS, SIZE } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:SIZE.small,
        flexDirection:'row',
        padding:SIZE.medium,
        borderRadius:SIZE.small,
        backgroundColor:'#FFF',
        ...SHADOWS.medium,
        shadowColor:COLOR.lightWhite
    },
    image:{
        width:70,
        backgroundColor:COLOR.secondary,
        borderRadius:SIZE.medium,
        justifyContent: 'center',
        alignContent: 'center'
    },
    productImage:{
        width:'100%',
        height:65,
        borderRadius:SIZE.small,
        resizeMode:'cover'
    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZE.medium
    },
    productTitle:{
        fontSize:SIZE.medium,
        fontFamily:'bold',
        color:COLOR.primary
    },
    productSupplier:{
        fontSize:SIZE.small+2,
        fontFamily:'regular',
        color:COLOR.gray,
        marginTop:3
    }
})

export default styles;