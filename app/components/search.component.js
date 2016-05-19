// Import React
import React from 'react';

// import react's autocomplete component
import Autocomplete from 'react-autocomplete';

// create search component class
class Search extends React.Component{

  handleRenderItem(item, isHighlighted){
    // some style
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    };

    return(
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
        key={item.id}
        id={item.id}
      >{item.title}</div>
    )
  }

  render() {
    // return jsx via render()
    return(
      <div className='search'>
        {/*Autocomplete usae with value and behavior handled via this.props*/}
        <Autocomplete
          ref='autocomplete'
          inputProps={{title: "Title"}}
          value={this.props.autoCompleteValue}
          items={this.props.tracks}
          getItemValue={(item) => item.title}
          onSelect={this.props.handleSelect}
          onChange={this.props.handleChange}
          renderItem={this.handleRenderItem.bind(this)}
        />
      </div>
    );
  }

}

// export search
export default Search
