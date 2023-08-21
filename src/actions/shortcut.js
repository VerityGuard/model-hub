export const shortcut = (node, params) => {
    let handler;

    const removeHandler = () => {
        window.removeEventListener('keydown', handler);
    };

    const setHandler = () => {
        removeHandler();

        if (!params) {
            return;
        }

        handler = (e) => {
            const altKeyMatch = params.alt === undefined || params.alt === e.altKey;
            const shiftKeyMatch = params.shift === undefined || params.shift === e.shiftKey;
            const controlKeyMatch = params.control === undefined || params.control === (e.ctrlKey || e.metaKey);
            const codeMatch = params.code === undefined || params.code === e.code;

            if (altKeyMatch && shiftKeyMatch && controlKeyMatch && codeMatch) {
                e.preventDefault();
                if (params.callback) {
                    params.callback();
                } else {
                    node.click();
                }
            }
        };

        window.addEventListener('keydown', handler);
    };

    setHandler();

    return {
        update: setHandler,
        destroy: removeHandler,
    };
};
