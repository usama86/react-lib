import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import BoxComponent from '../Box';
import TypographyComponent from '../Typography';
import { CardStyles } from './style';
import DatabasePlusIcon from './../../../assets/icon/database-plus.png';
import { getEnUSDate } from '../../../utils/common';
import { ItemType } from '../../../pages/DataConnections/DatabaseView';

type CardProps = {
  headerAvatar?: ReactNode;
  headerTitle?: string;
  headerSubTitle?: string;
  headerActionComponent?: ReactNode;
  contentHeading?: string;
  contentSubHeading?: string;
  createdName?: string;
  createdDate?: string;
  version?: string;
  transactionSet?: string;
  types?: string;
  AddText?: string;
  AddIcon?: string;
  onClickAdd?: () => void;
  item?: ItemType;
  height?: string;
  cardStyles?: any;
  onClickCard?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export enum CardTypes {
  StandardCard = 'Card',
  AddCard = 'Add',
}

export default function CardComponent({
  headerAvatar,
  headerTitle,
  headerSubTitle,
  headerActionComponent,
  contentHeading,
  contentSubHeading,
  createdName,
  createdDate,
  types,
  AddText,
  AddIcon,
  item,
  height,
  version,
  transactionSet,
  onClickAdd,
  cardStyles,
  onClickCard,
}: CardProps) {
  return (
    <>
      {types === CardTypes.StandardCard ? (
        <Card sx={{ ...CardStyles.CardStyle, ...cardStyles }} onClick={onClickCard}>
          <CardHeader
            avatar={headerAvatar}
            action={headerActionComponent ? headerActionComponent : null}
            title={headerTitle}
            subheader={headerSubTitle}
            sx={CardStyles.CardHeaderStyle}
          />
          {/* <BoxComponent
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {headerAvatar}
            {headerActionComponent}
          </BoxComponent> */}

          <CardContent sx={CardStyles.CardContentStyle}>
            <TypographyComponent
              variant="SmallHeading"
              sx={{ color: '#132640' }}
            >
              {contentHeading}
            </TypographyComponent>
            <BoxComponent sx={{ height: '104px' }}>
              <TypographyComponent
                variant="InputText"
                sx={CardStyles.CardDescriptionStyle}
              >
                {contentSubHeading}
              </TypographyComponent>
            </BoxComponent>
          </CardContent>
          <CardActions sx={CardStyles.CardActionStyle}>
            {version && (
              <BoxComponent sx={CardStyles.CardActionBox}>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#7A7E8B' }}
                >
                  Version:
                </TypographyComponent>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#121C2B' }}
                >
                  {version}
                </TypographyComponent>
              </BoxComponent>
            )}

            {transactionSet && (
              <BoxComponent sx={CardStyles.CardActionBox}>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#7A7E8B' }}
                >
                  Transaction Set
                </TypographyComponent>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#121C2B' }}
                >
                  {transactionSet}
                </TypographyComponent>
              </BoxComponent>
            )}

            {createdName && (
              <BoxComponent sx={CardStyles.CardActionBox}>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#7A7E8B' }}
                >
                  Created by:
                </TypographyComponent>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#121C2B' }}
                >
                  {createdName}
                </TypographyComponent>
              </BoxComponent>
            )}

            {createdDate && (
              <BoxComponent sx={CardStyles.CardActionBox1}>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#7A7E8B' }}
                >
                  Date Created:
                </TypographyComponent>
                <TypographyComponent
                  variant="LabelOSI"
                  sx={{ color: '#121C2B' }}
                >
                  {getEnUSDate(createdDate)}
                </TypographyComponent>
              </BoxComponent>
            )}
          </CardActions>
        </Card>
      ) : types === CardTypes.AddCard ? (
        <BoxComponent
          sx={{ ...CardStyles.CardAddStyle, height: height }}
          onClick={onClickAdd}
        >
          <img src={AddIcon} style={CardStyles.CardAddIcon} />
          <TypographyComponent variant="XSmallHeading" component="h1">
            {AddText}
          </TypographyComponent>
        </BoxComponent>
      ) : null}
    </>
  );
}

CardComponent.defaultProps = {
  types: 'Card', //  Card and Add
  AddText: 'Create Database Connection',
  AddIcon: DatabasePlusIcon,
  headerAction: () => {
    return;
  },
  height: '100%',
};
