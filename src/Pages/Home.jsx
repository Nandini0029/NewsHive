// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Logo from "../assets/logo.png";

// function Home() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios.get("https://newshive-express-1.onrender.com/newsData?page=3").then((response) => {
//       setNews(response.data.data);
//       console.log(response.data.data);
//     });
//   }, []);

//   return (
//     <>
//     {news != null ?  
//     <div className="bg-white text-[#333333] min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-white py-6 px-8 flex justify-between items-center shadow-sm">
//         <div className="flex items-center space-x-6">
//           <img src={Logo} alt="Logo" className="h-10 w-50 object-contain" />
//         </div>
//         <nav>
//           <ul className="flex space-x-8 text-lg text-[#333333]">
//             <li className="hover:text-[#CC0000] cursor-pointer">Home</li>
//             <li className="hover:text-[#CC0000] cursor-pointer">World</li>
//             <li className="hover:text-[#CC0000] cursor-pointer">Politics</li>
//             <li className="hover:text-[#CC0000] cursor-pointer">Sports</li>
//           </ul>
//         </nav>
//       </header>

//       {/* Breaking News Ticker */}
//       <div className="bg-[#CC0000] py-2 overflow-hidden relative">
//         <motion.div
//           className="flex space-x-10 text-white font-semibold text-sm whitespace-nowrap"
//           animate={{ x: ["100%", `-${news.length * 150}px`] }} // Adjust width dynamically
//           transition={{ repeat: Infinity, duration: 15 * news.length / 5, ease: "linear" }} // Adjust duration dynamically
//           whileHover={{ animationPlayState: "paused" }} // Pause on hover
//         >
//           {news.map((item, index) => (
//             <span key={index} className="px-4">
//               <b>{item.title}</b>
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       {/* Main Content */}
//       <main className="p-6">
//         {news.length > 0 && (
//           <section className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-[#CC0000]">Top Story</h2>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E5E5]">
//               <img src={"https://newshive-express-1.onrender.com/images/"+ news[0].media.path} alt="News" className="w-full h-64 object-cover rounded-md" />
//               <h3 className="text-xl font-bold mt-4">{news[0].title}</h3>
//               <p className="mt-2 text-[#555555]">{news[0].description}</p>
//             </div>
//           </section>
//         )}

//         {/* News Grid */}
//         <section>
//           <h2 className="text-2xl font-bold mb-4 text-[#CC0000]">Latest News</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {news.slice(1, 7).map((article, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition border border-[#E5E5E5]">
//                 {article.urlToImage && <img src={"https://newshive-express-1.onrender.com/images/"+ article.media.path} alt="News" className="w-full h-40 object-cover rounded-md" />}
//                 <h3 className="text-lg font-bold mt-2">{article.title}</h3>
//                 <p className="text-sm mt-1 text-[#555555]">{article.content}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#CC0000] text-white text-center p-4 mt-8">
//         <p>&copy; 2025 NewsHub. All Rights Reserved.</p>
//       </footer>
//     </div>
//     : ""}
//     </>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.png";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("https://newshive-express-1.onrender.com/rndData?").then((response) => {
      setNews(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
    {news != null ?  
    <div className="bg-white text-[#333333] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white py-6 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-6">
          <img src={Logo} alt="Logo" className="h-10 w-50 object-contain" />
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg text-[#333333]">
            <li className="hover:text-[#CC0000] cursor-pointer">Home</li>
            <li className="hover:text-[#CC0000] cursor-pointer">Politics</li>
            <li className="hover:text-[#CC0000] cursor-pointer">Sports</li>
            {localStorage.getItem("user") != null ? <li className="hover:text-[#CC0000] cursor-pointer"><Link to={"/admin"}>Dashboard</Link></li> : <li className="hover:text-[#CC0000] cursor-pointer"><Link to={"/login"}>Login</Link></li>}
          </ul>
        </nav>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-[#CC0000] py-2 overflow-hidden relative">
        <motion.div
          className="flex space-x-10 text-white font-semibold text-sm whitespace-nowrap"
          animate={{ x: ["100%", `-${news.length * 150}px`] }} // Adjust width dynamically
          transition={{ repeat: Infinity, duration: 15 * news.length / 5, ease: "linear" }} // Adjust duration dynamically
          whileHover={{ animationPlayState: "paused" }} // Pause on hover
        >
          {news.map((item, index) => (
            <span key={index} className="px-4 flex items-center space-x-4">
              {item.media?.path && (
                <img
                  src={"https://newshive-express-1.onrender.com/images/"+ item.media.path}
                  alt="News Image"
                  className="w-12 h-12 object-cover rounded-full"
                />
              )}
              <b>{item.title}</b>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        {news.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#CC0000]">Top Story</h2>
            <Link to={`/news/${news[0]._id}`}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E5E5]">
                <img
                  src={"https://newshive-express-1.onrender.com/images/"+ news[0].media.path}
                  alt="News"
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-4">{news[0].title}</h3>
                <p className="mt-2 text-[#555555]">{news[0].description}</p>
              </div>
            </Link>
          </section>
        )}

        {/* News Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#CC0000]">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(1, 7).map((article, index) => (
              <Link to={`/news/${article._id}`} key={index}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition border border-[#E5E5E5]">
                  {article.urlToImage && (
                    <img
                      src={"https://newshive-express-1.onrender.com/images/"+ article.media.path}
                      alt="News"
                      className="w-full h-40 object-cover rounded-md"
                    />
                  )}
                  <h3 className="text-lg font-bold mt-2">{article.title}</h3>
                  <p className="text-sm mt-1 text-[#555555]">{article.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#CC0000] text-white text-center p-4 mt-8">
        <p>&copy; 2025 NewsHub. All Rights Reserved.</p>
      </footer>
    </div>
    : ""} 
    </>
  );
}

export default Home;
