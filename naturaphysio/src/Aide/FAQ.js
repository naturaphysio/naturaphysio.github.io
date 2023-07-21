// Importe de la librairie de react-bootstrap
import { Accordion, Container, Row } from "react-bootstrap";
import { useState } from "react";

// Afin de changer la langue
import { useTranslation } from 'react-i18next';


const FAQ = () => {

    // Changement de langue
    const { t } = useTranslation();

    return (
        <div className="faq">
            <Container className="w-75 mx-auto pb-5 pt-3">

                {/* Titre de la page */}
                <div className="faq-titre ps-3 pe-3">
                    <Row>
                        <h2>FAQ</h2>
                        <hr className="ps-3 pe-3"></hr>
                    </Row>
                </div>

                
                <div className="faq-section">
                    <div className="col-sm-12 col-md-8">
                        <div className="faq-questions">
                            <h2 className="mb-3 mt-5 text-center">{t("faq_h2")}</h2>

                            {/* Accordeon qui comporte les questions */}
                            <Accordion>
                                <div className="faq_questions">

                                    {/* Question 1 */}
                                    <Accordion.Item eventKey="0" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q1")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q1")}</Accordion.Body>
                                    </Accordion.Item>

                                    {/* Question 2 */}
                                    <Accordion.Item eventKey="1" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q2")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q2")}</Accordion.Body>
                                    </Accordion.Item>

                                    {/* Question 3 */}
                                    <Accordion.Item eventKey="2" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q3")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q3")}</Accordion.Body>
                                    </Accordion.Item>

                                    {/* Question 4 */}
                                    <Accordion.Item eventKey="3" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q4")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q4")}</Accordion.Body>
                                    </Accordion.Item>

                                    {/* Question 5 */}
                                    <Accordion.Item eventKey="4" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q5")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q5")}</Accordion.Body>
                                    </Accordion.Item>

                                    {/* Question 6 */}
                                    <Accordion.Item eventKey="5" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q6")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q6")}</Accordion.Body>
                                    </Accordion.Item>

                                    {/* Question 7 */}
                                    <Accordion.Item eventKey="6" className="mt-2 mb-2">
                                        <Accordion.Header>{t("q7")}</Accordion.Header>
                                        <Accordion.Body>{t("rep_q7")}</Accordion.Body>
                                    </Accordion.Item>

                                </div>
                            
                            </Accordion>
                        </div>
                    </div>               
                </div>
            </Container>
        </div>
     );
}

export default FAQ;