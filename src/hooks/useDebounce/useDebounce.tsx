import { useEffect, useState } from 'react';

import { TUseDebounce } from './types';

const useDebounce = (props: TUseDebounce) => {
  const [debounceValue, setdebounceValue] = useState(props.value);

  useEffect(() => {
    const handleTime = setTimeout(() => {
      setdebounceValue(props.value);
    }, props.delay);

    return () => {
      clearTimeout(handleTime);
    };
  }, [props.delay, props.value]);

  return debounceValue;
};

export default useDebounce;
