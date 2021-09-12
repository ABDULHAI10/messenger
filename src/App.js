import './App.css';
import React, {useEffect, useState} from 'react';
import  { Button } from '@material-ui/core';
import Message from './Message';


function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([{username:'nadia',text:"i love you"},{username:"hai",text:"love you too"},{username:"mubi",text:"......"}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
  setUsername(prompt('apna naam batao bhai'))
  }, []);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) =>{
    event.preventDefault();
    setMessages([...messages,{username:username,text:input}])
    setInput('')

  }


  return (
    <div className="App">
      <h1>HI HAIIIIIIIII!!!</h1>
      <h2>welcome {username}!</h2>

      <form >
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <Button disabled={!input} type="submit" onClick={sendMessage} >send</Button>
      </form>
      


    {/* messeges display */}


    {
      messages.map(message => (
        <Message username={message.username} text={message.text}/>
        // <p>
        //   {message}
        // </p>
      ))
    }

    </div>
  );
}

export default App;
