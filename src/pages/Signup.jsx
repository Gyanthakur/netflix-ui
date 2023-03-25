import React from 'react'
import styled from 'styled-components';
import BackgroundImages from '../components/BackgroundImages'
import Header from '../components/Header'

const Container = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Signup = () => {
  return (
  <Container>
    <BackgroundImages/>
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
  </Container>
  )
}

export default Signup
