// import {Component} from 'react'
import {useState, useEffect} from 'react';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import './App.css';

const App = () => {

  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then((users) => setMonsters(users)) 
      }, [])

 

  const searchHandler = (event) => {
    const searchInput = event.target.value.toLowerCase()
     setSearchString(searchInput);
  }

  const filteredMonsters = monsters.filter(monster => (
            monster.name.toLowerCase().includes(searchString)
         ))

  return(
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={searchHandler} placeholder={'search monsters'}/>
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: ''   
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       }))
//   }

//   searchHandler = (event) => {
//     const searchInput = event.target.value.toLowerCase()
//     this.setState(() => {
//       return {searchString: searchInput}
//     })
//   }

  
  
//   render() {
//     const {monsters, searchString} = this.state
//     const {searchHandler} = this

//     const filteredMonsters = monsters.filter(monster => (
//        monster.name.toLowerCase().includes(searchString)
//     ))

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={searchHandler} placeholder={'search monsters'}/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
