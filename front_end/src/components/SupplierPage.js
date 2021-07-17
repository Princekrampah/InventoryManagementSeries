import React, { useState, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { SupplierContext } from '../SupplierContext';

const SupplierPage = () => {
	const [ supplierDetail, setSupplierDetail ] = useContext(SupplierContext);

	const updateForm = (e) => {
		setSupplierDetail({ ...supplierDetail, [e.target.name]: e.target.value });
	};

	// website to obtain fetch from curl: https://kigiri.github.io/fetch/
	const handelAdd = async (e) => {
		e.preventDefault();

		const url = 'http://localhost:8000/supplier';

		const response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({
				name: supplierDetail['name'],
				email: supplierDetail['email'],
				phone: supplierDetail['phone'],
				company: supplierDetail['company']
			})
		});

		response.json().then((response) => {
			if (response.status === 'ok') {
				alert('Supplier added successfully');
			} else {
				alert('Failed to add Supplier');
			}
		});
		setSupplierDetail({
			name: '',
			email: '',
			phone: '',
			company: '',
			emailTitle: '',
			email_msg: ''
		});
	};

	const handleUpdate = async (e) => {
		e.preventDefault();

		const url = 'http://localhost:8000/supplier/' + supplierDetail['id'];

		const response = await fetch(url, {
			method: 'PUT',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({
				name: supplierDetail['name'],
				email: supplierDetail['email'],
				phone: supplierDetail['phone'],
				company: supplierDetail['company']
			})
		});

		response.json().then((response) => {
			if (response.status === 'ok') {
				alert('Supplier updated successfully');
			} else {
				alert('Failed to updated Supplier');
			}
		});
	};

	const handleDelete = () => {
		fetch('http://127.0.0.1:8000/supplier/' + supplierDetail['id'], {
			method: 'DELETE',
			headers: {
				accept: 'application/json'
			}
		})
			.then((resp) => {
				return resp.json();
			})
			.then(
				(result) => {
					if (result.status === 'ok') {
						setSupplierDetail({
							name: '',
							email: '',
							phone: '',
							company: '',
							emailTitle: '',
                            email_msg: '',
                            id: ''
						});
						alert('Supplier deleted successfully');
					} else {
						alert('Supplier deletion failed');
					}
				},
				(error) => {
					console.log(error);
				}
			);
	};

	const handleEmail = async (e) => {
		e.preventDefault();

		const url = 'http://localhost:8000/email/' + supplierDetail['id'];
		console.log(supplierDetail['id'])

		const response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({
				message: supplierDetail['email_msg'],
				subject: supplierDetail['emailTitle']
			})
		});

		response.json().then((response) => {
			if (response.status === 'ok') {
				alert('Email sent successfully');
			} else {
				alert('Failed to send email');
			}
		});
		setSupplierDetail({
			emailTitle: '',
			email_msg: ''
		});
	};

	return (
		<Card>
			<Card.Body>
				<Form>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='text'
							name='name'
							value={supplierDetail.name}
							onChange={updateForm}
							placeholder='supplier&#39;s Name'
						/>
					</Form.Group>

					<Form.Group controlId='email'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							name='email'
							value={supplierDetail.email}
							onChange={updateForm}
							placeholder='Email Address'
						/>
					</Form.Group>

					<Form.Group controlId='phone'>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type='number'
							name='phone'
							value={supplierDetail.phone}
							onChange={updateForm}
							placeholder='Phone'
						/>
					</Form.Group>

					<Form.Group controlId='company'>
						<Form.Label>Company</Form.Label>
						<Form.Control
							type='text'
							name='company'
							value={supplierDetail.company}
							onChange={updateForm}
							placeholder='Company'
						/>
					</Form.Group>

					<Form.Group controlId='emailTitle'>
						<Form.Label>Email Title</Form.Label>
						<Form.Control
							type='Text'
							name='emailTitle'
							value={supplierDetail.emailTitle}
							onChange={updateForm}
							placeholder='Email Title'
						/>
					</Form.Group>

					<Form.Group controlId='email_msg'>
						<Form.Label>Email Content</Form.Label>
						<Form.Control
							type='textfield'
							name='email_msg'
							value={supplierDetail.email_msg}
							onChange={updateForm}
							placeholder='Email Content'
						/>
					</Form.Group>

					<Button onClick={handleUpdate} className='btn btn-outline-info m-1' variant='primary'>
						Update
					</Button>

					<Button onClick={handelAdd} className='btn btn-outline-primary m-1' variant='primary'>
						Add Supplier
					</Button>

					<Button onClick={handleEmail} className='btn btn-outline-secondary m-1' variant='primary'>
						SendEmail
					</Button>

					<Button onClick={handleDelete} className='btn btn-outline-danger m-1' variant='primary'>
						Delete
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default SupplierPage;
