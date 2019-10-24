import React from 'react';

import { SketchPicker } from 'react-color';



const Comments = ({ items, comment, id, background, onClick, onChange , pickerShow, isOpen, onKeyDown, onChangeComplete, color}) => {
    return (

        items.length > 0 && id !== null && (
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form >
                            <h3 className="card-title" onClick={onClick}>Coments #{id + 1}</h3>
                        </form>

                        {items[id].comments.map((comment, index) =>
                            <div key={index} className="row" style={{ marginTop: 15 }} onClick={onClick}>
                                <div className="col-md-2">

                                    <div style={{ minHeight: 60, width: '100%', backgroundColor: comment.background }}></div>
                                </div>
                                <div className="col-md-10">
                                    {comment.comment}
                                </div>
                            </div>
                        )}

                        <div className='row' style={{ marginTop: 15 }}>
                            <div className="col-md-2">
                                <div onClick={pickerShow} style={{
                                    minHeight: 60, width: '100%', backgroundColor: background
                                }}>

                                </div>
                                {isOpen && <SketchPicker
                                    color={color}
                                    onChangeComplete={onChangeComplete}
                                    triangle='hide'


                                ><button className="btn" >Add</button></SketchPicker>}
                            </div>
                            <div className="col-md-10">
                                <div className="input-group">
                                    <textarea
                                        onKeyDown={onKeyDown}
                                        onClick={onClick}
                                        name="comment"
                                        autoComplete="off"
                                        type="message"
                                        value={comment}
                                        className="form-control"
                                        placeholder="Type name here..."
                                        onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
}

export default Comments