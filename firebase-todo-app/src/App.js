import { useState, useEffect } from "react";
import { AddButtonComponent} from "./Components/atoms/addTodos";
import {   UpdateButtonComponent } from "./Components/atoms/updateTodos";
import {  RemoveButtonComponent } from "./Components/atoms/removeTodos";
import { FormComponent } from "./Components/atoms/Form";
import { Todo } from "./Components/todo";
import { Typography } from "@material-ui/core";
import { db } from "./Config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "./App.css";


function App() {
  //setting shorttime memory for react-state , 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const todosCollectionRef = collection(db, "todos");
  console.log(todosCollectionRef, "abcd")

  useEffect(() => {
    // gets called when app loads | page renders
    const getTodos = async () => {

      // getDocs return all documents from specfic collections
      const data = await getDocs(todosCollectionRef)
      // fetching data with id 
      setTodos(data.docs.map(doc => ([doc.id, "----", doc.data().todos])))
    }
    getTodos()
  }, [])



  const addTodosHandler = async (event) => {
    event.preventDefault();
    console.log("console1", input);
    // appending new data along with new data ...(spread operator)...concept
    // setTodos([...todos, input]);
    // adding value to doc-collection
    await addDoc(todosCollectionRef, { 
      todos: input,
      // timestamp:Firebase.firestore.FieldValue.serverTimestamp()
     })
    setInput("");
  };


  const updateTodos = async (id) => {

  }
  return (
    <div className="App">
      <Typography>React-App -- 🤖 </Typography>
      <FormComponent input={input} setInput={setInput} />

      <ul>
        {/* map array todos with every element todo */}
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
      <AddButtonComponent addTodosHandler={addTodosHandler} input={input} />
      <br/>
      <UpdateButtonComponent updateTodos={updateTodos} />
      <br/>

      <RemoveButtonComponent />
    </div>
  );
}

export default App;
