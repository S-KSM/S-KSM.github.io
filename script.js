

// Add any JavaScript functionality if needed in the future.
// Generate a UUID

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
}

// Set the UUID as a cookie with a 30-day expiration
function setCookie(name, value, expirationDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Check if the UUID cookie already exists and set it if it doesn't
function checkUUID() {
  var uuid = getCookie("myCookieName");
  if (uuid == "") {
    uuid = generateUUID();
    setCookie("myCookieName", uuid, 30);
  }
  return uuid;
}

// Get the value of a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return "";
}
// Get the UUID from the cookie and check if it's even
function isUUIDEven(uuid) {
    var uuidNumber = parseInt(uuid.replace(/-/g, ''), 16);
    return uuidNumber % 1000 == 0;
  }
// Check the UUID and set the background color based on the value
function setBackground() {
  var uuid = checkUUID();
  if (isUUIDEven(uuid)) {
    document.body.style.backgroundColor = "#ECF0F1";
  } else {
    document.body.style.backgroundColor = "#2C3E50";
  }
}

// Call the setBackground function to set the background color
setBackground();
