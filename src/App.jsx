import {Button} from './components/StyledButton';
import {Wrap} from './components/Wrap';

function App() {
  
  const default_theme = {
    main: 'blue',
    hover: 'lightblue',
    focus: 'darkblue'
   };

   const succes ={
    main:'green',
    hover:'lightgreen',
    focus:'darkgreen' 
   };

   const error ={
    main:'#dc4b32',
    hover:'#f09b9a',
    focus:'#771616' 
   };
   const warning ={
    main:'#E9BA28',
    hover:'#f9e9bb',
    focus:'#af870e' 
   };
   const info={
    main:'#982cbc',
    hover:'#d0abf2',
    focus:'#3f156c' 
   }



  return (
      <Wrap>
        <Button theme={default_theme}>Default</Button>
        <Button theme={succes}>Succes</Button>
        <Button theme={error}>Error</Button>
        <Button theme={warning}>Warning</Button>
        <Button theme={info}>Info</Button>
      </Wrap>
  )
}

export default App

