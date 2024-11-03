
//rendering list
function List(){

    const fruits = [
        {id:1, name:"apple", calories:23} , 
        {id:2, name:"orange", calories:76}, 
        {id:3, name:"banana", calories:77}, 
        {id:4, name:"coconut", calories:120}, 
        {id:5, name:"watermelon", calories:90}
    ]
    //alph
    fruits.sort((a,b) =>a.name.localeCompare(b.name))
    //reverse alph
    fruits.sort((a,b) =>b.name.localeCompare(a.name))
    //by calories
    fruits.sort((a, b)=> a.calories - b.calories)
    //by cal reverse 
    fruits.sort((a,b) => b.calories - a.calories)


    //filtering 
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 50)
    
    
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            lowCalFruit: {lowCalFruit.name}:&nbsp;
                                            <b>{lowCalFruit.calories}</b>
                                          </li>)

    return <ol>{listItems}</ol>;
}
export default List