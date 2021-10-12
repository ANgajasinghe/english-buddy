import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core'
import * as signalR from '@microsoft/signalr'
import {LoadingSubject} from './@core/subject-services'
import {useAppDispatch, useAppSelector} from './@core/app-store/hooks'
import {ApplicationUserModel} from './@core/models/applicationUser'
import {SaModel} from './@core/models/saModel'
import {theme} from './@ui/theme'
import ProtectedRoute from './@ui/components/ProtectedRoute'
import Layout from './@ui/layout'
import Loading from './@ui/components/loading'
import {setAuth} from './+auth/authSlice'
import {setReview} from './pages/comment/commentSlice'
import Login from './+auth/login'
import SignUp from './+auth/sign-up'
import Dashboard from './pages/dashboard'
import MyCourseDetails from './pages/my-courses/my-course-details'
import lesson from './pages/my-courses/my-course-details/lesson'
import MyCourses from './pages/my-courses/index'
import Frontpage from './pages/front-page/index'
import './App.css'

const App = () => {


  const dispatch = useAppDispatch()

  const [connection, setConnection] = useState({} as signalR.HubConnection)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    dispatch(setAuth({} as ApplicationUserModel))

    LoadingSubject.subscribe((res) => {
      setLoading(res)
    })


    return () => {
      LoadingSubject.unsubscribe()
    }

  }, [dispatch])

  useEffect(() => {
    const _connection = new signalR.HubConnectionBuilder()
      .withUrl('CommentNotification')
      .configureLogging(signalR.LogLevel.Information)
      .build()

    _connection.start().then(() => {
      _connection.invoke('sendcomment', 'This content is bad.')
      setConnection(_connection)
    })

    _connection.on('notifyresult', (data: SaModel) => {
      dispatch(setReview(data))
    })
  }, [dispatch])

  useAppSelector((state) => {
    if (state.comment.comment != null && state.comment.comment !== '') {
      connection.invoke('sendcomment', state.comment.comment)
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Loading loading={loading}/>
      <Router>
        <Switch>
          <Route exact path='/' component={Frontpage}/>
          <Route exact path='/sign-in' component={Login}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Layout>
            <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
            <ProtectedRoute exact path='/my-courses' component={MyCourses}/>
            <ProtectedRoute path='/lesson/:lessonId' component={lesson}/>
            <ProtectedRoute path='/my-course-details/:courseId' component={MyCourseDetails}/>

          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
