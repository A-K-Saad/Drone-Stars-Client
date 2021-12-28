// import Ripple from "material-ripple-effects";
// import React, { useEffect, useState } from "react";

// const UpdateProduct = ({ productId }) => {
//   const ripple = new Ripple();
//   const [product, setProduct] = useState({});
//   const [name, setName] = useState(product.name);
//   const [battery, setBattery] = useState(product.battery);
//   const [price, setPrice] = useState(product.price);
//   const [quality, setQuality] = useState(product.quality);
//   const [description, setDescription] = useState(product.description);
//   const [whiteImage, setWhiteImage] = useState(product.white);
//   const [redImage, setRedImage] = useState(product.red);
//   const [blueImage, setBlueImage] = useState(product.blue);
//   const [yellowImage, setYellowImage] = useState(product.yellow);
//   const [greenImage, setGreenImage] = useState(product.green);

//   useEffect(() => {
//     fetch(`https://mysterious-falls-17889.herokuapp.com/drones/`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data.find((product) => product._id === productId));
//       });
//   }, []);

//   console.log(product);

//   return (
//     <>
//       <div className="absolute bg-gray-800 bg-opacity-50 w-full h-full z-50 top-0 bottom-0 left-0 right-0 flex items-center justify-center p-8 m-auto">
//         <div className="flex flex-col items-center bg-gray-100 w-full h-full rounded-xl overflow-auto m-auto p-5">
//           <form onSubmit={() => console.log("sajfkl")} className="m-auto p-7">
//             <div className="flex flex-col md:flex-row md:space-x-5">
//               <div>
//                 <label
//                   className="block text-sm font-bold mb-2 text-left"
//                   htmlFor="name"
//                 >
//                   Drone:
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="name"
//                   type="text"
//                   placeholder="Drone Name"
//                   required
//                   defaultValue={product.name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-bold mb-2" htmlFor="name">
//                   Battery:
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="battery"
//                   type="number"
//                   placeholder="Enter Battery Size"
//                   required
//                   defaultValue={product.battery}
//                   onChange={(e) => {
//                     if (e.target.value < 0) {
//                       e.target.value = 1;
//                     }
//                     setBattery(e.target.value);
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row md:space-x-5">
//               <div>
//                 <label
//                   className="block text-sm font-bold mb-2 mt-4"
//                   htmlFor="price"
//                 >
//                   Price:
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="price"
//                   type="number"
//                   placeholder="Enter Drone Price"
//                   min="1"
//                   defaultValue={product.price}
//                   onChange={(e) => {
//                     if (e.target.value < 0) {
//                       e.target.value = 1;
//                     }
//                     setPrice(e.target.value);
//                   }}
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-sm font-bold mb-2 mt-4"
//                   htmlFor="quality"
//                 >
//                   Quality:
//                 </label>
//                 <input
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="quality"
//                   type="number"
//                   defaultValue={product.quality}
//                   placeholder="Enter Drone Camera Quality"
//                   onChange={(e) => {
//                     if (e.target.value < 0) {
//                       e.target.value = 1;
//                     }
//                     setQuality(e.target.value);
//                   }}
//                 />
//               </div>
//             </div>

//             <label
//               className="block text-sm font-bold mb-2 mt-4"
//               htmlFor="description"
//             >
//               Description:
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="description"
//               type="text"
//               defaultValue={product.description}
//               placeholder="Enter Drone Description"
//               required
//               rows="4"
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateProduct;
