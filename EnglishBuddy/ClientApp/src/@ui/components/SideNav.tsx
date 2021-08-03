import {Link, useLocation} from "react-router-dom";
import a1 from "../../pages/voice/components/a1.png";
import React from "react";

export default function SideNav() {
  return (
    <div className='relative bg-white h-screen'>
      <div className='flex justify-center flex-wrap cursor-pointer'
           style={{
             height: '100%'
           }}>
        <div className='text-center'>
          <div
            className='bg-purple-800 mt-1 flex justify-center mb-10 mx-1 flex-wrap content-center rounded-2xl h-12 w-12'>
            <div className='text-white'>
              <img src={a1}
                   alt=''
                   width='25px'
                   height='25px'/>
            </div>
          </div>
          <NavButton iconName='las la-user'
                     href={'/dashboard'}
                     label='My Profile'/>
          <NavButton iconName='las la-graduation-cap'
                     href={'/my-courses'}
                     label='Projects'/>
          <NavButton iconName='las la-blog'
                     href={'/'}
                     label='Testimonials'/>
          <NavButton iconName='las la-phone'
                     href={'/'}
                     label='Contact Us'/>
        </div>
      </div>
    </div>
  )
}

export function NavButton(props: {
  iconName: string
  label: string
  href: string
}) {
  const location = useLocation();

  return (
    <Link to={props.href}>
      <div>
        <i className={`${props.iconName} ${location.pathname === props.href ? 'activeNav' : ''}
         text-2xl p-2 m-2
         transform delay-150
         text-purple-800
         hover:bg-purple-800
         hover:text-white
         rounded-r-full`}/>
      </div>
    </Link>
  )
}
