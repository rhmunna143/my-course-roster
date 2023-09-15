const Cart = ({item,  credit, price, selectedCredit}) => {
    return (
        <div>
            <div>
                    <h4 className="font-medium text-[#2F80ED] mb-2">Credit Hour Remaining {credit} hr</h4>
                </div>

                <hr />

                <div className="mb-2">
                    <h4 className="font-bold my-2">Course Name</h4>

                    <ol className="list-decimal ml-4 text-sm">
                        {item.map((card => (
                            <li key = {card.id}>{card.title}</li>
                        )))}
                    </ol>
                </div>

                <hr />

                <div>
                    <h4 className="font-medium mb-2 text-sm pt-2">Total Credit Hour : {selectedCredit}</h4>
                </div>

                <hr />

                <div>
                    <h4 className="font-medium my-2">Total Price : {price} USD</h4>
                </div>
        </div>
    )
}

export default Cart;