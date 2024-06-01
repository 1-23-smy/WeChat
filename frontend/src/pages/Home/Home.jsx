import React from 'react';
import styles from './Home.module.css';
import {  useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card.jsx';
import Button from '../../components/shared/Button/Button.jsx';

const Home = () => {
  // const signInLinkStyle = {
  //   color: '#0077ff',
  //   fontWeight: 'bold',
  //   textDecoration: 'none',
  //   marginLeft: '10px',
  // };
  const history = useHistory();
  function startRegister() {
    history.push('/authenticate');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to WeChat!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get WeChat ready for everyone!
          While we wrap up the finishing touches, we’re adding people
          gradually to make sure nothing breaks.
        </p>
        <div>
          <Button onClick={startRegister} className={styles.button} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>
            Have an invite text? 
          </span>
          {/* <Link to="/login" style={signInLinkStyle}>Sign In</Link> */}
        </div>
      </Card>
    </div>
  );
};

export default Home;
