import { Button, Container, Image, Wrapper } from './styled';
import Logo from '../../assets/svg/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <Image src={Logo} alt="Dt Money Logo" />
        <Button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </Button>
      </Wrapper>
    </Container>
  );
}
