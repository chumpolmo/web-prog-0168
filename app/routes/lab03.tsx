// Filename: lab03.tsx
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function MyProfile(){
   return (
   <>
     <Profile />
     <h2 className="text-xl text-center text-red-900 font-bold m-5">Contact</h2>
     <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        <Contact 
          label="Aj.Khaeg FB." 
          link="https://www.facebook.com/khaegty" 
          icon="/images/facebook.png"
        />
        <Contact 
          label="Beritokai IG."
          link="https://www.instagram.com"
          icon="/images/instagram.png"
        />
        <Contact 
          label="Beritokai Tiktok"
          link="https://www.tiktok.com"
          icon="/images/tiktok.png"
        />
        </div>
     </div>
     <div className="ps-5 pe-5 pt-1 pb-1 bg-amber-300 rounded w-16 flex justify-center m-3">
       <a href="/">Back</a>
     </div>
     <Footer title="© 2025 Beritokai. All Rights Reserved." />
   </>
   );
}