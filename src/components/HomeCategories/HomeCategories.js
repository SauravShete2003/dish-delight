
    import { categoriesData, popularFood } from "../../data/HomeData";
    import CategoriesSection from "../CategoriesSection/CategoriesSection";
    import HeroSection from "../HeroSection/HeroSection";
    
    
    function HomeCategories() {
        return (
            <>
                <h2 className="bg-secondary  mx-auto my-3 text-black px-1 py-2 rounded text-center w-50 ">
                    Categories Section
                </h2>
                <div className="d-flex flex-wrap justify-content-evenly align-items-center">
                    {categoriesData.map((category, index) => (
                        <CategoriesSection
                            key={index}
                            id = {category.id}
                            name={category.name}
                            image={category.image}  
                            timing={category.timing}
                        />
                    ))}
                </div>

                <div>
                    <h2 className="text-center mx-auto my-3 px-1 py-2 rounded bg-secondary w-50">
                        India`s Popular Foods
                    </h2>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {popularFood.map((food, index) => (
                            <HeroSection
                            key={index}
                            id={food.id}
                            image={food.image}
                            title={food.title}
                            rating={food.rating}
                            descr={food.descr}
                            />
                            ))}
                    </div>
                </div>
            </>
        );
    }



    export default HomeCategories 



