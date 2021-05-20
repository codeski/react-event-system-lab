// Code Keypad Component Here
import React from 'react' 

class Keypad extends React.Component {

    enteringPsswd = (event) => console.log('Entering password...')
    

    render() {
        return (
            <input onKeyUp={this.enteringPsswd} type="password" />
        )
    }
}

export default Keypad