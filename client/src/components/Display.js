import React, { useState, useEffect ,useContext} from 'react'
import axios from "axios"
import { store } from '../App'
const Display = ({handleEdit}) => {
    const [data, setData] = useState([])
    // const [totalsum,setTotalSum]=useState(0)
    const [items,setItems]=useContext(store)

    useEffect(() => {
      axios.get("/budgetCalculator/getAll")
            .then((response) => {
                setData(response.data)
            })
    })

    useEffect(() => {
        const total = data.reduce((acc, items) => acc + items.amount, 0);
        // setTotalSum(total)
        setItems({...items,totalsum:total})
      
      }, [data,items.totalsum]);
    const handleDelete=(_id)=>{
        console.log(_id)
        try {
            axios.delete(`/budgetCalculator/delete/${_id}`)  
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        setItems({ ...items,availableBalance:items.availableBalance-items.totalsum})
    },[items.totalsum])

    return (
        <div>
            <span>
              <h3> Current Expenses is: {items.totalsum}</h3><span><h3> Available Balance is :{items.availableBalance}</h3></span>     
            </span>
            <table className='table' style={{marginTop:"20px"}}>
                <thead className='thead-dark' style={{backgroundColor:"gray",color:"white"}}>
                    <tr>
                        <td>Item name</td>
                        <td>Item Amount</td>
                        <td>Item date</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                {data.map((items,index) => {
                    const { expenseItem, amount, date, _id } = items
                    return (
                        <tbody>
                            <tr key={{index}}>
                                <td>{expenseItem}</td>
                                <td>{amount}</td>
                                <td>{date}</td>
                                <td><button className='btn btn-warning btn-lg mr-2' style={{marginRight:"20px"}} onClick={()=>handleEdit(_id)}>Edit</button>
                                <button className='btn btn-danger btn-lg' onClick={()=>handleDelete(_id)}>Delete</button></td>
                            </tr>
                        </tbody>    
                    )
                })}
            </table>
        </div>
    )
}

export default Display