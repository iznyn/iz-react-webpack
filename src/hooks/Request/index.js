import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { useAppLoader } from 'components/Loader/App/Hook';
import useError from './Error';

/**
 * useRequest
 */
export default function useRequest(queryKey, queryFn, queryOptions = {}) {
  const { showError } = useError();

  const onError = (error) => {
    showError(error);
  };
  const queryOpts = { onError, ...queryOptions };
  return useQuery(queryKey, queryFn, queryOpts);
}

/**
 * useAppRequest
 *
 * Request with app loader
 */
export function useAppRequest(queryKey, queryFn, queryOptions = {}) {
  const { showLoader } = useAppLoader();

  useEffect(() => {
    // Show loader
    showLoader();
  }, []);

  const onSettled = () => {
    // setTimeout(() => showLoader(false), 3000);
    showLoader(false);
  };
  const queryOpts = { onSettled, ...queryOptions };
  return useRequest(queryKey, queryFn, queryOpts);
}
