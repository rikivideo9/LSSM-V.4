export default (LSSM: Vue): void => {
    const lengthMap = {
        'building[name]': {
            min: 2,
            max: 40,
        },
        'vehicle[caption]': {
            min: 2,
            max: 150,
        },
        'vehicle[vehicle_type_caption]': {
            min: 0,
            max: 255,
        },
        'mission_position[mission_custom][caption]': {
            min: 3,
            max: 30,
        },
        /*
        'user[username]': {
            min: 0,
            max: 0,
        },
        'user[email]': {
            min: 0,
            max: 0,
        },
        'user[password]': {
            min: 0,
            max: 0,
        },
        'user[password_confirmation]': {
            min: 0,
            max: 0,
        },
        'alliance_chat[message]': {
            min: 0,
            max: 0,
        },
        'mission_reply[content]': {
            min: 0,
            max: 0,
        },
        */
        'aao[caption]': {
            min: 1,
            max: 60,
        },
        'aao_category[caption]': {
            min: 1,
            max: 60,
        },
        'vehicle_group[caption]': {
            min: 2,
            max: 60,
        },
    } as {
        [name: string]: {
            min: number;
            max: number;
        };
    };

    console.log([
        {
            selectorText: Object.keys(lengthMap)
                .map(
                    selector =>
                        `input[name=${JSON.stringify(selector)}]:invalid`
                )
                .join(','),
            style: {
                'border-color': '#a94442',
            },
        },
        ...Object.entries(lengthMap).map(([selector, { min, max }]) => ({
            selectorText: `input[name=${JSON.stringify(
                selector
            )}]:invalid::after`,
            style: {
                content: LSSM.$t('modules.generalExtensions.inputMaxLen', {
                    min,
                    max,
                }),
                color: '#a94442',
            },
        })),
    ]);

    LSSM.$store.dispatch('addStyle', {
        selectorText: Object.keys(lengthMap)
            .map(selector => `input[name=${JSON.stringify(selector)}]:invalid`)
            .join(','),
        style: {
            'border-color': '#a94442',
        },
    });

    document.addEventListener('input', e => {
        const target = e.target as HTMLInputElement;
        if (!target || target.nodeName !== 'INPUT') return;
        const minMax = Object.entries(lengthMap).find(([selector]) =>
            target.matches(`input[name=${JSON.stringify(selector)}]`)
        )?.[1];
        if (!minMax) return;
        target.setAttribute('minlength', minMax.min.toString());
        target.setAttribute('maxlength', minMax.max.toString());
        const placeholder = target.getAttribute('placeholder') || '';
        if (!placeholder.endsWith(']'))
            target.setAttribute(
                'placeholder',
                `${placeholder} [${LSSM.$t(
                    'modules.generalExtensions.inputMaxLen',
                    {
                        min: minMax.min,
                        max: minMax.max,
                    }
                )}]`
            );
        const title = target.getAttribute('title') || '';
        if (!title.endsWith(']'))
            target.setAttribute(
                'title',
                `${title} [${LSSM.$t('modules.generalExtensions.inputMaxLen', {
                    min: minMax.min,
                    max: minMax.max,
                })}]`
            );
    });
};
