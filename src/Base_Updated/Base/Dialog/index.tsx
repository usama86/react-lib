import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import BoxComponent from '../Box';
import TypographyComponent from '../Typography';
import DividerComponent from '../Divider';

import ButtonComponent from '../Button';
import crossicon from './../../../assets/icon/cross_icon.png';

import { styles } from './style';
import { ButtonRefType, ButtonTypes } from '../../../utils/constants';
import CircularParogress from '../CircularProgress';

type IProps = {
  open: boolean;
  handleClose?: any;
  title?: String;
  subTitle?: String;
  handleSave?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  dialogChildrenStyle?: object;
  firstDivider?: boolean;
  duplicate?: () => void;
  handleNext?: () => void;
  handleDelete?: () => void; //added handle delete func
  showNext?: boolean;
  showBack?: boolean;
  handleBack?: () => void;
  maxHeight?: string;
  imgIcon?: string;
  saveButtonText?: string;
  isLoading?: boolean;
  isLoadingDelete?: boolean;
  isDisabledSave?: boolean;
  showPopupSave?: boolean;
  handlePopupSave?: () => void;
  popupSaveDisable?: boolean;
  [key: string]: any; // Allow any other additional props
};

function DialogComponent({
  open,
  handleClose,
  title,
  subTitle,
  children,
  handleSave,
  dialogChildrenStyle,
  firstDivider,
  duplicate,
  handleNext,
  handleDelete,
  showNext,
  maxHeight,
  imgIcon,
  saveButtonText,
  SaveButtonRef,
  isLoading,
  isLoadingDelete,
  isDisabledSave,
  showBack,
  handleBack,
  showPopupSave,
  handlePopupSave,
  popupSaveDisable,
  ...otherProps
}: IProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <BoxComponent sx={styles.mainDiv}>
        <BoxComponent sx={styles.dialogHeader}>
          <BoxComponent sx={styles.headerDiv}>
            <BoxComponent sx={styles.headerChildDiv}>
              {imgIcon && (
                <img
                  width={'40px'}
                  height={'40px'}
                  src={imgIcon}
                  style={{ cursor: 'pointer' }}
                />
              )}

              <TypographyComponent
                sx={styles.dialogText}
                variant="DialogText"
                component="p"
              >
                {title}
              </TypographyComponent>
            </BoxComponent>
            <img
              width={'15.38px'}
              height={'15.38px'}
              src={crossicon}
              style={{ cursor: 'pointer' }}
              onClick={handleClose}
            />
          </BoxComponent>
          {subTitle && (
            <TypographyComponent
              sx={styles.dialogSubtitle}
              variant="DialogSubTitle"
              component="p"
            >
              {subTitle}
            </TypographyComponent>
          )}
        </BoxComponent>
        {firstDivider && <DividerComponent sx={{ width: '100%' }} />}
        <DialogContent
          sx={{
            ...dialogChildrenStyle,
            p: '10px 24px',
            maxHeight: maxHeight ? maxHeight : '450px',
          }}
        >
          {children}
        </DialogContent>
        <DividerComponent sx={{ width: '100%' }} />
        <DialogActions sx={styles.dialogAction}>
          <BoxComponent sx={styles.buttonBox}>
            <ButtonComponent
              //sx={styles.cancelButton}
              sx={{ width: '96px' }}
              types={ButtonTypes.White}
              onClick={handleClose}
              variant="CTA_Button_L"
            >
              Cancel
            </ButtonComponent>
            {showBack && (<ButtonComponent
              sx={{ width: '82px' }}
              types={ButtonTypes.White}
              onClick={handleBack}
              variant="CTA_Button_L"
            >
              Back
            </ButtonComponent>)
            }
            {showPopupSave && (<ButtonComponent
              disabled={popupSaveDisable}
              sx={{ width: '82px' }}
              types={ButtonTypes.Black}
              onClick={handlePopupSave}
              variant="CTA_Button_L"
            >
              Save
            </ButtonComponent>)
            }
            {duplicate && (
              <ButtonComponent sx={styles.duplicateButton} onClick={duplicate}>
                Duplicate
              </ButtonComponent>
            )}
            {!showNext && handleSave && (
              <ButtonComponent
                sx={{
                  //...styles.saveButton,
                  width: '88px',
                  backgroundColor: isDisabledSave ? '#C5C7D4' : '#132640',
                }}
                types={ButtonTypes.Black}
                variant="CTA_Button_L"
                onClick={handleSave}
                disabled={
                  isLoading
                    ? isLoading
                    : isDisabledSave
                      ? isDisabledSave
                      : false
                }
                isLoading={isLoading}
              >
                {saveButtonText}
              </ButtonComponent>
            )}
            {showNext && (
              <ButtonComponent sx={styles.saveButton} onClick={handleNext}>
                Next
              </ButtonComponent>
            )}
            {handleDelete && (
              <ButtonComponent
                sx={styles.saveButton}
                onClick={handleDelete}
                disabled={isLoadingDelete ? isLoadingDelete : false}
                isLoading={isLoadingDelete}
              >
                Delete
              </ButtonComponent>
            )}
          </BoxComponent>
        </DialogActions>
      </BoxComponent>
    </Dialog>
  );
}

export default DialogComponent;

DialogComponent.defaultProps = {
  open: false,
  children: <></>,
  handleClose: () => { },
  title: 'I am title',
  //handleSave: () => {},
  firstDivider: true,
  maxHeight: '450px',
  saveButtonText: 'Save',
};
