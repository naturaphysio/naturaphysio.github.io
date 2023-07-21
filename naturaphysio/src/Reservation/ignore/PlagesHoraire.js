import moment from 'moment';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Test from './Test';

function PlageHoraire({isHidden}) {
    let startTime = "09:00 AM";
    let endTime = "08:00 PM";
    const [results, setResults] = useState([]);
    // console.log("Array", results);

    const classStart = '';
    const [cardBgColour, setcardBgColour] = useState("white");
    const [cardTextColour, setcardTextColour] = useState("#12718F");
    const [classChg, setclassChg] = useState(classStart);

    function intervals(startString, endString) {
        var start = moment(startString, 'hh:mm a');
        var end = moment(endString, 'hh:mm a');
        start.minutes(Math.ceil(start.minutes() / 30) * 30);

        var current = moment(start);
        while (current <= end) {
            if (results.includes(current.format('hh:mm a'))) {
                return null;
            }
            else {
                results.push(current.format('hh:mm a'));
                current.add(30, 'minutes');
            }
        }

        return results;
    }

    function visibility (isHidden) {
        if (!isHidden) {
            console.log("is false");
            return null;
        } else {
            intervals(startTime, endTime);
        }
    }

    const cardSelected = (text) => {

        // const id = e.target.id;  e.currentTargent.style.innerText
        console.log("card time's selected : " + text)

        // setcardBgColour("#12718F");
        // setcardTextColour("white");
        // const setClass = "select";
        // const newClass = classChg === classStart ? setClass : classStart;
        // setclassChg(newClass);
    }

    // const blue = "#12718F";
    // const white = "#FFFFFF";
    // const [btnColor, setBtnColor] = useState(white);

    visibility(isHidden);

    // function handleColorChange(e) {
    //     const button = e.target.style.backgroundColor;
    //     const newBtn = e.target.style.backgroundColor;

    //     const newColor = btnColor === white ? blue : white;
    //     setBtnColor(newColor);
    //     button = newColor;
    // }


    return (

        <div className='slots'>

                {
                // (visible == false) ? console.log('false')  slots:  style={{background : cardBgColour, color: cardTextColour}}

                        results && results.length > 0 ? results.map((time, index) => {
                            return (
                                // <Card.Body key={index} onClick={handleColorChange} style={{backgroundColor: btnColor}}>

                                //     <Row className='test' >
                                //         <Col><p>{time}</p></Col> className={classChg}

                                //     </Row>
                                // </Card.Body>cardSelected
                                <Card.Body key={index} onClick={(e) => console.log(e.currentTarget.style.innerHTML)}>

                                    <Row className='test' >
                                        <Col><p>{time}</p></Col>

                                    </Row>
                                </Card.Body>
                                // <Test  key={index} time={time} onClick={(e) => handleColorChange(e)} color={btnColor} index={index}/>
                            )

                        }) : null


                }


        </div>
     );
}

export default PlageHoraire;