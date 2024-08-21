// import { fireEvent, render, screen, waitFor } from '@testing-library/react'
// import { describe, expect, test,vi } from 'vitest'
// import App from '../App'

// vi.mock('@acc/api', () => {
//   return {
//     getAllUsers: () => Promise.resolve({ data: [{id:"1",first_name:'John',last_name:'Doe', email:'john.doe@example.com'}] }),
//   };
// });

// // Mocking the ParcelComponent
// vi.mock('single-spa-react/parcel', () => ({
//   __esModule: true,
//   default: vi.fn().mockImplementation(() => <div>Mocked Parcel Component</div>),
// }));

// // Mocking System.import
// global.System = {
//   import: vi.fn().mockResolvedValue({
//     mount: vi.fn(),
//     unmount: vi.fn(),
//   }),
// };

// describe('Customer Component', () => {
//   test('should render Customer component', () => {
//     render(<App />);
//     expect(screen.getByText('Customers List Micro-Frontend React Application on port 4172')).toBeInTheDocument();
//     expect(screen.getByText('Load Profiles')).toBeInTheDocument();
//     expect(screen.getByText('(The details will be fetched from Utility Microfrontend application hosted on port 4174)')).toBeTruthy();

//   });

//   test('should load profiles on button click', async () => {
//     render(<App />);
//     fireEvent.click(screen.getByText('Load Profiles'));

//     await waitFor(() => {
//       expect(screen.getByText('John Doe')).toBeInTheDocument();
//       expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
//     });
//   });

//   test('should render the mocked Parcel component', () => {
//     render(<App />);

//     expect(screen.getByText('Mocked Parcel Component')).toBeInTheDocument();
//   });
// });