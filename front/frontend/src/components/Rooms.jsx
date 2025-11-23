import React, { useMemo } from 'react';
import Header from './Header';
import MapView from './MapView';
import PropertyGrid from './PropertyGrid';
import HighlightsSection from './HighlightsSection';
import AffordabilitySection from './AffordabilitySection';
import RentOptionsSection from './RentOptionsSection';
import { mockListings } from '../data/mockListings';

const Rooms = () => {
  const rooms = useMemo(
    () => mockListings.filter((listing) => (listing.type || '').toLowerCase() === 'room'),
    [],
  );

  return (
    <>
      <Header onSearch={() => {}} isSearching={false} />
      <div className="main-content">
        <h1 className="page-title">Looking for a Room?</h1>
        <div style={{ width: '90%', maxWidth: '1400px', margin: '2rem auto', padding: '0 1rem' }}>
          <MapView listings={rooms} loading={false} error={null} />
        </div>
        <PropertyGrid listings={rooms} title="Our newest Rooms" />
        <HighlightsSection listings={rooms} />
        <AffordabilitySection listings={rooms} />
        <RentOptionsSection />
      </div>
    </>
  );
};

export default Rooms;