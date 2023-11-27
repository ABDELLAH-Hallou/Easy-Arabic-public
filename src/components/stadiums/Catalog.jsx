import ImageListComponent from "./ImageList";

const Catalog = ({imageList}) => {
    return (
        <div>
            <ImageListComponent imageList={imageList} />
        </div>
    );
};

export default Catalog;