
import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title='Welcome to new blog';
  const likes=50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <h1>Liked {likes} times!</h1>
        <Home/>
      </div>
    </div>
  );
}

export default App;
