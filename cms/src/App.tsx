import CmsContainer from './components/CmsContainer';
import LogInForm from './components/LogInForm';
import { redirect } from 'react-router-dom';

function App() {
  const user: boolean = true;
  const loader = () => {
    if (!user) {
      return redirect("/login")
    }
    return null;
  }
  return (
    <>
        <CmsContainer />
        <LogInForm />
    </>
  );
}

export default App;
