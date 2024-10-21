import PropTypes from 'prop-types';
const Cart = ({card,handleremovefromcart}) => {
    const tempstyle = {
        width: '150px',
        marginLeft: '20px',
        borderRadius: '12px'
    }
    return (
        <div>
            <h3>Card: {card.length}</h3>
            {
            card.map(bottle=> <div key={bottle.id}>
                <img  style={tempstyle} src={bottle.img}></img>
                <button onClick={()=>handleremovefromcart(bottle.id)}>remove</button>
            </div>)
            }
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired
}

export default Cart;