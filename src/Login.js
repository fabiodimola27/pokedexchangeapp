import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsConfig from "./aws-exports"
import { Amplify } from 'aws-amplify';


Amplify.configure(awsConfig);
const Login = () => {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ user }) => {
        if (user) {
          navigate('/home');
        }

        return (
          <div>
            <h1>Effettua il login</h1>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default Login;