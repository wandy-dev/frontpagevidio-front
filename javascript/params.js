function getURLParameter(name, url) {
  url = new URL(url);
  if (url.hostname == 'www.youtube.com') {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  } else if (url.hostname == 'youtu.be') {
    var pathname = new URL(url).pathname;
    return pathname.replace('/', '');
  };
};
