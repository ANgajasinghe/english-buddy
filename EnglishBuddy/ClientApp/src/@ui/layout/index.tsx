import './style.css';
import SideNav from '../components/SideNav';

export default function Layout(props: any) {
  return (
    <div className='h-screen'>
      {/* <div className="sm:hidden">
        Hi My name is jjj
      </div> */}

      <div className="flex">
        <div className='w-14 fixed z-50'>
          <SideNav/>
        </div>

        <div className='ml-10 w-full'>
          <div>

            {/* <AppNavBar /> */}
            <div className='container m-auto'>
              {props.children}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
