import { inputDefaultVisit } from '../utils/index.js';

export const createDefaultInput = (params = '') => {
    return inputDefaultVisit
        .map(item => {
            if (!!params) {
                item.value = params[item?.name];
                if (!!item?.dropdownContent) {
                    item?.dropdownContent.forEach(con => {
                        if (con.value === params.doctor || params.urgency) {
                            con.selected = 'selected';
                        }
                    });
                }
            }

            return item.renderContent(item);
        })
        .join('');
};
