export default function AboutMe(){
  return (
    <>
    <p className="m-3 text-5xl flex justify-center">About Me 
    </p>
    <div className="m-3 border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-white">
      <div className="flex justify-center p-4">
        <img className="w-64 h-1/4 object-cover" src="/images/iloveit.png" alt="Title" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Title</h2>
        <p className="text-gray-600">Description</p>
      </div>
    </div>
    <MyWorks />
    <MyFooter />
    </>
  );
}

function MyWorks() {
  return (
   <div className="p-5 m-3 border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-white">
        <p className="text-5xl">My Works:</p>
        <table className="table-auto w-full mt-4">
        <thead>
        <tr>
        <th>Cover</th>
        <th>Name</th>
        <th>Subject</th>
        <th>Source</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
        <td>1961</td>
        </tr>
        <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
        <td>1961</td>
        </tr>
        <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
        <td>1961</td>
        </tr>
        </tbody>
        </table>
        </div>
  );
}

function MyFooter() {
  return (
        <footer className="p-5 m-3">
        <p className="text-center text-gray-600">© 2024 By Beritokai. All rights reserved.</p>
        </footer>
  );
}