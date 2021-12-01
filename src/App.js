import SearchResults from './components/SearchResults';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import './games.json';

function App() {

  const[data, setData] = useState([]);
  const inputRef = useRef(null);

useEffect(()=>{
  if (inputRef) inputRef.current.focus();
}, []);

const handleInputChange = (e)=>{
  e.preventDefault();
  const {value} = e.target;

  if (!value) {
    setData([]);
    return;
  }

  const url = './games.json';

  fetch(url)
    .then((response) => response. json())
    .then(({ data }) => setData(data));
  
};
console.log('Data', data);
  return (
    <div className="container">
     < form>
    < label htmlFor="search">Game Search</label>
    <input name="search" id="search" onChange={handleInputChange} ref={inputRef}/>
     </form>
     <SearchResults data={data}/>
    
    
    </div>
  );
}

export default App;
