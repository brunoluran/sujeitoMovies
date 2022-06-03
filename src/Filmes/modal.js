import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default ({data, closeModal}) => {
  return (
    <View style={style.container}>
      <View style={style.modalContainer}>
        <Pressable style={style.btn} onPress={closeModal}>
          <Text style={style.textoBtn}>Voltar</Text>
        </Pressable>
        <Text style={style.title}>{data.nome}</Text>
        <Text style={style.sinopse}>Sinopse:</Text>
        <Text style={style.desc}>{data.sinopse}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    //width: '100%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btn: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textoBtn: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  desc: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
});
