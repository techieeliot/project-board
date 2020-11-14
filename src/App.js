import styled from 'styled-components'

function App() {
  return (
    <>
      <Nav>
        <section>
          <NavList>
            <LogoWrapper>Logo</LogoWrapper>
            <Title>
              <h1>Border Title</h1>
            </Title>
          </NavList>
        </section>
      </Nav>
      <Window>
        <Board>

        </Board>
      </Window>
    </>
  );
}

export default App;

const Window = styled.main`
  min-height: 100vh;
  min-width: 100vw;
`

const Board = styled.section`
  margin: 1rem 0 0 1rem;
  min-width: 100vw;
  min-height: 200vw;
  overflow-y: scroll;
  overflow-x: scroll;
`  

const Title = styled.li`
  text-align: left;
  color: #fff;
  min-width: 10rem;
  max-width: 40rem;
  min-height: 2rem;
  max-height: 4rem;
  font: 1.5rem; Arial, Helvetica, sans-serif;
`

const LogoWrapper = styled.li`
  min-width: 10rem;
  max-width: 20rem;
`

const Nav = styled.nav`
  min-width: 100vw;
  height: 4rem; 
  display: flex;
  justify-content: space-between;
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`

