import React, {useState} from 'react'
import {
    Button,
    makeStyles,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from '@material-ui/core';
import {Container} from './styles';
import {NavLink} from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Register() {
 
    const [email,
        setEmail] = useState('')
    const [password,
        setPassword] = useState('')
    const [name,
        setName] = useState('')
    const [cpf,
        setCpf] = useState('')
    const [data,
        setData] = useState('')
    const navigate = useHistory()

    const useStyles = makeStyles((theme) => ({
        button: {
            marginRight: theme.spacing(1)
        }
    }));

    const handleReset = () => {
        setActiveStep(0);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeCpf = (e) => {
        setCpf(e.target.value)
    }

    const onChangeData = (e) => {
        setData(e.target.value)
    }

    const CreateProfile = () => {
        const body = {
            name: name,
            cpf: cpf,
            data: data,
            email: email,
            password: password,
            role: "NORMAL"
        }
        axios
            .post('http://localhost:3003/user/signup', body)
            .then(res => {
                alert("Sua conta foi criada com sucesso.");
                setTimeout(() => {
                    navigate("/login")
                  }, 2000)
            })
            .catch(err => alert("Erro ao fazer ao cadastrar. Verifique se todos os dados foram respondidos."))
    }

    const getSteps = () => {
        return ["Informações Pessoais", "Informações de Login"];
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (<> <TextField
                    name="name"
                    type="text"
                    placeholder="Nome"
                    className="textField"
                    value={name}
                    onChange={onChangeName}
                    required/> < TextField name = "cpf" type = "text" placeholder = "CPF" className = "textField" value = {
                    cpf
                }
                onChange = {
                    onChangeCpf
                }
                required /> </>);

            case 1:
                return (<> <TextField
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="textField"
                    value={email}
                    onChange={onChangeEmail}
                    required/> < TextField name = "password" type = "password" placeholder = "Password" className = "textField" value = {
                    password
                }
                onChange = {
                    onChangePassword
                }
                required /> </>);
            default:
                return "unknown step";
        }
    }

    const classes = useStyles();
    const [activeStep,
        setActiveStep] = useState(0);
    const [skippedSteps,
        setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([
                ...skippedSteps,
                activeStep
            ]);
        }
        setActiveStep(activeStep + 1);
    };

    return ( 
    <> 
    <Navbar/> 
    <Container> 
      <div className="signin signin_wrapper" style={{
        margin: "100px"}}>
        <form>

            <h2>Registre-se</h2>
            <div>
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((step, index) => {
                        const labelProps = {};
                        const stepProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                    display: "block"
                                }}>
                                    optional
                                </Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step {...stepProps} key={index}>
                                <StepLabel {...labelProps}>{step}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {activeStep === steps.length
                    ? ( 
                    <> <Typography variant="h2" align="center">
                        Formulário Finalizado
                    </Typography> 
                    <Button variant = "contained" color = "primary" onClick = {
                        CreateProfile
                    } > Cadastrar 
                    </Button>
              </>
      ) : (
        <>
          <form>{getStepContent(activeStep)}
          </form > 
          <Button
          variant = "contained" 
          color = "primary" 
                        className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}>
                        Voltar
                    </Button> 
                    <Button className = {
                        classes.button
                    }
                    variant = "contained" color = "primary" onClick = {
                        handleNext
                    } > {
                        activeStep === steps.length - 1
                            ? "Finalizar"
                            : "Próximo"
                    } 
                    </Button>
        </>
        )}
            </div>
        </form>
    </div> 
    </Container>
    </>
    )
}

export default Register;
