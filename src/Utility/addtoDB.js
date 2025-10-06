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
    alert("already exist");
  } else {
    storedBookDATA.push(id);
    
    const data=JSON.stringify(storedBookDATA)
    localStorage.setItem("readList",data)
  }
};
export {addToStoredDB}