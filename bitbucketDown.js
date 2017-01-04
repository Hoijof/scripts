(function hoijof() {
    var e = document.getElementsByClassName('aui-banner-error');
    if (e[0] === undefined) {
        alert('YA SE PUEDE PUSH!');
    } else {
        console.log('not yet');
    }

    if (new Date().getHours() >= 15) {
        alert('AVISAR A CARLOTA');
    }
    setTimeout(function(){
        window.location = window.location;
    },10000);
})();
