import propTypes from 'prop-types';

const Bottle = ({bottle,handleAddToCard}) => {
    const{id,name,price,img} = bottle
    return (
        <div className="sing-bottle">
            <img src={img} />
            <h3>Bottle:{name}</h3>
            <h4>Bottle price:{price}</h4>
            <button onClick={()=>handleAddToCard(bottle)}>purcase</button>
        </div>
    );
};


export default Bottle;