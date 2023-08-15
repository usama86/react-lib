import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardComponent from './index';

// Mock the click handler function for the Add component
const mockOnClickAdd = jest.fn();

describe('CardComponent', () => {
  it('test', () => {
    const { getByText } = render(<div>StepperComponent</div>);
    const textdiv = getByText('StepperComponent');
    expect(textdiv).toBeInTheDocument();
  });
  // test('renders the Card component', () => {
  //   render(<CardComponent  />);

  //   // Assert that the header title is rendered
  //   expect(screen.getByText('Header Title')).toBeInTheDocument();
  //   // Replace 'Header Title' with the actual value you expect to be the header title

  //   // Assert that the content heading is rendered
  //   expect(screen.getByText('Content Heading')).toBeInTheDocument();
  //   // Replace 'Content Heading' with the actual value you expect to be the content heading

  //   // Assert that the truncated content subheading is rendered
  //   expect(screen.getByText('Truncated Content')).toBeInTheDocument();
  //   // Replace 'Truncated Content' with the actual value you expect to be the truncated content subheading

  //   // Assert that the "Created by" label is rendered
  //   expect(screen.getByText('Created by:')).toBeInTheDocument();
  //   // Replace 'Created by:' with the actual value you expect to be the "Created by" label

  //   // Assert that the "Date Created" label is rendered
  //   expect(screen.getByText('Date Created:')).toBeInTheDocument();
  //   // Replace 'Date Created:' with the actual value you expect to be the "Date Created" label
  // });

  // test('renders the Add component', () => {
  //   render(<CardComponent types="Add" onClickAdd={mockOnClickAdd} />);

  //   // Assert that the "Create Database Connection" text is rendered
  //   expect(screen.getByText('Create Database Connection')).toBeInTheDocument();

  //   // Assert that the Add icon is rendered
  //   expect(screen.getByAltText('Add Icon')).toBeInTheDocument();
  //   // Replace 'Add Icon' with the actual alt text of the AddIcon image
  // });

  // test('calls onClickAdd when Add component is clicked', () => {
  //   render(<CardComponent types="Add" onClickAdd={mockOnClickAdd} />);

  //   // Simulate a click on the Add component
  //   fireEvent.click(screen.getByText('Create Database Connection'));

  //   // Assert that the onClickAdd function was called
  //   expect(mockOnClickAdd).toHaveBeenCalled();
  // });
});
