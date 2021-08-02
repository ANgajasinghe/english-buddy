import './style.css'
import {Button, makeStyles, TextField} from '@material-ui/core';
import {Link, useHistory, useRouteMatch} from 'react-router-dom';
import {useEffect, useState} from 'react'
import {Add, Get} from '../../@core/api-base';
import {ApplicationUserModel} from '../../@core/models/applicationUser';
import {useAppDispatch} from '../../@core/app-store/hooks'
import {setAuth} from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Login() {


  useEffect(() => {
    Get(["https://english-buddy-speech.herokuapp.com/"]).then((res) => {
      // console.log(res);
    })
  }, [])


  const dispatch = useAppDispatch();
  const classes = useStyles();
  useRouteMatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    try {
      const res = await Add(['ApplicationUsers', 'Login'], {email, password}) as ApplicationUserModel;
      dispatch(setAuth(res));
      history.push('/dashboard');
    } catch (e) {
      alert('Login failed');
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vw-100 vh-100'>
      <div>
        <div className='text-center'>
          <strong className='display-5 b-400'>
            <b>Sign In</b>
          </strong>
          <p className='mt-4 mb-5 h5'>
            New to this site?&nbsp;
            <Link to={'/sign-up'}
                  className='text-primary link-behaviour'>
              Sign Up
            </Link>
          </p>
          <div className='mt-5'>
            <form className={classes.root}
                  autoComplete='off'>
              <TextField onChange={e => setEmail(e.target.value)}
                         variant='filled'
                         label='Email address'
                         size='small'
                         id='my-input'
                         style={{
                           width: '350px'
                         }}/>
              <br/>
              <TextField onChange={e => setPassword(e.target.value)}
                         variant='filled'
                         label='Password'
                         type='password'
                         size='small'
                         id='my-input'
                         style={{
                           width: '350px'
                         }}/>
              <br/>
              <br/>
              <Button variant='contained'
                      onClick={loginHandler}
                      className='p-3'
                      color='primary'
                      style={{
                        width: '350px'
                      }}>
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
