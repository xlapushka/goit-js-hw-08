import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let temp = localStorage.getItem('videoplayer-current-time');

const timeUpdated = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(timeUpdated, 1000));

window.addEventListener('onload', restoreTimecode());
function restoreTimecode() {
  if (temp === null) {
    player.setCurrentTime(0);
  } else {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
}

// {
//   try {
//     // console.log(localStorage.getItem('videoplayer-current-time'));
//     player
//       .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//       .then(function (seconds) {
//         seconds = localStorage.getItem('videoplayer-current-time');
//       })
//       .catch(function (error) {
//         switch (error.name) {
//           case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//           default:
//             // some other error occurred
//             break;
//         }
//       });
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// // Avoid excessively updating the position while scrolling.
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
// var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
// jQuery(element).on('click', throttled);

// // Cancel the trailing throttled invocation.
// jQuery(window).on('popstate', throttled.cancel);
