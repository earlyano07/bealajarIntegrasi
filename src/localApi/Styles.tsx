import { StyleSheet } from "react-native";

const themedStyles = StyleSheet.create({
    container:{
        padding: 20
    },
    headerTxt:{
        textAlign: 'center',
        paddingBottom: 20
    },
    txtInput:{
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 20
    },
    line:{
        height:2,
        backgroundColor: 'black',
        marginVertical: 20
    },

    avatar:{
        width:80,
        borderRadius:80,
        height:80
    },
    desc:{
        marginLeft: 12
    },
    itemContainer:{
        flexDirection:'row',
        marginBottom: 20
    }
}
);

export default themedStyles;