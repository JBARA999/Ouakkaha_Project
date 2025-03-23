import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          {product.price && (
            <p className="product-price">{product.price.toFixed(2)} MAD</p>
          )}
        </div>
        {product.price && (
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label="Ajouter au panier"
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
