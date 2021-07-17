import react, {useEffect, useContext} from 'react'
import { Table } from 'react-bootstrap'
import { ProductContext } from '../ProductContext'
import { UpdateContext } from '../UpdateProductContext'
import {SupplierContext} from '../SupplierContext'
import ProductsRow from './ProductsRow'
import {useHistory} from 'react-router-dom'

const ProductsTable = () => {
    const [products, setProducts] = useContext(ProductContext)
    const [updateProductInfo, setUpdateProductInfo] = useContext(UpdateContext)
    const [supplierDetail, setSupplierDetail] = useContext(SupplierContext)

    let history = useHistory()

    const handleDelete = (id) => {
        fetch("http://127.0.0.1:8000/product/" + id, {
            method: "DELETE",
            headers: {
                accept: 'application/json'
            }
        })
            .then(resp => {
            return resp.json()
            })
            .then(result => {
                if (result.status === 'ok') {
                    const filteredProducts = products.data.filter((product) => product.id !== id);
                    setProducts({ data: [...filteredProducts] })
                    alert("Product deleted")
                } else {
                    alert("Product deletion failed")
            }
        })
    }

    const handleUpdate = (id) => {
        const product = products.data.filter(product => product.id === id)[0]
        setUpdateProductInfo({
            ProductName: product.name,
            QuantityInStock: product.quantity_in_stock,
            QuantitySold: product.quantity_sold,
            UnitPrice: product.unit_price,
            Revenue: product.revenue,
            ProductId: id
        })
        history.push("/updateproduct")
    }

    const handleSupplier = (id) => {
        console.log(id)
        fetch("http://localhost:8000/supplier/" + id, {
            headers: {
                Accept: 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(result => {
            if (result.status === 'ok') {
                setSupplierDetail({ ...result.data })
                history.push("/supplierpage")
            }
            else {
                alert("error")
            }
        })

    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/product")
            .then(resp => {
                return resp.json();
            }).then(results => {
                setProducts({ "data": [...results.data] })

        })
    }, [])


    console.log(products.data)
    return (
        <div>
            <Table striped bordered hover>
				<thead>
					<tr>
						<th>Id</th>
						<th>Product Name</th>
						<th>Quantity In Stock</th>
						<th>Quantity Sold</th>
						<th>Unit Price</th>
						<th>Revenue</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
                    {products.data.map((product) => (
                        <ProductsRow
                            id = {product.id}
                            name = {product.name}
                            quantity_in_stock = {product.quantity_in_stock}
                            quantity_sold = {product.quantity_sold}
                            unit_price = {product.unit_price}
                            revenue = {product.revenue}
                            key={product.id}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            handleSupplier={handleSupplier}
                        />
                    ))}
				</tbody>
			</Table>
        </div>
    );
}


export default ProductsTable;