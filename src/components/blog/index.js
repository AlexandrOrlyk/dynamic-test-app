import React from 'react';
import './blog.css';
import { SketchPicker } from 'react-color';
import Comments from '../comments'
import Items from '../items'




class Blog extends React.Component {
    constructor(props) {
        super(props);
        const items = JSON.parse(localStorage.getItem('items'));

        this.state = {
            id: items ? 0 : null,
            items: items ? items : [],
            name: '',
            comment: '',
            avatarColors: '',
            background: '#20c997',
            isOpen: false,
            error: false
        }
    }

    pickerShow = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    pickerClose = () => {
        this.setState({
            isOpen: false
        })
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    additem = (newitem) => {
        let items = [...this.state.items, newitem];
        localStorage.setItem('items', JSON.stringify(items));

        this.setState({
            items
        });
    }

    pressDelete = (i) => {
        const items = this.state.items.filter((u, index) => {
            return index !== i;
        });

        localStorage.setItem('items', JSON.stringify(items));

        this.setState({
            items
        });
    }

    handleSubmit = (e) => {
        const { name } = this.state;
        e.preventDefault();
        this.additem({
            name: name,
            comments: []
        });
        e.target.reset();

    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    showComments = (index) => {
        console.log('asdasdsa', index)
        this.setState({ id: index });

    }

    commentAdd = () => {
        const { id, comment, items, background } = this.state;


        const newItems = [...items]; //неповна копія
        newItems[id].comments = [...items[id].comments, { comment: comment, background: background }];

        localStorage.setItem('items', JSON.stringify(newItems));

        this.setState({
            items: newItems
        });
    }

    commentHandleSubmit = (e) => {
        const { comment, background, error } = this.state;
        this.commentAdd({
            comment,
            background,
            error
        });
        this.setState({
            comment: ''
        });
    }


    render() {

        const { items, id, comment, background, isOpen } = this.state;


        return (
            <div className='row'>

                {/* <div className="col-md-6" onClick={this.pickerClose}>
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <h3 className="card-title">Items</h3>
                                <div className="input-group">
                                    <input
                                        name="name"
                                        autoComplete="off"
                                        type="text"
                                        className="form-control"
                                        placeholder="Type name here..."
                                        onChange={this.onHandleChange} />
                                    <button className='btn btn-create col-md-3'>Add new</button>
                                </div>
                            </form>
                            {items.map((i, index) =>

                                <div key={index} className={`row item-position ${id === index && "left-red-vertical-line"}`} >
                                    <div onClick={() => this.showComments(index)} className="col-md-8">
                                        {i.name}{' '}
                                        <span className="badge badge-pill badge-success-light">{i.comments.length}</span>
                                    </div>
                                    <div className="col-md-4" >
                                        <button className='btn  btn-delete m-l-btn' onClick={() => this.pressDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div> */}
                
                <Items 
                showComments={() => this.showComments()}
                items={items}
                 id={id}  
                 pressDelete={() => this.pressDelete(id)} 
                 handleSubmit={this.handleSubmit}
                 onChange={this.onHandleChange}
                 pickerClose={this.pickerClose}
                 />
                
                <Comments
                    items={items}
                    id={id}
                    onClick={this.pickerClose}
                    pickerShow={this.pickerShow}
                    isOpen={isOpen} 
                    comment={comment}
                    onChange={this.onHandleChange} 
                    onKeyDown={(e) => {
                        if (comment.length > 0 && e.ctrlKey && e.keyCode === 13) this.commentHandleSubmit();
                    }}
                    onChangeComplete={this.handleChangeComplete}  
                    background={background}   
                    color={background}             
                />

                {/* {items.length > 0 && id !== null && (
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form >
                                    <h3 className="card-title" onClick={this.pickerClose}>Coments #{id + 1}</h3>
                                </form>

                                {items[id].comments.map((comment, index) =>
                                    <div key={index} className="row" style={{ marginTop: 15 }} onClick={this.pickerClose}>
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
                                        <div onClick={this.pickerShow} style={{
                                            minHeight: 60, width: '100%', backgroundColor: background
                                        }}>

                                        </div>
                                        {this.state.isOpen && <SketchPicker
                                            color={background}
                                            onChangeComplete={this.handleChangeComplete}
                                            triangle='hide'


                                        ><button className="btn" >Add</button></SketchPicker>}
                                    </div>
                                    <div className="col-md-10">
                                        <div className="input-group">
                                            <textarea
                                                onKeyDown={(e) => {
                                                    if (comment.length > 0 && e.ctrlKey && e.keyCode === 13) this.commentHandleSubmit();
                                                }}
                                                onClick={this.pickerClose}
                                                name="comment"
                                                autoComplete="off"
                                                type="message"
                                                value={comment}
                                                className="form-control"
                                                placeholder="Type name here..."
                                                onChange={this.onHandleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

            </div>
        )
    }
}

export default Blog



