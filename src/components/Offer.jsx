import { TableCell } from "@material-ui/core";
import { TableRow } from "material-ui";

const { Component } = require("react");

class Offer extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : '',
            description  : '',
            phoneNumber : '',
            email : '',
            viewing : 0
        }
    }
    render () {
        return (
            <TableRow>
                <TableCell component="th" scope="row">{this.props.offer.title}</TableCell>
                <TableCell align="right">+</TableCell>
            </TableRow>
        )
    }
}

export default Offer