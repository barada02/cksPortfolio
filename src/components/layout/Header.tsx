import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderContainerProps {
  scrolled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${props => props.scrolled ? 'rgba(18, 18, 18, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all ${theme.animations.normal} ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLinks = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xl};
  z-index: 99;
`;

const NavLink = styled.a`
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: ${theme.fontSizes.md};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.gradients.primary};
    transition: width ${theme.animations.normal} ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: ${theme.fontSizes.xl};
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.xl};
  display: none;
  z-index: 100;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <NavContainer>
        <Logo>CK.dev</Logo>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
        <MenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
      </NavContainer>

      {mobileMenuOpen && (
        <MobileNavLinks
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <MobileNavLink href="#home" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
          <MobileNavLink href="#skills" onClick={toggleMobileMenu}>Skills</MobileNavLink>
          <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
          <MobileNavLink href="#experience" onClick={toggleMobileMenu}>Experience</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
        </MobileNavLinks>
      )}
    </HeaderContainer>
  );
};

export default Header;
