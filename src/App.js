import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QA_Accordions from "./Components/QA_Accordions";
import { useState } from "react";
import { Questions } from "./Data/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(Questions);

  // Update the data after add new item

  const AddItem = () => {
    localStorage.setItem("data", JSON.stringify([...Questions]));
    setData([...Questions]);
    notify('تم اضافة السؤال بنجاح' , 'success')
  };

  // delete all the data

  const deleteAll = () => {
    localStorage.removeItem("data");
    Questions.splice(0, Questions.length);
    setData([]);
    notify('تم مسح الكل بنجاح' , 'success')
  };

  // delete one item

  const deleteOneItem = (items) => {
    //                     key     value
    localStorage.setItem("data", JSON.stringify([...items]));

    setData([...items]); // to update the data after delete one item

    notify('تم مسح السؤال بنجاح','success');

    if (items.length <= 0) {
      deleteAll();
    }
  };

  // to push Notification

  const notify = (message , type) => {

    if(type === 'success'){

      toast.success(message);
    }

    if(type === 'error'){

      toast.error(message);
    }
  }

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئلة و اجوبة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={AddItem} notify={notify}/>

            <QA_Accordions Data={data} DeletONEItem={deleteOneItem} />

            {localStorage.getItem("data") != null ? (
              <button onClick={deleteAll} className="btn-color w-100 my-2">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
