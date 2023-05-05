import React, {useContext, useState} from 'react';
import {Button, InputAdornment, TextField} from '@material-ui/core';
import {Lock, Person} from '@material-ui/icons';
import {Container, Lama} from './styles';
import logo from '../../assets/logo.png';
import {NavLink, useHistory} from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import {AuthContext} from '../../context/isAutenticated';

function Login() {
    const {login} = useContext(AuthContext);
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const history = useHistory();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const getUserId = (email) => {
      axios
          .get(`http://localhost:3003/user/userid/${email}`)
          .then((response) => {
              localStorage.setItem('userId', response.data.result.id);
          })
          .catch((err) => {
              console.log(err);
          });
  };

    const handleLogin = () => {
        const body = {
            email: email,
            password: password
        };
        axios
            .post('http://localhost:3003/user/login', body)
            .then((response) => {
                login(response.data.result);
                getUserId(email)
                console.log('response', response.data.result);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return ( 
    <> 
    <Navbar/> 
    <Container> 
      <Lama>
        <img src={logo} alt="logo"/>
        <h1>LAMA.</h1>
        <h3>Sua melhor plataforma de compras online.</h3>
      </Lama> 
      < div className = "signin signin_wrapper" style = {{ margin: '100px' }} > 
      <form autocomplete="off">
        <h2>Entre</h2>
        <TextField
            name="email"
            type="text"
            placeholder="Email"
            className="textField"
            style={{
            width: "360px"
        }}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Person
                        style={{
                        color: 'var(--background)',
                        marginRight: '16px'
                    }}/>
                </InputAdornment>
            ),
            className: "autocomplete-input"
        }}
            value={email}
            onChange={onChangeEmail}
            required/>

        <TextField
            name="password"
            type="password"
            placeholder="Password"
            className="textField"
            style={{
            width: "360px"
        }}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Lock
                        style={{
                        color: 'var(--background)',
                        marginRight: '16px'
                    }}/>
                </InputAdornment>
            )
        }}
            value={password}
            onChange={onChangePassword}
            required/>
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                style={{
                width: "360px",
                marginTop: "16px",
                marginBottom: "16px"
            }}>
                Login
            </Button>
        </div>
        <h4>
            Ainda não tem cadastro?
            <span className="signup">
                <NavLink
                    to="/register"
                    style={{
                    marginLeft: '10px',
                    textDecoration: 'none',
                    color: "#ffffff"
                }}>
                    Registre-se agora
                </NavLink>
            </span>
        </h4>
    </form> 
    </div>
    </Container > 
    </>
    );
}

export default Login;
