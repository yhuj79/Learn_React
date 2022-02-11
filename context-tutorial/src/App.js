import ColorBox from './components/ColorBox';
import styled from 'styled-components'
import ColorContext from './contexts/color';

const AppDiv = styled.div`
  padding: 30px;
  display: flex;
`
function App() {
  return (
    <AppDiv>

      <ColorBox />

      <ColorContext.Provider value={{ color: 'red' }}>
        <ColorBox />
      </ColorContext.Provider>

    </AppDiv>
  );
}

export default App;
