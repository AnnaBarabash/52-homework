import React from 'react';

import Button from './Button';
import Title from './Title';
import Text from './Text';


export default function App() {
  return (
    <div className='container' id='root'>
      <Title>Homework</Title>
      <h1>My first React homework</h1>
      <Text />
      <Button />
    </div>
  );
}