import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyGrid from '../components/PropertyGrid';
import { mockListings } from '../data/mockListings';

const Rentals = () => {
  const [params] = useSearchParams();
  const type = params.get('type');

  const filtered = useMemo(() => {
    if (!type) return mockListings;
    const map = { room: 'Room', home: 'Home', studio: 'Studio', apartment: 'Apartment' };
    const wanted = map[type.toLowerCase()] || type;
    return mockListings.filter(l => (l.type || '').toLowerCase() === wanted.toLowerCase());
  }, [type]);

  const title = type ? `Rentals: ${type[0].toUpperCase()}${type.slice(1)}` : 'All rentals';

  return (
    <div style={{ width: '100%', maxWidth: 1440, margin: '2rem auto' }}>
      <h1 style={{ textAlign: 'center', color: '#1a3a2e', fontWeight: 800, marginBottom: '1rem' }}>{title}</h1>
      <PropertyGrid listings={filtered} title={null} />
    </div>
  );
};

export default Rentals;
