window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js', {scope: '/'})
        console.log('SW Register', reg)
      } catch (e) {
        console.log('SW NOT Register ')
      }
    }
  })