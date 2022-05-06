import './App.css'; 
import { useState } from 'react'; 
import { useEffect } from 'react'; 
import axios from "axios"; 
import Screen from './componets/Screen';  
import More from './componets/More';
import {BrowserRouter as Router,Route,Switch,useParams} from 'react-router-dom';

function App() { 
  const [posts,setposts] = useState([]);  
  const [search,setsearch] = useState(''); 
  let { id } = useParams
  useEffect(() =>{ 
    axios.get('https://v5.vbb.transport.rest/stops/nearby?latitude=52.52725&longitude=13.4123') 
      .then(res =>{ 
         console.log(res);  
         setposts(res.data)
      }) 
      .catch(err =>{ 
        console.log(err);
      })

  },[search]) 
  return ( 
    <Router>
    <Switch>   
    <Route exact path = "/">
      <div className="App">
        <h1>Berlin</h1> 
        <input type="text" value={search} onChange ={(e) =>{setsearch(e.target.value)}}></input>
        <Screen arr={posts} query={search} /> 
      </div> 
    </Route>
      <Route path="/More/:id">
          <More arr={posts}/>
      </Route>
    </Switch> 
    </Router>
  );
}

export default App;
