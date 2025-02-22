import { createSlice } from "@reduxjs/toolkit";
import Data from './Data.json'
const warehouseSlices = createSlice({
    name:"warehouse",
    initialState: {
        warehouseData : Data
    },
    reducers:{
        changengWarehouseDetails:(state,actions)=>{
            state.warehouseData = actions.payload
        }
    }
})
export const {changengWarehouseDetails}  = warehouseSlices.actions;
export default warehouseSlices.reducer;