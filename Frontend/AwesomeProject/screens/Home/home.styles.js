import { StyleSheet } from "react-native"
import {COLOR,SIZE} from '../../constants/index'

const styles = StyleSheet.create({
    textStyle: {
        fontFamily:'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    appBarWapper:{
        marginHorizontal:22,
        marginTop:SIZE.small
    },
    appBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    location:{
        fontFamily:'semiBold',
        fontSize: SIZE.medium,
        color:COLOR.gray
    },
    cartCount:{
        position:'absolute',
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:COLOR.green,
        justifyContent:'center',
        alignItems:'center',
        zIndex:999
    },
    cartNumber:{
        fontFamily:'regular',
        fontWeight:'bold',
        fontSize:10,
        color:COLOR.lightWhite
    }
})

export default styles