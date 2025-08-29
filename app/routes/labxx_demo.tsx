import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function MyTermProject () {

  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  const [persons, setPersons] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [personId, setPersonId] = useState(0);

  // Lab07: useEffect
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(persons.length);
  }, [persons.length]);

  function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
  }

  function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]);
  
    return (
      <>
        <p className="box-border border-4 p-4">Count: {count}</p>
        <button className="w-10 bg-rose-600 text-white rounded-sm hover:bg-rose-700 p-2 m-1 text-center" onClick={() => setCount((c) => c + 1)}>+</button>
        <p className="box-border border-4 p-4">Calculation: {calculation}</p>
      </>
    );
  }

  const myPage = "Aj.Khaeg: Add a New Book";
  const myName = "Chumpol Mokarat";
  const myStudID = "095031072568-0";
  const myTermProj = [  // {} - Objects
    {
      tpId: 1,
      tpSubj: "Web Technology",
      tpDesc: "พัฒนาเว็บไซต์ xxx",
      tpCover: "/images/projs/TP01.png",
      tpUrl: "http://busitlab.rmutto.ac.th/~chumpol/0406105/week02/",
      tpTeam: true
    },
    {
      tpId: 2,
      tpSubj: "Computer Programming 1",
      tpDesc: "พัฒนาโปรแกรม xxx",
      tpCover: "/images/projs/TP01.png",
      tpUrl: "http://busitlab.rmutto.ac.th/~chumpol/0406105/week02/",
      tpTeam: false
    },
    {
      tpId: 3,
      tpSubj: "Computer Programming 2",
      tpDesc: "พัฒนาโปรแกรม xxx",
      tpCover: "/images/projs/TP01.png",
      tpUrl: "http://busitlab.rmutto.ac.th/~chumpol/0406105/week02/",
      tpTeam: true
    }
  ];

  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  let tpObj = myTermProj[index];

  // const handleView = function(e) {
  function handleView(index) {
  // const handleView = (index) => {
    alert("You clicked in the "+myTermProj[index].tpSubj+"!");
  }

  const personItems = persons.map((tpObj, index) =>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" key={index}>
        <img className="w-full h-auto object-cover" src={tpObj.artwork.image} title={tpObj.artwork.title+" (ID: "+tpObj.id+")"} />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{tpObj.name}</h2>
          <p className="text-gray-600 text-sm mt-2">{tpObj.artwork.city}</p>
          <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700" onClick={(e)=> editPerson(tpObj.id)}>[E] Edit</button>
          <button className="ml-2 mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={(e) => deletePerson(tpObj.id)}>[D] Delete</button>
        </div>
      </div>
  );

  function addPerson(e){
    setPersons([
      ...persons,
      { 
        id: nextId,
        name: person.name,
        artwork: {
          title: person.artwork.title,
          city: person.artwork.city,
          image: person.artwork.image,
        }
      }
    ]);
    setNextId(nextId+1);
  }

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  function resetForm() {
    setPerson({
      name: '',
      artwork: {
        title: '',
        city: '',
        image: '/images/iloveit.png',
      }
    });
    setPersonId(0);
  }

  function deletePerson(tmpId) {
    alert('To "Delete" a person id is '+tmpId+'.');
    setPersons(
      persons.filter(p =>
        p.id !== tmpId
      )
    );
  }

  function editPerson(tmpId) {
    const updatedItem = persons.filter(item =>
      item.id === tmpId
    );
    setPerson(updatedItem[0]);
    setPersonId(tmpId);
  }

  function updatePerson(tmpId) {
    const updatedPersons = persons.map(persTmp =>
      persTmp.id === tmpId ? 
      { 
        ...persTmp,
        name: person.name,
        artwork: {
          title: person.artwork.title,
          city: person.artwork.city,
          image: person.artwork.image,
        }
      } 
      : persTmp
    );
    setPersons(updatedPersons);
    resetForm();
    setPersonId(0);
    alert('To "Update" a person successfully.');
  }

  function PersonDashboard({n}){
    return (
      <div className="lg:w-1/4 md:w-1/2 sm:w-full grid grid-cols-1 m-4">
        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4 grid grid-cols-2 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div>
            <span className="sr-only">Info</span>
            <div className="text-center">
              <span className="text-7xl">{n}</span>
            </div>
            <div className="text-center">
              Number of persons
            </div>
          </div>
        </div>

        {/* <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
            </div>
          <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
            </div>
          <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
            </div>

          <div className="col-span-full bg-white rounded-lg shadow-md p-6">
            </div>
        </div>*/}
      </div> 
    );
  }

  return (
    <>
      <Header title={myPage} />
      <p className="text-large m-3 text-center text-gray-500">
        --<br />
        Name: {myName}<br />
        Student ID: {myStudID}<br />--
      </p>
      <div className="mx-auto flex justify-center">
        <PersonDashboard n={count} />
      </div>
      <div className="w-full mx-auto h-100 overflow-hide rounded-2xl flex justify-center">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
            <input
              value={person.name}
              onChange={handleNameChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
            <input
              value={person.artwork.title}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City:</label>
            <input
              value={person.artwork.city}
              onChange={handleCityChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image:</label>
            <input
              value={person.artwork.image}
              onChange={handleImageChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5 mx-auto w-full flex justify-center">
            { personId != 0 ?
              <button type="button" className="w-48 bg-orange-600 text-white rounded-sm hover:bg-orange-700 p-2 m-1 text-center" onClick={(e) => updatePerson(personId)}>
                [U] Update Person
              </button> :
              <button type="button" className="w-48 bg-blue-600 text-white rounded-sm hover:bg-blue-700 p-2 m-1 text-center" onClick={addPerson}>
                [A] Add Person
              </button>
            }
            <button type="button" className="w-48 bg-gray-600 text-white rounded-sm hover:bg-gray-700 p-2 m-1 text-center" onClick={resetForm}>
              [R] Reset
            </button>
          </div>
          <p>
            <i>{person.artwork.title}</i>
            {' by '}
            {person.name}
            <br />
            (located in {person.artwork.city})
          </p>
          <img 
            src={person.artwork.image} 
            alt={person.artwork.title}
          />
        </form>
      </div>
      <div className="w-1/2 mx-auto h-100 overflow-hide rounded-2xl flex justify-center">
        <Counter />
      </div>
      <div className="w-1/2 mx-auto h-100 overflow-hide rounded-2xl flex justify-center">
        <button className="w-48 bg-green-600 text-white rounded-sm hover:bg-green-700 p-2 m-1 text-center">
          <Timer />
        </button>
      </div>
      <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {personItems}
        </div>
      </div>
      <h3 className="w-1/2 mx-auto rounded-2xl flex justify-center"> 
        รายการ {index + 1} จาก {personItems.length}
      </h3>
     <div className="ps-5 pe-5 pt-1 pb-1 bg-amber-300 rounded w-16 flex justify-center m-3">
       <a href="/">Back</a>
     </div>
      <Footer title="© 2025 Beritokai. All Rights Reserved." />
    </>
  );
}
