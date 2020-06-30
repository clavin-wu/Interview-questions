import React, { Component } from 'react';
import './index.css';

import PictureSelect from '../PictureSelect'

class Interview extends Component {
  constructor(props) {
     super(props)
     this.state={
       value:[],
       pictures: [
         {
           id: '1',
           name: 'foo',
           status: false,
           url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
         },
         {
           id: '2',
           name: 'foo',
           status: false,
           url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
         },
         {
           id: '3',
           name: 'foo',
           status: false,
           url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
         },
       ]
      }
  }
  render() {
    let { pictures, value } = this.state
    return (
     <div>
        <PictureSelect pictures={pictures} value={value} onChange={(value) =>{this.clickChangValue(value)}}  />
     </div>
    );
  }

  clickChangValue (value) {
    console.log(value,'触发了')
    this.setState({value})
  }
}

export default Interview;
