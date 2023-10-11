import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EcranAdmin = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const getEmailAndRole = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedRole = await AsyncStorage.getItem('role');
      setEmail(storedEmail);
      setRole(storedRole);
    };
    getEmailAndRole();
  }, []);

  return (
    <View>
      <Text>Bienvenue, {email}</Text>
      <Text>Role: {role}</Text>
      {/* Autres composants pour l'interface admin */}
    </View>
  );
};

export default EcranAdmin;
