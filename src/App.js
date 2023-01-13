import DropDownMenu from './components/medium/dropDownMenu';
import Slider from './components/medium/slider'
import header from '../src/img/header.jpg'
import footer from '../src/img/footer.jpg'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


function App() {
  return (
    <div className='body'>
      <header>
        <img src={header} />
      </header>
      <main>
        <div className='options'>
          <div className='option-block'>
            <h3 className='option-title'>Гравировка</h3>
            <FormControl>
              <Select
                sx={{
                  width: 200,
                  height: 40,
                }}
                variant="outlined"
              >
                <MenuItem value={'Отсутствует'}>Отсутствует</MenuItem>
                <MenuItem value={'Сюжеты'}>Сюжеты</MenuItem>
                <MenuItem value={'Инициалы'}>Инициалы</MenuItem>
                <MenuItem value={'Орнаменты'}>Орнаменты</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='option-block'>
            <h3 className='option-title'>Резьба по дереву</h3>
            <FormControl>
              <Select
                sx={{
                  width: 200,
                  height: 40,
                }}
                variant="outlined"
              >
                <MenuItem value={'Отсутствует'}>Отсутствует</MenuItem>
                <MenuItem value={'Сюжеты'}>Сюжеты</MenuItem>
                <MenuItem value={'Инициалы'}>Инициалы</MenuItem>
                <MenuItem value={'Орнаменты'}>Орнаменты</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='option-block'>
            <h3 className='option-title'>Надписи</h3>
            <FormControl>
              <Select
                sx={{
                  width: 200,
                  height: 40,
                }}
                variant="outlined"
              >
                <MenuItem value={'Отсутствует'}>Отсутствует</MenuItem>
                <MenuItem value={'Сюжеты'}>Сюжеты</MenuItem>
                <MenuItem value={'Инициалы'}>Инициалы</MenuItem>
                <MenuItem value={'Орнаменты'}>Орнаменты</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='option-block'>
            <h3 className='option-title'>Аксессуары</h3>
            <FormControl>
              <Select
                sx={{
                  width: 200,
                  height: 40,
                }}
                variant="outlined"
              >
                <MenuItem value={'Отсутствует'}>Отсутствует</MenuItem>
                <MenuItem value={'Сюжеты'}>Сюжеты</MenuItem>
                <MenuItem value={'Инициалы'}>Инициалы</MenuItem>
                <MenuItem value={'Орнаменты'}>Орнаменты</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </main>

      <footer>
        <img src={footer} />
      </footer>
    </div>
  );
}

export default App;
