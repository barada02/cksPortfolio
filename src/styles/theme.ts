// Theme configuration
export const theme = {
  colors: {
    background: '#121212',
    backgroundSecondary: '#1E1E1E',
    primary: '#7928CA',
    secondary: '#FF0080',
    accent: '#4D9DE0',
    text: '#E0E0E0',
    textSecondary: '#B0B0B0',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #7928CA 0%, #FF0080 100%)',
    secondary: 'linear-gradient(135deg, #4D9DE0 0%, #7928CA 100%)',
    dark: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    code: "'Fira Code', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
  animations: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  }
};
