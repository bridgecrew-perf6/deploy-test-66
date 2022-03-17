import React from 'react'
import { loadFurniture, loadFurnitureSpecifics } from '../../lib/fetch-furniture';

function FurnitureSpecifics({ furnitureSpecificsData }) {
    return (
        <div>
            FurnitureSpecifics Info
            {/* ${furnitureSpecificsData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
            {furnitureSpecificsData.arImage} */}
        </div>
    )
}

export default FurnitureSpecifics

// export async function getStaticPaths() {
//     const furnitureArray = [];
//     // const res = await fetch(`${process.env.API_URL}/api/furniture`
//     // , {
//     //     method: 'GET',
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         Accept: "application/json; charset=UTF-8",
//     //         'User-Agent': '*',
//     //     },
//     // }
//     // );

//     // const res = await fetch('http://localhost:3000/api/furniture');
//     // const furnitureData = await res.json();

//     const furnitureData = await loadFurniture();
//     console.log(furnitureData)
//     for(const data of furnitureData) {
//         // furnitureArray.push({uri: data.relatedGroupId, 'furniture-specifics': data._id});
//         furnitureArray.push({uri: data.relatedGroupName, 'furniture-specifics': data.url});
//     }

//     const paths = furnitureArray.map(furniture => ({
//         params: {uri: furniture.uri, 'furniture-specifics': furniture["furniture-specifics"]}
//     }));

//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }


// export async function getStaticProps({ params }) {
//     // const res = await fetch(`${process.env.API_URL}/api/furniture/${params.uri}/${params['furniture-specifics']}`
//     // , {
//     //     method: 'GET',
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         Accept: "application/json; charset=UTF-8",
//     //         'User-Agent': '*',
//     //     },
//     // }
//     // );

//     // const res = await fetch(`http://localhost:3000/api/furniture/${params.uri}/${params['furniture-specifics']}`);
//     // const furnitureData = await res.json()

//     const furnitureData = await loadFurnitureSpecifics(params);
//     console.log(furnitureData)
//     return {
//       props: { furnitureSpecificsData: furnitureData },
//       revalidate: 3600
//     }
// }