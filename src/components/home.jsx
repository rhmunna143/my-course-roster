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
        <div className="container mx-auto flex gap-4 p-4 lg:p-0 mb-[80px]">
            <div className="cards grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {cards.map((course) => (
                    <Card key={course.id} course={course}></Card>
                ))}
            </div>

            <div className="carts lg:w-[650px] h-max-content p-4 bg-white rounded-md">
                <div>
                    <h4 className="font-medium text-[#2F80ED] mb-2">Credit Hour Remaining  hr</h4>
                </div>

                <hr />

                <div>
                    <h4 className="font-medium my-2">Course Name</h4>

                    <ol>

                    </ol>
                </div>

                <hr />

                <div>
                    <h4 className="font-medium mb-2">Total Credit Hour : </h4>
                </div>

                <hr />

                <div>
                    <h4 className="font-medium my-2">Total Price : </h4>
                </div>
            </div>
        </div>
    )
}

export default Home;