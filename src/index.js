import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import api from './services/api';
import Filmes from './Filmes';

export default () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function LoadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }
    LoadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={style.loadingElement}>
        <ActivityIndicator color={'#999999'} size="large" />
        <Text style={style.textLoading}>Carregando...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={style.container}>
        <FlatList
          data={filmes}
          renderItem={({item}) => <Filmes data={item} />}
          keyExtractor={item => String(item.id)}
        />
      </SafeAreaView>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingElement: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textLoading: {
    color: '#999999',
    fontSize: 18,
  },
});
