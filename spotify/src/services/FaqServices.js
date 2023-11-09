import axios from "axios";

export default class FaqServices {
  constructor() {
    this.url = "http://localhost:3002/faq";
  }

  async getFaq() {
    var faq = await axios.get(this.url);

    return faq.data;
  }
}
