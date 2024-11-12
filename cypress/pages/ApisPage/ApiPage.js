import { general, typesData } from "./ApiPage.constants";

export class ApiPage {
  validateResponse(response, expectedStatus = 200) {
    const duration = Date.now() - this.startTime;

    expect(response.status, general.messageStatusSuccess).to.equal(
      expectedStatus
    );
    expect(duration, general.messageDurationResp).to.be.lessThan(
      general.responseTime
    );

    const responseData = response.body;
    expect(responseData, general.messageIfIsObject).to.be.an(typesData.obj);

    general.properties.forEach((property) => {
      expect(
        responseData,
        `Response should contain '${property}'`
      ).to.have.property(property);
    });

    general.requiredHeaders.forEach((header) => {
      expect(
        responseData.headers,
        `Header '${header}' should exist`
      ).to.have.property(header);
    });
  }

  validatePostBody(responseData, expectedBody) {
    expect(responseData.body, general.validatePostBody).to.be.an(typesData.obj);
    expect(responseData.body, general.messagePostBody).to.deep.equal(
      expectedBody
    );

    const date = new Date(responseData.date);
    expect(!isNaN(date.getTime()), general.messageValidDate).to.be.true;
  }
}
