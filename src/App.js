import React, {useState, useEffect} from "react";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.hits);
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, [searchTerm])



  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setSearchTerm(text)}/>
      {!isLoading && images.length === 0 && 
      
      <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
      
      {isLoading ? 
      <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :  
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image}/>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
