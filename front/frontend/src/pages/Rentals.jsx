import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
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
    <>
      <Header onSearch={() => {}} isSearching={false} />
      <div className="main-content">
        <h1 className="page-title">{title}</h1>
        <PropertyGrid listings={filtered} title={null} />
      </div>
    </>
  );
};

export default Rentals;
