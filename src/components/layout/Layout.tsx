import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface LayoutProps {
  children: React.ReactNode;
}

const MainContainer = styled.main`
  min-height: 100vh;
  padding-top: 70px; // Accounting for the fixed header
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};

export default Layout;
