import styled from "styled-components";

type Props = {};

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 5;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 70px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 1em;
`;

const TopSection = (props: Props) => {
  return (
    <TopSectionContainer>
      <Logo>EARTH</Logo>
      <Slogan>Our Home</Slogan>
    </TopSectionContainer>
  );
};

export default TopSection;
