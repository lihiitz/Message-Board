import { TableBody } from "material-ui";
import Offer from "./Offer";
import OffersPage from "./OffersPage";



const { Component } = require("react");

class Offers extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render () {
        return (
            <TableBody>
                {this.props.offers.map((offer) => {
                    return(
                        <Offer key={offer.title} offer={offer}/>
                    )
                })}
            </TableBody>
        )
    }
}

const style = {
    margin: 15,
}

export default Offers