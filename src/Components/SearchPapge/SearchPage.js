import { Button } from '@material-ui/core'
import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import "./SearchPage.css"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outline">Cancellation Flexibility</Button>
                <Button variant="outline">Type Of Place</Button>
                <Button variant="outline">Price</Button>
                <Button variant="outline">Rooms and Beds</Button>
                <Button variant="outline">More filters</Button>
            </div>
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/d0999807-2c9c-4ad4-809d-6d0cd816ecfc.jpg?im_w=960"
                location="Entire rental unit in Rabat"
                title="🌱 Cozy One-Room Flat on AGDAL"
                description="2 guests . Studio . 1 bed . 1 bath . Kitchen . Washer"
                star="5.0"
                price="339MAD / Night"
                total="1245 MAD total" />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/d0999807-2c9c-4ad4-809d-6d0cd816ecfc.jpg?im_w=960"
                location="Entire rental unit in Rabat"
                title="🌱 Cozy One-Room Flat on AGDAL"
                description="2 guests . Studio . 1 bed . 1 bath . Kitchen . Washer"
                star="5.0"
                price="339MAD / Night"
                total="1245 MAD total" />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/d0999807-2c9c-4ad4-809d-6d0cd816ecfc.jpg?im_w=960"
                location="Entire rental unit in Rabat"
                title="🌱 Cozy One-Room Flat on AGDAL"
                description="2 guests . Studio . 1 bed . 1 bath . Kitchen . Washer"
                star="5.0"
                price="339MAD / Night"
                total="1245 MAD total" />
        </div>
    )
}

export default SearchPage
