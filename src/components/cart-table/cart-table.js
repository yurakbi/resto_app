import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions';
import WithRestoService  from '../hoc';


const CartTable = ({items, deleteFromCard, RestoService}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item;
                        return(
                            <div key={id} className="cart__item">
                                <img src={url} alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ * {qtty}</div>
                                <div onClick={() => deleteFromCard(id) } className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
                
            </div>
            <button onClick = {() => {RestoService.setOrder(generateOrder(items))} } className="order"> Оформить заказ </button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCard
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps) (CartTable));