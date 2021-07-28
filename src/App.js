import Header from "./components/Header";
import Search from './components/Search';
import './App.css';
import RoomList from "./components/RoomList";

function App() {
  return (
  <div className="App">
  <div className="landing">
     <Header/>
       {/*<Search/>*/} 
       <RoomList />
   </div>
  
  </div>
  );
}

export default App;
