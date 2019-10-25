import React from 'react';
import './blog.css';
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
            modal: false,
            error: false,
            erroritem: false
        }
    }

    toggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
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

    pressDelete = (i, index) => {
        
        const items = this.state.items.filter((u, index)=>  i !== index)
        localStorage.setItem('items', JSON.stringify(items));

        this.setState({
            items, id:this.state.id
        });
    }

    handleSubmit = (e) => {
        const { name } = this.state;
        e.preventDefault();

        if (name.trim().length === 0) {
            this.setState({ erroritem: true });
            return;
        }
        this.additem({
            name: name,
            comments: []
        });

        this.setState({
            name: '',
            erroritem: false
        });
        e.target.reset();

    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    showComments = (index) => {  
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

    commentHandleSubmit = () => {
        const { comment, background } = this.state;
        if (comment.trim().length === 0) {
            this.setState({ error: true });
            return;
        }

        this.commentAdd({
            comment,
            background
        });
        this.setState({
            comment: '',
            background: '#20c997',
            error: false
           
        });
    }


    render() {

        const { items, id, comment, background, isOpen, error, erroritem,modal } = this.state;

        return (
            <div className='row'>               

                <Items
                    showComments={this.showComments}
                    items={items}
                    id={id}
                    pressDelete={this.pressDelete}
                    handleSubmit={this.handleSubmit}
                    onChange={this.onHandleChange}
                    pickerClose={this.pickerClose}
                    error={erroritem}
                />

                <Comments
                    items={items}
                    id={id}
                    isOpen={isOpen}
                    comment={comment}
                    onChange={this.onHandleChange}
                    onKeyDown={(e) => {
                        if (e.ctrlKey && e.keyCode === 13) this.commentHandleSubmit();
                    }}
                    onChangeComplete={this.handleChangeComplete}
                    background={background}
                    color={background}
                    error={error}
                    modal={modal}
                    toggle={this.toggle}
                />

            </div>
        )
    }
}

export default Blog



