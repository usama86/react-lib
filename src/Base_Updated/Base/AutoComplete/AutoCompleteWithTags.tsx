// import { Autocomplete, Chip, TextField } from '@mui/material';
// import TextFieldComponent from '../TextField';

// type AutoCompleteTagProps = {
//   label?: string;
// };

// export default function AutoCompleteTag({ label }: AutoCompleteTagProps) {
//   const data = [
//     { value: 'hehe', label: 'hehe' },
//     { value: 'haha', label: 'haha' },
//   ];
//   return (
//     <Autocomplete
//       clearIcon={false}
//       options={[]}
//       freeSolo
//       fullWidth
//       limitTags={3}
//       sx={{ overflow: 'hidden' }}
//       disabled
//     //   value={data[0].value}

//       renderTags={(value, props) =>
//         value.map((option, index) => (
//           <Chip label={option} {...props({ index })} />
//         ))
//       }
//       renderInput={params => <TextFieldComponent label={label} {...params} />}
//     />
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TypographyComponent from '../Typography';

export interface ChipData {
  label: string;
  value: string;
  index: number;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

type AutoCompleteTagProps = {
  label?: string;
  chipData?: ChipData[];
};

export default function AutoCompleteTag({
  label,
  chipData,
}: AutoCompleteTagProps) {
  //   const [chipData, setChipData] = React.useState<readonly ChipData[]>([
  // { key: 0, label: 'Angular' },
  // { key: 1, label: 'jQuery' },
  // { key: 2, label: 'Polymer' },
  // { key: 3, label: 'React' },
  // { key: 4, label: 'Vue.js' },
  //   ]);

  //   const handleDelete = (chipToDelete: ChipData) => () => {
  //     setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  //   };

  const chipDataExist = Boolean(chipData && chipData.length > 0);

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        m: 0,
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #E2E5E9',
        minHeight: '49.78px',
        p: chipDataExist ? 0.5 : '13px 16px',
      }}
      component="ul"
    >
      {chipDataExist ? (
        chipData?.map((data, index: number) => {
          return (
            <ListItem key={index}>
              <Chip
                label={data.label}
                //   onDelete={handleDelete(data)}
                sx={{ maxWidth: '232px', overflow: 'ellipsis' }}
              />
            </ListItem>
          );
        })
      ) : (
        <TypographyComponent variant="Body_Content_M" component="p">
          Select Code
        </TypographyComponent>
      )}
    </Paper>
  );
}
