import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                  loading: false,
                  character: data
                })
            })
    }

    render() {
        const character = this.state.character
        const person = Object.keys(character).map(key => {
            return <div>{key}: {character[key]}</div>
        })

        return (
            <div>
                {this.state.loading ? 'Loading...' : person}
            </div>
        )
    }
}

export default App
