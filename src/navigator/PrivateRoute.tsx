import React, { useEffect } from 'react';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils';


import PrivateLayout from '../components/layouts/PrivateLayout';


interface Props {
  children: React.ReactNode,
  pageName: string
}

const PrivateRoute = (
  {
    children,
    pageName
  }: Props
): JSX.Element => {
  let navigate = useNavigate();
  let location = useLocation();
  // const dispatch = useDispatch();
  // const authUserData = useSelector(selectAuthData);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      axios.defaults.headers.common.Authorization = '';
      localStorage.clear();
      navigate('/login');
    } else {
      navigate(location.pathname);
    }
  }, [location.pathname, navigate]);

  if (!isLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isLoggedIn()) {
    return <Navigate to="/not-found" state={{ from: location }} />;
  }

  // return <AppContainer pageName={pageName}>{children}</AppContainer>;
  return <PrivateLayout>{children}</PrivateLayout>
};

export default PrivateRoute;
