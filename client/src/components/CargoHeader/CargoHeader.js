import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';

const CargoHeader = () => (
  <Header aria-label="Blue Cargo">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      Blue Cargo
    </HeaderName>
    <HeaderNavigation aria-label="Blue Cargo">
      <HeaderMenuItem element={Link} to="/cargoitems">
        Cargo Items
      </HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);

export default CargoHeader;
