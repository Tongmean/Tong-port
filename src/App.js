import './App.css';
import Sidebar from './component/sideBar/Sidebar';
import About from './component/about/About';
import Techstack from './component/Tech-stack/Techstack';
import Project from './component/project/Project';
import WorkExperience from './component/workExerience/WorkExperience';
import Education from './component/education/Education';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import Navbarmobile from './component/sideBar/Navbarmobile';
import { createContext, useState} from 'react';

export const ThemeContext = createContext(null);


const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? ("dark"):("light")));
  }


  return (
    <ThemeContext.Provider value={{theme, changeTheme}} >
      <div id = {theme} className='zoom'>
        <Navbarmobile/>
        <Sidebar theme={theme} changeTheme={changeTheme} />
        <About/>
        <Techstack/>
        <Project/>
        <WorkExperience/>
        <Education/>
        <Testimonial/>
        <Contact/>
      </div>


      <ScrollToTop
        smooth = {true}
        width="25"
        color='black'
        height='20'
        top='25'
        style={{borderRadius:"90px", backgroundColor:'#white'}}
      />
    </ThemeContext.Provider>
  );
}

export default App;
