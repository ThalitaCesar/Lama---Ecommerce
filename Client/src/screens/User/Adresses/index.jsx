import {Box, Button, Divider, TextField} from '@material-ui/core';
import {AddCircleOutline} from '@material-ui/icons';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../../context/GlobalState';
import {useModalContext} from '../../../context/ModalContext';
import {Title} from '../Requests/styles';
import Card from './Card';
import {DivCep} from './styles';
import {Form, Input, Label} from './Card/styles';

function Adresses() {

    const {openModal} = useModalContext();
    const createModal = () => openModal({message: <MessageCreate/>});
    const {userId} = useContext(GlobalContext);
    const [adressesByUser,
        setAdressesByUser] = useState([])

    const getAdressesByUser = () => {
        axios
            .get(`http://localhost:3003/adresses/getadresses/${userId}`)
            .then(response => {
                console.log(response);
                setAdressesByUser(response
                    ?.data
                        ?.Result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const results = adressesByUser

    useEffect(() => {
        getAdressesByUser()
    }, [])

    const MessageCreate = () => {

        const [userCep,
            setUserCep] = useState('')
        const [viaCep,
            setViaCep] = useState()
        const [street,
            setStreet] = useState('')
        const [district,
            setDistrict] = useState('')
        const [number,
            setNumber] = useState('')
        const [complement,
            setComplement] = useState('')
        const [city,
            setCity] = useState('')
        const [state,
            setState] = useState('')

        const handleChange = (event) => {
            const numberCep = event
                .target
                .value
                .replace(/\D/g, '');
            setUserCep(numberCep);
        }

        const getCEP = () => {
            axios
                .get('https://viacep.com.br/ws/' + userCep + '/json')
                .then(function (response) {
                    setViaCep(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        const PostAdresses = () => {

            const body = {
                cep: userCep,
                street: street,
                district: district,
                city: city,
                complement: complement,
                state: state,
                number: number,
                user_id: userId
            }
            axios
                .post('http://localhost:3003/adresses/postadresses/', body)
                .then(response => {
                    console.log(response);
                    alert("Endereço adicionado com sucesso!")
                })
                .catch((err) => {
                    console.log(err);
                    alert("Aconteceu algum erro, veja se todos os campos foram preenchidos.")
                });
        }


        return <> <Box component="form" noValidate>

            <Form>
                <Label>
                    Cep:
                    <Input
                        placeholder='ex: 50820351'
                        required
                        value={userCep || ""}
                        onChange={handleChange}/>
                </Label>

                <Label>
                    Rua:
                    <Input
                        required
                        label="Rua"
                        defaultValue={street || ""}
                        variant="standard"
                        onChange={(e) => setStreet(e.target.value)}/>
                </Label>

                <Label>
                   Número:
                <Input
                    required
                    value={number || ""}
                    variant="standard"
                    onChange={(e) => setNumber(e.target.value)}/>
                  </Label>
                  <Label>
                    Bairro:
                <Input
                    required
                    value={district || ""}
                    variant="standard"
                    onChange={(e) => setDistrict(e.target.value)}/>
                  </Label>
                    <Label>
                    Complemento:
                <Input
                    value={complement || ""}
                    variant="standard"
                    style={{
                    marginBottom: "7px"
                }}
                    onChange={(e) => setComplement(e.target.value)}/>
                </Label>
                <Label>
                    Cidade:
                <Input
                    required
                    value={city}
                    variant="standard"
                    style={{
                    marginBottom: "7px"
                }}
                    onChange={(e) => setCity(e.target.value)}/>
                  </Label>
                  <Label>
                  UF:
                <Input
                    required
                    value={state || ""}
                    variant="standard"
                    style={{
                    marginBottom: "7px"
                }}
                    onChange={(e) => setState(e.target.value)}/>
                  </Label>
            </Form>
        </Box> 
        < Button
        variant = "contained"
        color = "primary"
        size = "large"
        onClick = {
            PostAdresses
        }
        style = {{marginTop:"30px", width:"100%"}} > Salvar Endereço 
        </Button> 
    </>
}

return ( <> <Title>Meus Endereços</Title> < Divider /> <div>
    {results.map((result) => (<Card adresses={result}/>))}
</div> < Button variant = "contained" color = "primary" size = "large" style = {{margin:"30px"}}
onClick = {
    createModal
} > Adicionar endereço < AddCircleOutline style = {{marginLeft:"10px"}}/>
    </Button > </>)
}

export default Adresses;