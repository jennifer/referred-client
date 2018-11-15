import reducer from "./reducers/referred";
import {
  postCompanyDataSuccess,
  postPersonDataSuccess
} from "./actions/referred";

describe("reducer", () => {
  // Set up some dummy data
  const username = "testUser1";
  const companyName = "Initech";
  const url = "https://github.com/jennifer";
  const location = "Denver, CO";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const notes = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

  const username2 = "testUser2";
  const company2Name = "Pied Piper";
  const url2 = "https://github.com/jennifer";
  const location2 = "Palo Alto, CA";
  const description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const notes2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

  const usernameP = "testUser1";
  const companyId = "1234567";
  const status = "Identified";
  const statusIndex = "1";
  const name = "Peter Gibbons";
  const title = "Software Engineer";
  const urlP = "https://github.com/jennifer";
  const notesP = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

  const usernameP2 = "testUser2";
  const company2Id = "7654321";
  const status2 = "Made Contact";
  const statusIndex2 = "2";
  const name2 = "Bertram Guilfoyle";
  const title2 = "Senior Security Architect";
  const urlP2 = "https://github.com/jennifer";
  const notesP2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

  const company1 = {
    username: username,
    companyName: companyName,
    url: url,
    location: location,
    description: description,
    notes: notes
  };

  const company2 = {
    username: username2,
    companyName: company2Name,
    url: url2,
    location: location2,
    description: description2,
    notes: notes2
  };

  const person1 = {
    username: usernameP,
    companyId: companyId,
    status: status,
    statusIndex: statusIndex,
    name: name,
    title: title,
    url: urlP,
    notes: notesP
  };

  const person2 = {
    username: usernameP2,
    companyId: company2Id,
    status: status2,
    statusIndex: statusIndex2,
    name: name2,
    title: title2,
    url: urlP2,
    notes: notesP2
  };

  it("Should set the initial state when nothing is passed in", () => {
    const state = reducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      data: '',
      error: null,
      companies: [],
      people: []
    })
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = reducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("postCompanyDataSuccess", () => {
    it("Should add a new property", () => {
      let state;
      state = reducer(state, postCompanyDataSuccess(company1));
      state = reducer(state, postCompanyDataSuccess(company2));
      expect(state).toEqual({
        data: '',
        error: null,
        companies: [company1, company2],
        people: [],
      });
    });
  });

  describe("postPersonDataSuccess", () => {
    it("Should add a new person", () => {
      let state = {
        data: '',
        error: null,
        companies: [company1, company2],
        people: [],
      };
      state = reducer(state, postPersonDataSuccess(person1));
      state = reducer(state, postPersonDataSuccess(person2));
      expect(state).toEqual({
        data: '',
        error: null,
        companies: [company1, company2],
        people: [person1, person2],
      });
    });
  });
});