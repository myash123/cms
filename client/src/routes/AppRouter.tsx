import { createBrowserRouter } from 'react-router-dom';
import LogInForm from '../components/LogInForm';
import CmsContainer from '../components/CmsContainer';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LogInForm />
  },
  {
    path: "/cms",
    element: <CmsContainer />
  }
]);

export default AppRouter;
