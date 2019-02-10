import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import array from './data'


class App extends Component {
  render() {
    return (
      <StyleRoot>
      <Coverflow
        displayQuantityOfSide={3}
        navigation
        infiniteScroll
        enableHeading
        media={{
          '@media (max-width: 900px)': {
            width: '900px',
            height: '300px'
          },
          '@media (min-width: 900px)': {
            width: '960px',
            height: '600px'
          }
        }}
      >


{array.array.map(data => {
          return (
            
            <img src={'./images/'+ data.src} alt={data.firstName + ' ' + data.lastName}/>
          );
        })
      }
      </Coverflow>
    </StyleRoot>
    );
  }
}

export default App;
