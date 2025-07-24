export default function Profile(){
  return (
  <>
    <h1 className="text-2xl text-neutral-50 text-center bg-red-900 font-bold">Profile</h1>
    <div className="p-10 bg-red-50 rounded">
        <img src="/images/iloveit.png" className="rounded-full w-32 shadow-lg border-4 border-neutral-100 mx-auto" />
        <h2 className="text-xl text-center text-red-900 font-bold m-5">About Me</h2>
        <p className="text-center text-gray-700 border-2 rounded w-1/2 mx-auto p-5">---<br />
        <span className="font-bold">Name:</span> Chumpol Mokarat<br />
        <span className="font-bold">Office:</span> Information Technology Major #BUSIT #RMUTTO<br />
        <span className="font-bold">Address:</span> Klong Luang, Klong 2, Pathumthani, Thailand<br />---</p>
    </div>
  </>
  );
}