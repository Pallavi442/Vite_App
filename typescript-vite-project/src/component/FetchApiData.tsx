import { useState, useEffect } from 'react';
import './Style.css';

interface ApiProps {
  id: number;
  title: string;
  body: string;
}

function FetchApiData() {
  const [apiData, setApiData] = useState<ApiProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchDataApi();
  }, []);


  const fetchDataApi = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setApiData(data);
      console.log('data', data);
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = apiData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(apiData.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentData && currentData.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            {Array.from(
              { length: Math.ceil(apiData.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(apiData.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FetchApiData;
