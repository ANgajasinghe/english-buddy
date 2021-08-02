export default function SideNav() {
  return (
    <div className='relative shadow-lg h-screen'>
      <div className='flex justify-center flex-wrap cursor-pointer'
           style={{
             height: '100%'
           }}>
        <div className='text-center'>
          <div
            className='bg-purple-800 mt-1 flex justify-center mb-10 mx-1 flex-wrap content-center rounded-2xl h-14 w-14'>
            <div className='text-white'>
              EB
            </div>
          </div>
          <NavButton iconName='las la-user'
                     href={'/'}
                     label='My Profile'/>
          <NavButton iconName='las la-graduation-cap'
                     href={'/'}
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
  return (
    // <Link href={props.href} passHref={true} >
    <div>
      <i
        className={`${props.iconName} text-2xl p-2 m-2  transform delay-150  text-purple-800 hover:bg-purple-800 hover:text-white rounded-r-full`}/>
    </div>
    // </Link>
  )
}
