//isomorphic-fetch paketi sayesinde hem client hem server tarafında fetch yapabiliyoruz
import React from 'react'
import unfetch from "isomorphic-fetch";

export async function getStaticProps() {
    const data = await unfetch('https://api.scoutium.com/api/clubs/4029/players?count=100')
    const players = await data.json()
    //console.log(players)
    return {
        props: {
            players
        }
    }
}
