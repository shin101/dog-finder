import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorsForm({ addColor }){
  const [form, setForm] = useState("");
  const navigate = useNavigate();
  
  const handleChange = e => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(form);

    navigate("/colors");
  };

  return (
    <div>
      <form onSubmit = {handleSubmit}> 
        <input
        placeholder="color name"
        onChange={handleChange}/>

        <button>Add this color</button>
      </form>
    </div>
  )
};

  

export default NewColorsForm;