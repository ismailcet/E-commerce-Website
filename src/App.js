import SHOP_DATA from "./shop_data";

function App() {
  console.log(SHOP_DATA);
  return (
    <div className="App">
      deneme
      {SHOP_DATA.map((cat) =>
        cat.items.map((item) => (
          <img src={require(`${item.header_img}`)} alt="" />
        ))
      )}
    </div>
  );
}

export default App;
