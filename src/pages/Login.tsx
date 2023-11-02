import React, { FormEvent } from "react"

 class Login extends React.Component {
    render(): React.ReactNode {
        return (<div className="login-wrapper">
            <form className="form-floating">
                <div className="form-floating">
                    <input type="text" name="login" id="login" className="form-control"/>
                    <label htmlFor="login">Введите логин</label>
                </div>
                <br />
                <div className="form-floating">
                    <input type="password" name="password" id="password" className="form-control"/>
                    <label htmlFor="password">Введите пароль</label>
                </div>
                <br />
                <a href="/home" className="btn btn-primary">Войти в систему</a>
            </form>
        </div>);
    }
}

export default Login