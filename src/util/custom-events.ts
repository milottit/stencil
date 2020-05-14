export const dispatchCustomEvent = (eventName: string, options: { element?: EventTarget; detail?: any; } = {}) => {
    const event = new CustomEvent(eventName, {
        detail: options.detail
    });

    return (options.element || window).dispatchEvent(event);
};


export const EVENTS = {
    SERVICES_LOADED: 'mt-services-loaded',
    SERVICE_LOADED: (name: string) => `mt-services-loaded/${name}`
};
