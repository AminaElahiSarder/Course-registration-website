import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Name from './Components/Name/Name';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [names, setNames] = useState([]);
  const [credit, setCredit] = useState(20);
  const [price, setPrice] = useState(0);
  const [addCredit, setAddCredit] = useState(0)
  const [usedCredits, setUsedCredits] = useState([]); // State to store used credit IDs
  const [usedAddCredits, setUsedAddCredits] = useState([]);

  const handleAddToName = (course) => {
  if (!names.find((namesItem) => namesItem.id === course.id)) {
    const addName = [...names, course];
    setNames(addName);
  } 
  else {
  //   alert('Course item already in the cart')
  // }
  toast.error('Item is already in the cart !', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });
    
    
}

};



const handleCreditHour = (credithour) => {
  if (!usedCredits.includes(credithour)) {
    const newCredit = credit - credithour;
    setCredit(newCredit >= 0 ? newCredit : 0);
    setUsedCredits(prevUsedCredits => [...prevUsedCredits, credithour]);
  }
};


  const handleAddPrice = pricetotal => {
    const newPrice = price + pricetotal;
    setPrice(Math.floor(newPrice));
  };

  const handleAddToCredit = addcredits => {
    if(!usedAddCredits.includes(addcredits)) {
    const newAddCredit = addCredit + addcredits;
    setAddCredit(newAddCredit < 20 ? newAddCredit : 20);
    setUsedAddCredits(prevUsedAddCredits => [...prevUsedAddCredits, addcredits]);
    }
  };

  return (
    <>
      <h1 className='text-3xl font-bold mb-6'>Course Registration</h1>
     <div className='md:flex'>
     <div className='max-w-8xl '>
        <Courses
          handleAddToName={handleAddToName} 
          handleCreditHour={handleCreditHour}
          handleAddPrice={handleAddPrice}
          handleAddToCredit={handleAddToCredit}
        ></Courses>
      </div>
      <div>
        <Name names={names} credit={credit} price={price} addCredit={addCredit}></Name>
        <ToastContainer
           position="top-center"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="colored"
           transition={Bounce}
        />
      </div>
    </div>
      
    </>
  );
}

export default App;
