    /* ---- Footer year ---- */
    (function () {
        const y = document.getElementById('footer-year');
        if (y) y.textContent = new Date().getFullYear();
    })();

/* ---- Reveal on scroll ---- */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

/* Safety net */
addEventListener('load', () => setTimeout(() =>
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight) el.classList.add('is-in');
    }), 400));

/* ---- Mobile menu toggle ---- */
(function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;
    const ico = burger.querySelector('.burger-ico');
    // Ícone "X" (fechar) — ds-assets/icone/menu sanduiche sair.svg, inline p/ herdar a cor
    const closeSvg =
        '<svg class="burger-close" width="22" height="22" viewBox="0 0 322 315" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<line x1="28.2843" y1="20" x2="294.156" y2="285.872" stroke="currentColor" stroke-width="40" stroke-linecap="round"/>' +
        '<line x1="20" y1="-20" x2="396" y2="-20" transform="matrix(-0.707107 0.707107 0.707107 0.707107 321.68 20.0771)" stroke="currentColor" stroke-width="40" stroke-linecap="round"/>' +
        '</svg>';

    function setOpen(open) {
        burger.classList.toggle('open', open);
        menu.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        // troca hamburger <-> X (svg inline)
        if (open) {
            if (ico) ico.style.display = 'none';
            if (!burger.querySelector('.burger-close')) burger.insertAdjacentHTML('beforeend', closeSvg);
        } else {
            if (ico) ico.style.display = '';
            const x = burger.querySelector('.burger-close');
            if (x) x.remove();
        }
        document.body.style.overflow = open ? 'hidden' : '';
    }

    burger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
})();

/* ---- Nav background on scroll ---- */
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
    if (scrollY > 40) {
        nav.classList.add('backdrop-blur-md', 'py-0');
        nav.style.background = 'rgba(44,38,32,.55)';
    } else {
        nav.classList.remove('backdrop-blur-md', 'py-0');
        nav.style.background = 'transparent';
    }
});

/* ---- Hero word reveal with GSAP ---- */
window.addEventListener('load', () => {
    if (window.gsap) {
        gsap.to('.hero-title .word > span', {
            y: '0%', duration: 1.1, ease: 'expo.out', stagger: .12, delay: .15
        });
    } else {
        document.querySelectorAll('.hero-title .word > span').forEach(s => s.style.transform = 'none');
    }

    /* ---- Diferenciais — sticky storytelling ---- */
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const storySection = document.getElementById('diferenciais');
        const bar = document.getElementById('storyBar');
        const pct = document.getElementById('storyPct');

        // barra de progresso da imagem — vale para os dois layouts
        function updateProgress(p) {
            const v = Math.round(p * 100);
            if (bar) bar.style.width = v + '%';
            if (pct) pct.textContent = String(v).padStart(2, '0');
        }

        ScrollTrigger.matchMedia({

            /* ===== DESKTOP: comportamento original (steps rolam) ===== */
            '(min-width: 861px)': function () {
                if (!reduce) {
                    gsap.utils.toArray('.story-step').forEach((step) => {
                        gsap.fromTo(step.children,
                            { opacity: 0, y: 60, filter: 'blur(10px)' },
                            {
                                opacity: 1, y: 0, filter: 'blur(0px)', stagger: .12, ease: 'power3.out',
                                scrollTrigger: { trigger: step, start: 'top 65%', end: 'top 30%', scrub: 1.2 }
                            }
                        );
                    });
                    if (storySection) {
                        gsap.to('#storyImg', {
                            scale: 1.15, rotate: 2, ease: 'none',
                            scrollTrigger: { trigger: storySection, start: 'top top', end: 'bottom bottom', scrub: 1.4 }
                        });
                        gsap.to('#storyGlow', {
                            opacity: .5, scale: 1.3, ease: 'none',
                            scrollTrigger: { trigger: storySection, start: 'top top', end: 'bottom bottom', scrub: 1.4 }
                        });
                    }
                }
                if (storySection) {
                    ScrollTrigger.create({
                        trigger: storySection, start: 'top top', end: 'bottom bottom',
                        onUpdate: (self) => updateProgress(self.progress)
                    });
                }
            },

            /* ===== MOBILE: pin + snap — 1 gesto de scroll = 1 tópico ===== */
            '(max-width: 860px)': function () {
                const steps = gsap.utils.toArray('.story-steps > .story-step');
                if (!storySection || !steps.length) return;

                const n = steps.length;
                // pouco scroll por item (40% da tela) — uma rolada leve já passa
                const perItem = 0.4;

                // mostra o primeiro item já de início
                steps.forEach((s, i) => s.classList.toggle('is-active', i === 0));

                let current = 0;
                function setActive(idx) {
                    if (idx === current) return;
                    const prev = steps[current];
                    const next = steps[idx];
                    const goingDown = idx > current;
                    gsap.to(prev, {
                        opacity: 0, y: goingDown ? -40 : 40, duration: .45, ease: 'power2.inOut'
                    });
                    gsap.fromTo(next,
                        { opacity: 0, y: goingDown ? 40 : -40 },
                        { opacity: 1, y: 0, duration: .5, ease: 'power2.out' }
                    );
                    prev.classList.remove('is-active');
                    next.classList.add('is-active');
                    current = idx;
                }

                ScrollTrigger.create({
                    trigger: storySection,
                    start: 'top top',
                    // distância curta: (n-1) * (fração de uma tela) por item
                    end: () => '+=' + ((n - 1) * window.innerHeight * perItem),
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    // snap: encaixa magneticamente no item mais próximo ao soltar,
                    // de modo que qualquer rolada leve avança para o próximo tópico
                    snap: {
                        snapTo: 1 / (n - 1),
                        duration: { min: 0.2, max: 0.4 },
                        delay: 0.05,
                        ease: 'power1.inOut'
                    },
                    onUpdate: (self) => {
                        updateProgress(self.progress);
                        const idx = Math.round(self.progress * (n - 1));
                        setActive(idx);
                    }
                });
            }
        });

        // recalcula as posições depois que imagens/fontes assentam, para o
        // pin disparar no ponto certo (evita a seção "pular" ao rolar).
        ScrollTrigger.refresh();
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => ScrollTrigger.refresh());
        }
        // qualquer imagem ainda carregando pode deslocar o layout acima da
        // seção; ao terminar, refaz o cálculo do pin.
        document.querySelectorAll('img').forEach((img) => {
            if (!img.complete) img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
        });
    }
});

