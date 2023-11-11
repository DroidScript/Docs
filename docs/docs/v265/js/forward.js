const versions = {"en":"v265"};
(function Forward(move = true) {
    const oldHost = 'symdstools.github.io', newHost = 'droidscript.github.io';
    if (location.host === oldHost && move) return moveSite();

    const pathname = location.pathname;
    const getLink = (m, add, lang = 'en') => `/Docs/docs${add || ''}/${versions[lang] || versions.en}/`;
    const newPath = 
        pathname.replace(/^\/Docs\/docs(-(\w\w))?\/(?!v\d+)/, getLink)
        .replace(/intro\/\d+/, 'intro/');
    console.log("suggested " + newPath);

    if (pathname === newPath || pathname === "/Docs/404.html") return;
    if (location.pathname === pathname) location.pathname = newPath;
    if (typeof onForward === "function") onForward(newPath);

    function moveSite() {
        const div = document.createElement('div');
        Object.assign(div.style, { backgroundColor: "red", padding: "5px", position: "fixed", zIndex: 1001, top: 0, width: "100%" });
        document.querySelector('html').appendChild(div);

        var timer = 4;
        const itvMove = setInterval((function moveTimer() {
            --timer;
            const link = `<a href=${JSON.stringify(location.href.replace(oldHost, newHost))}>${location.origin.replace(oldHost, newHost)}</a>`;
            div.innerHTML = `<big>This site permanently moved to ${link}. Please update links accordingly.</big>`

            if (timer > 0) {
                div.innerHTML += `\n<br><big>You are being forwarded automatically in ${timer}...</big> <a id="stay" href="#">[stay here]</div>`;
                div.querySelector("#stay").onclick = () => (clearInterval(itvMove), timer = 0, moveTimer(), Forward(false));
            }
            if (timer) return moveTimer;
            clearInterval(itvMove);
            location.host = newHost;
        })(), 1000);
    }
})();
