import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },containerForm:{
        width: '95%',
        height: 400,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20

    },
    input:{
        width: '80%',
        height: '100%',
        fontSize: 30,
        textAlign: "left",
        color: 'blue',
        marginLeft: '5%'

    },
    botaoLogin:{
        width: '90%',
        height: 60,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        marginVertical: 20,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontStyle: 'italic',

    },
    textoLogin:{
        color: 'white',
        fontSize: 30
    },
    textoErroLogin:{
        color: 'red'
    },
    containerInput:{
        width: '90%',
        height: 80,
        marginVertical: 20,
        backgroundColor: 'whitesmoke',
        borderColor: 'blue',
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgInput:{
        width: '15%',
        height: '100%',
    }
    
})


export default styles;