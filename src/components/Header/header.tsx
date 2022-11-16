import { Button, Container, Image, Wrapper } from './styled';
import Logo from '../../assets/svg/logo.svg';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src={Logo} alt="Dt Money Logo" />
        <Button type="button">Nova transação</Button>
      </Wrapper>
    </Container>
  );
}
