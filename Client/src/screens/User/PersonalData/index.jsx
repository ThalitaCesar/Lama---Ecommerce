import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalState';
import ChangePasswordModal from './ModalPassword';
import { useModalContext } from '../../../context/ModalContext';
import { Form, Input, Label, SubmitButton, Title } from './styles';
import { Box, Button, Divider } from '@material-ui/core';
import { format } from 'date-fns';


function PersonalData() {
  const { userId } = useContext(GlobalContext);
  const { openModal } = useModalContext();
  const [dataUser, setDataUser] = useState(null);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');

  const getDataUser = () => {
    axios
      .get(`http://localhost:3003/user/profile/${userId}`)
      .then(response => {
        console.log(response);
        setDataUser(response?.data?.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);

  useEffect(() => {
    if (dataUser) {
      setName(dataUser?.name);
      setCpf(dataUser?.cpf);
      setBirthDate(dataUser?.data);
      setEmail(dataUser?.email);
    }
  }, [dataUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      id: userId,
      name: name,
      cpf: cpf,
      data: birthDate,
      email: email
    };
    axios
      .put('http://localhost:3003/user/updateuser', body)
      .then(response => {
        console.log(response);
        alert("Atualizações salvas com sucesso!")
      })
      .catch((err) => {
        console.log(err);
        alert("Aconteceu algum erro, veja se todos os campos foram preenchidos.")
      });
  };

  const handlePasswordChange = () => {
    openModal({ message: <ChangePasswordModal/> });
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

  return (
    <>
    {dataUser && (
       <>
    <Title>Dados Pessoais</Title>
    <Divider/>
    <Box style={{margin:"30px"}}>
    <Form onSubmit={handleSubmit}>
      <Label>
        Nome:
        <Input type="text" value={dataUser ? name : ''} onChange={(e) => setName(e.target.value)} />
      </Label>
      <Label>
        CPF:
        <Input type="text" value={dataUser ? cpf : ''} onChange={(e) => setCpf(e.target.value)} />
      </Label>
      <Label>
        Data de nascimento:
        <Input type="date" value={dataUser ? formatDate(birthDate) : ''} onChange={(e) => setBirthDate(e.target.value)} />
      </Label>
      <Label>
        Email:
        <Input type="email" value={email}  disabled/>
      </Label>   
      <Button variant="contained" color="primary" size="large"
     type="button" onClick={handlePasswordChange} style={{marginTop:"20px"}}>
        Alterar senha
      </Button> 
      <Button variant="contained" color="primary" size="large"
      type="submit">
        Salvar alterações
      </Button>   
    </Form>
    </Box>
    </>
    )}
    </>
  );
};

export default PersonalData;
