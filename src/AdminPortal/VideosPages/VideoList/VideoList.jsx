import React, { useState, useEffect } from "react";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import styles from "./VideoList.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import CustomModal from "../../CustomModal/CustomModal";

const VideoList = ({ videos, setVideos }) => {
  const [menuVisible, setMenuVisible] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [filter, setFilter] = useState({ category: "", subCategory: "" });
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const categories = ["Category1", "Category2"]; // You can fetch this dynamically
  const subcategories = {
    Category1: ["SubCategory1", "SubCategory2"],
    Category2: ["SubCategory3", "SubCategory4"],
  };

  const [allVideos, setAllVideos] = useState([{}]);
  const [isDelete, setIsDelete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the videos from the backend when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/videos"); // Replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setAllVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);
  // useEffect(() => {
  //   // Filter videos based on category and subcategory
  //   const filtered = videos.filter(video =>
  //     (filter.category ? video.category === filter.category : true) &&
  //     (filter.subCategory ? video.subCategory === filter.subCategory : true)
  //   );
  //   setFilteredVideos(filtered);
  // }, [filter, videos]);

  const handleMenuClick = (event, videoId) => {
    setMenuVisible(menuVisible === videoId ? null : videoId);
  };

  const handleClose = () => {
    setMenuVisible(null);
  };

  const handleView = (videoId) => {
    navigate(`/videos/${videoId}`); // Navigate to the video detail page
    handleClose();
  };

  const handleEdit = (videoId) => {
    navigate(`/editVideo/${videoId}`);
    handleClose();
  };

  const handleDelete = async (videoId) => {
    setModalVisible(true);
    setDeleteId(videoId);
  };
  const handleDeleteVideo = async () => {
    if (deleteId) {
      setModalVisible(true);
      try {
        const response = await axios.delete(
          `http://localhost:3000/videos/${deleteId}`
        ); // Replace with your backend URL
        if (response.status) {
          setIsDelete(true);
          setTimeout(() => {
            setIsDelete(false);
            window.location.reload();
          }, 1000);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <CustomModal
        isVisible={isModalVisible}
        title="Are you sure you want to delete the Video?"
      >
        {/* Custom content goes here */}
        <div className="d-flex justify-content-between">
          <button
            className={styles.deleteButtons}
           
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Cancel
          </button>
          <button
           className={styles.deleteButtons}
         
            onClick={handleDeleteVideo}
          >
            Yes
          </button>
        </div>
      </CustomModal>
      <CustomModal isVisible={isDelete} title="Video is deleted">
        {/* Custom content goes here */}
       
      </CustomModal>
      <Navbar />
      <div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.content}>
          <div className={styles.filterContainer}>
            <h2>Uploaded Videos List</h2>
            <div className={styles.filterBox}>
              <select
                name="category"
                value={filter.category}
                onChange={handleFilterChange}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {filter.category && (
                <select
                  name="subCategory"
                  value={filter.subCategory}
                  onChange={handleFilterChange}
                >
                  <option value="">All Subcategories</option>
                  {subcategories[filter.category]?.map((subCat) => (
                    <option key={subCat} value={subCat}>
                      {subCat}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <Link to="/uploadvideo">
            <button className={styles.uploadButton}>Upload More Videos</button>
          </Link>

          {/* <div className={styles.videoGrid}>
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <div key={video.id} className={styles.videoCard}>
                  <div className={styles.videoPreview}>
                    <iframe 
                      src={video.embedLink} 
                      frameBorder="0" 
                      allowFullScreen 
                      title={video.title} 
                      className={styles.iframe}
                    ></iframe>
                  </div>
                  <div className={styles.videoInfo}>
                    <h5>{video.title}</h5>
                    <p>{video.smallDescription}</p>
                    <div className={styles.actions}>
                      <div onClick={() => handleView(video.id)}><FiEye /> View</div>
                      <div onClick={() => handleEdit(video.id)}><FiEdit /> Edit</div>
                      <div onClick={() => handleDelete(video.id)}><FiTrash /> Delete</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos available</p>
            )}
          </div> */}
          <div className={styles.videoGrid}>
            {allVideos?.map((video) => (
              <>
                {/* <div key={video._id} className={styles.videoCard}>
            <img
              src={`http://localhost:3000/${video.thumbnail}`} // Ensure correct path for thumbnails
              alt={video.title}
              className={styles.thumbnail}
            />
            <h3>{video.title}</h3>
            <p>{video.smallDescription}</p>
            <a href={video.embedLink} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div> */}
                <div key={video._id} className={styles.videoCard}>
                  <div className={styles.videoPreview}>
                    <iframe
                      src={video.embedLink}
                      frameBorder="0"
                      allowFullScreen
                      title={video.title}
                      className={styles.iframe}
                    ></iframe>
                  </div>
                  <div className={styles.videoInfo}>
                    <h5>{video.title}</h5>
                    <p>{video.smallDescription}</p>
                    <div className={styles.actions}>
                      <div onClick={() => handleView(video._id)}>
                        <FiEye /> View
                      </div>
                      <div onClick={() => handleEdit(video._id)}>
                        <FiEdit /> Edit
                      </div>
                      <div onClick={() => handleDelete(video._id)}>
                        <FiTrash /> Delete
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;
