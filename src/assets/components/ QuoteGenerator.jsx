// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function QuoteGenerator() {
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     async function fetchQuote() {
//       try {
//         const response = await axios.get("https://api.quotable.io/random", {
//           params: { tags: "reading" },
//         });
//         setQuote(response.data.content);
//       } catch (error) {
//         setQuote("“Books are a uniquely portable magic.” – Stephen King");
//       }
//     }
//     fetchQuote();
//   }, []);

//   return <div className="auth-subtitle">{quote}</div>;
// }

// export default QuoteGenerator;
