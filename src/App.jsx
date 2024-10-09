import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPageComp from './components/MainPageComp';

function App() {
  return (
    <>
			<div className="wrapper">
				<Header></Header>
				<MainPageComp></MainPageComp>
			</div>
			<hr />
			<div className="wrapper">
				<Footer></Footer>
			</div>
		</>
  );
}

export default App;
