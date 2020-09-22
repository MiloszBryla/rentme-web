import React, {useState, useEffect} from "react";
import "../../../css/payment.css";

function Payment() {

    return(
        <div className="row">
            <div className="col-75">
                <div className="container-payments">
                    <form>
                        <div className="row">
                            <div className="col-50">
                                <h3 className="h3-text">Billing Address</h3>
                                <label className="label" htmlFor="fname"><i className="fa fa-user"/> Full Name</label>
                                <input className="type-text" type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                                <label className="label" htmlFor="email"><i className="fa fa-envelope"/> Email</label>
                                <input className="type-text" type="text" id="email" name="email" placeholder="john@example.com"/>
                                <label className="label" htmlFor="adr"><i className="fa fa-address-card-o"/> Address</label>
                                <input className="type-text" type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                                <label className="label" htmlFor="city"><i className="fa fa-institution"/> City</label>
                                <input className="type-text" type="text" id="city" name="city" placeholder="New York"/>

                                <div className="row">
                                    <div className="col-50">
                                        <label className="label" htmlFor="zip">Zip-Code</label>
                                        <input  className="type-text" type="text" id="zip" name="zip" placeholder="10001"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3 className="h3-text">Payment</h3>
                                <label className="label" htmlFor="cname">Name on Card</label>
                                <input className="type-text" type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                                <label className="label" htmlFor="ccnum">Credit card number</label>
                                <input className="type-text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                                <label className="label" htmlFor="expmonth">Exp Month</label>
                                <input className="type-text" type="text" id="expmonth" name="expmonth" placeholder="September"/>

                                <div className="row">
                                    <div className="col-50">
                                        <label className="label" htmlFor="expyear">Exp Year</label>
                                        <input  className="type-text"  type="text" id="expyear" name="expyear" placeholder="2018"/>
                                    </div>
                                    <div className="col-50">
                                        <label className="label" htmlFor="cvv">CVV</label>
                                        <input className="type-text" type="text" id="cvv" name="cvv" placeholder="352"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <label className="label">
                            <input  type="checkbox" checked="checked" name="sameadr"/> I accept all terms & conditions
                        </label>
                        <input type="submit" value="Pay" className="btn"/>
                    </form>
                </div>
            </div>
        </div>

    )

}
export default Payment;