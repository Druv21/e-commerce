import React from 'react'

const Form = () => {
    return (
        <div className="head">
        <h2>Login</h2>
        <div className="form">
        <form action="" className="bttn">
            <div className="box">
                <label className="align_box">Email: </label>
                <input type="email" name="email" />
            </div>
            <div className="box">
                <label>Password: </label>
                <input type="password" name="password" autoComplete="off"/>
            </div>
            <button className="buttn" type="submit">Login</button>
        </form>
        </div>
        </div>
    )
}

export default Form