

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const reg = await navigator.serviceWorker.register('./sw.js');
            console.log('SW: registered', reg);
        } catch(e) {
            console.log('SW: not registered', e);
        }
    })
}