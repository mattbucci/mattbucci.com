class Analytics {
    /**
     * triggerEvent:
     * GA event tracking
     * @param args.category {String} required
     * @param args.action {String} required
     * @param args.label {String} optional
     * @param args.value {Int} optional
     */
    static triggerEvent(args) {
        const fieldObject = {
            hitType: 'event',
            eventCategory: args.category,
            eventAction: args.action
        };

        if (args.label) {
            fieldObject.eventLabel = args.label;
        }

        if (args.value) {
            fieldObject.eventValue = args.value;
        }

        try {
            ga('send', fieldObject);
        } catch (e) {
            console.error(e);
        }

    }
}

export default Analytics;
