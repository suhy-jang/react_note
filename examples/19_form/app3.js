import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            dietaryVegetarian: false,
            dietaryKosher: false,
            dietaryLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, checked, type} = event.target
        if (type == 'checkbox') {
            this.setState({ [name]: checked })
        } else {
            this.setState({ [name]: value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
                    <input name="lastName" placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input name="age" placeholder="Age" onChange={this.handleChange} /><br />
                    <h4>Gender</h4>
                    <input name="gender" value="male" type="radio" checked={this.state.gender === 'male'} onChange={this.handleChange} />Male<br />
                    <input name="gender" value="female" type="radio" checked={this.state.gender === 'female'} onChange={this.handleChange} />Female<br />
                    <h4>Location</h4>
                    <select name="location" onChange={this.handleChange}>
                        <option value="">--Choose your destination--</option>
                        <option value="hungary">Hungary</option>
                        <option value="austria">Austria</option>
                        <option value="germany">Germany</option>
                    </select>
                    <h4>Dietary restrictions</h4>
                    <input type="checkbox" name="dietaryVegetarian" onChange={this.handleChange} />Vegetarian<br />
                    <input type="checkbox" name="dietaryKosher" onChange={this.handleChange} />Kosher<br />
                    <input type="checkbox" name="dietaryLactoseFree" onChange={this.handleChange} />Lactose free<br />
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>
                    Your destination:
                    {this.state.location}
                </p>
                <p>
                    Your dietary restrictions:
                    {this.state.dietaryVegetarian && 'Vegetarian '}
                    {this.state.dietaryKosher && 'Kosher '}
                    {this.state.dietaryLactoseFree && 'Lactose free '}
                </p>
            </main>
        )
    }
}

export default App
