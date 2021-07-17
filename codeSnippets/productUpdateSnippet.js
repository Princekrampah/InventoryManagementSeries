<Card>
			<Card.Body>
				<Form onSubmit={postData}>
					<Form.Group controlId='ProductName'>
						<Form.Label>Product Name</Form.Label>
						<Form.Control
							type='text'
							name='ProductName'
							value={updateProductInfo.ProductName}
							onChange={updateForm}
							placeholder='Product Name'
						/>
					</Form.Group>

					<Form.Group controlId='QuantityInStock'>
						<Form.Label>Quantity In Stock</Form.Label>
						<Form.Control
							type='number'
							name='QuantityInStock'
							value={updateProductInfo.QuantityInStock}
							onChange={updateForm}
							placeholder='Quantity In Stock'
						/>
					</Form.Group>

					<Form.Group controlId='QuantitySold'>
						<Form.Label>Quantity Sold</Form.Label>
						<Form.Control
							type='number'
							name='QuantitySold'
							value={updateProductInfo.QuantitySold}
							onChange={updateForm}
							placeholder='Quantity Sold'
						/>
					</Form.Group>

					<Form.Group controlId='UnitPrice'>
						<Form.Label>Unit Price</Form.Label>
						<Form.Control
							type='number'
							name='UnitPrice'
							value={updateProductInfo.UnitPrice}
							onChange={updateForm}
							placeholder='Unit Price'
						/>
					</Form.Group>

					<Form.Group controlId='Revenue'>
						<Form.Label>Revenue</Form.Label>
						<Form.Control
							type='number'
							name='Revenue'
							value={updateProductInfo.Revenue}
							onChange={updateForm}
							placeholder='Revenue'
						/>
					</Form.Group>

					<Form.Group controlId='Supplier'>
						<Form.Label>Supplier</Form.Label>
						<Form.Control
							type='number'
							name='Supplier'
							value={updateProductInfo.Supplier}
							onChange={updateForm}
							placeholder='Supplier'
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Card.Body>
		</Card>