// import react
import React from 'react';

class Details extends React.Component {
  // render
  render(){
    return(
      <div className='details'>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

// export
export default Details
