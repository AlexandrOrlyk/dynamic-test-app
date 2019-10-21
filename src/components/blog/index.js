import React from 'react';
import './blog.css';
import Form from '../items/form'


class Items extends React.Component {
    constructor(props) {
        super(props);
        const items = JSON.parse(localStorage.getItem('items'));
        this.state = {
            id: 1,
            items: items ? items : [],
            name: '',
            comments: ''
        }
    }


    componentDidMount() {

    }

    additem = (newitem) => {
        let items = [...this.state.items, newitem];
        console.log('123', items)
        localStorage.setItem('items', JSON.stringify(items));

        this.setState({
            items
        });
    }

    pressDelete = (i) => {
        let items = this.state.items.filter((u, index) => {
            return index !== i;
        });

        console.log('123', ...items)
        localStorage.setItem('items', JSON.stringify(items));
        this.setState({
            items
        });
    }

    handleSubmit = (e) => {
        const { name, comments, id } = this.state;
        e.preventDefault();
        this.additem({
            id: id,
            name: name,
            comments: [comments]
        });
        e.target.reset();

    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    showComments = (index) => {
        if (index){
            console.log(index)
        }
    }

    render() {

        const { items } = this.state;

        console.log('items', items)

        return (
            <div className='row'>

                <div className="col-md-6">
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

                                <div key={index} className="row" style={{ marginTop: 15, borderBottom: '1px solid #fafafa' }}>
                                    <div onClick={() => this.showComments(index)} className="col-md-9">
                                        {i.name}{' '}
                                        <span className="badge badge-pill badge-danger">{i.comments.length}</span>
                                    </div>
                                    <div className="col-md-3" >
                                        <button className='btn  btn-outline-danger m-l-btn' style={{ marginBottom: 5 }} onClick={() => this.pressDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <h3 className="card-title">Coments</h3>
                            </form>

                            {items.map((i, index) =>
                                <div key={index} className="row" style={{ marginTop: 15 }}>
                                    <div onClick={() => this.showComments(index)} className="col-md-9">
                                        {i.comments}{' '}
                                    </div>
                                </div>
                            )}

                            <div className="input-group">
                                <input
                                    name="comments"
                                    autoComplete="off"
                                    type="text"
                                    className="form-control"
                                    placeholder="Type name here..."
                                    onChange={this.onHandleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items



