export function createDebounce(fn, delay = 200) {
    let timer;
    return {
        execute(args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn(args), delay);
        },
        abort() {
            clearTimeout(timer);
        },
    };
}
