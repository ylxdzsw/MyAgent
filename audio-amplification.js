document.body.addEventListener('play', e => {
    const video = e.target
    if (video.dataset.amplified)
        return

    const ctx = new AudioContext
    const gain_node = ctx.createGain()
    gain_node.gain.value = 2.5
    const source = ctx.createMediaElementSource(video)
    source.connect(gain_node)
    gain_node.connect(ctx.destination)
    video.dataset.amplified = true
}, true)
