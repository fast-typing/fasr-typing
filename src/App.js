import Scene from './components/Babylon/Scene';
import Select from './components/select/Select';
import 'babylonjs-loaders';
import change_model from './components/Babylon/Scene'

function App() {
  const options = document.querySelectorAll('option')
  options.forEach(el => {
    el.addEventListener('click', change_model(`${el.value}`))
  })

  return (
    <div id='body'>
      <Scene></Scene>
      <main>
        {/* <button className='gun-name' onClick={() => change_model('spas12')}>DOA-56</button> */}
        <Select/>
        {/* <select>
          <option value={'ak47.glb'} className={'option'}>
            ak47
          </option>
          <option value={'m14.glb'} className={'option'}>
            m14
          </option>
        </select> */}
      </main>
    </div>
  );
}

export default App;
