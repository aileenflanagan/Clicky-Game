import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import cards from "./infoArray.json"
import ImageCard from './ImageCard';

let score = 0;
let highScore = 0;
// let arr1= [1,2,3,4,5,6]
var shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const gameOver= function(){
  if(score>highScore){
    console.log("h: ",highScore, " S: ",score)
    highScore=score;
    score=0;
  }
  else 
    score=0
}

const checkClicked = function (id, arr) {
  console.log("id: ", id);
  console.log("clicked arr: ", arr);

  if (arr.length > 0) {
    console.log("L: ",arr.length);
    for (let i=0; i< arr.length; i++) {
      // console.log(arr[i]);
    //   console.log(beenClicked);
      
    //if any element in the array is has been clicked
    if(arr[i]===id){
        console.log("been clicked");
        gameOver();
      }
      else 
      score++;
     }

  }
  else if(arr.length===0)
  score++;
}



class App extends Component {
  state = {
    cards: shuffle(cards),
    clickedCards: []
  }

  clickImg = id => {
    // console.log("clicked img: ", id);
    this.setState({
      cards: shuffle(cards),
      clickedCards: [...this.state.clickedCards, id]
    });

    // let checkClicked= function(id){
    //   if(this.state.clickedCards.length>0){
    //   for(let i in this.state.clickedCards.length){
    //     console.log("clicked card: ", this.state.clickedCards.length[i], "= id: ", id)
    //   }
    // } 
    // }
    // checkClicked(id);
    // console.log("length?", this.state.clickedCards.length)
    checkClicked(id, this.state.clickedCards);
  }

  // checkClicked= id=>{
  //   // console.log(id);
  //   console.log("clicked:", this.state.clickedCards)
  // }

  // 
  render() {

    // console.log("Clicked so far: " , this.state.clickedCards)
    // console.log(shuffle(arr1));

    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">The Clicky Game</h1>
            <p className="lead">Click on an image, but don't click an image more than once!</p>
            <h1><span className="badge badge-primary">Score: {score}</span><span className="badge badge-success"> High Score: {highScore}</span></h1>
          </div>
        </div>

        <div className="container">
          {this.state.cards.map(
            (card) => {
              return <ImageCard
                key={card.id}
                id={card.id}
                image={card.image}
                name={card.name}
                clickImg={this.clickImg}
              />

            }

          )}


        </div>
      </>
    );
  }
}

export default App;
