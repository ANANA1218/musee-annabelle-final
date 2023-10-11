import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Get navigation object

  const handleLogin = async () => {
    if (email === 'admin@yahoo.fr' && password === 'azerty1234') {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('role', 'admin');
      console.log('ok admin');
      navigation.navigate('Main');
      // Rediriger vers l'écran d'admin
    } else if (email === 'redac@yahoo.fr' && password === 'azerty1234') {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('role', 'redacteur');
      console.log('ok redacteur');
      navigation.navigate('Main');
      // Rediriger vers l'écran de rédacteur
    } else {
      // Afficher un message d'erreur
      console.log('pas autorise');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

export default Connexion;
