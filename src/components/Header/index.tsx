import logoIgm from '../../assets/logo.svg';
import { Container, Content } from './styled';

interface HeaderProps{
    onOpenNewTransactionModal:()=> void;
}


export function Header({onOpenNewTransactionModal}:HeaderProps){


    return(
        <Container>
            <Content> 
                <img src={logoIgm} alt=""/>
                <button onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

            </Content>
        </Container>

    )
}