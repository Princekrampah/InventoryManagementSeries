import react from 'react'

const ProductsRow = ({id, name, quantity_in_stock, quantity_sold, unit_price, revenue, handleDelete, handleUpdate, handleSupplier}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{ quantity_in_stock}</td>
            <td>{quantity_sold}</td>
            <td>{unit_price}</td>
            <td>{revenue}</td>
            <td>
                <button onClick={() => handleUpdate(id)} className="btn btn-outline-info btn-sm ml-1 mr-2">Update</button>
                <button onClick={() => handleSupplier(id)} className="btn btn-outline-success btn-sm mr-2">Supplier</button>
                <button onClick={() => handleDelete(id)}  className = "btn btn-outline-danger btn-sm mr-2">Delete</button>
            </td>
        </tr>
    );
}

export default ProductsRow