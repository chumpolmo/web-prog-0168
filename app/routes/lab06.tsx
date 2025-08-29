import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function MyTermProject () {
  
   const [book, setBook] = useState({
    bookTitle: "Web Programming",
    bookDesc: "พัฒนาด้วย React & Tailwind CSS",
    bookPrice: 199,
    bookAuthor: "Beritokai",
    bookCover: "/images/bookdefault.png"
   });
   const [nextId, setNextId] = useState(0);
   const [books, setBooks] = useState([]);

  // Student Information
  const myPage = "Aj.Khaeg Term Project";
  const myName = "Chumpol Mokarat";
  const myStudID = "095031072568-0";

  const addBook = (e) => {
    setBooks([
      ...books,
      {
        id: nextId,
        bookTitle: book.bookTitle,
        bookDesc: book.bookDesc,
        bookPrice: book.bookPrice,
        bookAuthor: book.bookAuthor,
        bookCover: book.bookCover
      }
    ]);
    setNextId(nextId+1);
  }

  const bookItems = books.map((bObj, index) => 
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={bObj.bookCover} title={bObj.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bObj.bookTitle}</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bObj.bookDesc}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              [D] Delete
              </a>
            </div>
          </div>
  );

  const handleTitleChange = (e) => {
    setBook({
      ...book,
      bookTitle: e.target.value
    });
  }

  const handleDescChange = (e) => {
    setBook({
      ...book,
      bookDesc: e.target.value
    });
  }

  const handlePriceChange = (e) => {
    setBook({
      ...book,
      bookPrice: e.target.value
    });
  }

  const handleCoverChange = (e) => {
    setBook({
      ...book,
      bookCover: e.target.value
    });
  }

  const handleAuthorChange = (e) => {
    setBook({
      ...book,
      bookAuthor: e.target.value
    });
  }

  const resetForm = (e) => {
    setBook({
      bookTitle: "", bookDesc: "", bookCover: "", bookPrice: 0.0, bookAuthor: ""
    });
  }

  return (
    <>
      <Header title={myPage} />
      <p className="text-large m-3 text-center text-gray-500">
        --<br />
        Name: {myName}<br />
        Student ID: {myStudID}<br />
        --
      </p>

      <div className="flex justify-center w-full overflow-hide grid grid-cols-2 gap-2">
        <div>
        <form className="mx-auto">
          <h5 className="ml-2 border-l-8 border-red-700 p-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white bg-red-100">
            เพิ่มหนังสือใหม่
          </h5>
          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อหนังสือ (Title):</label>
            <input
              value={book.bookTitle}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียด (Description):</label>
            <input
              value={book.bookDesc}
              onChange={handleDescChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา (Price):</label>
            <input
              value={book.bookPrice}
              onChange={handlePriceChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาพหน้าปก (Cover Photo):</label>
            <input
              value={book.bookCover}
              onChange={handleCoverChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้เขียน (Author):</label>
            <input
              value={book.bookAuthor}
              onChange={handleAuthorChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="m-5">
            <button 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={addBook}>
              Add New Book
            </button>
            <button 
              type="button" 
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              onClick={resetForm}
            >
              Clear
            </button>
          </div>
        </form>
        </div>
        <div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={book.bookCover} title={book.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle} ({book.bookPrice} THB)
              </h5>
             </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {book.bookDesc}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ผู้แต่ง (Author): {book.bookAuthor}
              </p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h5 className="ml-2 border-l-8 border-red-700 p-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white bg-red-100">
        รายการหนังสือใหม่
      </h5>
      <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {bookItems}
        </div>
      </div>

      <Footer title="© 2025 Beritokai. All Rights Reserved." />
    </>
  );
}
