import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Modal} from 'react-native';
import ModalElement from '../Filmes/modal';

export default ({data}) => {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <View style={style.card}>
        <Text style={style.titulo}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={style.capa} />
        <View style={style.areaBotao}>
          <Pressable style={style.btn} onPress={() => setModal(true)}>
            <Text style={style.textoBtn}>LEIA MAIS</Text>
          </Pressable>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={modal}>
        <ModalElement data={data} closeModal={() => setModal(false)} />
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3,
  },
  btn: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBtn: {
    color: '#fff',
  },
});
