import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const engr = [
    {
        text: 'Отсутствует',
        value: 'Отсутствует',
    },
    {
        text: 'Сюжеты',
        value: 'Сюжеты',
    },
    {
        text: 'Инициалы',
        value: 'Инициалы',
    },
    {
        text: 'Орнаменты',
        value: 'Орнаменты',
    },
]

const models = [
    {
        text: 'ak-47',
        value: 'ak47.glb',
    },
    {
        text: 'm-14',
        value: 'm14.glb',
    },
    {
        text: 'awp',
        value: 'rifle.glb',
    },
    {
        text: 'spas-12',
        value: 'spas12.glb',
    },
]

function Select() {
    return (
        <div className='select-container'>
            <div className='select-block'>
                <h3 className='title'> Гравировка </h3>
                <Dropdown selection options={engr} className={'dropdown'} />
            </div>
            <div className='select-block'>
                <h3 className='title'> Резьба по дереву </h3>
                <Dropdown selection options={engr} className={'dropdown'} />
            </div>
            <div className='select-block'>
                <h3 className='title'> Надписи </h3>
                <Dropdown selection options={engr} className={'dropdown'} />
            </div>
            <div className='select-block'>
                <h3 className='title'> Аксессуары </h3>
                <Dropdown additionPosition='bottom' selection options={engr} className={'dropdown'} />
            </div>
        </div>
    );
}

export default Select
