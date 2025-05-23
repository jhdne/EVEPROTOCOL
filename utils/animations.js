function observeElements(selector, callback) {
    try {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });

        return observer;
    } catch (error) {
        console.error('Animation observer error:', error);
        reportError(error);
    }
}

function animateValue(obj, start, end, duration) {
    try {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    } catch (error) {
        console.error('Value animation error:', error);
        reportError(error);
    }
}
