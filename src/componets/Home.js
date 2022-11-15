import React from 'react';
import './home.css';
import women from './Alex.jpg';

const Home = () => {
  return (
    <div className='content'>
      <div className='content-txt'>
        <h4> Hello My name is </h4>
        <h1>Kate <span>Middleton</span></h1>
        <h3>I am a <span> FullstackJs </span> developer </h3>

        <button className='favorite' type='submit'> Download CV </button>

      </div>
   
      <div className='contpic'><img className='women' src={women} alt="logophoto"/></div>
    </div>
  )
}

export default Home