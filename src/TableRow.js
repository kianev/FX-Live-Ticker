import React, {Component} from 'react';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorStyle: "",
            directionArrow: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        let {bidBig: prevBidBig, bidPips: prevBidPips} = this.props.fxData;
        let {bidBig, bidPips} = nextProps.fxData;

        let diff = (prevBidBig + prevBidPips) - (bidBig + bidPips);

        if (diff) this.setState({colorStyle: diff > 0 ? "red" : "green"});
        if (diff) this.setState({directionArrow: diff > 0 ? "\u25bc" : "\u25b2"});
    }

    render() {
        let style = {
            color: this.state.colorStyle
        };

        return (
            <tr>
                <td>{this.props.fxData.currencyPair}</td>
                <td style={style}>
                    {this.props.fxData.bidBig}
                    {this.props.fxData.bidPips}
                    { this.state.directionArrow}
                </td>
            </tr>
        );
    }
}
