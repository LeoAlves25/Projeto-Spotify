import "./Faq.css";
import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Nav from "../../components/Nav";
import Footer2 from "../../components/Footer2/";

import FaqServices from "../../services/FaqServices";

export default function Faq() {
  const faqServices = new FaqServices();

  const [faq, setFaq] = useState([]);

  const getFaq = async () => {
    setFaq(await faqServices.getFaq());
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <>
      <div>
        <Nav />
      </div>

      <main className="h-100">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5 justify-content-center">
            <label className="col-8">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Pesquisar Duvida"
                name="pesquisarDuvida"
              />
            </label>
          </div>
        </div>
        <section id="FAQ" className="py-5">
          <h2 className=" text-center text-light">
            Frequently Asked Questions
          </h2>
          <h3 className="mb-5 pb-5 text-center text-light">FAQ</h3>

          <div className="container">
            <div>
              <Accordion>
                {faq.map((el, idx) => (
                  <Accordion.Item key={idx} eventKey={idx}>
                    <Accordion.Header>{faq[idx].enuciado}</Accordion.Header>
                    <Accordion.Body>{faq[idx].resposta}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer2 />
    </>
  );
}
