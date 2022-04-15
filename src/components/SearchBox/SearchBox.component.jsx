// import React, { Component } from 'react'
import './SearchBox.css'

const SearchBox = ({placeholder, onChangeHandler}) => {
  return (
    <input type='search' className='search-box' placeholder={placeholder} onChange={onChangeHandler}/>
  )
}

// class SearchBox extends Component {
//   render() {
//       const {placeholder, onChangeHandler} = this.props
//     return (
//         <input type='search' className='search-box' placeholder={placeholder} onChange={onChangeHandler}/>
//     )
//   }
// }

export default SearchBox