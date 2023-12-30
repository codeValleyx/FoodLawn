import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <div className="bg-gray-200 text-gray-800 font-body leading-relaxed min-h-screen">
      <header className="text-center  text-yellow-50 py-12 bg-[url('../../public/bg.jpg')] bg-cover">
        <h1 className="text-4xl font-caveat font-extrabold mb-4">Welcome to Food Lawn</h1>
        <p className="text-lg">
          Order food from campus shops in advance and skip the queues!
        </p>
      </header>

      <section className="container mx-auto flex items-center justify-between my-8">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-lora font-bold mb-4">How it Works</h2>
          <p className="text-lg mb-4">
            Food Lawn makes your campus dining experience seamless and convenient. Here's how it works:
          </p>
          <ol className="list-decimal pl-6 text-lg mb-4">
            <li>
              <strong>Explore Menus:</strong> Browse through a variety of menus from campus eateries. Discover your favorite dishes and choose from a range of options.
            </li>
            <li>
              <strong>Place Orders in Advance:</strong> Select the items you want to order and place your request online. Plan your meals ahead of time to avoid waiting in long lines.
            </li>
            <li>
              <strong>Receive Notifications:</strong> Get real-time notifications about the status of your order. Know when your food is being prepared and when it's ready for pickup.
            </li>
            <li>
              <strong>Quick Pickup:</strong> Head to the shop's counter at your selected pickup time. Skip the queues and collect your delicious meal without any hassle.
            </li>
          </ol>
          <p className="text-lg">
            Experience a convenient way to enjoy your favorite campus foods without the wait. Start exploring the menus and place your order now!
          </p>
          <Link to="/menu" className="text-lg mt-4 underline hover:text-yellow-300">
            Explore Our Menu
          </Link>
        </div>
        <div className="w-1/2">
          <img
            src="food_delivery.jpg"  // Replace with an image related to food delivery or campus food
            alt="Food Delivery"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
