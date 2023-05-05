import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {ContactPhone, ContactSupport, ExpandMoreOutlined} from '@material-ui/icons';
import React from 'react'
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import Navbar from '../../components/Navbar';
import {FlexContent, FlexItem, IconContent, Text, TextTitle} from '../User/Adresses/Card/styles';
import {ContactContainer, Container} from './styles';

function Help() {

    return ( 
    <> 
    <Navbar/> 
    <Container > 
      <Accordion style={{
        marginBottom: "20px"
    }}>
        <AccordionSummary
            expandIcon={< ExpandMoreOutlined />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>Trocas e Devoluções</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                <> <br></br>
                <p>
                    <strong>Quanto tempo tenho para fazer a devolução e tenho que pagar pelo frete?</strong>
                </p>
                <p>Se você não estiver 100% satisfeito, você tem um máximo de 20 dias a partir
                    da data de recebimento para nos devolver os itens. Não serão aceitas devoluções
                    após 20 dias a partir da data de recebimento do pacote.</p>
                <br></br>
                <p>Para a devolução você deve usar a etiqueta de envio que fornecemos e, em
                    seguida, enviar o pacote:</p>

                <p>
                    <strong>1.</strong>Etiqueta de devolução pré-paga（Correios）</p>

                <p>O envio na primeira devolução é GRATUITO! Se, posteriormente, você decidir
                    devolver mais itens do mesmo pedido, será cobrada uma taxa fixa de 45Reais , que
                    será deduzida do seu reembolso.</p>
                <p>Nota: Se você precisar devolver itens de vários pedidos, solicite as
                    etiquetas de devolução separadamente, de cada pedido. Recomendamos aguardar a
                    devolução dos itens após o recebimento de todos os pacotes deste pedido, a fim
                    de evitar múltiplas cobranças de RL para um pedido.</p>
                <p>
                    <strong>2.</strong>Envio próprio (devolva por conta própria)</p>
                <p>O cliente escolhe a empresa de logística para fazer a devolução e o custo do
                    frete fica por conta do cliente.</p>
                <p>Uma vez efetuada a devolução, deve inserir o número de seguimento da sua
                    encomenda ou o recibo do envio, em "histórico de devoluções" dentro de "Os meus
                    pedidos" Se precisar de ajuda, não hesite em contactar o nosso serviço de apoio
                    ao cliente.</p>
                <p>Observação:</p>
                <p>1. Por favor, não envie seu retorno para o endereço de retorno em seu pacote.
                    Este não é o endereço de devolução e afetará o processamento da sua devolução.
                    Você só deve enviá-lo para o endereço que fornecemos.</p>
                <p>2. Por favor, confirme que não há outros produtos além dos itens SHEIN em seu
                    pacote de devolução. Não seremos responsáveis por enviar outros itens de volta
                    para você.</p>
                <br></br>
                <h3>Processo de Devolução</h3>
                <br></br>

                <p>1. Entre em sua conta LAMA.</p>
                <p>2. Encontre o pedido em Meus Pedidos, clique no botão "Devolver item".</p>
                <p>3. Selecione o (s) item (ns) que deseja devolver e indique o motivo. Escolha
                    o método de devolução para obter sua etiqueta de devolução pré-paga.</p>
                <p>4. Quando sua solicitação de devolução for bem-sucedida, os Correios enviarão
                    o código de devolução para seu e-mail e o número de telefone em seu endereço de
                    entrega. Ou você pode baixar a etiqueta de devolução (consulte a seção "Como
                    encontro a etiqueta de devolução que gerei?" Para obter detalhes).</p>
                <p>5. Dirija-se aos Correios e forneça o código de devolução ou etiqueta de
                    devolução. O atendente dos Correios imprimirá a etiqueta de devolução, para que
                    você não precise imprimir nada. (A etiqueta de devolução que fornecemos só
                    funciona no transporte do Brasil ).</p>
                <p>6. Observe que você não receberá um reembolso a menos que o produto que você
                    está devolvendo e a etiqueta de devolução sejam do mesmo pedido. (Se você tiver
                    vários pedidos, certifique-se de não misturar as etiquetas de devolução para
                    pedidos diferentes.)</p>
                <br></br>
                <strong>
                    <p>Como encontro a etiqueta de devolução que gerei?</p>
                </strong>
                <br></br>
                <p>Encontre o pedido devolvido em “Meus pedidos” → Clique em “Detalhes do
                    pedido” → Clique em “Registro de devolução e reembolso” no canto superior
                    direito → Clique em “Visualizar” para fazer o download.</p>
                <br></br>
                <strong>
                    <p>Pontos a serem observados ao devolver itens:</p>
                </strong>
                <br></br>
                <p>1. Você só pode devolver itens que não estejam usados, não lavados, não
                    danificados e que tenham as etiquetas originais anexadas e a embalagem original.</p>
                <p>2. Os seguintes itens não podem ser devolvidos: cuidados com o corpo, roupa
                    íntima, biquínis, beleza, materiais para eventos e festas, materiais de
                    bricolagem, suprimentos para animais de estimação, joias e acessórios (exceto
                    lenços, bolsas e cobertores). Não podemos oferecer reembolso em cosméticos se o
                    selo higiênico tiver sido quebrado.</p>
                <p>3. Itens com marcas não retornáveis e presentes não podem ser devolvidos.</p>
                <br></br>
                <strong>
                    <p>Quando receberei meu reembolso?</p>
                </strong>
                <br></br>
                <p>1. Os reembolsos serão aplicados no prazo de 7 dias após o recebimento do
                    pacote. Reembolsaremos para sua carteira LAMA, a menos que sejamos informados de
                    que o cliente deseja ser reembolsado em seu método de pagamento original. O
                    saldo de sua carteira SHEIN pode ser usado em sua próxima compra ou transferido
                    para sua conta.</p>
                <p>2. NÃO reembolsaremos a taxa de envio original e segura porque não são
                    reembolsáveis, a menos que enviemos o pedido completamente errado ou você não
                    receba o pacote.</p>
                <p>3. Durante temporadas de alto volume, como Black Friday ou Natal, um período
                    adicional de até 1 semana pode ser necessário para processar seus reembolsos.
                    Pedimos desculpas por qualquer inconveniente que isso possa causar.</p>
                <p>Nota: Se você tiver alguma dúvida sobre sua devolução, deverá contatar nosso
                    serviço de atendimento ao cliente dentro de 180 dias após a realização de seu
                    pedido.</p>
            </>
            </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion> 
        <AccordionSummary
        expandIcon={< ExpandMoreOutlined />}
        aria-controls="panel2a-content"
        id="panel2a-header">
        <Typography>Frete e Entrega</Typography>
        </AccordionSummary> 
        <AccordionDetails> 
          <Typography>
          <p>
            Na maioria dos casos, o pacote será entregue dentro do tempo estimado de
            chegada. O tempo de envio é estimado e começa a partir da data de pagamento do
            pedido, mas pode demorar mais do que a data prevista devido a endereço inválido,
            procedimentos de desembaraço aduaneiro, arranjos de voos, condições climáticas e
            outros fatores externos. Por favor, consulte as informações de rastreamento para
            a data de entrega mais precisa.</p>
          <p>Se seu pacote não foi entregue ou suas informações de rastreamento mostram
            que seu pacote foi entregue pela transportadora, mas você não o recebeu, você
            deve entrar em contato com o Serviço de Atendimento ao Cliente dentro de 90 dias
            a partir da data do pedido para verificar.
          </p>
          <p>Se houver outros problemas de pedidos, mercadorias e logística, você deve
            entrar em contato com o Serviço de Atendimento ao Cliente dentro de 180 dias a
            partir da data do pedido.
          </p>
          <p>
            Por favor clique no botão "Confirmar Entrega" dentro de 6 meses (a partir da
            data de envio). Depois disso, o botão ficará cinzento e não poderá ser utilizado
            para obter pontos adicionais.</p>
          <p>Devido ao limite de peso do nosso transportador, seu pedido pode ser dividido
            em vários pacotes para que possa ser entregue mais rapidamente. Obrigado pela
            sua compreensão.</p>
          </Typography> 
        </AccordionDetails>
      </Accordion > 
      
      <ContactContainer >
        <FlexItem style={{width:"100%"}}>
            <IconContent>
                <ContactPhone
                    size={60}
                    style={{
                    marginBottom: "10px"
                }}/>
            </IconContent>
            <FlexContent>
                <Text>
                    <Typography>
                        Entre em contato pelo email 
                        <p style={{color:"var(--background"}} href="mailto:faleconosco@lama.com.br"> faleconosco@lama.com.br</p>
                        <br></br>
                        Ou pelo telefone:
                        <p style={{color:"var(--background"}} href="tel:08002324560"> 0800 232 4560</p>
                    </Typography>
                </Text>
            </FlexContent>
        </FlexItem>

    </ContactContainer> 
    </Container>
    <Footer/> 
    <FooterMobile/> 
    </>
  )} 
  
export default Help;