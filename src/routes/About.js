import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about__card">
            <h2 className="about__title">О проекте</h2>
            <p className="about__text">Первый учебный проект с использованием фреймворка React.js. Вся информация о фильмах получена по API с сайта yts.mx.</p>
        </div>
    );
}

export default About;