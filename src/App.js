import Login from "./components/Authentication/Login/login";
import Signup from "./components/Authentication/SingUp/SignUp";
import Home from "./components/Authentication/Home/home";
import MainRoutes from "./components/Authentication/routes";
import { ToastProvider  } from 'react-toast-notifications';
function App() {
  return (
    <ToastProvider>
    <MainRoutes />
  </ToastProvider>
  );
}

export default App;
