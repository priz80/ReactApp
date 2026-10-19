import { styled } from "styled-components";

const InfoContainer = styled.div`
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
`;

const StatContainer=styled.div`
display: flex;
justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 15px;
`;

const StatsRow = styled.div`
  border: 1px solid #fff;
  border-radius: 0.25rem;
  padding: 10px 15px;
  font-weight: 400;
  line-height: 1.5;
  width: 36%;
  text-align: center;
`;

const AppInfo = ({ increased, employees }) => {
  return (
    <InfoContainer>
      <Title>Учет сотрудников в компании "Кадры Pro"</Title>
      <StatContainer>
      <StatsRow>
        <span>Общее число сотрудников: {employees}</span>
        {/* <span>Премию получат: {increased}</span> */}
      </StatsRow>
      <StatsRow>
        {/* <span>Общее число сотрудников: {employees}</span> */}
        <span>Премию получат: {increased}</span>
      </StatsRow>
      </StatContainer>
    </InfoContainer>
  );
};

export default AppInfo;
