import { StyleSheet } from "react-native";
import { COLOR, SIZE } from "../../constants/index";

const styles = StyleSheet.create({
    container:{
        marginTop:SIZE.medium,
        marginHorizontal:12
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerTitle:{
        fontSize:SIZE.xLarge-2,
        fontFamily:'semiBold',
        color:COLOR.primary
    }
})

export default styles;