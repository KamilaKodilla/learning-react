import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
      <header className={styles.component}>
        <h2 className={styles.title}>I'm not a robot!</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>
      </header>
    );

export default Hero;
