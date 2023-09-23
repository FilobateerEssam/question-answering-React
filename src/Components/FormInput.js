import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Questions } from "../Data/data";

const FormInput = ({onAdd , notify}) => {

    const [qu , setQu] = useState('')
    const [an , setAn] = useState('')

    // add new item to the array
    const addNewItem = () => {

      if(qu === '' || an === '') {
        notify('من فضلك اكمل البيانات' , 'error');
        return
      }

        Questions.push({id: Questions.length + 1 , Q: qu , A: an})

        setQu('') // to clear the input after add the Q
        setAn('') // to clear the input after add the A
        onAdd()   // to update the data after add new item
        console.log(Questions)
    }

  return (
    <Row className="my-3" >

      <Col sm="5" >

      {/* value={qu} because after write the Q will clear it  */}
        
      <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السؤال" />
      
        </Col>
      
      <Col sm="5">

            {/* value={an} because after write the A will clear it  */}

        <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الاجابة " />
      
        </Col>

      <Col sm="2">
        <button onClick={addNewItem}  className="btn-color w-100" type="submit">
          اضافة
        </button>
      </Col>
      
    </Row>
  );
};

export default FormInput;
