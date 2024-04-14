import { StyleSheet } from "react-native";
import { COLOR,SIZE } from "../../../constants";

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignContent: 'center'
    },
    container:{
        paddingTop:SIZE.xxLarge,
        paddingLeft:SIZE.small/2,
    },
    separator:{
        height:SIZE.medium,
    }
})

export default styles;