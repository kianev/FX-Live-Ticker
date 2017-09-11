import React, {Component} from 'react';
import io from 'socket.io-client';
import './Table.css';
import TableRow from './TableRow'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fxRates: []
        };
    }

    componentDidMount() {
        io("wss://fx.now.sh/").on("data", (data) => this.setState({fxRates: data}))
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                </tr>
                </thead>
                <tbody>
                {this.state.fxRates.map((rate) => (
                    <TableRow key={rate.currencyPair} fxData={rate}/>)
                )}
                </tbody>
            </table>
        );
    }
}

