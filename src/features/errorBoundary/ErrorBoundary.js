import { Component } from "react";
class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) {
            return <p className='error'>Sorry, something went wrong. Please, return to the main page</p>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;