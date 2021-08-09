import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320"
                    title="Featured collection: Wanderlust"
                    description="Travel from home with Online Experiences." />
                <Card 
                    src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320"
                    title="Online Experiences"
                    description="Live, interactive activities led by Hosts." />
                <Card 
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                    title="Experiences"
                    description="Local things to do, wherever you are." />
                
            </div>
            
            <div className="home__section">
            <Card 
                    src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320"
                    title="Featured collection: Wanderlust"
                    description="Travel from home with Online Experiences."
                    price="59 $/day" />
                <Card 
                    src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320"
                    title="Online Experiences"
                    description="Live, interactive activities led by Hosts." 
                    price="59 $/day"/>
                    
                <Card 
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                    title="Experiences"
                    description="Local things to do, wherever you are." 
                    price="59 $/day" />
            </div>
        </div>
    )
}

export default Home
