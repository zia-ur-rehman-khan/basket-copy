import Image from "next/image"

const OrderRow = ({ image, qty, price, name }) => {
    return (
        <div className="order__row">
            <div className="order__item">
                <Image src={image} alt=" " />
                <span className="item__name">{name}</span>
            </div>
            <div className="order__qty">Qty:{qty}</div>
            <div className="order__price">£{price}</div>
        </div>
    )
}

export default OrderRow