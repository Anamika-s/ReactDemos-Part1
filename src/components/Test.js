import { render } from '@testing-library/react';
import React from 'react';

function Test1()
{ 
  return(
    <h1>Hello from Test1</h1> 
  );
}
function Test2()
{ 
  return(
      <h1>Hello from Test2</h1> 
  );
}
function Test3()
{ 
  return(
    <h1>Hello from Test3</h1> 
  );
}

export default Test1;
export {Test2,Test3};