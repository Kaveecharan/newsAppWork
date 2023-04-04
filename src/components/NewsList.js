import React, { useEffect, useState } from 'react';
import axios from 'axios'

const NewsList = () => {
    const imagesPerPage = 8;

    const [images, setImages] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(images?.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const [loading, setLoading] = useState(false);
  
    const handlePreviousPage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage !== totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    
  const [modalImageIndex, setModalImageIndex] = useState(-1);

  const handleCloseModal = () => {
    setModalImageIndex(-1);
  };

  const renderModal = () => {
    if (modalImageIndex === -1) {
      return null;
    }

    const image = images[modalImageIndex];

    return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 min-h-screen">
            <div className="bg-white rounded-md p-8 max-w-lg h-4/5 overflow-auto relative">
                <img className="h-64 w-full object-contain mb-4" src={image.imageUrl} alt={image.des} />
                <h3 className="mt-2 text-lg font-medium font-alkatra text-primary-color text-justify">{image.title}</h3>
                <p className="mt-2 font-Ubuntu text-primary-color text-justify">{image.content}</p>
                <p className="text-gray-500 mt-1 font-Ubuntu text-optional-color">Author: {image.author}</p>
                <p className="text-gray-500 mt-1 font-Ubuntu text-optional-color">{image.date}</p>
                <button className="border border-gray-400 mt-1 text-sm rounded-md px-2 py-1 text-gray-800 hover:bg-gray-200 absolute top-0 right-0" onClick={handleCloseModal}>Close</button>
            </div>
            </div>
    );
  };

    const categories = ["all",  "sports", "technology", "entertainment"];
    const [activeCategory, setActiveCategory] = useState(0);

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    useEffect(()=>{
        setCurrentPage(1)
        const fetchNews = async () => {
            try {
              setLoading(true);
              const response = await axios.get(
                `https://inshorts.deta.dev/news?category=${categories[activeCategory]}`
              );
              setImages(response.data.data);
            } catch (error) {
              console.error(error)
            } finally {
              setLoading(false);
            }
          };
          fetchNews();
    }, [activeCategory])

  return (
    <>
        <h2 className="mx-5 my-4 text-2xl font-alkatra text-secondary-color">Our News</h2>
        <div className="flex mx-4 mb-8" >
            {categories.map((category, index) => (
            <button
                key={index}
                className={`mx-1 px-4 py-1 border rounded ${
                activeCategory === index ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
            >
                {category}
            </button>
            ))}
        </div>
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 mt-4 m-4 lg:grid-cols-4 mt-4 m-4 gap-4">
        {
            loading ? 
            [...Array(8)].map((_, index) => (
                <div key={index} className="flex justify-center items-center">
                <div className="animate-pulse rounded-md shadow-md p-4 w-full">
                    <div className="rounded-md bg-gray-200 h-48 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
                </div>
                </div>
            ))
            :
            images?.slice(startIndex, endIndex).map((image, index) => (
                <div key={index} className="flex justify-center items-start">
                <div className="flex flex-col items-start mb-8">
                    <img onClick={() => setModalImageIndex((currentPage-1) * 8 + index)} className="h-48 w-full object-cover rounded-md shadow-md" style={{ cursor: "pointer" }} src={image.imageUrl} alt={`Image ${index}`} />    
                    <h3 className="mt-2 text-lg font-medium font-alkatra text-primary-color">{image.title}</h3>
                    <p className="text-gray-500 mt-1 font-Ubuntu text-optional-color">{image.date}</p>
                    {image.content.length > 150 ? ( <p className="mt-2 font-Ubuntu text-primary-color text-justify">{`${image.content.slice(0, 150)}...`}</p> ) : ( <p className="mt-2 font-Ubuntu text-primary-color text-justify">{image.content}</p> )}
                    <button className="border border-gray-400 mt-2 text-sm rounded-md px-2 py-1 text-gray-800 hover:bg-gray-200" onClick={() => setModalImageIndex((currentPage-1) * 8 + index)}>Read More</button>
                </div>
                </div>
            ))
        }
    </div>
      <div className="flex justify-center mt-8 mb-8">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button
            onClick={handlePreviousPage}
            className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
            disabled={currentPage === 1}
          >
            <span>Previous</span>
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`${currentPage === index + 1 ? 'bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
            disabled={currentPage === totalPages}
          >
            <span >Next</span>
          </button>
        </nav>
      </div>
      {renderModal()}
    </>
  );
}

export default NewsList
