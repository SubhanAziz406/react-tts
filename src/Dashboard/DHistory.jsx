// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHistory } from '@fortawesome/free-solid-svg-icons';
// import DashboardHeader from '../components/Dheader';

// const DHistory = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const storedHistory = JSON.parse(localStorage.getItem('audioHistory')) || [];
//     setHistory(storedHistory);
//   }, []);

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '20px',
//     },
//     icon: {
//       color: '#815BF5',
//       marginBottom: '20px',
//     },
//     historyItem: {
//       backgroundColor: '#f8f9fa',
//       padding: '10px',
//       borderRadius: '5px',
//       marginBottom: '10px',
//       width: '100%',
//       maxWidth: '500px',
//       boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
//     },
//     audio: {
//       width: '100%',
//       marginTop: '5px',
//     },
//   };

//   return (
//     <div>
//       <DashboardHeader />
//       <div style={styles.container}>
//         <FontAwesomeIcon icon={faHistory} size="8x" style={styles.icon} />
//         <h2>Your History</h2>
//         {history.length === 0 ? (
//           <p>No audio files in history.</p>
//         ) : (
//           history.map((entry, index) => (
//             <div key={index} style={styles.historyItem}>
//               <p><strong>Text:</strong> {entry.text}</p>
//               <p><strong>Date:</strong> {new Date(entry.date).toLocaleString()}</p>
//               <audio controls style={styles.audio}>
//                 <source src={entry.url} type="audio/mpeg" />
//                 Your browser does not support the audio element.
//               </audio>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default DHistory;




import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHistory } from "@fortawesome/free-solid-svg-icons";
import DashboardHeader from "../components/Dheader";
import { toast } from "react-toastify";
import axios from "axios";
import CONFIG from "../config/index";
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook 

const DHistory = () => {
  const [history, setHistory] = useState([]); // Stores history items
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const navigate = useNavigate(); // Hook to redirect users
  // Fetch history items from the backend
  useEffect(() => {
    

const token = localStorage.getItem('token');  // Adjust this key if necessary
if (!token) {
  navigate('/signin');  // Redirect to sign-in if no token is found
  return;
}

    const fetchHistory = async () => {
      setLoading(true);

      try {
        const userId = localStorage.getItem("userId");
       
        // Fetch history items from your backend
        const response = await axios.get(`${CONFIG.baseURL}/api/history`, {
          withCredentials: true, // Include credentials (cookies) in the request
        });

        console.log({response});
        
    
        // Check if the response contains the 'history' array
        if (response.data && Array.isArray(response.data.matchedHistory)) {
          // Map history items to include audio URLs
          const processedHistory = response.data.matchedHistory.map((item) => ({
            ...item,
            audio_url: item.audio_url || `${CONFIG.baseURL}/api/history/${item.history_item_id}/audio`, // Construct dynamic audio URL
          }));
    
          setHistory(processedHistory); // Set processed history in state
        } else {
          console.error("Invalid history data structure:", response.data);
          toast.error("Invalid history data received.");
        }
      } catch (error) {
        console.error("Error fetching history:", error);
        toast.error("Failed to fetch history. Please try again later.");
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchHistory();
  }, [navigate]);

  const deleteHistoryItem = async (historyItemId) => {
    try {
      // Call backend to delete history item with credentials
      await axios.delete(`${CONFIG.baseURL}/api/history/${historyItemId}`, {
        withCredentials: true, // Ensures cookies are sent
      });
  
      toast.success("History item deleted successfully!");
  
      // Update history state after deletion
      setHistory((prevHistory) =>
        prevHistory.filter((item) => item.history_item_id !== historyItemId)
      );
    } catch (error) {
      console.error("Error deleting history item:", error);
      toast.error("Failed to delete history item. Please try again.");
    }
  };

  return (
    <div style={{marginTop:'100px'}}>
      <DashboardHeader />
      <div style={{ padding: "20px" }}>
       
        <h2>Your History</h2>
        {loading ? (
          <p>Loading history...</p>
        ) : history.length === 0 ? (
          <p>No audio files in history.</p>
        ) : (
          history.map((entry, index) => (
            <div
              key={entry.history_item_id || index}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              <p>
                <strong>Text:</strong> {entry.text}
              </p>

              <audio controls>
                <source src={entry.audio_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <button
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={() => deleteHistoryItem(entry.history_item_id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DHistory;
