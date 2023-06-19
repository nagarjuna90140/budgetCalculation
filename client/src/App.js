import React, { useEffect, useState,createContext,Provider } from 'react'

import Form from './components/form'
import Display from './components/Display'

export const store=createContext()
const App = () => {
  const [items, setItems] = useState({
    expenseItem: "",
    amount: "",
    date: "",
    availableBalance:5000,
    totalsum:0
    
})
  return (
    <div>
      <store.Provider value={[items,setItems]}>
      <Form/>
     
      
      </store.Provider>
     
  
    </div>
  )
}

export default App