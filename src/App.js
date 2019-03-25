import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">The Clicky Game</h1>
          <p class="lead">Click on an image, but don't click an image more than once!</p>         
          <h1><span class="badge badge-primary">Score: 0</span><span class="badge badge-success"> High Score: 0</span></h1>          
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
          <img src="" alt="..." class="img-thumbnail"></img>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
