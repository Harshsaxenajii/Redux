import Home from '../components/SideNavbar'
import {connect} from 'react-redux'
import {addToCart, removeToCart} from '../Services/Action/Action'
import SideNavbar from '../components/SideNavbar'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(SideNavbar)
// export default Home;