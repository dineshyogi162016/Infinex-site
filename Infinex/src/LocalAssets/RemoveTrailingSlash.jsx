import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RemoveTrailingSlash = ()=> {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location]);

  return null;
}

export default RemoveTrailingSlash