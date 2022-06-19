import './App.scss';
import Sale from './components/sale';
import data from './data/app.json'

function App() {
  return (
    <main>
      <Sale {...data.sale}/>
    </main>
  );
}

export default App;
