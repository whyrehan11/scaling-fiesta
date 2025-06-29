
import React from "react";

export default function RestaurantCard({ data }) {
  return (
    <div className="flex gap-4 items-start border-b pb-4">
      <img src={data.image} alt={data.name} className="w-20 h-20 rounded object-cover" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{data.name}</h3>
          <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded">{data.tag}</span>
        </div>
        <div className="text-sm text-gray-600">⭐ {data.rating} • {data.cuisine}</div>
        <div className="text-sm text-gray-600">{data.deliveryTime} • {data.discount}</div>
      </div>
    </div>
  );
}
