import "./Header.css";

export default function Collections({ itemsCollection }) {
  return (
    <>
      <div className="collectionsHeader">
        {itemsCollection.map((item, index) => {
          return (
            <div key={index} className="collectionsContainer">
              <img
                src={item.src}
                width={16}
                height={16}
                alt={item.collectionName}
              />
              <p>{item.collectionName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
