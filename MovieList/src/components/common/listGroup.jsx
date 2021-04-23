import React from 'react';

const ListGroup = props => {
    const {items, textProperty, valueProperty, onItemSelect, selectedItemId} = props;
return (
    <div>
        <ul className="list-group mt-4">
            {items.map(item => <li onClick={() => {onItemSelect(item)}} key={item[valueProperty]} 
                className={selectedItemId === item[valueProperty] ? "list-group-item active" : "list-group-item"}>
                    {item[textProperty]}
            </li>)}
        </ul>
   </div>
)
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: '_id'
};
export default ListGroup;


