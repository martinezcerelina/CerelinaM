import { useEffect, useRef } from 'react';

function useScrapbookReveal(options = {}) {
    const ref = useRef(null);
    const { threshold = 0.25, once = true } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.remove('scrapbook-pop');
                        void el.offsetWidth; // force reflow so removing+re-adding actually replays the animation
                        el.classList.add('scrapbook-pop');

                        if (once) observer.unobserve(el);
                    } else if (!once) {
                        el.classList.remove('scrapbook-pop');
                    }
                });
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once, threshold]);

    return ref;
}

export default useScrapbookReveal;