import  { useState, useEffect } from 'react';
import Cardlist from './components/card-list/cardlist.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const[monsters, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonster(users));
  },[])

  useEffect(() => {
    setFilteredMonster(monsters.filter(monster => {

      return monster.name.toLowerCase().includes(searchField)
    }))

  
  }, [searchField, monsters])


  const handleChange = (e) => {
    const searchText = e.target.value.toLowerCase()
    
    setSearchField(searchText);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox className="monster-search-box" placeholder='search monster' handleChange={handleChange}/>

      <Cardlist monsters={filteredMonster}/>
    </div>
  )

}


export default App;