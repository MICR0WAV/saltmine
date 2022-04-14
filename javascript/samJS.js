window.onload = () => doit(0,0);

function doit(currentLeft,currentTop) {
    var dief = document.getElementById('he');

    var ww = Math.floor(Math.random() * window.innerWidth);
    var wh = Math.floor(Math.random() * window.innerHeight);
    var wd = Math.sqrt(Math.pow(Math.abs(ww - currentLeft), 2) + Math.pow(Math.abs(wh - currentTop), 2));

    var time = wd / 100
    dief.style.transition = "left " + time + "s, "+"top " + time + "s linear ";
    dief.style.left = ww + "px";
    dief.style.top = wh + "px";
    setTimeout(() => doit(ww,wh), time * 1000);
}
