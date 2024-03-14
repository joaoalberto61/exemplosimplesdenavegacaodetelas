import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial do programa</Text>
      <Button
        title="Ir para detalhe.js"
        onPress={() => navigation.navigate('Detalhe')}
      />
    </View>
  );
};

export default HomeScreen;