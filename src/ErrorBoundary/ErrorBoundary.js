import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
    state=  {
        hasError: false,
        errorMessage : 'Doomed, Somthing Went Wrong ?'
    }

componentDidCatch = (error, info) =>{
    this.setState({hasError:true,
        errorMessage : 'Hey Somthing Doomed, Try Fix'
    });
}

    render() {
        if(this.state.hasError){
            return <div className='error-bounds'>
                {this.state.errorMessage}
            </div>
        }else{
            return <div className='ok-bounds'>
                {this.props.children}
            </div>
        }
    }
}

export default ErrorBoundary;