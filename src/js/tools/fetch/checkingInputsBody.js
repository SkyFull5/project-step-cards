import { objectBody } from './objectBody.js';

export const checkingInputsBody = body => {
    const checkingInputsDoctor = objectBody[body.doctor].find(item => !body.hasOwnProperty(item));
    const checkingInputsDefault = objectBody.defaultsBody.find(item => !body.hasOwnProperty(item));

    if (!checkingInputsDefault && !checkingInputsDoctor) {
        return true;
    } else {
        return false;
    }
};
