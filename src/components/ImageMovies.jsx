import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchImageMovie } from '../../src/api/imageMovie'; 

function ImageMovie() {
    const { id } = useParams(); 
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchImageData() {
            try {
                const imagePath = await fetchImageMovie(id);
                const baseUrl = "https://image.tmdb.org/t/p/w500"; 
                const fullImageUrl = `${baseUrl}${imagePath}`;
                setImageUrl(fullImageUrl);
            } catch (error) {
                console.error('Erreur lors de la récupération image du film :', error);
                setImageUrl(null); 
            }
        }
        fetchImageData();
    }, [id]);

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt="Movie Poster" className="h-[55vh] w-full" />
            ) : (
                <p className="text-white">Image non disponible</p>
            )}
        </div>
    );
}

export default ImageMovie;



