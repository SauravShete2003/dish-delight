import CategoriesSection from "./CategoriesSection/CategoriesSection"
function HomeCategories() {
  return (
<>
<h1 className="bg-primary fs-5 mx-3 my-3 text-black px-1 py-4 rounded text-center"
>Categories Section
</h1>
<div className="d-flex justify-content-evenly align-item-center ">
 
<CategoriesSection />
<CategoriesSection />
<CategoriesSection />
<CategoriesSection />
 
</div>

</>
  )
}

export default HomeCategories
