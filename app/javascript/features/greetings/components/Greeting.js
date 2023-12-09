// app/javascript/features/greetings/components/Greeting.js
import React from 'react';

const Greeting = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
