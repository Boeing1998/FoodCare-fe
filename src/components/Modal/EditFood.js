import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ModalType from './ModalType'
import '../../css/Modal.css'
function ModalMeals() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn btn-light col-12" onClick={handleShow}>
                Add meal
        </Button>

            <Modal id="Meals" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>

                        <h4 className="modal-title">Add meals to the weekly planner</h4>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form className="form-horizontal col-12">
                        <fieldset>
                            <div className="form-group row"><label htmlFor="new_meal_type" className="col-sm-5 col-form-label">Which meal type?</label>
                                <div className="col-sm-6" data-editors="meal_type" id="new_meal_type">
                                    <select id="c292_meal_type" className="form-control" name="meal_type"><option value="/api/v1/mealtype/12675624/">Huy</option><option value="/api/v1/mealtype/12282903/">Breakfast</option><option value="/api/v1/mealtype/12282904/">Lunch</option><option value="/api/v1/mealtype/12282905/">Dinner</option><option value="/api/v1/mealtype/12282906/">Snack</option><option value="/api/v1/mealtype/12929907/">Hưng wibu</option></select>
                                </div>
                            </div>
                            <div className="form-group row"><label htmlFor="create_meal_type" className="col-sm-5 col-form-label"> </label>
                                <div className="col-sm-6" id="create_meal_type">
                                    or
                                    <ModalType id="Type" />
                                </div>
                            </div><br />
                            <div className="form-group row"><label htmlFor="new_meal_index" className="col-sm-5 col-form-label">Add meal when?</label>
                                <div className="col-sm-6" data-editors="new_meal_index" id="new_meal_index">
                                    <select id="c292_new_meal_index" className="form-control" name="new_meal_index"><option value="end">At the end of the day</option><option value="beginning">At the beginning of the day</option><option value={1}>After meal 1</option><option value={2}>After meal 2</option><option value={3}>After meal 3</option><option value={4}>After meal 4</option><option value={5}>After meal 5</option><option value={6}>After meal 6</option><option value={7}>After meal 7</option><option value={8}>After meal 8</option></select>
                                </div>
                            </div>
                            <div className="form-group row which_days_section" style={{ display: 'none' }}>
                                <label htmlFor="new_meal_days" className="col-12 col-sm-4 col-form-label">Which days?</label>
                                <div className="col-sm-6 offset-sm-0 offset-1 col-11" data-editors="new_meal_days" id="new_meal_days">
                                    <ul id="c292_new_meal_days" name="new_meal_days">
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-0"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-0" defaultValue={6} />Sunday</label>
                                        </li>
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-1"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-1" defaultValue={0} />Monday</label>
                                        </li>
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-2"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-2" defaultValue={1} />Tuesday</label>
                                        </li>
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-3"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-3" defaultValue={2} />Wednesday</label>
                                        </li>
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-4"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-4" defaultValue={3} />Thursday</label>
                                        </li>
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-5"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-5" defaultValue={4} />Friday</label>
                                        </li>
                                        <li><label className="checkbox" htmlFor="c292_new_meal_days-6"><input type="checkbox" name="new_meal_days" id="c292_new_meal_days-6" defaultValue={5} />Saturday</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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

export default ModalMeals