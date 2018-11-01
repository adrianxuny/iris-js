function Location(id, dateTime, type, latitude, longitude, altitude, bearing,
                  accuracy, speed, speedUnit, address, addressLineTwo, locality,
                  state, postalCode, country, deviceTypeId, mapImageUrl,
                  successfullyMapImaged, mapImagedCount, successfullyReverseGeocoded, reverseGeocodingCount) {
    Identifiable.call(this, id);
    Timestamped.call(this, dateTime);
    this.type = type;
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
    this.bearing = bearing;
    this.accuracy = accuracy;
    this.speed = speed;
    this.speedUnit = speedUnit;
    this.address = address;
    this.addressLineTwo = addressLineTwo;
    this.locality = locality;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
    this.deviceTypeId = deviceTypeId;
    this.mapImageUrl = mapImageUrl;
    this.successfullyMapImaged = successfullyMapImaged;
    this.mapImagedCount = mapImagedCount;
    this.successfullyReverseGeocoded = successfullyReverseGeocoded;
    this.reverseGeocodingCount = reverseGeocodingCount;
}

function forUserUpdate(id, dateTime, address) {
    return new Location(id, dateTime, "User", null, null, null, null, null, null, null, address, null, null, null, null,
        null, String(null), null, null, null, null, null);
}