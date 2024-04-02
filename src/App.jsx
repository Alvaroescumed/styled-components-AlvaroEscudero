import {Button} from './components/StyledButton';
import {Wrap} from './components/Wrap';

function App() {
  

  return (
      <Wrap>
        <Button>Default</Button>
        <Button succes>Succes</Button>
        <Button error>Error</Button>
        <Button warning>Warning</Button>
        <Button info>Info</Button>
      </Wrap>
  )
}

export default App

