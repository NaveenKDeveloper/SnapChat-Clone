import React ,{useEffect} from "react";
import Capture from "./Camera/Capture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from './Camera/Preview';
import Chats from './Chat/Chats'
import "./App.css";
import ChatView from './Chat/ChatView'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login'
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //logs in if already Signed in
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        
        {!user ? (
          <Login />
        ):(
        <div className="app__body">
          <div className="app__bodyBackground">
         <Switch>
          <Route exact path="/">
            <Capture />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route  path="/chats/view">
            <ChatView />
          </Route>
          <Route  path="/chats">
            <Chats />
          </Route>
          
            
          </Switch>
          </div>
        </div>
        )}
      </Router>
      
    </div>
  );
}

export default App;
