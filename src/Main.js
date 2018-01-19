import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      moodPoints: 1
    }
  }
  increaseMood(e){
    this.state.moodPoints <=9 ? this.setState({ moodPoints: this.state.moodPoints +1 }):this.setState({ moodPoints: 1 })
  }
  render() {
    const myPosts = this.props.post.map(p => {
      return <div key={p.title}>
              <h1 className="Title">{p.title}</h1>
              <Author authors={p.authors} />
              <p className="Post-intro">
                {p.content}
              </p>
              <h2>Comments</h2>
              <Comment comments={p.comments} />
              <hr />
            </div>
    });
    return (
      <div className="Post">
        <header className="Post-header">
          <img src="../dino_logo.png" className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        <h3>One a scale of 1-10 this is how I feel</h3>
        <p>Current Mood: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e) }></button>
        {myPosts}
      </div>
    );
  }
}





export default Post;
