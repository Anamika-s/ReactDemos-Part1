import React from  'react';

class Car extends React.Component
{
   render()
   { 
     //return <h1> Hello from Class Component </h1>;
     return <h1> Hello : {this.props.name} </h1>
   }

}

export default Car; 