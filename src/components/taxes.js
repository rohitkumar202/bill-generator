import React from 'react'
import { thisExpression } from '@babel/types'

class Taxes extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            gst : this.props.taxDiscount.gst,
            otherTax : this.props.taxDiscount.otherTax,
            discount : this.props.taxDiscount.discount,
            otherDiscount : this.props.taxDiscount.otherDiscount

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value == '' ? 0 : event.target.value
        })
    }

    handleClick = (event) => {
        /* console.log('currvalue : ', this.state)
            this.setState({
            gst : this.state.gst == undefined ? 0 : this.state.gst,
            otherTax : this.state.otherTax == undefined ? 0 : this.state.otherTax,
            discount : this.state.discount == undefined ? 0 : this.state.discount,
            otherDiscount : this.state.otherDiscount == undefined ? 0 : this.state.otherDiscount
        }) 
        console.log('currvalue Post: ', this.state)
        */
        console.log('currr : ', this.state)
        this.props.callbackHandleTaxDiscountValues(this.state)
    }

    render() {
                
        return (
            <div className='border p-2'>
                <div className='row'>
                    <div className = 'col-12'>
                        <h4 className = 'text-center'>Tax & Discounts</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>GST :</label>
                    </div>
                    <div className='col-4'>
                        <input name = 'gst' onChange = {this.handleChange}  value = {this.state.gst} type='text' placeholder='In Percentage' className='form-control'></input>
                    </div>
                    <div className='col-1'>
                        <span>%</span>
                    </div>
                </div>        
                <div className='row mt-1'>
                    <div className='col-6'>
                        <label>Other :</label>
                    </div>
                    <div className='col-4'>
                        <input name = 'otherTax' onChange = {this.handleChange}  value = {this.state.otherTax} type='text' placeholder='In Percentage' className='form-control'></input>
                    </div>
                    <div className='col-1'>
                        <span>%</span>
                    </div>
                </div>      
                <div className='row mt-4'>
                    <div className='col-6'>
                        <label>Discount :</label>
                    </div>
                    <div className='col-4'>
                        <input name = 'discount' onChange = {this.handleChange}  value = {this.state.discount} type='text' placeholder='In Rupees' className='form-control'></input>
                    </div>
                    <div className='col-1'>
                        <span>₹</span>
                    </div>
                </div>        
                <div className='row mt-1'>
                    <div className='col-6'>
                        <label>Other :</label>
                    </div>
                    <div className='col-4'>
                        <input name = 'otherDiscount' onChange = {this.handleChange}  value = {this.state.otherDiscount}  type='text' placeholder='In Rupees' className='form-control'></input>
                    </div>
                    <div className='col-1'>
                        <span>₹</span>
                    </div>
                </div>  
                <div className='row mt-3'>
                    <div className = 'col'>
                        <button onClick={this.handleClick} className='form-control btn btn-primary' >generate</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Taxes