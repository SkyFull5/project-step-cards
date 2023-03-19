export const filterCards = (defaultCards, urgency, status, title = '') =>
    defaultCards.filter(item => {
        const checkSecondName = !!title ? item.secondName.toLowerCase().indexOf(title.toLowerCase()) >= 0 : '';

        if (!!urgency && !!status) {
            return !!title ? checkSecondName && String(item.status) === status && item.urgency === urgency : String(item.status) === status && item.urgency === urgency;
        } else if (!!urgency) {
            return !!title ? checkSecondName && item.urgency === urgency : item.urgency === urgency;
        } else if (!!status) {
            return !!title ? checkSecondName && String(item.status) === status : String(item.status) === status;
        } else {
            return !!title ? checkSecondName : item;
        }
    });
