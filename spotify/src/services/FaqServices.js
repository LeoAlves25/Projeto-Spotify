export default class FaqServices {
  constructor() {
    this.url = "http://localhost:3000/faq";
  }

  async getFaq() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var faq;

    await fetch(this.url, requestOptions)
      .then((response) => response.json())
      .then((result) => (faq = result))
      .catch((error) => console.log("error", error));

    return faq;
  }
}
