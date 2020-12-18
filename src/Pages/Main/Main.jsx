import React, { Component } from 'react';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Intro from './Components/Intro/Intro';
import Features from './Components/Features/Features';
import Steps from './Components/Steps/Steps';
import Categories from './Components/Categories/Categories';
import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct';
import Reviews from './Components/Reviews/Reviews';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainHeader />
        <Intro />
        <Features />
        <Steps />
        <Categories />
        <FeaturedProduct />
        <Reviews />
      </div>
    );
  }
}

export default Main;
