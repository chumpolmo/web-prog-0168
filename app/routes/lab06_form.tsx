import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MyTermProject () {
  
  const myPage = "Aj.Khaeg Term Project";
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

  const tpSingle = myTermProj.filter(tpTmp => 
        tpTmp.tpTeam === true
  );

  // const handleView = function(e) {
  function handleView(index) {
  // const handleView = (index) => {
    alert("You clicked in the "+myTermProj[index].tpSubj+"!");
  }

  const termProj = tpSingle.map((tpObj, index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300" key={index}>
      <div className="w-32 p-1">
        <img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj.tpSubj+" (ID: "+tpObj.tpId+")"} />
      </div>
      <div className="p-4 col-span-3 mb-auto">
        <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubj}</h2>
        <p className="text-gray-600 text-sm mt-2">{tpObj.tpDesc}</p>
        <ItemTeam isTeam={tpObj.tpTeam} />
      </div>
      <div className="p-4 mb-auto">
        <a href="#" className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-7 py-2" onClick={(e) => handleView(index)}>View</a>
      </div>
    </div>
  );

  return (
    <>
      <Header title={myPage} />
      <p className="text-large m-3 text-center text-gray-500">
        --<br />
        Name: {myName}<br />
        Student ID: {myStudID}<br />--
      </p>
      <div className="w-1/2 mx-auto h-100 overflow-hide rounded-2xl flex justify-end">
        <button className="w-48 bg-green-600 text-white rounded-sm hover:bg-green-700 p-2 mb-1" onClick={(e) => handleView(index)}>Add New Data</button>
      </div>
      <div className="w-1/2 grid mx-auto h-100 overflow-hide rounded-2xl border border-gray-300">
        {termProj}
      </div>
      <Footer title="© 2025 Beritokai. All Rights Reserved." />
    </>
  );
}

function ItemTeam ({isTeam}){
  if(isTeam)
    return (<p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
    </p>); 
  return (<p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
  </p>);
}