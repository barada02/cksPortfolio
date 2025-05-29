import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import ScrollToTop from './utils/ScrollToTop'

// Styled loading screen
const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
`

const LoadingContent = styled.div`
  text-align: center;
`

const LoadingText = styled.h2`
  background: linear-gradient(135deg, #7928CA 0%, #FF0080 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  margin-top: 1rem;
`

const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top: 4px solid #7928CA;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <GlobalStyles />
      
      {loading ? (
        <LoadingScreen style={{ opacity: loading ? 1 : 0 }}>
          <LoadingContent>
            <LoadingSpinner />
            <LoadingText>Chandan Kumar</LoadingText>
          </LoadingContent>
        </LoadingScreen>
      ) : (
        <>
          <ScrollToTop />
          <Header />
          <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </Layout>
          <Footer />
        </>
      )}
    </Router>
  )
}

export default App
