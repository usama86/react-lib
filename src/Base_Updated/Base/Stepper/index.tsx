import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tickImg from './../../../assets/icon/tick.png';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import { QontoStepIconRoot, stepperStyles } from './style';
import { StepperProps } from '../../../utils/constants';
import TypographyComponent from '../Typography';
import BoxComponent from '../Box';

export default function StepperComponent({
  steps,
  NextButtonRef,
  BackButtonRef,
  onClickStepper,
}: StepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = (step: number, prevIndex: number) => () => {
    if (completed[prevIndex]) {
      setActiveStep(step);
      onClickStepper(step);
    }
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const QontoStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <img
            className="QontoStepIcon-completedIcon"
            src={tickImg}
            alt="complete icon"
          />
        ) : active ? (
          <div className="QontoStepIcon-circle" />
        ) : (
          <div className="QontoStepIcon-circle1" />
        )}
      </QontoStepIconRoot>
      //
    );
  };

  return (
    <Box sx={stepperStyles.mainDiv}>
      <TypographyComponent variant="SubTitle" component="p">
        Steps{' '}
      </TypographyComponent>
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="vertical"
        connector={null}
        sx={stepperStyles.stepperStyle}
      >
        {steps?.map((value, index) => (
          <Step key={value.title} completed={completed[index]}>
            <StepButton
              color="inherit"
              onClick={handleStep(index, index > 0 ? index - 1 : 0)}
              sx={stepperStyles.stepButtonStyle}
            >
              <StepLabel
                StepIconComponent={QontoStepIcon}
                sx={stepperStyles.stepLabelStyle}
              >
                <BoxComponent sx={stepperStyles.stepTextStyle}>
                  <TypographyComponent
                    variant="CTA_Button_M"
                    component="p"
                    sx={{ color: '#121C2B' }}
                  >
                    {value?.title}
                  </TypographyComponent>
                  <TypographyComponent
                    variant="LabelOSI"
                    component="p"
                    sx={stepperStyles.subTitleStyle}
                  >
                    {value?.subTitle}
                  </TypographyComponent>
                </BoxComponent>
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div style={{ display: 'none' }}>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                ref={BackButtonRef}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> */}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: 'inline-block' }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} ref={NextButtonRef}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
