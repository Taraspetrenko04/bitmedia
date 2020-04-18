import React from 'react';
import './style.scss';


export default function Footer() {
    return(
        <footer className='footer'>
            <form className='footer__form'>
                <input className='footer__input' placeholder='Enter your email'></input>
                <button className='footer__button'>Subscribe</button>
            </form>
            <div className='footer__container'>
                <p className='footer__slogan'>AppCo</p>
                <p className='footer__text footer__spacing'>All rights reserved by ThemeTags </p>
                <p className='footer__text'>Copyrights © 2019.</p>
            </div>
        </footer>
    )
}