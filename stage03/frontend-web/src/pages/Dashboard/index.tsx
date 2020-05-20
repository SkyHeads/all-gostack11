import React, { useCallback } from 'react';

import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, LogoutButton } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <LogoutButton onClick={handleLogout}>
        <FiPower size={60} />
      </LogoutButton>
    </Container>
  );
};

export default Dashboard;
