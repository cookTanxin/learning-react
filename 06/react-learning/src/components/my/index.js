import { PureComponent } from "react";

import store from "../../store";

export default class My extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter:store.getState().globalConter
        }
    }
    render () {
        return (
            <div>
                <h3>组件two</h3>
                <p>{this.state.counter}</p>
            </div>
        )
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                counter:store.getState().globalConter
            })
        })
    }
    componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
}