import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Resturant Yui</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quas fugit cupiditate nisi aut, reiciendis porro vel ipsam.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on the menu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>  
    {/* javascript mode in jsx and javascript in template literal */}
      <img src={pizzaObj.photoName} alt="focaccia pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span> 
        {/* conditionally setting text */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order openHour={openHour} />
        ) : (
          <p>
            We're closed now. See you between {openHour}:00 and {closedHour}:00!
          </p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  ); // using ternary to return 2 different components conditionally
}

function Order({ openHour }) {
  return (
    <div className="order">
      <p>We're open until {openHour}:00. Come visit us or order online!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
