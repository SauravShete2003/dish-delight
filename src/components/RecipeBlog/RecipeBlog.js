import React from 'react';
import "./RecipeBlog.css";

const RecipeBlog = [
    {
        id: 1,
        title: "Spicy Chicken Recipe - Village Cooking",
        videoblog: "https://www.youtube.com/embed/PVcAhAxQcgM",
        description: "Today in our village, we cook a spicy chicken recipe by making a full chicken roast. First we fried whole chicken then we roast the fried chicken in Tawa. By using traditional ingredients, we enjoy the taste of the traditional chicken recipe."
    },
    {
        id: 2,
        title: "Vegetable Biryani",
        videoblog: "https://www.youtube.com/embed/9Kf7wXcHJIs",
        description: "Dear Traditional Lifers, Today morning I woke up early morning and I went to our agri land to have a look, meanwhile Valar woke up and she got ready to go to the vegetable market, when I came back she gave me a tea and we both had together, then we went to the market and got some vegetables."
    },
    {
        id: 3,
        title: "India’s Premium Luxury Train Journey",
        videoblog: "https://www.youtube.com/embed/x4cR0TsnoCE",
        description: "Is video me main aap logo ko Bharat Gaurav Tourist Train mein north east ka journey kar ke dikhane wala hu or ye bhi dikhaunga ki first class mein kya kya khana milta hai. or v bohot sare chizo pe maine baat kiya hai video ko poora dekhna agar ye video acha lage toh like Share jaruru karna or subscribe karna na bhulna."
    },
];

export { RecipeBlog };

function RecipeBlogs() {
    return (
        <div className="recipeblog">
            <h1 className='w-50 bg-primary text-center my-3 mx-auto p-2 rounded'>Recipe Blogs</h1>
            <div className="recipeblog-container">
                {RecipeBlog.map((recipeblog) => (
                    <div key={recipeblog.id} className="recipeblog-card">
                        <iframe
                            width="100%"
                            height="315"
                            src={recipeblog.videoblog}
                            title={recipeblog.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h2 className='text-center my-3'>{recipeblog.title}</h2>
                        <p className='text-center text-green'>{recipeblog.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeBlogs;
