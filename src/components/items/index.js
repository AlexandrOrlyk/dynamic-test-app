import React from 'react'

const Items = ({ items, id, showComments, pressDelete, onChange, pickerClose, handleSubmit }) => {
    return (
        <div className="col-md-6" onClick={pickerClose}>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h3 className="card-title">Items</h3>
                        <div className="input-group">
                            <input
                                name="name"
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Type name here..."
                                onChange={onChange} />
                            <button className='btn btn-create col-md-3'>Add new</button>
                        </div>
                    </form>
                    {items.map((i, index) =>

                        <div key={index} className={`row item-position ${id === index && "left-red-vertical-line"}`} >
                            <div onClick={showComments} className="col-md-8">
                                {i.name}{' '}
                                <span className="badge badge-pill badge-success-light">{i.comments.length}</span>
                            </div>
                            <div className="col-md-4" >
                                <button className='btn  btn-delete m-l-btn' onClick={pressDelete}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Items