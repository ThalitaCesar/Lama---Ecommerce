import {Button, IconButton, MenuItem, Select} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../../context/GlobalState';
import {
    Card,
    ImgContainer,
    NameProduct,
    Quantity,
    Tam,
    Value,
    Total
} from './styles';
import {CardValue, Infos, P} from '../styles';

function CardRequest() {
    const [orders,
        setOrders] = useState([]);
    const {setOrderQuantity, userId} = useContext(GlobalContext);
    const [cartSubtotal,
        setCartSubtotal] = useState(0);

    const getOrders = () => {
        axios
            .get(`http://localhost:3003/order/getorderbyuser/${userId}`)
            .then(function (response) {
                setOrders(response.data.Result.map(order => ({
                    ...order,
                    quantity: 1
                })));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getOrders();
    }, []);

    useEffect(() => {
        let subtotal = orders.reduce((acc, curr) => {
            if (curr.price) {
                return (acc + parseFloat(curr.price.substring(2).replace(",", ".")) * curr.quantity);
            }
            return acc;
        }, 0);
        setCartSubtotal(subtotal);
    }, [orders]);

    const handleIncrease = (index) => {
        const updatedOrders = [...orders];
        updatedOrders[index].quantity++;
        setOrders(updatedOrders);
    };

    const handleDecrease = (index) => {
        const updatedOrders = [...orders];
        if (updatedOrders[index].quantity > 1) {
            updatedOrders[index].quantity--;
            setOrders(updatedOrders);
        }
    };

    const handleReset = (order) => {
        axios
            .delete(`http://localhost:3003/order/deleteorder/${order.id}`)
            .then(function (response) {
                console.log(response.data);
                getOrders();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
    <> 
    {
        orders.map((order, index) => (
            <Card key={order.id}>
                <div>
                    <ImgContainer background={order.folder}/>
                </div>
                <NameProduct>{order.name}</NameProduct>
                <Tam>{order.size}</Tam>
                <Quantity>
                    <Button onClick={() => handleDecrease(index)}>-</Button>
                    {order.quantity}
                    <Button onClick={() => handleIncrease(index)}>+</Button>
                </Quantity>
                <Value>
                    {order.price && `R$ ${ (parseFloat(order.price.substring(2).replace(",", ".")) * order.quantity).toFixed(2)}`}
                </Value>
                <IconButton onClick={() => handleReset(order)}>
                    <Delete/>
                </IconButton>
            </Card>
        ))
    }

    {
        orders.length > 0
            ? (
                <Infos>
                    <CardValue>
                        <P>Subtotal:<span>
                                R$: {cartSubtotal.toFixed(2)}</span>
                        </P>
                        <P>Frete:
                            <span>R$ 20.00</span>
                        </P>
                        <P>Modo de Pagamento:
                            <Select labelId="demo-simple-select-label" id="demo-simple-select">
                                <MenuItem value={10}>Pix</MenuItem>
                                <MenuItem value={20}>Cartão</MenuItem>
                                <MenuItem value={30}>Boleto</MenuItem>
                            </Select>
                        </P>
                        <P>Total:
                            <Total>R$ {(cartSubtotal + 20).toFixed(2)}</Total>
                        </P>
                        <Button
                            style={{
                            marginTop: "16px"
                        }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large">
                            Confirmar
                        </Button>
                    </CardValue>
                </Infos>
            )
            : (
                <p
                    style={{
                    marginTop: "30px",
                    color: " var(--red)"
                }}>O carrinho está vazio.</p>
            )
    } 
    </>
    );
  }
  
  export default CardRequest;