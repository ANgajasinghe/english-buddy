// import {createStyles, makeStyles, Theme, withStyles,} from '@material-ui/core/styles';
import {useAppSelector} from '../../@core/app-store/hooks';
import {Avatar} from '@material-ui/core';
// import Badge from '@material-ui/core/Badge';
import {SecondaryText} from './Text';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from 'react';

// const StyledBadge = withStyles((theme: Theme) =>
//   createStyles({
//     badge: {
//       width: '12px',
//       height: '12px',
//       backgroundColor: '#229E67',
//       color: '#229E67',
//       borderRadius: '50%',
//       boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       '&::after': {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         borderRadius: '50%',
//         animation: '$ripple 1.2s infinite ease-in-out',
//         border: '1px solid currentColor',
//         content: '""',
//       },
//     },
//     '@keyframes ripple': {
//       '0%': {
//         transform: 'scale(.8)',
//         opacity: 1,
//       },
//       '100%': {
//         transform: 'scale(2.4)',
//         opacity: 0,
//       },
//     },
//   })
// )(Badge);
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

export default function AppNavBar() {
  const appUser = useAppSelector((state) => state.auth.applicationUser);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar navbar-expand-lg navbar-light bg-primary pb-3'>
      <div className='container'>
        <div className='d-flex justify-content-between'
             style={{
               width: '100%'
             }}>
          <div className='navbar-brand'
               style={{
                 color: '#ffffff'
               }}>
            English Buddy
          </div>
          <div className='d-flex align-items-center'>
            <Avatar alt='User Profile'
                    src={appUser.profilePictureUrl}
                    style={{
                      width: '35px',
                      height: '35px',
                    }}/>
            <div className='ms-2'>
              <SecondaryText>
                <span style={{
                  color: '#ffffff',
                }}>
                  Hello, {appUser.firstName}
                </span>
                <br/>
                <span style={{
                  color: '#ffffff',
                }}>
                  <b aria-controls='simple-menu'
                     aria-haspopup='true'
                     onClick={handleClick}>
                    Your Account
                    <i className='ms-2 fas fa-caret-down'/>
                  </b>
                </span>
              </SecondaryText>
            </div>
            <Menu id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <small>Profile</small>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <small>My Account</small>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <small>Sign Out</small>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
