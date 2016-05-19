// import react
import React from 'react';

// create progress component class
class Progress extends React.Component {

  //render method
  render() {
    return(
      <div className='progress'>
        <span className='player__time-elapsed'>{this.props.elapsed}</span>
        <progress
          value={this.props.position}
          max='1'></progress>
        <span className='player__time-total'>{this.props.total}</span>
      </div>
    )
  }
}

//export progress
export default Progress
