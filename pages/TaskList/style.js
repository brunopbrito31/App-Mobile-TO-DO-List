import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    image:{
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: 'purple',
        fontWeight: 'bold',
        
    },
    containerLista: {
        flexDirection: 'row',
        width: '96%',
        flex: 1
    },

    listArea:{
        marginTop: 30,
        width: '95%',
    },
    containerRigth:{
        marginTop: 30,
        marginLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 15
    },
    imageTaskList: {
        width: '95%',
        height: '35%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'purple',
        borderRadius: 12
    },
    footerTaskList:{
        backgroundColor: 'purple',
        width: '100%',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: 'white',
        fontSize: 15
    },
    resumo:{
        marginBottom: 15,
        color: 'darkblue'
    },
    andamento:{
        marginBottom: 15,
        color: 'green'
    },
    meta:{
        marginBottom: 15,
        color: 'purple'
    },
    faltam:{
        marginBottom: 15,
        color: 'red'
    },
    containerLoading:{
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default styles;