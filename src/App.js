import React, { Component } from 'react';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage.js';
import Post from './Main.js';
import FavoriteFood from './FavoriteFood.js';
import FavoriteMovie from './FavoriteMovie.js';
import About from './About.js';

var post = [{
  title: 'Dinos rule!',
  content: 'Wow. We are so neat',
  authors: ['T-Rex; King of Dinos', 'Baby T-Rex', 'Mama T-Rex'],
  comments: ['Eh, dinos are okay', 'Yeah, go dinos']
}, {
  title: 'So offended',
  content: 'I am from way, way longer ago than these young whipper-snapper dinos. Jurassic rules, cretaceous sucks!',
  authors: ['Stegasaurus'],
  comments: ['Cool it', 'Who cares, bro', 'Triassic or nothing!']
}];


class App extends Component {

  render(){
    return (
      <div>
        <Router>
          <div className='text-center'>
          <nav>
            <Link className='btn btn-info' to='/'>Home </Link> 
            <Link className='btn btn-info' to='/Main'>Posts</Link>
            {/*<Link className='btn btn-info' to='/FavoriteFood'>Food</Link>*/}
            <Link className='btn btn-info' to='/FavoriteMovie'>Mooooovie</Link>
            <Link className='btn btn-info' to='/About'>About </Link>
          </nav>  

            <Route exact path='/' component={ Homepage } />
            <Route path='/FavoriteFood' component= { FavoriteFood } />
            <Route path='/FavoriteMovie' component= { FavoriteMovie } />
            <Route path='/About' component= { About } />
            <Route path="/Main" component={() => (<Post post={post} />)}/>
            </div>
        </Router>
        <nav id='footer'>
            <a href='/'>Home </a> 
            <a href='/Main'>Posts</a>
            <a href='/FavoriteFood'>Food</a>
            <a href='/FavoriteMovie'>Mooooovie</a>
            <a href='/About'>About </a>
        </nav>
      </div>

      )
  }
}


export default App;
