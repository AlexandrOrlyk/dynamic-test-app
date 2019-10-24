import React from 'react';
import { SketchPicker } from 'react-color';
import './comment.css';
import ValidationError from '../blog/error';
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

const Comments = ({ items, comment, id, background, onChange, onKeyDown, onChangeComplete, color, error, modal, toggle }) => {
    return (
        items.length !== id && items.length > 0 && id !== null && (
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title" >Coments #{id + 1}</h3>
                        {items[id] && items[id].comments.map((comment, index) =>
                            <div key={index} className="row" style={{ marginTop: 15 }}>
                                <div className="col-md-2">

                                    <div style={{ minHeight: 60, width: '100%', backgroundColor: comment.background }}></div>
                                </div>
                                <div className="col-md-10">
                                    {comment.comment}
                                </div>
                            </div>
                        )}
                        <div className='row' style={{ marginTop: 15 }} onKeyDown={onKeyDown}>
                            <div className="col-md-2"  >
                                <div onClick={toggle} style={{
                                    minHeight: 60, width: 60, backgroundColor: background
                                }}>
                                </div>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalBody>
                                        <SketchPicker
                                            color={color}
                                            onChangeComplete={onChangeComplete}
                                            triangle='hide'
                                        ></SketchPicker>
                                    </ModalBody>
                                    <ModalFooter>
                                        <button className="btn btn-create" onClick={toggle}>  Ok</button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                            <div className="col-md-10">
                                <div className="input-group">
                                    <textarea
                                        name="comment"
                                        autoComplete="off"
                                        type="message"
                                        value={comment}
                                        className="form-control"
                                        placeholder="Type comment here and pres Ctrl+Enter to send a comment"
                                        onChange={onChange} />
                                </div>
                                {error && <ValidationError />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ))
}

export default Comments