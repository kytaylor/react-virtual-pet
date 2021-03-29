import React, { Component } from 'react'
class Tamagotchi extends Component {
    state = {
        time: 10,
    }

    constructor(props) {
        super(props);

        this.state = {
            hunger: true,
            happy: true,
            sleepy: false,
            bored: true,
            age: 0,
            time: 10,
            message: "Try to keep me alive!"
        };
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          this.setState(({ time }) => ({
            time: time - 1
          }))
        }, 1000)
    }

    handleFeed() {
        let { time, hunger, bored } = this.state
        if (time <= 0) {
            const message = "I am dead :("
            this.setState({ message })
        } else if (hunger === false) {
            const message = "I'm not hungry!"
            this.setState({ message })
        } else {
            const hunger = false;
            this.setState({ hunger })
            const bored = true;
            this.setState({ bored })
            time = time + 5;
            this.setState({ time })
        }
    }

    handlePlay() {
        let { time, bored, sleepy } = this.state
        if (time <= 0) {
            const message = "I am dead :("
            this.setState({ message })
        } else if (sleepy === true) {
            const message = "I'm too sleepy to play'!"
            this.setState({ message })
        } else if (bored === false) {
            const message = "I don't want to play!"
            this.setState({ message })
        } else {
            const bored = false;
            this.setState({ bored })
            const sleepy = true;
            this.setState({ sleepy })
            time = time + 5;
            this.setState({ time })
        }
    }

    handleSleep() {
        let { time, sleepy, bored, hunger } = this.state
        if (time <= 0) {
            const message = "I am dead :("
            this.setState({ message })
        } else if (bored === true) {
            const message = "I'm too bored to sleep!"
            this.setState({ message })
        } else if (sleepy === false) {
            const message = "I'm not sleepy!"
            this.setState({ message })
        } else {
            const sleepy = false;
            this.setState({ sleepy })
            const hunger = true;
            this.setState({ hunger })
            time = time + 5;
            this.setState({ time })
        }
    }

    render() {
        const { time } = this.state
        const { hunger, happy, sleepy, bored, age, message } = this.state;

        return (
            <div>
                { time <= 0
                            ? <h1>Too bad! I died :(</h1>
                            : <h1>Time Remaining: {time}</h1>
                }

                <div className="stats">
                    <div className="hunger">Hunger: {hunger ? "True" : "False"}</div>
                    <div className="happy">Happiness: {happy ? "True" : "False"}</div>
                    <div className="sleepy">Sleepy: {sleepy ? "True" : "False"}</div>
                    <div className="bored">Boredom: {bored ? "True" : "False"}</div>
                    <div className="age">Age: {age}</div>
                </div>

                <div className="buttons">
                    <button onClick={this.handleFeed.bind(this)}>Feed me!</button>
                    <button onClick={this.handlePlay.bind(this)}>Play with me!</button>
                    <button onClick={this.handleSleep.bind(this)}>Go to sleep!</button>
                </div>

                <div className="message">{message}</div>
            </div>
    )
  }
}

export default Tamagotchi;