import { Accordion, Row } from "react-bootstrap";
import { Questions } from "../Data/data";

const QA_Accordions = ({ Data, DeletONEItem }) => {

  const saved_data_localstorg = JSON.parse(localStorage.getItem("data"));

  // delete one item from the array by id
  const onDeleteItem = (id) => {

    if (localStorage.getItem("data") != null) {
      const index = Questions.findIndex((item) => item.id === id);
      Questions.splice(index, 1);
      DeletONEItem(Questions);
    }

    
  };
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("data") != null ? (
          saved_data_localstorg.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.Q}</div>
                </Accordion.Header>

                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline">{item.A}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color my-2"
                  >
                    مسح السؤال{" "}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5" style={{ color: "red" }}>
            لا يوجد اسئلة الان{" "}
          </h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QA_Accordions;
