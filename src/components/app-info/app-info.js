import { styled } from "styled-components";

const InfoContainer = styled.div`
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
`;

const Title = styled.h1`
  margin-bottom: 15px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 30px;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  padding: 10px 15px;
  font-weight: 400;
  line-height: 1.5;
`;

const AppInfo = ({ increased, employees }) => {
  return (
    <InfoContainer>
      <Title>Учет сотрудников в компании "Кадры Pro"</Title>
      <StatsRow>
        <span>Общее число сотрудников: {employees}</span>
        <span>Премию получат: {increased}</span>
      </StatsRow>
    </InfoContainer>
  );
};

export default AppInfo;
