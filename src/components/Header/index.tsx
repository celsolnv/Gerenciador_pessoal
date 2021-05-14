import logoIgm from '../../assets/logo.svg';
import { Container, Content } from './styled';

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoIgm} alt=""/>
                <button>
                    Nova transação
                </button>
            </Content>
        </Container>

    )
}