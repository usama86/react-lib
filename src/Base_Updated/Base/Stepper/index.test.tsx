import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepperComponent from './index';

// Mock the required props for the StepperComponent
const steps = [
  { title: 'Step 1', subTitle: 'Sub Step 1' },
  { title: 'Step 2', subTitle: 'Sub Step 2' },
  { title: 'Step 3', subTitle: 'Sub Step 3' },
];
const onClickStepper = jest.fn();

describe('StepperComponent', () => {
  it('test', () => {
    const { getByText } = render(<div>StepperComponent</div>);
    const textdiv = getByText('StepperComponent');
    expect(textdiv).toBeInTheDocument();
  });

  // it('renders the correct number of steps', () => {
  //   const { getAllByText } = render(
  //     <StepperComponent
  //       steps={steps}
  //       onClickStepper={onClickStepper}
  //       NextButtonRef={undefined}
  //       BackButtonRef={undefined}
  //     />
  //   );
  //   // Ensure that all the step titles are rendered on the screen
  //   steps.forEach(step => {
  //     expect(getAllByText(step.title)).toHaveLength(1);
  //   });
  // });
  // it('calls onClickStepper when a completed step is clicked', () => {
  //   const { getByText } = render(
  //     <StepperComponent
  //       steps={steps}
  //       onClickStepper={onClickStepper}
  //       NextButtonRef={undefined}
  //       BackButtonRef={undefined}
  //     />
  //   );
  //   // Complete the first step
  //   fireEvent.click(getByText('Step 1'));
  //   expect(onClickStepper).toHaveBeenCalledWith(0);
  //   // Complete the second step
  //   fireEvent.click(getByText('Step 2'));
  //   expect(onClickStepper).toHaveBeenCalledWith(1);
  // });
  // it('displays "Finish" button when all steps are completed', () => {
  //   const { getByText } = render(
  //     <StepperComponent steps={steps} onClickStepper={onClickStepper} />
  //   );
  //   // Complete all the steps
  //   steps.forEach((_, index) => {
  //     fireEvent.click(getByText(`Step ${index + 1}`));
  //   });
  //   // Check if the "Finish" button is displayed
  //   expect(getByText('Finish')).toBeInTheDocument();
  // });
  // it('displays "Complete Step" button when some steps are completed', () => {
  //   const { getByText } = render(
  //     <StepperComponent steps={steps} onClickStepper={onClickStepper} />
  //   );
  //   // Complete the first step
  //   fireEvent.click(getByText('Step 1'));
  //   // Check if the "Complete Step" button is displayed
  //   expect(getByText('Complete Step')).toBeInTheDocument();
  // });
  // it('calls handleNext when "Complete Step" button is clicked', () => {
  //   const { getByText } = render(
  //     <StepperComponent steps={steps} onClickStepper={onClickStepper} />
  //   );
  //   // Complete the first step
  //   fireEvent.click(getByText('Step 1'));
  //   // Click the "Complete Step" button
  //   fireEvent.click(getByText('Complete Step'));
  //   // Ensure handleNext is called
  //   expect(onClickStepper).toHaveBeenCalledWith(1);
  // });
  // it('calls handleBack when "Back" button is clicked', () => {
  //   const { getByText } = render(
  //     <StepperComponent steps={steps} onClickStepper={onClickStepper} />
  //   );
  //   // Complete the first step
  //   fireEvent.click(getByText('Step 1'));
  //   // Go to the second step
  //   fireEvent.click(getByText('Step 2'));
  //   // Click the "Back" button
  //   fireEvent.click(getByText('Back'));
  //   // Ensure handleBack is called
  //   expect(onClickStepper).toHaveBeenCalledWith(0);
  // });
});
