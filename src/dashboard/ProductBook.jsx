import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductBook = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-books"); // Используем реальный URL
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-700 text-lg">Загрузка...</p>;
  if (error) return <p className="text-center text-red-600 text-lg">{error}</p>;

  return (
    <div className="bg-teal-100 min-h-screen px-4 lg:px-24 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full mx-auto">
        <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
          Our Product Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
              <img
                src={product.imageURL}
                alt={product.productTitle}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800 mb-2">{product.productTitle}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p
                className="text-gray-700 text-md mb-4 line-clamp-4"
                style={{
                  WebkitLineClamp: 4,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.productDescription}
              </p>
              <a
                href={product.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg text-lg font-medium hover:bg-black transition duration-300"
              >
                View Product
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBook;
