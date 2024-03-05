import PropTypes from "prop-types"; 

function List(props) {

    const itemList = props.items;
    const category = props.category; 
    itemList.sort((a, b) => a.name.localeCompare(b.name)); // sort by name 
    itemList.sort((a, b) => b.name.localeCompare(a.name)); // rev sort by name 
    itemList.sort((a, b) => a.cal - b.cal); // sort by cal 
    itemList.sort((a, b) => b.cal - a.cal); // sort by cal 

    // filter 
    const lowCalFruits = itemList.filter(fruit => fruit.cal < 100);
    const highCalFruits = itemList.filter(fruit => fruit.cal >= 100);

    const listItems = highCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} : {fruit.cal}</li>)
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

List.propTypes = {
    category : PropTypes.string, 
    items : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name : PropTypes.string, 
            cal : PropTypes.number
        })
    )
}

List.defaultProprs = {
    category : "Category", 
    items : []
}

export default List 