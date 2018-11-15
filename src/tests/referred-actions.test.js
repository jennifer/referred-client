import { 
	GET_COMPANY_DATA_SUCCESS, 
	getCompanyDataSuccess,
	GET_COMPANY_DATA_ERROR,
	getCompanyDataError,
	POST_COMPANY_DATA_SUCCESS,
	postCompanyDataSuccess,
	POST_COMPANY_DATA_ERROR,
	postCompanyDataError,
	PUT_COMPANY_DATA_SUCCESS,
	putCompanyDataSuccess,
	PUT_COMPANY_DATA_ERROR,
	putCompanyDataError,
	DELETE_COMPANY_DATA_SUCCESS,
	deleteCompanyDataSuccess,
	DELETE_COMPANY_DATA_ERROR,
	deleteCompanyDataError,
	GET_PERSON_DATA_SUCCESS,
	getPersonDataSuccess,
	GET_PERSON_DATA_ERROR,
	getPersonDataError,
	POST_PERSON_DATA_SUCCESS,
	postPersonDataSuccess,
	POST_PERSON_DATA_ERROR,
	postPersonDataError,
	PUT_PERSON_DATA_SUCCESS,
	putPersonDataSuccess,
	PUT_PERSON_DATA_ERROR,
	putPersonDataError,
	DELETE_PERSON_DATA_SUCCESS,
	deletePersonDataSuccess,
	DELETE_PERSON_DATA_ERROR,
	deletePersonDataError
} from '../actions/referred';

describe('getCompanyDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'company data';
        const action = getCompanyDataSuccess(data);
        expect(action.type).toEqual(GET_COMPANY_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('getCompanyDataError', () => {
    it('Should return the action', () => {
        const error = 'company error';
        const action = getCompanyDataError(error);
        expect(action.type).toEqual(GET_COMPANY_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('postCompanyDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'company data';
        const action = postCompanyDataSuccess(data);
        expect(action.type).toEqual(POST_COMPANY_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('postCompanyDataError', () => {
    it('Should return the action', () => {
        const error = 'company error';
        const action = postCompanyDataError(error);
        expect(action.type).toEqual(POST_COMPANY_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('putCompanyDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'company data';
        const action = putCompanyDataSuccess(data);
        expect(action.type).toEqual(PUT_COMPANY_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('putCompanyDataError', () => {
    it('Should return the action', () => {
        const error = 'company error';
        const action = putCompanyDataError(error);
        expect(action.type).toEqual(PUT_COMPANY_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('deleteCompanyDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'company data';
        const action = deleteCompanyDataSuccess(data);
        expect(action.type).toEqual(DELETE_COMPANY_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('deleteCompanyDataError', () => {
    it('Should return the action', () => {
        const error = 'company error';
        const action = deleteCompanyDataError(error);
        expect(action.type).toEqual(DELETE_COMPANY_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('getPersonDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'person data';
        const action = getPersonDataSuccess(data);
        expect(action.type).toEqual(GET_PERSON_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('getPersonDataError', () => {
    it('Should return the action', () => {
        const error = 'person error';
        const action = getPersonDataError(error);
        expect(action.type).toEqual(GET_PERSON_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('postPersonDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'person data';
        const action = postPersonDataSuccess(data);
        expect(action.type).toEqual(POST_PERSON_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('postPersonDataError', () => {
    it('Should return the action', () => {
        const error = 'person error';
        const action = postPersonDataError(error);
        expect(action.type).toEqual(POST_PERSON_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('putPersonDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'person data';
        const action = putPersonDataSuccess(data);
        expect(action.type).toEqual(PUT_PERSON_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('putPersonDataError', () => {
    it('Should return the action', () => {
        const error = 'person error';
        const action = putPersonDataError(error);
        expect(action.type).toEqual(PUT_PERSON_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('deletePersonDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'person data';
        const action = deletePersonDataSuccess(data);
        expect(action.type).toEqual(DELETE_PERSON_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('deletePersonDataError', () => {
    it('Should return the action', () => {
        const error = 'person error';
        const action = deletePersonDataError(error);
        expect(action.type).toEqual(DELETE_PERSON_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});