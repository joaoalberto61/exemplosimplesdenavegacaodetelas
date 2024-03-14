import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial de detalhes</Text>
      <Button
        title="Ir para tela inicial"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default HomeScreen;