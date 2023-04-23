import React, { Fragment } from 'react';
import './jsplayground.scss';
import SectionHeader from './SectionHeader';

export default function JSPlayground() {

  const title="Code Snippets";

  return (
    <Fragment><SectionHeader title={title}/>
  <div className="container" id="playground-section">
    <ol>
      <li>
      <a href="https://jsfiddle.net/soumitri/vnwmh4fa/65/" target="_blank">Filter Countries</a>
      <p>The user will be able to get auto-suggested results on typing partial country name on the input field</p>
      </li>
      <li>
        <a href="https://jsfiddle.net/soumitri/uaczLdre/248/" target="_blank">Bishop on Chessboard</a>
        <p>On hovering over a chessboard square, the bishop's probable moves will be highlighted</p>
      </li>
      <li>
        <a href="https://jsfiddle.net/soumitri/r5nyosvt/1/" target="_blank">Click the odd Color</a>
        <p>A game of grids where user wins everytime clicks on the odd box and moves on to next level</p>
      </li>
      <li>
        <a href="https://jsfiddle.net/soumitri/xu1v5sgy/126/" target="_blank">5 Star Rating</a>
        <p>User can provide rating by clicking on stars</p>
      </li>
    </ol>
    {/* <p className="headline">Javascript Playground</p>
    <div className="playground-container">
      <a href="https://jsfiddle.net/soumitri/vnwmh4fa/65/" target="_blank">Filter Countries</a>
      <a href="https://jsfiddle.net/soumitri/uaczLdre/248/" target="_blank">Bishop on Chessboard</a>
      <a href="https://jsfiddle.net/soumitri/r5nyosvt/1/" target="_blank">Click the odd Color</a>
      <a href="https://jsfiddle.net/soumitri/xu1v5sgy/126/" target="_blank">5 Star Rating</a>
    </div> */}
  </div>
  </Fragment>
  )
}
