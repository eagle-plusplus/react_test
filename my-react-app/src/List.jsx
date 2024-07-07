function List(){
    const fruits = ["aaaa", "bbbb"];

    const lfruits = fruits.map(fruit => <li>{fruit}</li>)
    

    return(<ul>{lfruits}</ul>);
}

export default List

//more on that