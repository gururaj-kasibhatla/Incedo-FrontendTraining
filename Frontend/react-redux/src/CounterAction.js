export var INCREMENT='IMCREMENT'
export var DECREMENT='DECREMENT'
export var MAKEZERO='MAKEZERO'


export var increment=()=>{
    return{
        type:INCREMENT
    }
}

export var decrement=()=>{
    return{
        type:DECREMENT
    }
}

export var makezero=()=>{
    return{
        type:MAKEZERO
    }
}
