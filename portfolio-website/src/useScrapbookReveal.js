import { useEffect, useRef } from 'react';

function useScrapbookReveal(options = {}) {
    const ref = useRef(null);
    const { threshold = 0.25, once = true } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Event delegation: listen on the section itself, works even for
        // .pop-item elements added later (e.g. via tab switching / conditional rendering)
        const handleAnimationEnd = (e) => {
            if (e.animationName === 'scrapbook-drop' && e.target.classList.contains('pop-item')) {
                e.target.classList.add('animation-done');
            }
        };

        el.addEventListener('animationend', handleAnimationEnd);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = el.querySelectorAll('.pop-item');
                        items.forEach((item) => item.classList.remove('animation-done'));

                        el.classList.remove('scrapbook-pop');
                        void el.offsetWidth;
                        el.classList.add('scrapbook-pop');

                        if (once) observer.unobserve(el);
                    } else if (!once) {
                        el.classList.remove('scrapbook-pop');
                        const items = el.querySelectorAll('.pop-item');
                        items.forEach((item) => item.classList.remove('animation-done'));
                    }
                });
            },
            { threshold }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            el.removeEventListener('animationend', handleAnimationEnd);
        };
    }, [once, threshold]);

    return ref;
}

export default useScrapbookReveal;