/* ---- Serviços — LineSidebar (efeito de proximidade + troca de painel) ---- */
(function () {
    const list = document.getElementById('serv-list');
    const sidebar = document.getElementById('serv-sidebar');
    if (!list || !sidebar) return;

    const items = Array.from(list.querySelectorAll('li'));
    const panels = Array.from(document.querySelectorAll('.serv-detail .serv-panel'));

    const FALLOFF = { linear: p => p, smooth: p => p * p * (3 - 2 * p), sharp: p => p * p * p };
    const ease = FALLOFF.smooth;
    const proximityRadius = 120;   // px de influência vertical do cursor
    const smoothing = 120;         // ms

    const targets = items.map(() => 0);
    const current = items.map(() => 0);
    let activeIndex = 0;
    let raf = null, last = 0;

    function frame(now) {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        const tau = Math.max(smoothing, 1) / 1000;
        const k = 1 - Math.exp(-dt / tau);

        let moving = false;
        for (let i = 0; i < items.length; i++) {
            const target = Math.max(targets[i], activeIndex === i ? 1 : 0);
            const cur = current[i];
            const next = cur + (target - cur) * k;
            const settled = Math.abs(target - next) < 0.0015;
            const value = settled ? target : next;
            current[i] = value;
            items[i].style.setProperty('--effect', value.toFixed(4));
            if (!settled) moving = true;
        }
        raf = moving ? requestAnimationFrame(frame) : null;
    }

    function start() {
        if (raf != null) return;
        last = performance.now();
        raf = requestAnimationFrame(frame);
    }

    list.addEventListener('pointermove', (e) => {
        const rect = list.getBoundingClientRect();
        const pointerY = e.clientY - rect.top;
        for (let i = 0; i < items.length; i++) {
            const el = items[i];
            const center = el.offsetTop + el.offsetHeight / 2;
            const distance = Math.abs(pointerY - center);
            targets[i] = ease(Math.max(0, 1 - distance / proximityRadius));
        }
        start();
    });

    list.addEventListener('pointerleave', () => {
        for (let i = 0; i < targets.length; i++) targets[i] = 0;
        start();
    });

    const TRANSITION_CLASSES = ['enter-up', 'enter-down', 'leave-up', 'leave-down', 'is-leaving'];
    const panelByIndex = (i) => panels.find((p) => +p.dataset.panel === i);
    let prevIndex = 0;

    function activate(index) {
        if (index === activeIndex) return;

        const from = panelByIndex(prevIndex);
        const to = panelByIndex(index);
        // próximo abaixo do atual (índice maior) => sobe; próximo acima => desce
        const goingDown = index > activeIndex;

        activeIndex = index;
        prevIndex = index;
        items.forEach((el, i) => el.setAttribute('aria-current', i === index ? 'true' : 'false'));

        if (to === from) { start(); return; }

        // limpa qualquer transição em andamento (inclui restos de trocas rápidas)
        panels.forEach((p) => {
            p.classList.remove(...TRANSITION_CLASSES);
            if (p !== to) p.classList.remove('is-active');
        });

        // remove as classes de transição de um painel de forma idempotente,
        // via animationend E com um timeout de segurança (evita painel preso
        // caso o evento não dispare)
        function cleanup(panel, classes) {
            let done = false;
            const run = () => {
                if (done) return;
                done = true;
                panel.classList.remove(...classes);
                panel.removeEventListener('animationend', run);
            };
            panel.addEventListener('animationend', run);
            setTimeout(run, 550);
        }

        // painel que sai: permanece visível, sobreposto, e desliza na direção do que vem
        if (from) {
            from.classList.remove('is-active');
            from.classList.add('is-leaving', goingDown ? 'leave-up' : 'leave-down');
            cleanup(from, ['is-leaving', 'leave-up', 'leave-down']);
        }

        // painel que entra: vem do lado oposto ao movimento
        if (to) {
            to.classList.add('is-active', goingDown ? 'enter-up' : 'enter-down');
            cleanup(to, ['enter-up', 'enter-down']);
        }

        start();
    }

    items.forEach((el) => {
        el.addEventListener('click', () => activate(+el.dataset.index));
    });

    start();
})();

