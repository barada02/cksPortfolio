import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Button from '../common/Button';
import { slideInLeft, slideInRight } from '../../animations/variants';
import { FaArrowRight } from 'react-icons/fa';
import ParticleBackground from '../common/ParticleBackground';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  width: 100%;
  z-index: 1;
`;

const Greeting = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 500;
`;

const NameContainer = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const AnimatedCharacter = styled(motion.span)`
  display: inline-block;
  font-size: ${theme.fontSizes['6xl']};
  font-weight: 700;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xl};
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(121, 40, 202, 0.15) 0%,
    rgba(121, 40, 202, 0.05) 30%,
    rgba(121, 40, 202, 0) 70%
  );
  z-index: 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    opacity: 0.5;
  }
`;

const HeroSection = () => {
  const initialText = "Hi, I am Kumar";
  const finalText = "Hi, I am Chandan Kumar";
  const controls = useAnimation();
  const [currentText, setCurrentText] = React.useState(initialText);
    const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    },
    disappear: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1, // Reverse stagger direction
        delayChildren: 1.5 // Wait before starting to disappear
      }
    },
    appear: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5 // Shorter delay before starting to appear
      }
    }
  };
  const child = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateY: 90 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    disappear: (index: number) => ({
      opacity: index < 9 ? 1 : 0, // Keep "Hi, I am " visible
      y: index < 9 ? 0 : 20,
      rotateY: index < 9 ? 0 : 90,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }),
    appear: (index: number) => ({
      opacity: index >= 9 ? 1 : 1, // Only animate new characters
      y: index >= 9 ? 0 : 0,
      rotateY: index >= 9 ? 0 : 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index >= 9 ? (index - 9) * 0.08 : 0 // Stagger only the new characters
      }
    })
  };
  useEffect(() => {
    const animationSequence = async () => {
      // First show the full text (Hi, I am Kumar)
      await controls.start("visible");

      // Wait for 1 second before starting reverse animation
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Then do the disappearing animation for "Kumar"
      await controls.start("disappear");
      
      // Wait for 1 second with just "Hi, I am" showing
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Change the text to the final version
      setCurrentText(finalText);
      
      // Wait a brief moment for React to update the DOM
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Use the appear variant for the new characters
      await controls.start("appear");
    };
    
    animationSequence();
  }, [controls, finalText]);
  
  return (
    <HeroContainer id="home">
      <BackgroundGradient />
      <ParticleBackground />
      <HeroContent>
        <Greeting
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          Welcome to my portfolio
        </Greeting>
        
        <NameContainer>
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {currentText.split('').map((char, index) => (
              <AnimatedCharacter
                key={index}
                custom={index} // Pass index as custom prop
                variants={child}
                style={{
                  color: index >= 9 ? theme.colors.primary : theme.colors.text,
                  display: char === ' ' ? 'inline-block' : 'inline-block',
                  width: char === ' ' ? '0.5em' : 'auto'
                }}
              >
                {char}
              </AnimatedCharacter>
            ))}
          </motion.div>
        </NameContainer>
        
        <Subtitle
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          I specialize in AI, ML, DL, and computer vision, with a particular focus on developing LLM-integrated applications. My expertise extends to building robust and scalable solutions using React, Flutter, Angular, MERN stack, and Firebase.
        </Subtitle>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Button
            as="a"
            href="#projects"
            primary
          >
            View My Work <FaArrowRight style={{ marginLeft: '8px' }} />
          </Button>
          <Button
            as="a"
            href="#contact"
            outlined
          >
            Contact Me
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
