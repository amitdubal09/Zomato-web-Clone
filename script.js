gsap.from('#scroll-btn', {
    x: 25,
    duration: 1
})
gsap.from('#text', {
    y: 150,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '#text',
        start: 'top 80%',
        end: 'top 10%'
    }
})
gsap.from(".op", {
    x: 150,
    duration: 1,
    scrollTrigger: {
        trigger: '.op',
        start: 'top 80%',
        end: 'top 10%'
    }
})
gsap.from("#burgur", {
    x: -250,
    duration: 1,
    scrollTrigger: {
        trigger: '.op',
        start: 'top 80%',
        end: 'top 10%'
    }
})
gsap.from('.semi-section', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.semi-section',
        start: 'top 90%',
    }
})
gsap.from(".coin1", {
    x: -250,
    duration: 1,
    scrollTrigger: {
        trigger: '.coin1',
        start: 'top 80%',
        end: 'top 10%'
    }
})
gsap.from(".coin2", {
    x: 250,
    duration: 1,
    scrollTrigger: {
        trigger: '.coin2',
        start: 'top 80%',
        end: 'top 10%'
    }
})
gsap.from('#app-block-2', {
    y: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '#app-block-2',
        start: 'top 90%',
    }
})