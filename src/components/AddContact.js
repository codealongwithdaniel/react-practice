import React from "react";

class AddContact extends React.Component {
    render () {
        return (
            <div className="ui main">
                <h2>Add contact</h2>
                    <form className="ui form">
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="last-name" placeholder="Last Name" />
                        </div>
                        <button className="ui button blue" type="submit">Add</button>
                    </form>
            </div>
        )
    }
}

export default AddContact;