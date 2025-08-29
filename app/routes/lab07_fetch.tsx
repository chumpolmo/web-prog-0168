import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/books.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <button type="button" className="bg-indigo-500" disabled>
        <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
        </svg>
        กำลังโหลดข้อมูล...
        </button>
     </div>);
  }

  if (error) {
    return (<div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
      <span className="font-medium">Warning alert!</span> เกิดข้อผิดพลาด: {error}
    </div>);
  }

  return (
    <div>
      <Header title="รายการหนังสือ" />
      <div className="flex justify-center">
        {products.map(book => (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-4 ml-2 p-3" key={book.bookId}>
          <img className="object-cover w-1/4 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={book.bookCover} alt={book.bookTitle} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookDesc}</p>
          </div>
        </div>
        ))}
        </div>
        <div className="ps-5 pe-5 pt-1 pb-1 bg-amber-300 rounded w-16 flex justify-center m-3">
       <a href="/labxx_demo">Back</a>
     </div>
        <Footer title="© 2025 Beritokai. All Rights Reserved." />
    </div>
  );
}

export default ProductList;