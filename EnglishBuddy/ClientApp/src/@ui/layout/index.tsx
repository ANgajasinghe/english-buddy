import './style.css';
import AppNavBar from '../components/AppNavBar';

export default function Layout(props: any) {
  return (
    <div>
      <AppNavBar/>
      <div className='container m-auto'>
        {props.children}
      </div>
    </div>
  );
}
