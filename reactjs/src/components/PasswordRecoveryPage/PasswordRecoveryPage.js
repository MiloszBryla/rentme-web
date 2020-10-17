import {useForm} from "react-hook-form";
import closeIcon from "../../assets/close-window.svg";
import React from "react";
import {useHistory} from "react-router-dom";

function RecoverAcc() {

    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    function forgotPassHide(){
        history.go(2);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="popup2"  style={{"display": "flex", "opacity": "1"}}>
                <div className="popup-content2">
                    <p className="popup-title">Password Recovery</p>
                    <img className="close2" onClick={() => history.goBack()} src={closeIcon}/>
                    <p>If you have forgotten your account password please enter your e-mail.
                        We will send you password recovery link.</p>
                    <p className="input-label">E-mail:</p>
                    <div className="login-data-input-decoration-wrapper">
                        <input className="login-data-input" type="text" placeholder="" name="email"
                               ref={register({
                                   required: "Required",
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: "invalid email address"
                                   }
                               })}/>
                    </div>
                    {errors.email && <p className="login-validator-message">You need to enter valid email address.</p>}
                    <div className="login-button-gradient-wrapper rec">
                        <button className="loginRecBtn rec"> Send</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default RecoverAcc;