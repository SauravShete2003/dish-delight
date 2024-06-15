import CategoriesSection from "./CategoriesSection/CategoriesSection"
import


const categoriesData = [
  {
      
      name: "BreakFast",
      image: "",   
      timing : "⏱️15 min"
  
  },
  {
    
      name: "Veg",
      image: "",
      timing : "⏱️30 min"
  
  },
  
  {
   
      name: "Non-Veg",
      image: "",
      timing : "⏱️45 min"
  
  },
  {
   
      name: "FastFood",
      image: "",
      timing : "⏱️20 min"
  }
  ]
  
  const popularFood =[
      {
          id: "chhole bhature",
          name: "chhole bhature",
          image: "",
          descr: "Paneer tikka is a popular North Indian appetizer. The pillowy soft cubed paneer is threaded onto skewers between pieces of sweet and crunchy onions and peppers. These skewers are then cooked in a Tandoor (clay oven) until slightly charred and smokey"
          
      },
  
      {
          id: "paneer tikka",
          name: "paneer tikka",
          image: "",
          descr: "Paneer tikka is a popular North Indian appetizer. The pillowy soft cubed paneer is threaded onto skewers between pieces of sweet and crunchy onions and peppers."
      },
  
      {
          id:"Dosa",
          name: "Dosa",
          image: "",
          descr: " Dosa are two of the healthiest and most popular South Indian breakfast foods. Learn my fail-proof method for perfectly fermented batter to make crisp dosas and fluffy idlis every time"
      },
  
      {
          id :"Dal Makhan",
          name: "Dal Makhan",
          image: "",
          dsec : "It is a popular dal in North India and roadside eateries like Dhaba. Most of North Indian Dhabas usually don’t serve dal makhani, but they have several varieties of delicious dals, like dal tadka, Kali Dal, and Mah Ki Dal"
      },
  ]



function HomeCategories() {
  return (
<>
<h1 className="bg-primary fs-5 mx-3 my-3 text-black px-1 py-4 rounded text-center"
>Categories Section
</h1>
<div className="d-flex justify-content-evenly align-item-center ">
 
 {
    categoriesData.map((categoriesObj , i)=>{
      return(

      )

    })
 }

</div>

</>
  )
}

export default HomeCategories
