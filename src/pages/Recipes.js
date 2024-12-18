import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1 (1).jpg",
        },
        {
            title: "Sphegetti and Meetballs",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2 (1).jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3 (1).jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4 (1).jpg",
        },
        {
            title: "Paneer sandwitch",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_5 (1).jpg",
        },
        {
            title: "kushka and sambar",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_6 (1).jpg",
        }
    ].sort(() => Math.random() - 0.5)
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard /> */}

                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}