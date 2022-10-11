import React from 'react';
import Form from 'react-bootstrap/Form';

function Packages() {


    return (
        <>
            <section className='container'>
                <h1>Create New Ticket</h1>
                <p>Please fill out the form below</p>
            </section>

            <section className='form'>
                <Form.Check type="checkbox" label="Check me out" />
                <div className='form-group'>
                    <label htmlFor='name'>Single number</label>
                    <input type='text' className='form-control '></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Customer Email</label>
                    <input type='text' className='form-control' ></input>
                </div>
                <form>
                    <div className='form-group'>
                        <label htmlFor='product'>Product</label>
                        <select name='product' id='product' >
                            <option value='iPhone'>iPhone</option>
                            <option value='Macbook Pro'>Macbook Pro</option>
                            <option value='iMac'>iMac</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='descritpion'>Description of the issue</label>
                        <textarea name='description' id='description' className='form-control' placeholder='Description'  ></textarea>
                    </div>
                    <div className='form-group'>
                        <button className='btn '>Back</button>
                        <button className='btn '>Next</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Packages