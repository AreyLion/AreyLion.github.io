// проверка на браузер IE
function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}

if (isInternetExplorer() === true) {
    alert('Сочувствую, но ваш браузер IE. \nСмените браузер для корректной работы');
}