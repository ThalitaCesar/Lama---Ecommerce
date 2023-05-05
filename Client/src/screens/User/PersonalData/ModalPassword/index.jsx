import { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../../../context/GlobalState';
import { Form, Input, Label, Title } from '../styles';
import { Button, Divider } from '@material-ui/core';


const ChangePasswordModal = () => {
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { userId } = useContext(GlobalContext);

  const handleUpdatePassword = () => {
    const body = {
      id: userId,
      password: newPassword,
    }
    if (newPassword === passwordConfirm) {
      axios
        .put(`http://localhost:3003/user/updatepassword/${userId}`, body)
        .then(response => {
          console.log(response);
          alert("Atualizações salvas com sucesso!")
        })
        .catch((err) => {
          console.log(err);
          alert("Não foi possível alterar sua senha, tente novamente.")
        });
    } else {
      alert("As senhas não coincidem.")
    }
  };

  return (
    <>
      <h3>Alterar senha</h3>
      <Divider/>
      <Form autocomplete="off">
      <Label>
        Nova senha:
        <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </Label>
      <Label>
        Confirmar nova senha:
        <Input type="password" value={passwordConfirm}  
        onChange={(e) => setPasswordConfirm(e.target.value)} />
      </Label>
      <Button variant="contained" color="primary" size="large"
     type="submit" onClick={handleUpdatePassword} style={{width:"100%", marginTop:"30px"}}>Atualizar senha</Button>
    </Form>
    </>
  );
};

export default ChangePasswordModal;
