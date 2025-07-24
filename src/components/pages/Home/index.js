import Server from "../../../assets/images/server.jpg";
import GreekSalad from "../../../assets/images/greek-salad.jpg";
import Bruschetta from "../../../assets/images/bruschetta.jpg";
import LemonDessert from "../../../assets/images/lemon-dessert.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { Bike } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button onClick={() => navigate("/booking")} aria-label="On Click">
              Reserve a Table
            </button>
          </div>
          <div className="hero-image-container">
            <img src={Server} alt="Server picture" className="hero-image" />
          </div>
        </div>
      </section>
      <section className="highlights">
        <div className="container">
          <div className="header">
            <h2>This weeks specials!</h2>
            <button onClick={() => navigate("/menu")} aria-label="On Click">
              Online Menu
            </button>
          </div>
          <div className="cards">
            <div className="card">
              <img src={GreekSalad} alt="Greek Salad picture" />
              <div className="card-content">
                <div className="card-content-header">
                  <h3>Greek Salad</h3>
                  <span>$ 12.99</span>
                </div>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olivers and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <Link className="card-content-footer">
                  <span>Order a delivery</span>
                  <Bike size={24} />
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={Bruschetta} alt="Brucheta picture" />
              <div className="card-content">
                <div className="card-content-header">
                  <h3>Bruschetta</h3>
                  <span>$ 5.99</span>
                </div>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <Link className="card-content-footer">
                  <span>Order a delivery</span>
                  <Bike size={24} />
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={LemonDessert} alt="LemonDessert picture" />
              <div className="card-content">
                <div className="card-content-header">
                  <h3>Lemon Dessert</h3>
                  <span>$ 5.00</span>
                </div>
                <p>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <Link className="card-content-footer">
                  <span>Order a delivery</span>
                  <Bike size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
