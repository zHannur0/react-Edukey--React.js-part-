import './App.css';
import HeaderContainer from './components/Containers/HeaderContainer';
import MainContainer from './components/Containers/MainContainer';
import Footer from "./components/Layouts/Footer";
function App() {
  return (
    <div className='movieMania'>
     <HeaderContainer></HeaderContainer>
     <MainContainer></MainContainer>
     <Footer/>
    </div>
  );
}

export default App;
