import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


const translationEN = {
  welcomePage: {
    generalInfoTextHeading: `Are you looking for a convenient application that will be convinient
            to manage the process of setting and completing tasks?`,
  generalInfoText: `We are glad to present to your attention our application NAME. With
            it, you can easily manage your project, be aware of all the tasks
            and control the progress of their implementation.`,
  firstCard: 'Unlimited kanban boards, columns and tasks',
  secondCard: 'Simple and intuitive interface',
  thirdCard: `Build the workflow you want: add/edit/delete tasks, assign a team of
          performers and responsible`,
  fourthCard: `Tasks contain everything you need: You can specify additional info in
          task description and assign users`,
  fifthCard: 'Convenient search among the list of all your projects',
  aboutCourseHeading: 'About course',
  aboutCourse: `This application is the result of the collaboration of a team of
          students of the React 2022 Q3 group of the React Development course RS
          School is free-of-charge and community-based education program
          conducted by The Rolling Scopes developer community since 2013.
          Everyone can study at RS School, regardless of age, professional
          employment, or place of residence. The mentors and trainers of our
          school are front-end and javascript developers from different
          companies and countries.`,
  aboutTeamHeading: 'Our team',
  }
};

const translationRU = {
  welcomePage: {
    generalInfoTextHeading: `Вы ищете удобное приложение для управления разработки и завершения проектов?`,
  generalInfoText: `Рады представить вашему вниманию наше приложение ИМЯ. С
            ним, вы можете легко управлять своим проектом, быть в курсе всех задач
            и контролировать ход их выполнения.`,
  firstCard: 'Неограниченное количество канбан-досок, колонок и задач',
  secondCard: 'Простой и интуитивно понятный интерфейс',
  thirdCard: `Создавайте рабочий процесс по своему усмотрению: добавляйте/редактируйте/удаляйте задачи, назначайте команду
          исполнителей и ответственных`,
  fourthCard: `Задачи содержат все необходимое: Вы можете указать дополнительную информацию в
          описании задачи и назначение пользователей`,
  fifthCard: 'Удобный поиск среди списка всех ваших проектов',
  aboutCourseHeading: 'О курсе',
  aboutCourse: `Это приложение является результатом сотрудничества команды
          студентов группы React 2022 Q3 курса React Development RS
          Школа является бесплатной и общественной образовательной программой и
          проводится сообществом разработчиков The Rolling Scopes с 2013 года.
          Учиться в RS School может каждый, вне зависимости от возраста, профессионального
          работы или места жительства. Наставники и тренеры нашей
          школа — фронтенд- и javascript-разработчики из разных
          компании и стран.`,
  aboutTeamHeading: 'О команде',
  }
};
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;