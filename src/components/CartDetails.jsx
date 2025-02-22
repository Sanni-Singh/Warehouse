import { useEffect, useRef } from 'react';
import './CartDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changengWarehouseDetails } from '../warehouseSlices';
const CartDetails = ()=>{
    const {id} = useParams("");
    const nameRef = useRef("")
    const cityRef = useRef("")
    const clusterRef = useRef("")
    const spaceRef = useRef("")
    const statusRef = useRef("")
    const dispatch = useDispatch()
    const navigate  = useNavigate();
    
    const warehouse = useSelector((store)=> store.warehouse.warehouseData);
    let {name,city,cluster,space_available,is_live} = warehouse[id - 1]
    useEffect(()=>{
        if(nameRef.current.value === "") nameRef.current.value = name;
        if(cityRef.current.value === "") cityRef.current.value = city;
        if(clusterRef.current.value === "") clusterRef.current.value = cluster;
        if(spaceRef.current.value === "") spaceRef.current.value = space_available;
        if(statusRef.current.value === "") statusRef.current.value = is_live;
    },[])
    const chnageTheUpdate = ()=>{
        let  a = warehouse[id - 1]
        
        a = {
            ...a,
            name : nameRef.current.value,
            city : cityRef.current.value,
            cluster : clusterRef.current.value,
            space_available : spaceRef.current.value,
            is_live:statusRef.current.value,

        }
        let val = [...warehouse];
        val.forEach((ele,idx)=>{
            if(ele.id === Number(id)){
                val.splice(idx , 1, a)
            }
        })
        dispatch(changengWarehouseDetails(val))
        alert("Chnages Has Made")
        navigate("/")
        
    }
    return(
        <div className="cart-details-container">
            <h1>Edit Warehouse Page</h1>
            <div className='cart-input-field'>
                <div className='name-field'>
                    <label htmlFor="">Warehouse Name</label>
                    <input ref={nameRef}  type="text" value={nameRef.current.value}/>
                </div>
                <div className='city-field'>
                    <label htmlFor="">City</label>
                    <input type="text" ref={cityRef} value={cityRef.current.value}/>
                </div>
                <div className='cluster-field'>
                    <label htmlFor="">Cluster</label>
                    <input type="text" ref={clusterRef} value={clusterRef.current.value}/>
                </div>
                <div className='space-field'>
                    <label htmlFor="">Space Available (sq. ft.)</label>
                    <input type="number" ref={spaceRef} value={spaceRef.current.value}/>
                </div>
                <div className='status-field'>
                        <label htmlFor="">Status (sq. ft.)</label>
                        <select name="" ref={statusRef}  value={is_live} id="">
                            <option value="true">Live</option>
                            <option value="false">Not Live</option>
                        </select>
                </div>

               
                <button onClick={chnageTheUpdate}>Update Warehouse</button>
            </div>
        </div>
    )
}
export default CartDetails;