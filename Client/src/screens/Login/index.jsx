import React, { useContext, useState } from 'react'
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { Lock, Person } from '@material-ui/icons';
import { Container, Lama } from './styles';
import logo from "../../assets/logo.png";
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios'
import { GlobalContext } from '../../context/GlobalState';

function Login() {

  const {setToken} = useContext(GlobalContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const Login = () => {

    const body = {
      email: email,
      password: password
    }
    axios
    .post('http://localhost:3003/user/login', body)
    .then(res => {
      setToken('token', res.data.token)
      history.push('/')
    })
    .catch(err => 
      alert("Erro ao fazer o login. Verifique o usuário e senha e tente novamente."))
  }



  return (
  <>
  <Navbar/>
    <Container>
      <Lama>
      <img src={logo}/>
      <h1>.LAMA</h1>
      <h3>Sua melhor plataforma de compras online.</h3>
      </Lama>
      <div className="signin signin_wrapper" style={{margin:"100px"}}>
          <form>
            <h2>Entre</h2>
            <TextField
              name="email"
              type="text"
              placeholder="Email"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>    
                      <Person style={{color:"var(--background)", marginRight:"16px"}}/>
                  </InputAdornment>
                ),
              }}
              value={email}
              onChange={onChangeEmail}
              required
            />


            <TextField
              name="password"
              type="password"
              placeholder="Password"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                      <Lock style={{color:"var(--background)", marginRight:"16px"}} />
                  </InputAdornment>
                ),
              }}
              value={password} 
              onChange={onChangePassword}
              required
            />
          
            <Button variant="contained" color="primary" onClick={Login}>Login</Button>
            <h4> Ainda não tem cadastro? <span className="signup">Registre-se agora</span></h4>
          </form>
      </div>
    </Container>
    </>
  )} 
  
export default Login;