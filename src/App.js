import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from './components/CreateGame';
import Login from './components/Login';
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import GameDetails from './components/GameDetails';

import { useState } from 'react';

function App() {
  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  const router = (path) => {
    let pathNames = path.split('/');
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      '/home': <WelcomeWorld />,
      '/games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      '/create-game': <CreateGame />,
      '/login': <Login />,
      '/register': <Register />,
      '/details': <GameDetails id={argument} />
    };

    rootPath = '/' + rootPath;

    return routes[rootPath];
  };

  return (
    <div id="box">

      <Header
        navigationChangeHandler={navigationChangeHandler}
      />

      <main id="main-content">
        {router(page) || <ErrorPage>Some additional info</ErrorPage>}
      </main>
    </div>
  );
}

export default App;
