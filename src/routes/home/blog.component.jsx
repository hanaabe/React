// import React from "react";
// const Blog = () => {
//     const handleMenuOne = () => {
//       console.log('clicked one');
//     };
  
//     const handleMenuTwo = () => {
//       console.log('clicked two');
//     };
//     const handleMenuThree = () => {
//         console.log('clicked one');
//       };
    
//       const handleMenuFour = () => {
//         console.log('clicked two');
//       };
    
  
//     return (
//       <Dropdown
//         trigger={<button >Home</button>}
//         menu={[
//           <button onClick={handleMenuOne}>Menu 1</button>,
//           <button onClick={handleMenuTwo}>Menu 2</button>,
//           <button onClick={handleMenuThree}>Menu 3</button>,
//           <button onClick={handleMenuFour}>Menu 4</button>,
          
//         ]}
//       />
//     );
//   };
  
//   const Dropdown = ({ trigger, menu }) => {
//     const [open, setOpen] = React.useState(true);
  
//     const handleOpen = () => {
//       setOpen(!open);
//     };
  
//     return (
//       <div className="dropdown">
//         {React.cloneElement(trigger, {
//           onClick: handleOpen,
//         })}
//         {open ? (
//           <ul className="menu">
//             {menu.map((menuItem, index) => (
//               <li key={index} className="menu-item">
//                 {React.cloneElement(menuItem, {
//                   onClick: () => {
//                     menuItem.props.onClick();
//                     setOpen(false);
//                   },
//                 })}
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </div>
//     );
//   };

//   export default Blog;
