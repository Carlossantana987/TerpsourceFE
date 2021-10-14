import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';

export default class SigPad extends Component{
  clear = () => {
    this.sigPad.clear()
  }
  render () {
    return (
    <div className="sigPad">
    <h2>Signature</h2>
      <div>
        <SignaturePad
          penColor='black' backgroundColor="white" canvasProps={{width:1000,height:150 , className: 'sigCanvas' }}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <span onClick={this.clear}>
          Clear
        </span>
      </div>
    </div>
    )
  }
}