import React from 'react';
import ComputerImg from '../../assets/images/computer.png';
import {
  WelcomePageBlock,
  GeneralInfo,
  AboutProject,
  AboutCourse,
  AboutTeam,
  ComputerImage,
  GeneralInfoTexts,
  AboutProjectCard,
  AboutTeamList,
} from './style';

const WelcomePage = () => {
  return (
    <WelcomePageBlock>
      <GeneralInfo>
        <GeneralInfoTexts>
          <h3>
            Are you looking for a convenient application that will be convenient
            to manage the process of setting and completing tasks?
          </h3>
          <p>
            We are glad to present to your attention our application NAME. With
            it, you can easily manage your project, be aware of all the tasks
            and control the progress of their implementation.
          </p>
        </GeneralInfoTexts>
        <ComputerImage src={ComputerImg} alt='computer' />
      </GeneralInfo>
      <AboutProject>
        <AboutProjectCard>
          Unlimited kanban boards, columns and tasks
        </AboutProjectCard>
        <AboutProjectCard>Simple and intuitive interface</AboutProjectCard>
        <AboutProjectCard>
          Build the workflow you want: add/edit/delete tasks, assign a team of
          performers and responsible
        </AboutProjectCard>
        <AboutProjectCard>
          Tasks contain everything you need: You can specify additional info in
          task description and assign users
        </AboutProjectCard>
        <AboutProjectCard>
          Convenient search among the list of all your projects
        </AboutProjectCard>
      </AboutProject>
      <AboutCourse>
        <h3>About course</h3>
        <p>
          This application is the result of the collaboration of a team of
          students of the React 2022 Q3 group of the React Development course RS
          School is free-of-charge and community-based education program
          conducted by The Rolling Scopes developer community since 2013.
          Everyone can study at RS School, regardless of age, professional
          employment, or place of residence. The mentors and trainers of our
          school are front-end and javascript developers from different
          companies and countries.
        </p>
      </AboutCourse>
      <AboutTeam>
        <h3>Our team</h3>
        <AboutTeamList>
          <li>
            <h4>Artem Sokolov</h4>
            <p>Frontend developer, Teamlead</p>
          </li>
          <li>
            <h4>Alena Dozortseva</h4>
            <p>Frontend developer</p>
          </li>
          <li>
            <h4>Maxim Rybakov</h4>
            <p>Frontend developer</p>
          </li>
        </AboutTeamList>
      </AboutTeam>
    </WelcomePageBlock>
  );
};

export default WelcomePage;
