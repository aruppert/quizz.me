import React from 'react';

function useFetch(url) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function doFetch() {
      const response = await fetch(url, {
        method: 'GET'
      });
      const newData = await response.json();
      setData(newData);
    }
    doFetch();
    // eslint-disable-next-line
  }, []);

  return data;
}

export default useFetch;
