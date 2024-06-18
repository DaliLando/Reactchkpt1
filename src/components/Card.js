import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Image from './Image';
import Price from './Price';
import Desc from './Desc';

function Carte() {
  return (
    <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title>
          <Name/>
        </Card.Title>
        <Card.Text>
         <Desc/>
        </Card.Text>
        <Button variant="primary"><Price/>$</Button>
      </Card.Body>
    </Card>
  );
}

export default Carte;