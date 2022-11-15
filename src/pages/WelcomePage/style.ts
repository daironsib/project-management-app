import styled from 'styled-components';

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
`;
const AboutProjectCard = styled.li`
  width: 17%;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  padding: 8px 15px;
  border-radius: 3px;
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
};
