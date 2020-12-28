let distanceBtn = document.getElementById("distance-btn");
localStorage.setItem("fiekLat", "42.6498194");
localStorage.setItem("fiekLong", "21.1656237");

function calculate() {
  navigator.permissions.query({ name: "geolocation" }).then(function (result) {
    if (result.state == "granted") {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else if (result.state == "prompt") {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else if (result.state == "denied") {
      alert("Ju lutem jepni access location per te perdorur kete sherbim");
    }
  });
}

function setPosition(position) {
  let userLatitude = position.coords.latitude;
  let userLongitude = position.coords.longitude;
  let distance = getDistanceFromLatLonInKm(
    userLatitude,
    userLongitude,
    localStorage.getItem("fiekLat") + 0,
    localStorage.getItem("fiekLong") + 0
  );
  distanceBtn.innerHTML = distance + " km";
}

// e marre prej https://stackoverflow.com/q/18883601

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d.toFixed(2);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
