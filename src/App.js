import ComponentePadre from './components/ComponentePadre';
import ImagenCard1 from './components/ImagenCard1';
import ImagenCard2 from './components/ImagenCard2';
import ImagenCard3 from './components/ImagenCard3';
import bgGif from '../src/images/bd.gif'


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bgGif})`}}>
        <ComponentePadre>
           <ImagenCard1 />
           <ImagenCard2 />
           <ImagenCard3 />
        </ComponentePadre>
    </div>
  );
}

export default App;
