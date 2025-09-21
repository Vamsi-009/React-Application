function List(props){

   /* const fruits =[{id:1 ,name :"apple" , calories :95},
                   {id:2 ,name :"orange" , calories :45},
                   {id:3 ,name :"banana", calories :105},
                   {id:4 ,name :"grepes" , calories :37}];*/


    // fruits.sort((a, b) => a.name.localeCompare(b.name));  //Alphabetical
    
    //fruits.sort((a, b) => b.name.localeCompare(a.name));   // reverse alphabetical

    //fruits.sort((a,b) => a.calories - b.calories);  //numerical

    //fruits.sort((a, b) => b.calories - a.calories);  //reverce numeric


    //const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

    //const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name} : &nbsp;
                                        <b>{item.calories}</b> </li>);
    return(<>
    <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>);
}
export default List