import React, {Component} from "react";
import "./App.css"
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    // no arrow function for REACT functions
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            return response.json();
        }).then((users) => {
            this.setState({robots: users});
        });
    }

    // must use an arrow function for our functions
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        // if http request for robots is taking a bit
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        // when robots are loaded
        } else {
            return (
                <div className="appContainer">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }

}

export default App;