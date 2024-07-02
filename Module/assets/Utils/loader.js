export function loadStylesAndScripts(cssUrls, jsUrls) {
    return new Promise((resolve, reject) => {
        let loaded = 0;
        const totalCss = cssUrls.length;
        const totalJs = jsUrls.length;
        const total = totalCss + totalJs;

        const onLoad = () => {
            loaded++;
            if (loaded === total) {
                resolve();
            }
        };

        cssUrls.forEach(url => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;
            link.onload = onLoad;
            link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));
            document.head.appendChild(link);
        });

        const loadJsScriptsSequentially = (index) => {
            if (index >= totalJs) {
                return resolve();
            }

            const script = document.createElement("script");
            script.src = jsUrls[index];
            script.onload = () => loadJsScriptsSequentially(index + 1);
            script.onerror = () => reject(new Error(`Failed to load JS: ${jsUrls[index]}`));
            document.head.appendChild(script);
        };

        loadJsScriptsSequentially(0);
    });
}
