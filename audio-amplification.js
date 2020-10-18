setInterval(() => {
    const videos = document.querySelectorAll('video')

    for (const video of videos) {
        if (video.dataset.amplified)
            continue

        const ctx = new AudioContext
        const gain_node = ctx.createGain()
        gain_node.gain.value = 3
        const source = ctx.createMediaElementSource(video)
        source.connect(gain_node)
        gain_node.connect(ctx.destination)
        video.dataset.amplified = true
    }
}, 2000)
