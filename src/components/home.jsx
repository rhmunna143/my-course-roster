import { useEffect, useState } from "react";
import Card from "./card"
import { data } from "autoprefixer";

const Home = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("../../public/data.json")
            .then((res) => res.json())
            .then((data) => setCards(data))
            .catch((error) => console.error(error)); 
    }, []);


    return (
        <div className="container mx-auto flex p-4 lg:p-0">
            <div className="cards grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {cards.map((course) => (
                    <Card key={course.id} course ={course}></Card>
                ))}
            </div>

            <div className="carts lg:w-[790px]">

            </div>
        </div>
    )
}

export default Home;