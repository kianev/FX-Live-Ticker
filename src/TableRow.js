import React, {Component} from 'react';

export default class TableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.fxData.currencyPair}</td>
                <td>{this.props.fxData.bidBig}{this.props.fxData.bidPips}</td>
            </tr>
        );
    }
}
