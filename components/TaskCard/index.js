import React, {useState} from 'react';
import { Pressable, Alert, View, Text, Modal } from 'react-native';
import styles from './style';

export default function TaskCard( props ){
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                style={styles.modal}
            >
                <Text style={styles.title}>Titulo: { props.title ? props.title : 'Sem-Titulo' } </Text>
                <Text>Descrição: { props.description ? props.description : 'Sem-Descrição' } </Text>
                <Text>Prioridade: { props.priority ? props.priority : 'Sem-Prioridade' } </Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>Fechar</Text>
                </Pressable>
            </Modal>

            <Text style={styles.title}>Titulo: { props.title ? props.title : 'Sem-Titulo' } </Text>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Ver detalhes</Text>
            </Pressable>
        </View>
    )
}