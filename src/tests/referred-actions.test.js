import { GET_COMPANY_DATA_SUCCESS, getCompanyDataSuccess } from '../actions/referred';

describe('getCompanyDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'company data';
        const action = getCompanyDataSuccess(data);
        expect(action.type).toEqual(GET_COMPANY_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});
