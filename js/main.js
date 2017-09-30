$(document).ready(function () {
	setTimeout(redirect, 2000);
});

function redirect() {
	var redirect = getUrlParameter("website");
	if (!redirect) { return; }
	var url = window.location.href;
	redirect += "?"+url.substr(url.indexOf('&')+1);
	window.location.replace(redirect);
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};