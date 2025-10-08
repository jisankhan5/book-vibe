import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    const storedBookDATA = JSON.parse(storedBookSTR);
    return storedBookDATA;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookDATA = getStoredBook();
  if (storedBookDATA.includes(id)) {
     Swal.fire({
     title: "Good job!",
     text: "You clicked the button!",
     icon: "success"
   });
  } else {
    storedBookDATA.push(id);
    
    const data=JSON.stringify(storedBookDATA)
    localStorage.setItem("readList",data)
  }
};
export {addToStoredDB,getStoredBook}