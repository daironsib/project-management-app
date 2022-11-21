import styled from 'styled-components';
import { styleVars, fonts } from '../../constants/constants';

const WelcomePageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  width: 80%;
  margin: 30px auto 0;
`;
const GeneralInfo = styled.div`
  display: flex;
  gap: 30px;
`;
const AboutProject = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;
const AboutProjectCard = styled.li`
  min-width: 120px;
  max-width: 190px;
  height: 300px;
  align-items: center;
  line-height: 170%;
  border: none;
  background-color: ${styleVars.white};
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  font-family: '${fonts.montserrat}';
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  border-radius: 7px;
`;
const AboutCourse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
const AboutTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 40px;
`;
const AboutTeamList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  list-style: none;
`;
const ComputerImage = styled.img`
  width: 300px;
  height: auto;
`;
const GeneralInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  font-size: 32px;
  font-family: '${fonts.raleway}';
`;

const GeneralInfoSubtext = styled.p`
  font-size: 24px;
  line-height: 150%;
`;

export {
  WelcomePageBlock,
  GeneralInfo,
  AboutProject,
  AboutCourse,
  AboutTeam,
  ComputerImage,
  GeneralInfoTexts,
  AboutProjectCard,
  AboutTeamList,
  GeneralInfoSubtext,
};
