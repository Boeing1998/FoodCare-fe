import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../../css/Modal.css'


function ModalType(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [active, setActive] = useState(false)

    const onActiveClick = React.useCallback((key) => {
        setActive(key)
    }, [active])

    return (
        <>
            <Button variant="btn btn-light col-12" onClick={handleShow}>
                Add meal
        </Button>

            <Modal id="Type" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>

                        <h4 className="modal-title">Meal Settings</h4>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form className="form-horizontal label-right col-10" style={{padding: '12% 0'}}>
                        <fieldset>
                            <div className="form-group row">
                                <label htmlFor="meal-type-title" className="col-5  col-form-label">Meal title</label>
                                <div className="col-7" data-editors="title" id="meal-type-title">
                                    <input id="c325_title" className="form-control" name="title" maxLength={100} type="text" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="meal-type-title" className="col-5 col-form-label">How many people?</label>
                                <div className="col-7" id="meal-type-title">
                                    <div className="family_scale_tooltip left_form_tooltip" data-original-title title>
                                    </div>
                                    <div className="inline_block" data-editors="family_scale"><select id="c325_family_scale" className="form-control" name="family_scale">
                                        <option selected value={1}>1 person</option>
                                        <option value={2}>2 people</option>
                                        <option value={3}>3 people</option>
                                        <option value={4}>4 people</option>
                                        <option value={5}>5 people</option>
                                        <option value={6}>6 people</option>
                                        <option value={7}>7 people</option>
                                        <option value={8}>8 people</option>
                                        <option value={9}>9 people</option>
                                    </select></div>
                                </div>
                            </div>
                            <div id="deleted_meal_type_warning" />
                        </fieldset>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalType