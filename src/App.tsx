import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { debounce } from 'lodash';
import Navigation from './components/Navigation';
import Repositories from './components/Repositories';
import { getRepositories } from './store/repositories/actions';

type Props = {}
const searchCharLenth = 2;

const App: React.FC<Props> = function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  const getData = debounce((value: string) => {
    dispatch(getRepositories(value));
  }, 300);

  useEffect(() => {
    if (search.length > searchCharLenth) getData(search);
    return () => {
      getData.cancel();
    };
  }, [search, getData]);

  return (
    <div className="App">
      <Navigation />
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <Repositories />
    </div>
  );
};

export default App;
