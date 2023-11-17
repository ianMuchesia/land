// import axios from "axios";
// import { showNotification } from "../Features/uiSlice";
// import { AppDispatch } from "../store";
// import { addItem, createWishlist, removeItem } from "../Features/wishlistSlice";
// import { typeProperties } from "@/@types/@types";



// export const sendWishlistData = (property: typeProperties) => {
//   return (dispatch: AppDispatch) => {
//     dispatch(
//       showNotification({
//         open: true,
//         message: "Sending Request",
//         type: "warning",
//       })
//     );

//     const sendRequestData = async () => {
//       try {
//         const { data } = await axios.post(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wishlist`,
//           { property: property._id },
//           { withCredentials: true }
//         );

//         if (!data.success) {
//         }
//         dispatch(
//           showNotification({
//             open: true,
//             message: "Added Successfully",
//             type: "success",
//           })
//         );
//         dispatch(addItem(property));
//       } catch (error) {
//         dispatch(
//           showNotification({
//             open: true,
//             message: "Sending Request Failed",
//             type: "error",
//           })
//         );
//       }
//     };

//     sendRequestData();
//   };
// };



// export const removeWishlistData = (property: typeProperties) => {
//     return (dispatch: AppDispatch) => {
//       dispatch(
//         showNotification({
//           open: true,
//           message: "Sending Request",
//           type: "warning",
//         })
//       );
  
//       const sendRequestData = async () => {
//         try {
//             const response = await axios.delete(
//                 `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wishlist/${property._id}`,
//                 {
//                   withCredentials: true,
//                   // Other optional configuration options
//                 }
//               );
              
//               const data = response.data;
            
              
//           if (!data.success) {
//           }
//           dispatch(
//             showNotification({
//               open: true,
//               message: "Deleted Successfully",
//               type: "success",
//             })
//           );
//           dispatch(removeItem(property));
//         } catch (error) {
//           dispatch(
//             showNotification({
//               open: true,
//               message: "Sending Request Failed",
//               type: "error",
//             })
//           );
//         }
//       };
  
//       sendRequestData();
//     };
//   };


//   export const fetchWishlistData = () => {
//     return (dispatch: AppDispatch) => {
//       dispatch(
//         showNotification({
//           open: true,
//           message: "Sending Request",
//           type: "warning",
//         })
//       );
  
//       const sendRequestData = async () => {
//         try {
//           const { data } = await axios.get(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wishlist`,
//             {
//               withCredentials: true,
//               // Other optional configuration options
//             }
//           );

//           console.log(data)
          
//           if (!data.success) {
//           }
//           dispatch(
//             showNotification({
//               open: true,
//               message: "Fetched Successfully",
//               type: "success",
//             })
//           );
//           dispatch(createWishlist(data.wishlist.properties));
//         } catch (error) {
//           dispatch(
//             showNotification({
//               open: true,
//               message: "Sending Request Failed",
//               type: "error",
//             })
//           );
//         }
//       };
  
//       sendRequestData();
//     };
//   }
  