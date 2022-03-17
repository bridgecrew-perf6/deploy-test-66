import { loadFurniture, loadFurnitureSections } from "../../lib/fetch-furniture";

function FurnitureSection({ furniture }) {
    return (
        <div>
            Show the info
            {furniture.map((data, index) => (
                <div key={index}>
                    <p>{data.relatedGroupName}</p>
                    <p>{data.name}</p>
                </div>
            ))}
        </div>
    )
}

export default FurnitureSection

export async function getStaticPaths() {
    const idsArray = [];
    const furnitureData = await loadFurniture();
    for(const data of furnitureData) {
        // idsArray.push(data.relatedGroupId);
        idsArray.push(data.relatedGroupName);
    }
    const pathsArray = [...new Set(idsArray)];

    const paths = pathsArray.map(furniture => ({
        params: {uri: furniture}
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const furnitureData = await loadFurnitureSections(params)
    return {
      props: { furniture: furnitureData },
      revalidate: 3600
    }
}