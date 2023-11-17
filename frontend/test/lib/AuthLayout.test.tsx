import { render, screen } from '@testing-library/react';
import { useAppDispatch } from '@/redux/Hooks';
import { checkAuthentication } from '@/redux/services/authCheck';
import AuthLayout from '@/lib/AuthLayout';

// Define a mock function with mockReturnValue
const mockUseAppDispatch = jest.fn();
mockUseAppDispatch.mockReturnValue(jest.fn());

// Mock the useDispatch function from react-redux
jest.mock('@/redux/Hooks', () => ({
  useAppDispatch: mockUseAppDispatch,
}));

// Mock the checkAuthentication function
jest.mock('@/redux/services/authCheck', () => ({
  checkAuthentication: jest.fn(),
}));

describe('AuthLayout component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children and calls checkAuthentication on mount', () => {
    // Render the AuthLayout component with a child component
    const { getByText } = render(
      <AuthLayout>
        <div>Child Component</div>
      </AuthLayout>
    );

    // Ensure the children are rendered
       // Use screen.getByText to find the element
       const childComponent = screen.getByText('Child Component');

       // Ensure the children are rendered
       expect(childComponent).toBeInTheDocument();
    // Check if checkAuthentication is called on component mount
    expect(checkAuthentication).toHaveBeenCalled();
  });
});
