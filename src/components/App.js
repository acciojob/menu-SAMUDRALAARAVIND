import React, { useState } from "react";
import "./menu.css"

const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

let filters = new Set(["All", ...menu.map(item => item.category)]);
filters = [...filters]

function App() {

  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div className="filters">
        {
          [
            { type: "all", id: "all", data_test_id: "menu-item-all" },
            {
              type: "breakfast",
              id: "filter-btn-1",
              data_test_id: "menu-item-breakfast",
            },
            { type: "lunch", id: "filter-btn-2", data_test_id: "menu-item-lunch" },
            { type: "shakes", id: "filter-btn-3", data_test_id: "menu-item-shakes" },
          ].map((filter, index) => (
            <span
              key={filter.id}
              data-test-id={filter.data_test_id}
              className={filter.type == selectedFilter ? "active" : ''}
              onClick={() => setSelectedFilter(filter.type)}
              id={filter.id}
            >{filter.type}</span>
          ))
        }
      </div>
      <div className="list">
        {
          menu.filter(item => item.category === selectedFilter || selectedFilter === "all").map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={item.img} />
                <div>
                  <div className="top">
                    <b>{item.title}</b>
                    <span>$ {item.price}</span>
                  </div>
                  <p className="description">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;