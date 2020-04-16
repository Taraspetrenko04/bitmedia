import React from 'react';
import './style.scss';
import mobile from '../../img/mobile.png'


export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <img className='header__phone' src={mobile} alt={mobile}></img>
                <h1 className='header__app'>AppCo</h1>
                <h2 className='header__slogan'><span className='text-bold'>Brainstorming</span> for desired perfect Usability</h2>
                <p className='header__text'>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                <button className='header__button'>View Stats</button>
            </div>
        </header>
    )
}