import './WarehouseContainer.css'
import { useState } from 'react'
import WarehouseCart from './WarehouseCart';
import { useSelector } from 'react-redux';
const WarehouseContainer = ()=>{
    const Data = useSelector((store)=> store.warehouse.warehouseData)
    const [warehouseData,setWarehouseData] = useState(Data);
    const searchField = (e)=>{
        let val = e.target.value.toLowerCase();
        const filterArray = Data.filter((ele)=> ele.name.toLowerCase().includes(val));
        setWarehouseData(filterArray)
    }
    
    const filterByCity = (e)=>{
        if(e.target.value === "City") {
            setWarehouseData(Data)
            return
        }
        const newArrray = Data.filter((ele)=> ele.city === e.target.value);
        setWarehouseData(newArrray);
    }

    const filterByClustor = (e)=>{
        if(e.target.value === "Cluster") {
            setWarehouseData(Data)
            return
        }
        const newArrray = Data.filter((ele)=> ele.cluster === e.target.value);
        setWarehouseData(newArrray);
    }

    const filterBySpace = (e)=>{
        console.log(Data[0].space_available);
        
        if(e.target.value === "Space Available") {
            setWarehouseData(Data)
            return
        }
        const newArrray = Data.filter((ele)=> ele.space_available === Number(e.target.value));
        setWarehouseData(newArrray);
    }

    return(
        <div className="warehouse-container">
           <nav>
                <h1>WareHouse</h1>
                <ol>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ol>
           </nav>

           <div className='search-field'>
                <input onChange={searchField} type="text" placeholder='Search by Warehouse Name'/>
                <div className='filter-section'>
                    <select name="" id="" onChange={filterByCity}>
                        <option value="City">City</option>
                        {Data.map((ele)=> <option  key={ele.id} value={ele.city}>{ele.city}</option>)}
                    </select>
                    <select name="" id="" onChange={filterByClustor}>
                        <option value="Cluster">Cluster</option>
                        {Data.map((ele)=> <option key={ele.id} value={ele.cluster}>{ele.cluster}</option>)}
                    </select>
                    <select name="" id="" onChange={filterBySpace}>
                        <option value="Space Available">Space Available</option>
                        {Data.map((ele)=> <option key={ele.id} value={ele.space_available}>{ele.space_available}</option>)}
                    </select>
                </div>
           </div>

           <div className='cart-container'>
            {warehouseData.map((ele)=> <WarehouseCart key={ele.id} {...ele}/>)}
                
           </div>
        </div>
    )
}
export default WarehouseContainer;