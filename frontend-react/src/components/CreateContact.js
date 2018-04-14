import React from 'react';
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends React.Component {
    handleSubmit = (event) => {
        // prevent submit to manually serialize submitted data
        event.preventDefault();
        const formValues = serializeForm(event.target, {hash: true});
        this.props.onCreateContact(formValues);        
    }
    render() {
        return (
            <div>
                <Link to="/" className="close-create-contact">
                    Close
                </Link>
                <form onSubmit={this.handleSubmit} className="create-contact-form">
                    <ImageInput
                        className="create-contact-avatar-input"
                        name="avatarURL"
                        maxHeight={64}/>
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <button>Add contact</button>
                    </div>
                </form> 
            </div>
        )
    }
}

export default CreateContact;