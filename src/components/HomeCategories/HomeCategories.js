    import "./HomeCategories.css";
    import { categoriesData, popularFood } from "../../data/HomeData";
    import CategoriesSection from "../CategoriesSection/CategoriesSection";
    import HeroSection from "../HeroSection/HeroSection";


    function HomeCategories() {
        return (
            <>
                <h2 className="bg-primary flex-column mx-auto my-3 text-black px-1 py-2 rounded text-center w-50">
                    Categories Section
                </h2>
                <div className="d-flex justify-content-evenly align-items-center">
                    {categoriesData.map((category, index) => (
                        <CategoriesSection
                            key={index}
                            name={category.name}
                            image={category.image}
                            timing={category.timing}
                        />
                    ))}
                </div>

                <div>
                    <h2 className="text-center mx-auto my-3 px-1 py-2 rounded bg-info w-50">
                        India`s Popular Foods
                    </h2>
                    <div className="hero-section-container">
                        {popularFood.map((food, index) => (
                            <HeroSection
                            key={index}
                            image={food.image}
                            title={food.title}
                            descr={food.descr}
                            />
                            ))}
                    </div>
                </div>
            </>
        );
    }



    export default HomeCategories 



