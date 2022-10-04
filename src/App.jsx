import './App.css'
import CharacterSheet from './containers/CharacterSheet/CharacterSheet';
import Header from './containers/Header/Header'

function App() {
  return (
    <main className='container'>
      <Header />
      <CharacterSheet />
    </main>
  )
}

export default App