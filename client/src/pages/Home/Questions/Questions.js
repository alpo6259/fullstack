import { Link } from 'react-router-dom';
import CONSTANTS from '../../../constants';
import questionsInfo from './questionsInfo.json';
import styles from './Questions.module.sass';

function Questions () {
  const mapListQuestions = (q, i) => (
    <li key={i} className={styles.listItem}>
      <div className={styles.iconBg}>
        <i className={`${q.icon}`}></i>
      </div>
      <div className={styles.listItemInfo}>
        <h4>{q.title}</h4>
        <p>
          {q.body} <Link to='/'>{q.link}</Link>
        </p>
      </div>
    </li>
  );
  return (
    <div className={styles.questionsContainer}>
      <div className={styles.questionsList}>
        <ul>{questionsInfo.map(mapListQuestions)}</ul>
      </div>
      {/*  */}
      <div className={styles.questionsContact}>
        <h4>Questions?</h4>
        <p>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        <button className={styles.questionsBtn}>Schedule Consultation</button>
        <a href={`tel:+${CONSTANTS.CONTACT_INFO.TEL}`}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt='phone' />
            <span>{CONSTANTS.CONTACT_INFO.TEL}</span>
          </div>
        </a>
        <i className='fas fa-phone-alt' style={{ color: 'white' }}></i>
        <span>Call us for assistance</span>
      </div>
    </div>
  );
}

export default Questions;
