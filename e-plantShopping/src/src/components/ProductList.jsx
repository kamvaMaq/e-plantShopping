import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';

const ProductList = ({ onHomeClick }) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bac?q=80&w=400&auto=format&fit=crop",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?q=80&w=400&auto=format&fit=crop",
          description: "Filters formaldehyde and xylene from indoor air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=400&auto=format&fit=crop",
          description: "Removes mold spores and purifies surroundings.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&auto=format&fit=crop",
          description: "Adds humidity and purifies air naturally.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=400&auto=format&fit=crop",
          description: "Easy to grow plant with broad striking leaves.",
          cost: "$22"
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=400&auto=format&fit=crop",
          description: "Soothes skin irritations while clearing toxins.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400&auto=format&fit=crop",
          description: "Calming scent that aids sleep and reduces anxiety.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=400&auto=format&fit=crop",
          description: "Sweet fragrance that boosts mood and relaxes minds.",
          cost: "$25"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=400&auto=format&fit=crop",
          description: "Invigorating aroma used frequently in cooking.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=400&auto=format&fit=crop",
          description: "Refreshing herbal scent, perfect for drinks.",
          cost: "$12"
        },
        {
          name: "Eucalyptus",
          image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=400&auto=format&fit=crop",
          description: "Clear respiratory scent with clean menthol notes.",
          cost: "$18"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400&auto=format&fit=crop",
          description: "Citrus fragrance that reduces stress naturally.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=400&auto=format&fit=crop",
          description: "Thrives on neglect and low light conditions.",
          cost: "$25"
        },
        {
          name: "Pothos",
          image: "https://images.unsplash.com/photo-1596724822852-16e6d1e4eb40?q=80&w=400&auto=format&fit=crop",
          description: "Fast-growing vine perfect for hanging baskets.",
          cost: "$14"
        },
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=400&auto=format&fit=crop",
          description: "Extremely resilient plant thriving in dim places.",
          cost: "$28"
        },
        {
          name: "Jade Plant",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=400&auto=format&fit=crop",
          description: "Succulent with thick leaves symbolic of good luck.",
          cost: "$16"
        },
        {
          name: "Succulent Trio",
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=400&auto=format&fit=crop",
          description: "Assorted low-water drought-tolerant succulents.",
          cost: "$18"
        },
        {
          name: "Chinese Evergreen",
          image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=400&auto=format&fit=crop",
          description: "Tolerates low light and irregular watering.",
          cost: "$22"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo" onClick={onHomeClick}>
          <h1>Paradise Nursery</h1>
        </div>
        <div className="nav-links">
          <button className="nav-link" onClick={onHomeClick}>Home</button>
          <button className="nav-link" onClick={() => setShowCart(false)}>Plants</button>
          <div className="cart-icon-container" onClick={() => setShowCart(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            <span className="cart-badge">{totalQuantity}</span>
          </div>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj, index) => (
            <div key={index}>
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-grid">
                {categoryObj.plants.map((plant, pIndex) => (
                  <div className="plant-card" key={pIndex}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-name">{plant.name}</div>
                    <p>{plant.description}</p>
                    <div className="plant-cost">{plant.cost}</div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isPlantInCart(plant.name)}
                    >
                      {isPlantInCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;