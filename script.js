// Break chain anim
function breakChain() {
  let chain = document.querySelector('#chain');
  chain.innerHTML = '&#xf0c1;';

  setTimeout(function () {
    chain.innerHTML = '&#xf127;';
  }, 1000);
}

// Call anim function
breakChain();

// Animate every 2 seconds (break chain)
setInterval(breakChain, 2000);

// Battery Charge anim
function chargeBattery() {
  let battery = document.querySelector('#battery');
  battery.innerHTML = '&#xf244;';

  setTimeout(function () {
    battery.innerHTML = '&#xf243;';
  }, 1000);

  setTimeout(function () {
    battery.innerHTML = '&#xf242;';
  }, 2000);

  setTimeout(function () {
    battery.innerHTML = '&#xf241;';
  }, 3000);

  setTimeout(function () {
    battery.innerHTML = '&#xf240;';
  }, 4000);
}

// Call anim function
chargeBattery();

// Animate every 5 seconds
setInterval(chargeBattery, 5000);
