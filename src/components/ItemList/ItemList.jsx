import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return (
        <div className="my-5 contenerdorProductos d-flex flex-wrap justify-content-evenly">
            {productos.map(item => <Item key={item.id}{...item} />)}
        </div>
    )
}

export default ItemList