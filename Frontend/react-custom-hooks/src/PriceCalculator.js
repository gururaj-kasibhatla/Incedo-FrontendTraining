import { useEffect, useState } from "react"
var usePriceCalculation=(price,discountPercentage,taxAmount)=>{
const [totalPrice,setTotalPrice]=useState(0)

var action=()=>{
    setTotalPrice(0.8*price)
}

useEffect(()=>{
    action()
},[])

return totalPrice;
}

export default usePriceCalculation