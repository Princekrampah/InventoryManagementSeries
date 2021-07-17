  <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Inventory Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">            
                <Badge className="mt-2" variant="primary">Products In stock</Badge>
            </Nav>
                <Form inline>
                    <Link to="/addproduct" className="btn btn-primary btn-sm mr-4">Add Product</Link>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button type="submit"  variant="outline-primary">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>