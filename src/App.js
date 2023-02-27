import Products from "./pages/products";
import Users from "./pages/users";
// import Comments from "./pages/comments";
import Card from "./components/Card/card";

function App() {
  return (
    <div>
      <Products />
      <Users />
      <Card />
      {/* <Comments /> */}
    </div>
  );
}

export default App;
