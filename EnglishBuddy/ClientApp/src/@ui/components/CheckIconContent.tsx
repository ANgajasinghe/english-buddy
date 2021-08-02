import CheckIcon from '@material-ui/icons/Check';
import {SecondaryText} from './Text';

export default function CheckIconContent(props: any) {
  return (
    <small className='d-flex'>
      <small>
        <CheckIcon className='f-primary'
                   fontSize='small'
                   style={{
                     fontSize: '14px'
                   }}/>
      </small>
      <div className='ms-2'>
        <SecondaryText>
          <span style={{
            fontSize: '13px',
            fontFamily: 'Poppins , sans-serif',
            fontWeight: 'bold',
            color: 'f-primary',
          }}>
            {props.text}
          </span>
        </SecondaryText>
      </div>
    </small>
  );
}
