
import React, {useState} from 'react'
import styled from 'styled-components';
import BackgroundImages from '../components/BackgroundImages'
import Header from '../components/Header'
import {firebaseAuth} from "../utils/firebase-config"
import { createUserWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 1.3rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
         grid-template-columns: ${({ showPassword }) =>
           showPassword ? "1fr 1fr" : "2fr 1fr"}; 
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({
        email:"",
        password:"",
    })

    const handleSignIn = async () => {
        try {
          const { email, password } = formValues;
          await createUserWithEmailAndPassword(firebaseAuth,email,password)
        } catch (err) {
          console.log(err);
        }
      };

      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
      });
  return (
  <Container showPassword={showPassword}>
    <BackgroundImages/>
    <div className="content">
    <Header login />
    <div className="body flex column a-center j-center">
        <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
                Ready to watch? Enter your email to create or restart membership
            </h6>
        </div>
        <div className="form">
            <input type="email" placeholder='email Address' name='email' value={formValues.email} 
            onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value,})} />
            {
                showPassword && (
                    <input type="password" placeholder='Password' name='password'
                    value={formValues.password} 
                    onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value,})} />

                )
            }
            {
                !showPassword && (
                    <button onClick={()=>setShowPassword(true)}>Get Started</button>

                )
            }

        </div>
        <button onClick={handleSignIn}>Sign up</button>
    </div>
    </div>
  </Container>
  )
}

export default Signup;
