import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {createStyles, Theme, withStyles,} from '@material-ui/core/styles';
import {useAppSelector} from '../../@core/app-store/hooks';

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      width: '15px',
      height: '15px',
      backgroundColor: '#fd726d',
      color: '#fd726d',
      borderRadius: '50%',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  })
)(Badge);

export default function ProfileImage() {
  const appUser = useAppSelector((state) => state.auth.applicationUser);

  return (
    <StyledBadge overlap='circle'
                 variant='dot'
                 anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'right',
                 }}>
      <Avatar alt='Profile Image'
              src={appUser.profilePictureUrl}
              style={{
                width: '70px',
                height: '70px',
                border: '2px',
                borderStyle: 'solid',
                borderColor: '#fd726d',
              }}/>
    </StyledBadge>
  );
}
