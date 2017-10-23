export default {
    updateOrAddUrlParameter(param, value) {
        const regExp = new RegExp(param + "(.+?)(&|$)", "g");
        var newUrl = window.location.href.replace(regExp, param + "=" + value + "$2");

        if (! newUrl.includes(param + '=' + value)) {
            if (window.location.href.includes('?')) {
                newUrl = window.location.href.replace(window.location.hash,"") + '&' + param + '=' + value + window.location.hash;
            } else {
                newUrl = window.location.href.replace(window.location.hash,"") +  '?' + param + '=' + value + window.location.hash;
            }
        }

        window.history.pushState("", "", newUrl);
    },

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
}