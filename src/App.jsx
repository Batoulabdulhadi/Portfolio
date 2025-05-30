import { Route, Routes } from 'react-router-dom'
import Main from './assets/Pages/Main'
import Footer from './components/Footer/Footer'
import Projects from './assets/Pages/Projects'
import { ThemeContext } from './context/ThemeContext'; 
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/project/:id' element={<Projects/>}/>
      </Routes>
      <Footer 
        yourName="Batoul" 
        facebookUrl="https://www.facebook.com/profile.php?id=100016395727192"  
        twitterUrl="https://x.com/BatoulB26067" 
        linkedinUrl="https://www.linkedin.com/in/batoul-abdulhadi-4595592ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        instaUrl="https://www.instagram.com/batoul_abdulhadi?igsh=MTFmdW5rb3JlcXRnNg=="
      />
    </ThemeContext.Provider>
  )
}

export default App
