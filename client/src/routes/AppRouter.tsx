import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
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

  // createRoutesFromElements(
  //   <Route path="/" element={<App />}>
  //     <Route path="cms" element={<CmsContainer />} />
  //     <Route path="login" element={<LogInForm />} />
  //   </Route>
  // )