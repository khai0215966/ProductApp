import { StyleSheet } from "react-native";
import { COLOR, SIZE } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLOR.lightWhite
    },
    wrapper:{
        flex: 1,
        backgroundColor:COLOR.lightWhite,
        justifyContent:'space-between'
    },
    upperRow:{
        width:SIZE.width-50,
        marginHorizontal:SIZE.large,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        position: 'absolute',
        backgroundColor:COLOR.primary,
        borderRadius:SIZE.large,
        top:SIZE.large,
        zIndex:999
    },
    heading:{
        fontFamily:'semiBold',
        fontSize: SIZE.medium,
        color:COLOR.lightWhite,
        marginLeft:5
    }
})

export default styles;