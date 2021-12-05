import { useState, useEffect } from "react";
import { AddButtonComponent } from "./Components/atoms/addButton";
import { FormComponent } from "./Components/atoms/Form";
import { Todo } from "./Components/todo";
import { Typography } from "@material-ui/core";
import { db } from "./Config/firebase";
import { collection, getDocs } from "firebase/firestore";
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
      setTodos(data.docs.map(doc => ([doc.id ,"----",doc.data().todos])))
    }
    getTodos()
  }, [])






  const addTodosHandler = (event) => {
    //prevant from refreshing page on adding todos
    event.preventDefault();
    console.log("console1", input);
    // appending new data along with new data ...(spread operator)...concept
    setTodos([...todos, input]);
    // clear input field after adding todos in the list
    setInput("");
  };

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
    </div>
  );
}

export default App;
