import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.about_wrapper}>
      <span className={style.about}>Tokyo Stuff - №1 в Україні</span>

      <span className={style.tagline}>Знаємо як смачніше</span>
    </div>
  );
}

export default About;
