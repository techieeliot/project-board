import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Row, Col } from 'antd';

const gutters = {};
const vgutters = {};
const colCounts = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});



function App() {

  const [board, setBoard] = useState({
    gutterKey: 1,
    vgutterKey: 1,
    colCountKey: 2,
  })

  const onGutterChange = gutterKey => {
    setBoard({ ...board, gutterKey });
  };

  const onVGutterChange = vgutterKey => {
    setBoard({ ...board, vgutterKey });
  };

  const onColCountChange = colCountKey => {
    setBoard({ ...board, colCountKey });
  };

  const { gutterKey, vgutterKey, colCountKey } = board;
    const cols = [];
    const colCount = colCounts[colCountKey];
    let colCode = '';
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Lane key={i.toString()} span={24 / colCount}>
          <ColHeader>Template</ColHeader>
          <CardColumn>
            <CardStyled className="template-card" title="Template Card" bordered={false}>
            New Document Template
            </CardStyled>
          </CardColumn>
        </Lane>,
      );
      colCode += `  <Lane span={${24 / colCount}} />\n`;
    }

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
        <section>
          <NavListRight>
            <Icon>Icon</Icon>
            <Icon>Icon</Icon>
            <Icon>Icon</Icon>
            <Icon>Icon</Icon>
          </NavListRight>
        </section>
      </Nav>
      <Window>
        <Board>
          <RowStyled gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</RowStyled>
        </Board>
      </Window>
    </>
  )
}

export default App;

const Window = styled.main`
  min-height: 100vh;
  min-width: 100vw;
`

const Board = styled.section`
  margin: 4rem 0 0 1rem;
  min-width: 100vw;
  min-height: 200vw;
  overflow-y: scroll;
  overflow-x: scroll;
  display: flex;
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
const Icon = styled.li`
  min-width: 3rem;
  max-width: 20rem;
  text-align: center;
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
const NavListRight = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const RowStyled = styled(Row)`
  display: flex;
`

const Lane = styled(Col)`
  width: 200px;
  margin: 0.25rem;
`

const ColHeader = styled.h3`
  width: 200px;
  min-height: 1.5rem;
  background: #FAF7FA;
  padding: 0.5rem;
  text-align: center;
`

const CardColumn = styled(Col)`
  width: 200px;
  background: #E3E0E2;
  min-height: 100%;
`

const CardStyled = styled(Card)`
  min-height: 8rem;

  .ant-card-head {
    background-color: var(--template-card-header-color);
    font-weight: 700;
    color: var(--template-card-color);
    padding: 0 1rem;
  }

  .ant-card-body {
    padding: 0 1rem;
  }
`

