import React, { useMemo, useState } from 'react';
import PropertyTeaser from './PropertyTeaser';
import './AffordabilitySection.css';

const AffordabilitySection = ({ listings = [] }) => {
  const [targetPrice, setTargetPrice] = useState(1500);
  const [propertyType, setPropertyType] = useState('Home');

  const suggested = useMemo(() => {
    let filtered = listings;
    if (propertyType) filtered = filtered.filter(l => !l.type || l.type === propertyType);
    if (targetPrice) filtered = filtered.filter(l => !l.price || l.price <= Number(targetPrice));
    if (filtered.length === 0) filtered = listings;
    return filtered.slice(0, 2);
  }, [listings, targetPrice, propertyType]);

  return (
    <section className="afford-section">
      <div className="afford-header">
        <h2>Find homes you can afford</h2>
        <p>Answer a few questions. We'll highlight homes you're likely to qualify for.</p>
      </div>

      <div className="afford-content">
        {/* Left: form card */}
        <div className="afford-form-card">
          <div className="form-row">
            <label>Suggested target price</label>
            <input
              className="price-input"
              type="number"
              min={0}
              value={targetPrice}
              onChange={e => setTargetPrice(e.target.value)}
              placeholder="e.g. 1500"
            />
          </div>

          <div className="form-row">
            <label>Property type</label>
            <div className="type-pills">
              {['Home','Apartment','Studio'].map(t => (
                <button
                  key={t}
                  className={`type-pill ${propertyType === t ? 'active' : ''}`}
                  onClick={() => setPropertyType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: suggested teasers */}
        <div className="afford-teasers">
          {suggested.map(item => (
            <PropertyTeaser key={item._id} listing={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffordabilitySection;
