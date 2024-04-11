import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from './Components/styles/Container.styled';
import GlobalStyles from './Components/styles/Global.styled';
import Card from './Components/Card';
import { content } from './utils/content'

const theme = {
  colors: {
    header: '#ebfbff',
    footer: '#669999',
    body: '#fff'
  },
  mobile: '768px'
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {
          content.map((item) => {
            return(
              <Card id={item.id} title={item.title} body={item.body} image={item.image}/>
            )
          })
        }
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