/* ---- Depoimentos — Stack de cards arrastáveis (port vanilla do React Bits) ---- */
(function () {
    const stage = document.getElementById('depo-stage');
    const dotsWrap = document.getElementById('depo-dots');
    if (!stage) return;

    const SENSITIVITY = 140;      // px de arraste p/ mandar o card pro fundo
    const RANDOM_ROTATION = true; // leve rotação "bagunçada" por card

    // stack[0] = fundo … stack[último] = topo (o de cima é o interativo).
    // invertemos a ordem do DOM para o 1º depoimento (Juliana) começar no topo
    let stack = Array.from(stage.querySelectorAll('.depo-card')).reverse();
    const total = stack.length;

    // rotação aleatória fixa por card (não muda a cada render, evita "tremer")
    const jitter = new Map();
    stack.forEach((c) => jitter.set(c, RANDOM_ROTATION ? (Math.random() * 10 - 5) : 0));

    // dots
    const dots = [];
    if (dotsWrap) {
        stack.forEach((_, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('role', 'tab');
            b.setAttribute('aria-label', 'Depoimento ' + (i + 1));
            b.addEventListener('click', () => goToCard(i));
            dotsWrap.appendChild(b);
            dots.push(b);
        });
    }

    // posiciona cada card conforme sua profundidade na pilha
    function render(animate = true) {
        stack.forEach((card, index) => {
            const depth = total - index - 1;               // 0 = topo
            const rotate = depth * 4 + jitter.get(card);   // leque + jitter
            const scale = 1 + index * 0.06 - total * 0.06; // fundo menor
            card.style.zIndex = String(index + 1);
            card.classList.toggle('settling', animate);
            card.style.transform =
                `translate(0px, 0px) rotate(${rotate}deg) scale(${scale})`;
            // só o card do topo recebe interação
            card.style.pointerEvents = index === total - 1 ? 'auto' : 'none';
            card.setAttribute('aria-hidden', index === total - 1 ? 'false' : 'true');
        });
        syncDots();
    }

    function topCard() { return stack[total - 1]; }

    function syncDots() {
        const currentDepoIndex = +topCard().dataset.depo;
        dots.forEach((d, i) =>
            d.setAttribute('aria-current', i === currentDepoIndex ? 'true' : 'false'));
    }

    // manda o card do topo para o fundo da pilha
    function sendToBack() {
        const top = stack.pop();
        stack.unshift(top);
        render(true);
    }

    // navega até um depoimento específico (usado pelos dots)
    function goToCard(depoIndex) {
        let guard = 0;
        while (+topCard().dataset.depo !== depoIndex && guard++ < total) {
            const top = stack.pop();
            stack.unshift(top);
        }
        render(true);
    }

    // ---- drag / spring (equivalente ao CardRotate do motion) ----
    let dragging = null;   // card sendo arrastado
    let startX = 0, startY = 0, moved = false;

    function onPointerDown(e) {
        const card = e.target.closest('.depo-card');
        if (!card || card !== topCard()) return;
        dragging = card;
        moved = false;
        startX = e.clientX;
        startY = e.clientY;
        card.classList.remove('settling');
        card.setPointerCapture?.(e.pointerId);
    }

    function onPointerMove(e) {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;

        const depth = 0; // topo
        const baseRotate = depth * 4 + jitter.get(dragging);
        // tilt 3D leve, como o rotateX/rotateY do componente original
        const tiltY = Math.max(-18, Math.min(18, dx / 8));
        const tiltX = Math.max(-18, Math.min(18, -dy / 8));
        dragging.style.transform =
            `translate(${dx}px, ${dy}px) rotate(${baseRotate}deg) ` +
            `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1)`;
    }

    function onPointerUp(e) {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const card = dragging;
        dragging = null;
        card.releasePointerCapture?.(e.pointerId);

        if (Math.abs(dx) > SENSITIVITY || Math.abs(dy) > SENSITIVITY) {
            sendToBack();                 // arraste forte → próximo card
        } else if (!moved) {
            sendToBack();                 // toque/clique simples → próximo card
        } else {
            render(true);                 // solta perto → volta com mola
        }
    }

    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerup', onPointerUp);
    stage.addEventListener('pointercancel', onPointerUp);

    // teclado: setas navegam (acessibilidade)
    stage.tabIndex = 0;
    stage.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            sendToBack();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            // volta um: manda o do fundo pro topo
            const back = stack.shift();
            stack.push(back);
            render(true);
        }
    });

    render(false);
})();

