import { useState, useEffect } from 'react';
import useCounter from '../hook/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter();

  return (
  <div>
    <Card>{counter}</Card>
  </div>);
};

export default ForwardCounter;
