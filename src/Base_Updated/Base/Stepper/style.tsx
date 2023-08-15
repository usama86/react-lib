import { styled } from '@mui/material/styles';

export const stepperStyles = {
  mainDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '19px',
  },
  stepperStyle: { display: 'flex', gap: '16px' },
  stepButtonStyle: { display: 'flex', gap: '4px', p: '4px 8px ' },
  stepLabelStyle: {
    display: 'flex',
    gap: '12px',
  },
  stepTextStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  subTitleStyle: {
    color: '#7A7E8B',
    width: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'noWrap',
  },
};

export const QontoStepIconRoot = styled('div')<{
  ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  width: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
    boxShadow: '0 0 0 6px #F0F9ED',
    alignSelf: 'baseline',
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#005596',
    boxShadow: '0 0 0 6px #DDE5EC',
    alignSelf: 'baseline',
  },
  '& .QontoStepIcon-circle1': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#B8BAC7',
    alignSelf: 'baseline',
  },
}));
