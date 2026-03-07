export const contexts = {
    onMobile: 'onMobile',
    onTrigger: 'onTrigger',
    onDesktop: 'onDesktop',
    onUnsubscribe: 'onUnsubscribe',
};
export const defaultSettings = {
    cookie: {
        daysToExpire: 30,
        key: 'exit-intent',
    },
    desktop: {
        triggerOnIdle: false,
        useBeforeUnload: false,
        triggerOnMouseLeave: true,
        delayInSecondsToTrigger: 10,
        mouseLeaveDelayInSeconds: 5,
    },
    mobile: {
        triggerOnIdle: true,
        delayInSecondsToTrigger: 10,
    },
};
