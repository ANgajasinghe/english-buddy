import {useState} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import {ApplicationUserModel} from '../../@core/models/applicationUser'
import {Add} from '../../@core/api-base'
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

export default function SignUp() {
  const classes = useStyles()

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
    }).catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center vw-100 vh-100'>
      <div className='text-center card bg-secondary p-5 rounded-lg'>
        <div className='font-bold text-4xl'>
          REGISTER
        </div>
        <p className='mt-5 mb-5 h5'>
          Already have an account?&nbsp;
          <Link to={'/sign-in'}
                className='text-primary link-behaviour'>
            Login
          </Link>
        </p>
        <div className='mt-4'>
          <form className={classes.root} autoComplete='off'>
            <input onChange={e => setEmail(e.target.value)}
                   placeholder='Email Address'
                   className='p-3 outline-none rounded-lg'
                   style={{
                     width: '350px'
                   }}/>
            <br/><br/>
            <input onChange={e => setPassword(e.target.value)}
                   placeholder='Password'
                   type='password'
                   className='p-3 outline-none rounded-lg'
                   style={{
                     width: '350px'
                   }}/>
            <br/><br/>
            <input placeholder='Confirm Password'
                   type='password'
                   className='p-3 outline-none rounded-lg'
                   style={{
                     width: '350px'
                   }}/>
            <br/><br/><br/>
            <button className='text-white justify-center text-uppercase bg-blue-800 hover:bg-blue-900 py-2 rounded-lg'
                    onClick={onSignIn}
                    value='Login'
                    type='button'
                    style={{
                      width: '350px'
                    }}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
