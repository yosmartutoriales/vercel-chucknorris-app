import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getChuckNorris } from './store/slice/chucknorris/Index';

function App() {
  const [stateLoading, setStateLoading] = useState(false)
  const { dataChucknorris, loading } = useSelector((state) => state.chucknorris)
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getChuckNorris());
  }, [])

  const handNuevoChucknorris = () => {
    setStateLoading(true)
    dispatch(getChuckNorris());
    setTimeout(() => {
      setStateLoading(false)
    }, 600)

  }

  console.log(dataChucknorris);
  return (
    <div className="App">

      <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt="chucknorris.io"
        width="300px"
        className="animate__animated animate__jackInTheBox" />
      <header className="App-header">
        <div style={{ paddingBottom: 10, paddingTop: 10 }}>
          <button onClick={handNuevoChucknorris}>Nuevo {stateLoading ? 'isTrue' : 'isFalse'} </button>
        </div>

        {!loading && dataChucknorris ?
          <>
            <div className="DivGrid">
              {dataChucknorris && dataChucknorris.value}
            </div>
            <div style={{ paddingBottom: 10, paddingTop: 10 }}>
              <a href={dataChucknorris && dataChucknorris.url} target="_blank" style={{ fontSize: 18 }}>ver en chucknorris.io</a>
            </div>
          </> : "Loading..."}

      </header>

    </div>
  );
}

export default App;
