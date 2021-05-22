import { useQuery } from 'react-query';

export default function useRequest(queryKey, queryFn, options = {}) {
  const onError = (data) => {
    console.log(data);
  };
  const queryOpts = { onError, ...options };
  return useQuery(queryKey, queryFn, queryOpts);
}
