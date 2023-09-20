import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";
import Nav from "../../components/Nav";
import Footer2 from "../../components/Footer2/";
import data from "../../resources/FAQ.json";

export default function Faq() {
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
                {data.map((el, idx) => (
                  <Accordion.Item eventKey={idx}>
                    <Accordion.Header>{data[idx].Enuciado}</Accordion.Header>
                    <Accordion.Body>{data[idx].Resposta}</Accordion.Body>
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
