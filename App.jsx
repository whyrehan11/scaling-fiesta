
import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import { restaurantData } from "./data/restaurants";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="bg-orange-100 p-4 text-center">
        <p className="text-sm font-semibold text-red-500">UP TO 20% OFF on every order</p>
        <p className="text-lg font-bold text-red-600">UP TO 50% OFF on first order</p>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📍</span>
          <span className="font-medium">Mumbai</span>
        </div>
        <input type="text" placeholder="Search for restaurants" className="w-full border rounded p-2" />
      </div>
      <div className="px-4 flex gap-3 mb-4">
        <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">Rating</button>
        <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">Fast Delivery</button>
      </div>
      <div className="px-4 pb-6 space-y-4">
        {restaurantData.map((res, i) => (
          <RestaurantCard key={i} data={res} />
        ))}
      </div>
    </div>
  );
}
