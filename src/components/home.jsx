import { useEffect, useState } from "react";
import Card from "./card"
import Cart from "./cart";
import toast from 'react-hot-toast';

const Home = () => {
    const [cards, setCards] = useState([])
    const [item, setItem] = useState([])
    const [price, setPrice] = useState(0)
    const [credit, setCredit] = useState(0)
    const [remainingCredit, setRemainingCredit] = useState(20)

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setCards(data))
            .catch((error) => console.error(error));
    }, []);

    const handleSelect = (course) => {
        const isExist = item.find((item) => item.id == course.id);
        let totalPrice = course.price;
        let totalCredit = course.credit;

        if (isExist) {
            toast.error("You are unable to take one course Multiple Time!!!",
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            )
            return;
        } else {


            item.forEach(element => {
                // setPrice(price + element.price)

                totalPrice = totalPrice + element.price;
                totalCredit = totalCredit + element.credit;

            });

            const remaining = 20 - totalCredit;
            const fixedTotalPrice = totalPrice.toFixed(2)

            if (totalCredit > 20 || remaining < 0) {
                toast.error("You are unable to cross the Remaining Credit hr Limit and have to Remain available credit!!!",
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                )
                return;
            } else {
                setRemainingCredit(remaining)
                setCredit(totalCredit)
                setPrice(fixedTotalPrice)
                setItem([...item, course])
            }
        }



    }

    return (
        <div className="container mx-auto flex flex-col lg:flex-row gap-4 p-4 lg:p-0 mb-[80px]">
            <div className="cards grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {cards.map((course) => (
                    <Card key={course.id} handleSelect={handleSelect} course={course}></Card>
                ))}
            </div>

            <div className="carts lg:w-[650px] h-1/2 p-4 bg-white rounded-md">
                <Cart selectedCredit={credit} price={price} item={item} credit={remainingCredit}></Cart>
            </div>
        </div>
    )
}

export default Home;