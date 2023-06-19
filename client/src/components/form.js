import React, { useContext } from 'react'
import axios from "axios"
import Display from './Display'
import { store } from '../App'
const Form = () => {
    
    const [items,setItems]=useContext(store)
  
    // const [items, setItems] = useState({
    //     expenseItem: "",
    //     amount: "",
    //     date: "",
    //     availableBalance:""
    // })
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(items.availableBalance<items.totalsum){
            alert("No sufficient balance")
            console.log(items.totalsum)
        }else{
            axios.post("/budgetCalculator/create", { expenseItem: items.expenseItem, amount: items.amount, date: items.date })
            setItems({ expenseItem: "", amount: "", date: "" })
        }
     
    }
    const handleEdit = async (id) => {
        const values = await axios.put(`/budgetCalculator/update/${id}`)
        setItems({ ...items, expenseItem: values.data.expenseItem, amount: values.data.amount })
    }
    return (
        <div>
            <div>
                <center><h1>Budget Calculator</h1></center>
            </div>
            <div className='availableblnc'>
            <div>
                <div className=''>
                    <label>Available Balance  </label><br></br>
                    <input type="text"
                        value={items.availableBalance}
                        placeholder='Enter Available Balance'
                        onChange={(e) => setItems({...items,availableBalance:e.target.value})}
                        style={{height:"40px"}}
                    />
                </div>
            </div>
            <div className='col-md-3'>
                <div className='mb-3'>
                    <button className='btn btn-success' style={{ marginTop: "20px", width: "140px" }}>Submit</button>
                </div>
            </div>
            </div>
         
            <div className='container formpage'>
                <div className='row'>
                    <div className='col-md-12'>
                        <form onSubmit={handleSubmit}>
                            <div className='row mt-2'>
                                <div className='col-md-4'>
                                    <div className='mb-3'>
                                        <label>Item Name</label>
                                        <input type="text"
                                            value={items.expenseItem}
                                            placeholder='Enter Item'
                                            onChange={(e) => setItems({ ...items, expenseItem: e.target.value })}
                                            className='form-control mb-3' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='mb-3'>
                                        <label>Item Amount </label>
                                        <input type="number"
                                            value={items.amount}
                                            placeholder='Enter Amount'
                                            onChange={(e) => setItems({ ...items, amount: e.target.value })}
                                            className='form-control' />

                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='mb-3'>
                                        <label>Date</label>

                                        <input type="date"
                                            value={items.date}
                                            onChange={(e) => setItems({ ...items, date: e.target.value })}
                                            className='form-control' />
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='mb-3'>
                                        <button type="submit" className='btn btn-success' style={{ marginTop: "20px", width: "140px" }}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <Display handleEdit={handleEdit} />
        </div>
    )
}

export default Form