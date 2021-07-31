import './style.css'
import {Button, makeStyles, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {ApplicationUserModel} from '../../@core/models/applicationUser';
import {Add} from '../../@core/api-base';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignIn = () => {
    Add(['ApplicationUsers'], {
      email,
      password,
      firstName: '',
      lastName: '',
      roleName: 'Student',
      gender: 'Male'
    } as ApplicationUserModel).then(res => {
      console.log(res)
    }).catch(err => console.log(err));
  }

  return (
    <div className='d-flex justify-content-center align-items-center vw-100 vh-100'>
      <div>
        <div className='text-center'>
          <strong className='display-5 b-400'>
            <b>Sign Up</b>
          </strong>
          <p className='mt-4 mb-5 h5'>
            Already a member?&nbsp;
            <Link to={'/'}
                  className='text-primary link-behaviour'>
              Sign In
            </Link>
          </p>
          <div className='mt-5'>
            <form className={classes.root} autoComplete='off'>
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
              <TextField variant='filled'
                         label='Confirm Password'
                         type='password'
                         size='small'
                         id='my-input'
                         style={{
                           width: '350px'
                         }}/>
              <br/>
              <br/>
              <Button onClick={onSignIn}
                      variant='contained'
                      className='p-3'
                      style={{
                        width: '350px'
                      }}
                      color='primary'>
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
