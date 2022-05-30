import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        marginBottom: '5%',
        width: '100%',
        height: 115,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 1,
        opacity: 0.8,
    },
    title:{
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'blue'
    },
    
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    width: '50%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  modal:{
      // backgroundColor: 'whitesmoke',
      // opacity: 1,
      // marginTop: 180
  }
})


export default styles;