import React, { useState, useEffect } from 'react';

const withFetchData = (
  getFetcher,
  skip,
  mapDataToProps,
  key,
) => (Component) => {
  const WithFetchData = (props) => {
    if (skip(props)) {
      return <Component {...mapDataToProps(props)} />
    }

    const [response, setResponse] = useState({
      [key]: {
        data: null,
        error: null,
        loading: true,
      },
    });

    useEffect(() => {
      getFetcher(props).then(res => setResponse(res));
    }, []);

    const presentedProps = mapDataToProps({
      ...props,
      initialData: {
        ...response,
      },
    });

    return <Component {...presentedProps} />;
  };

  return WithFetchData;
};

export default withFetchData;
