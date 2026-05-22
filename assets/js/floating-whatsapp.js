(function () {
    const script = document.currentScript;
    const phone = (script && script.dataset.phone ? script.dataset.phone : '6589815186').replace(/\D/g, '');
    const label = script && script.dataset.label ? script.dataset.label : 'Contact us on WhatsApp';

    if (!phone) return;

    function mountFloatingWhatsapp() {
        if (document.querySelector('.floating-whatsapp')) return;

        if (!document.getElementById('floating-whatsapp-styles')) {
            const style = document.createElement('style');
            style.id = 'floating-whatsapp-styles';
            style.textContent = `
            .floating-whatsapp {
                position: fixed;
                right: clamp(18px, 3vw, 32px);
                bottom: calc(22px + env(safe-area-inset-bottom));
                z-index: 60;
                width: 52px;
                height: 52px;
                border-radius: 9999px;
                background: #7E8B63;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 14px 30px rgba(126, 139, 99, 0.28);
                transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
            }

            .floating-whatsapp::before {
                content: '';
                position: absolute;
                inset: -8px;
                border-radius: inherit;
                background: rgba(126, 139, 99, 0.18);
                animation: whatsapp-pulse 2.2s ease-out infinite;
            }

            .floating-whatsapp i {
                position: relative;
                font-size: 28px;
                line-height: 1;
                animation: whatsapp-vibrate 1.55s ease-in-out infinite;
            }

            .floating-whatsapp:hover {
                transform: translateY(-2px);
                background: #263238;
                box-shadow: 0 18px 38px rgba(38, 50, 56, 0.24);
            }

            @keyframes whatsapp-pulse {
                0% {
                    transform: scale(0.86);
                    opacity: 0.75;
                }
                70%, 100% {
                    transform: scale(1.22);
                    opacity: 0;
                }
            }

            @keyframes whatsapp-vibrate {
                0%, 54%, 100% {
                    transform: rotate(0deg);
                }
                6% {
                    transform: rotate(-15deg) scale(1.04);
                }
                12% {
                    transform: rotate(13deg) scale(1.04);
                }
                18% {
                    transform: rotate(-12deg) scale(1.03);
                }
                24% {
                    transform: rotate(10deg) scale(1.03);
                }
                30% {
                    transform: rotate(-7deg);
                }
                36% {
                    transform: rotate(5deg);
                }
            }

            @media (max-width: 640px) {
                .floating-whatsapp {
                    width: 46px;
                    height: 46px;
                    right: 18px;
                    bottom: calc(18px + env(safe-area-inset-bottom));
                }

                .floating-whatsapp i {
                    font-size: 25px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .floating-whatsapp,
                .floating-whatsapp::before,
                .floating-whatsapp i {
                    animation: none;
                    transition: none;
                }
            }
            `;
            document.head.appendChild(style);
        }

        const link = document.createElement('a');
        link.className = 'floating-whatsapp';
        link.href = `https://wa.me/${phone}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', label);
        link.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';

        document.body.appendChild(link);
    }

    if (document.body) {
        mountFloatingWhatsapp();
    } else {
        document.addEventListener('DOMContentLoaded', mountFloatingWhatsapp, { once: true });
    }
})();
