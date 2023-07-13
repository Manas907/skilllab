// Menu.js

import React from 'react';

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <ul>
        <li>
          <h3>Burger</h3>
          <p>A juicy burger with all your favorite toppings.</p>
        </li>
        <li>
          <h3>Pizza</h3>
          <p>A cheesy pizza with a variety of delicious toppings.</p>
        </li>
        <li>
          <h3>Pasta</h3>
          <p>Delicious pasta dishes with different sauces to choose from.</p>
        </li>
        {/* Add more menu items */}
      </ul>
    </div>
  );
}

export default Menu;

