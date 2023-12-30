import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StartScreen } from './pages/StartScreen/StartScreen';
import { Paths } from './consts';
import { GameScreen } from './pages/GameScreen/GameScreen';
import { ResultsScreen } from './pages/ResultsScreen/ResultsScreen';

function App() {

	return (
		<Routes>
			<Route path={Paths.Start} element={<StartScreen />}></Route>
			<Route path={Paths.Game} element={<GameScreen />}></Route>
			<Route path={Paths.Results} element={<ResultsScreen />}></Route>
		</Routes>
	);
}

export default App;
