import React from 'react'
import {Redirect, Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";

import Users from "./components/Users";
import Posts from "./components/Posts";
import User from "./components/User";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Comments from "./components/Comments";

import './App.css';

function App() {
  return (
    <>
    <div class="main-menu">
      <div class="menu">
      <li><NavLink exact to="/" activeClassName = {'secondActive'}>Main page</NavLink> <br/></li>
      <li> <NavLink to="/users">Users</NavLink> <br/></li>
      <li><NavLink to="/posts">Posts</NavLink><br/></li>
      <li> <NavLink to="/comments">Comments</NavLink></li>
      </div>
      </div>
      <div>
      <Switch>
          
          <Route path='/users/:id' component={User} />
          <Route path='/users' component={Users}/>
          <Route path='/posts/:id' component={Post} />
          <Route path='/posts/' component={Posts}/>
          <Route path='/comments/:id' component={Comment} />
          <Route path='/comments/' component={Comments}/>
          <Route exact path='/' render={() => <h1>Hello <br></br>Its maim page</h1>}/>
          </Switch>
      </div>

    </>
  );
}

export default App;
