export class ApiService {
  getTestData() {
    return cy.request({
      method: "GET",
      url: "https://echo-serv.tbxnet.com/v1/test?test=test&accept=application%2Fjson",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  postTestData(data) {
    return cy.request({
      method: "POST",
      url: "https://echo-serv.tbxnet.com/v1/test",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  }
}
