import "./Header.css";

export default function Collections({ itemsCollection }) {
  return (
    <>
      <div class="collectionsHeader">
        {itemsCollection.map((item) => {
          return (
            <container class="collectionsContainer">
              <img
                src={item.src}
                width={16}
                height={16}
                alt={item.collectionName}
              />
              <p>{item.collectionName}</p>
            </container>
          );
        })}
      </div>
    </>
  );
}
