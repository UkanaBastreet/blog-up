import "./App.css";
import { firebaseService } from "./firebase";

function App() {
  function addHandler() {
    // firebaseService.getItemsInPath("users").then(console.log);
    firebaseService.addItemInPath("posts", {
      title: "Front",
      body: "Blog up development  app",
    });
  }
  function getHandler() {
    // firebaseService.getItemsInPath("users").then(console.log);
    firebaseService.getAllItemsInPath("posts").then(console.log);
  }
  return (
    <div className="App">
      <header>
        <h2>Blog Up</h2>
      </header>
      <main>
        <section>app</section>
      </main>
      <button onClick={addHandler}>ADD</button>
      <button onClick={getHandler}>GET</button>
    </div>
  );
}

export default App;
