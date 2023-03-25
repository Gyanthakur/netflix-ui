import React from 'react'
import styled from 'styled-components';
import BackgroundImages from '../components/BackgroundImages'
import Header from '../components/Header'

const Container = styled.div`
    position: relative;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    width:100vw;
    height:100vh;
    display:grid;
    grid-template-rows:15vh 85vh;
    
`;

const Signup = () => {
  return (
  <Container>
    <BackgroundImages/>
    <div className="content">
    <Header/>
    <div className="body flex column a-center j-center">
        <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
                Ready to watch? Enter your email to create or restart membership
            </h6>
        </div>
        <div className="form">
            <input type="email" placeholder='email Address' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <button>Get Started</button>
        </div>
        <button>Login</button>
    </div>
    </div>
  </Container>
  )
}

export default Signup;
