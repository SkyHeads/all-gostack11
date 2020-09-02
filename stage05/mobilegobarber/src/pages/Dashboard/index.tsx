import React from 'react';
import { View, Button } from 'react-native';

// import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  function logout() {
    signOut();
  }

  return (
    <View>
      <Button title="logout" onPress={logout} />
    </View>
  );
};
export default Dashboard;
