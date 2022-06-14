import React, {useState} from 'react'
import './Style.css'

const Contact = () => {
    const [form, setForms] = useState({});

    const handleChange = (event) => {
      
      setForms(values => ({...values, [event.target.name]:event.target.value }))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(form);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input  type="text"  name="username"  value={form.username || ""}  onChange={handleChange}/>
        </label>
        <label>Enter your age:
          <input 
            type="number" name="age" value={form.age || ""} onChange={handleChange}/>
          </label>
          <label>Enter email
              <input type="text" name="email" value={form.email || ""} onChange={handleChange}/>
          </label>
          <input type="submit" />
      </form>
    )
  }

export default Contact