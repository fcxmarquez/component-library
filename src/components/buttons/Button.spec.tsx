import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {
    const component = render(<Button>Hello</Button>);

    screen.getByText('Hello');

    console.log(prettyDOM(component.container));
  });

  it('clicking the button calls event handler once', () => {
    const mockHandler = jest.fn();

    const component = render(<Button onClick={mockHandler}>Hello</Button>);

    const button = component.getByText('Hello');

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
