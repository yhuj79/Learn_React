import ColorBox from './components/ColorBox';
import styled from 'styled-components'
import { ColorProvider } from './contexts/color';

const AppDiv = styled.div`
  padding: 30px;
`
function App() {
  return (
    <AppDiv>
      <ColorProvider>
        <div>
          <ColorBox />
        </div>
      </ColorProvider>
    </AppDiv>
  );
}

export default App;
