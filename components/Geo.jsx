import React, { PureComponent } from 'react';

class Geo extends PureComponent {
  state = {
    hasGeoSupport: null,
    // timestamp: null,
    coords: null,
    err: null,
  };

  componentDidMount() {
    const hasGeoSupport = 'geolocation' in navigator;
    this.setState({ hasGeoSupport });
    if (hasGeoSupport) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.setState({
            // timestamp,
            coords: { latitude: coords.latitude, longitude: coords.longitude },
          });
        },
        err => {
          this.setState({ err });
        },
        { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
      );
    }
  }

  render() {
    const { err, coords, hasGeoSupport } = this.state;
    if (err) {
      console.error(err);
      return <div> I failed with {`${err.message}`}</div>;
    }

    return (
      <div>
        {hasGeoSupport === null ? 'Detecting' : null}
        {!hasGeoSupport ? 'no Geo Support for me here' : null}
        {hasGeoSupport && !coords ? 'working on it...' : null}
        {coords ? (
          <p>
            You are here &nbsp;
            {coords.longitude} {coords.longitude}{' '}
          </p>
        ) : null}
      </div>
    );
  }
}

export default Geo;
