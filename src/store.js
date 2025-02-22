import { configureStore } from "@reduxjs/toolkit";
import warehouseSlices from './warehouseSlices'
const store = configureStore({
    reducer:{
        warehouse:warehouseSlices
    }
})
export default store