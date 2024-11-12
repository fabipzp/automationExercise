import { ApiService } from "../Services/apiServices";
import { ApiPage } from "../pages";

describe("API Tests", () => {
  const apiPage = new ApiPage();
  const apiService = new ApiService();

  it("Validate the API Test - Get", () => {
    apiPage.startTime = Date.now();
    apiService.getTestData().then((response) => {
      apiPage.validateResponse(response);
    });
  });

  it("Validate API Test - Post", () => {
    apiPage.startTime = Date.now();
    const requestBody = {
      test: "test",
      accept: "application/json",
    };

    apiService.postTestData(requestBody).then((response) => {
      apiPage.validateResponse(response);
      apiPage.validatePostBody(response.body, requestBody);
    });
  });
});
