import { inputDefaultVisit } from '../utils/index.js';

export const createDefaultInput = (params = '') => {
    return inputDefaultVisit
        .map(item => {
            if (!!params) {
                item.value = params[item?.name] || '';
                item?.dropdownContent?.forEach(con => {
                    if (con.value === params.doctor || con.value === params.urgency) {
                        con.selected = 'selected';
                    }
                });
            } else {
                item.value = '';
                item?.dropdownContent?.forEach(con => (con.selected = ''));
            }

            return item.renderContent(item);
        })
        .join('');
};
