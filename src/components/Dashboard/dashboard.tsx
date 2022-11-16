import { Container } from './styled';
import { Summary } from '../Summary/summary';
import { TransactionTable } from '../TransactionTable/transactionTable';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
