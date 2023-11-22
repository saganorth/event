import React, { useState, useEffect } from 'react';


const OmradenData = () => {
  const [omraden, setOmraden] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/omraden')
      .then(response => {
        if (!response.ok) {
          throw new Error('Nätverkssvar var inte ok');
        }
        return response.json();
      })
      .then(data => {
        setOmraden(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Det gick inte att hämta data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Laddar...</div>;
  }

  
};

export default OmradenData;
