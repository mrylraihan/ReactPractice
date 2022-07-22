import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateOne from './components/CreateOne';
import ShowAllData from './components/ShowAllData';
import ShowSingle from './components/ShowSingle';
import useFetch from './hooks/use-fetch';


function App() {
  const [data, setData] = useFetch()//or i can just do this either way it doesnt matter

  // const list = useFetch()
  // const [data, setData] = useState('')

  // useEffect(()=>{
  //   setData([...list])
  // },[list])

  return (
<Router>
<>
    <div className="app">
      <h1>Hi there!</h1>
      <ol>
            <Link to='/createOne'><li>create a todo</li></Link>
            <Link to='/showAllTodos'><li>see all todos</li></Link>
      </ol>
    </div>
    <Routes>
    <Route path={'/showAllTodos'} element={<ShowAllData data={data}/>}/>
    <Route path={`/showOne/:id`} element={<ShowSingle data={data} setData={setData} />}/>
          <Route path={'/createOne'} element={<CreateOne length={data.length} addTask={setData}/>}/>
  </Routes>
</>
</Router>
  );
}

export default App;
