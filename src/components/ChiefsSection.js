import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){

    const chiefs = [
        {
            name:"Juan carlous",
            img: "/img/top-chiefs/img_1 (1).jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name:"Juan carlous",
            img: "/img/top-chiefs/img_2 (1).jpg",
            recipesCount: "12",
            cuisine: "Mexican",
        },
        {
            name:"Juan carlous",
            img: "/img/top-chiefs/img_3 (1).jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name:"Juan carlous",
            img: "/img/top-chiefs/img_4 (1).jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name:"Juan carlous",
            img: "/img/top-chiefs/img_5 (1).jpg",
            recipesCount: "05",
            cuisine: "Mexican",
        },
        {
            name:"Juan carlous",
            img: "/img/top-chiefs/img_6 (1).jpg",
            recipesCount: "13",
            cuisine: "Mexican",
        },
    ]
    
    return(
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}

                {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}