/* ---- Contato — pausa o vídeo do interior quando fora da tela ---- */
(function () {
    const video = document.getElementById('cta-video-el');
    if (!video) return;

    // respeita quem prefere menos movimento: sem autoplay em loop
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.removeAttribute('autoplay');
        video.removeAttribute('loop');
        video.pause();
        return;
    }

    // só reproduz enquanto a seção está visível (economiza bateria/CPU)
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { video.play().catch(() => { }); }
            else { video.pause(); }
        });
    }, { threshold: 0.25 });
    io.observe(video);
})();

/* ---- Contato — motor local que monta o plano ("IA") ---- */
(function () {
    const form = document.getElementById('cta-form');
    const input = document.getElementById('cta-input');
    const char = document.getElementById('cta-char');
    const submit = document.getElementById('cta-submit');
    const plan = document.getElementById('cta-plan');
    const planIntro = document.getElementById('cta-plan-intro');
    const planList = document.getElementById('cta-plan-list');
    if (!form || !input || !submit || !plan) return;

    const label = submit.querySelector('.cta-submit__label');

    /* Catálogo real da clínica (espelha a seção Tratamentos).
       keywords = gatilhos no texto do lead; why = frase personalizada. */
    const CATALOG = [
        {
            id: 'limpeza',
            nome: 'Limpeza de Pele profunda',
            tag: 'Facial · ≈ 60 min',
            keywords: ['acne', 'espinha', 'cravo', 'oleos', 'oleosa', 'poro', 'pele',
                'rosto', 'face', 'facial', 'viço', 'vico', 'opaca', 'opaco', 'craquel',
                'textura', 'brilho', 'sebo', 'impureza', 'cravos'],
            why: 'Higienização com extração e ativos para desobstruir os poros e devolver o viço à sua pele.'
        },
        {
            id: 'laser',
            nome: 'Depilação a laser',
            tag: 'Corporal · Certificado Anvisa',
            keywords: ['pelo', 'pelos', 'depila', 'laser', 'perna', 'axila', 'buço',
                'buco', 'virilha', 'raspar', 'cera', 'lâmina', 'lamina', 'encravado',
                'encravados', 'barba'],
            why: 'Redução progressiva e duradoura dos pelos, com avaliação prévia e segurança para o seu fototipo.'
        },
        {
            id: 'massagem',
            nome: 'Massagem Modeladora',
            tag: 'Corporal · ≈ 50 min',
            keywords: ['gordura', 'gordurinha', 'celulite', 'medida', 'medidas',
                'barriga', 'abdomen', 'abdômen', 'contorno', 'modelar', 'modela',
                'flacidez', 'retenção', 'retencao', 'inchaç', 'inchac', 'inchado',
                'silhueta', 'corpo', 'corporal', 'emagrec', 'culote', 'coxa'],
            why: 'Manobras firmes que estimulam a circulação, reduzem retenção de líquido e ajudam a modelar o contorno.'
        },
        {
            id: 'sobrancelha',
            nome: 'Design de Sobrancelha',
            tag: 'Facial · ≈ 30 min',
            keywords: ['sobrancelha', 'sobrancelhas', 'olhar', 'simetria', 'design',
                'formato do rosto', 'falha', 'falhada', 'falhadas', 'rala', 'ralas'],
            why: 'Mapeamento do formato ideal para o seu rosto, com simetria e um acabamento delicado que realça o olhar.'
        }
    ];

    // normaliza (minúsculo, sem acento) para casar palavras-chave
    const norm = (s) => s.toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '');

    function analyze(text) {
        const t = norm(text);
        const scored = CATALOG.map((svc) => {
            let score = 0;
            svc.keywords.forEach((kw) => { if (t.includes(norm(kw))) score += 1; });
            return { svc, score };
        });
        let hits = scored.filter((s) => s.score > 0)
            .sort((a, b) => b.score - a.score);
        // nada casou → oferece uma avaliação ampla com os 2 carros-chefe
        if (hits.length === 0) {
            hits = [scored[0], scored[2]];
        }
        return hits.map((h) => h.svc);
    }

    function buildIntro(text, services) {
        const trimmed = text.trim().replace(/\s+/g, ' ');
        const short = trimmed.length > 90 ? trimmed.slice(0, 90) + '…' : trimmed;
        const n = services.length;
        if (n === 1) {
            return 'Pelo que você contou (“' + short + '”), montamos um caminho ' +
                'focado em um tratamento principal. Veja a sugestão:';
        }
        if (n >= 3) {
            return 'Pelo que você contou (“' + short + '”), identificamos ' + n +
                ' frentes que se complementam — um plano combinado feito para o seu caso:';
        }
        return 'Pelo que você contou (“' + short + '”), sua avaliação começaria por ' +
            n + ' frentes que se complementam:';
    }

    function renderPlan(text) {
        const services = analyze(text);
        planIntro.textContent = buildIntro(text, services);
        planList.innerHTML = '';
        services.forEach((svc, i) => {
            const li = document.createElement('li');
            li.className = 'cta-plan__item';
            li.style.animationDelay = (i * 0.09).toFixed(2) + 's';
            li.innerHTML =
                '<span class="cta-plan__num">' + String(i + 1).padStart(2, '0') + '</span>' +
                '<span><span class="cta-plan__svc">' + svc.nome +
                ' <span style="font-weight:400;opacity:.6;font-size:.8em">· ' + svc.tag + '</span></span>' +
                '<span class="cta-plan__why">' + svc.why + '</span></span>';
            planList.appendChild(li);
        });
        plan.classList.add('is-open');
        plan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // contador de caracteres + habilita botão
    function refresh() {
        const len = input.value.length;
        char.textContent = len + ' / 600';
        submit.disabled = input.value.trim().length < 3;
    }
    input.addEventListener('input', refresh);
    refresh();

    let busy = false;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text.length < 3 || busy) return;

        busy = true;
        submit.classList.add('is-loading');
        submit.disabled = true;
        if (label) label.textContent = 'Analisando…';

        /* Simulação de processamento da IA. Para plugar um modelo real,
           troque este setTimeout por um fetch ao seu endpoint e chame
           renderPlan() (ou monte a lista) com a resposta. */
        setTimeout(() => {
            renderPlan(text);
            submit.classList.remove('is-loading');
            if (label) label.textContent = 'Refazer meu plano';
            submit.disabled = false;
            busy = false;
        }, 1100);
    });
})();
