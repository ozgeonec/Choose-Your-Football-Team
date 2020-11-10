import React from 'react'
import Layout from "../components/layout/layout";
import useSWR from 'swr'
import fetcher from "../lib/fetch";
import Player from "../components/player/player";

function HomePage() {
    // const { data, error } = useSWR('https://api.scoutium.com/api/clubs/4029/players?count=100', fetcher)
    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>
    // //console.log(data)
    return (
        <Layout>

            {/*{data?.players.map((player) => {*/}
            {/*    return <Player key={player.id} {...player}/>*/}
            {/*})}*/}
        </Layout>
    )

}


export default HomePage

