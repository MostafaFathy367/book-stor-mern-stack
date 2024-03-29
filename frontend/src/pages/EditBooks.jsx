import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBooks() {
  const [formDate, setFormDate] = useState({
    title: '',
    author: '',
    publishYear: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSaveBook = () => {
    setLoading(true);
    axios.patch(`http://localhost:5000/api/books/${id}`, formDate).then(() => {
      navigate('/');
    }).finally(() => {
      setLoading(false);
    })
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type="text" 
            value={formDate.title} 
            onChange={(e) => setFormDate(prev => ({...prev, title: e.target.value}))} 
            id="title" 
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">Author</label>
          <input 
            type="text" 
            value={formDate.author} 
            onChange={(e) => setFormDate(prev => ({...prev, author: e.target.value}))} 
            id="author" 
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input 
            type="text" 
            value={formDate.publishYear} 
            onChange={(e) => setFormDate(prev => ({...prev, publishYear: e.target.value}))} 
            id="publishYear" 
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook} disabled={loading}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBooks;