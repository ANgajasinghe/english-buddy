import {Button, makeStyles, TextField} from '@material-ui/core'
import {Link, useHistory, useRouteMatch} from 'react-router-dom'
import {useState} from 'react'
import {Add} from '../../@core/api-base'
import {ApplicationUserModel} from '../../@core/models/applicationUser'
import {useAppDispatch} from '../../@core/app-store/hooks'
import {setAuth} from '../authSlice'
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

export default function Login() {
  const dispatch = useAppDispatch()

  const classes = useStyles()

  useRouteMatch()

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async () => {
    try {
      const res = await Add(['ApplicationUsers', 'Login'], {email, password}) as ApplicationUserModel
      dispatch(setAuth(res))
      history.push('/dashboard')
    } catch (e) {
      alert('Login failed')
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vw-100 vh-100'>
      <div>
        <div className='text-center'>
          <strong className='display-5 b-400'>
            LOGIN
          </strong>
          <p className='mt-5 mb-5 h5'>
            Don't have an account yet?&nbsp;
            <Link to={'/sign-up'}
                  className='text-primary link-behaviour'>
              Register
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
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
