export const CardStyles = {
  CardStyle: {
    width: '309px',
    height: '100%',
    borderRadius: '12px',
    boxShadow: 'none',
    border: '1px solid #E2E5E9',
  },
  CardHeaderStyle: {
    '& .MuiCardHeader-action': { margin: '0px' },
    pb: '0px',
  },
  CardContentStyle: {
    p: '16px',
    pt: '8px',
    pb: '0px',
    display: 'flex',
    flexDirection: 'column',
    height: '123px',
  },
  CardDescriptionStyle: {
    color: '#323E4D',
    height: '48px', // Set the preferred height of the component
    lineHeight: '1.4', // Adjust line height as needed
    overflow: 'hidden',
    display: '-webkit-box', // For compatibility with older versions of Safari and iOS Safari
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2, // Show only two lines of text before applying ellipsis
    textOverflow: 'ellipsis', // Show ellipsis when content overflows
  },
  CardActionStyle: {
    p: '16px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    // ml: '0px',
  },
  CardActionBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    ml: '0px !important',
  },
  CardActionBox1: {
    display: 'flex',
    justifyContent: 'space-between',
    ml: '0px !important',
    width: '100%',
  },
  CardAddStyle: {
    width: '309px',
    height: '100%',
    borderRadius: '12px',
    boxShadow: 'none',
    border: '4px dashed #E2E5E9',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    cursor: 'pointer',
  },
  CardAddIcon: { width: '44px', height: '44px' },
};
