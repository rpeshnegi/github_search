import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navigation from './components/Navigation';
import Repositories from './components/Repositories';
import { getRepositories } from './store/repositories/actions';
import { debounce } from "lodash"

type Props = {}

const App: React.FC<Props> = () => {
  let dispatch = useDispatch();
  const [search, setSearch] = useState<string>('')

  const getData = debounce((value: string) => {
    dispatch(getRepositories(value));
  }, 300);

  useEffect(() => {
    search !== '' && getData(search)
    return () => {
      getData.cancel()
    }
  }, [search, getData]);

  return (
    <div className="App">
      <Navigation />
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <Repositories />
    </div>
  );
}

export default App;
