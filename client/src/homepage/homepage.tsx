import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Result from "./result";
import Error from "./error";
import "./homepage.css"
import { ReactComponent as ImagesIcon } from "../assets/icons/camera-svgrepo-com.svg";
import { ReactComponent as VoiceIcon } from "../assets/icons/microphone-svgrepo-com.svg";
import Load from "./loading/loading";
import { Grid } from "@mui/material";

const HomePage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string; image?: string }[]
  >([]);
  const [file, setFile] = useState<File | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Starting request with query:", query);

    try {
      let answer = "";

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("query", query);

        const response = await axios.post(
          "https://smartsolve-ai.onrender.com/gemini",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("File upload response:", response);
        answer = response.data.result || "No content found.";
        addToChatHistory(query, answer, URL.createObjectURL(file));
        setFile(null);

        // Delete the file after use
        URL.revokeObjectURL(URL.createObjectURL(file));
      } else {
        const response = await axios.post("https://smartsolve-ai.onrender.com/gemini", {
          query,
        });
        console.log("Text query response:", response);
        answer = response.data.result || "No content found.";
        addToChatHistory(query, answer);
      }

      setResult(answer);
      setError("");
    } catch (err: any) {
      console.error("Full error object:", err);
      console.error("Error response:", err.response);
      console.error("Error message:", err.message);
      
      let errorMessage = "Unknown error occurred.";
      if (err.response) {
        // Server responded with error status
        errorMessage = err.response.data?.error || `Server error: ${err.response.status} ${err.response.statusText}`;
      } else if (err.request) {
        // Request was made but no response received
        errorMessage = "Network error: Unable to reach the server. Please check your internet connection.";
      } else {
        // Something else happened
        errorMessage = err.message || "An unexpected error occurred.";
      }
      
      setError(errorMessage);
      setResult("");
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  const addToChatHistory = (
    question: string,
    answer: string,
    image?: string
  ) => {
    setChatHistory((prev) => [...prev, { question, answer, image }]);
  };

  const handleImagesClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleVoiceClick = () => {
    console.log("Voice clicked");
    alert(
      "This website requires your microphone access for this tool to be used... "
    );
  };

  return (
    <React.Fragment>
      {/* Futuristic Glassmorphism Header with Icon Buttons */}
      <header className="homepage-header futuristic-header" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
        borderBottom: "1.5px solid #3b82f6",
        background: "linear-gradient(90deg, rgba(34,211,238,0.12) 0%, rgba(168,139,250,0.12) 100%)",
        backdropFilter: "blur(16px)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        boxShadow: "0 8px 32px rgba(34,211,238,0.08)",
        borderRadius: "0 0 24px 24px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo192.png" alt="Smartsolve AI Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <span style={{ fontFamily: 'Orbitron, Inter, sans-serif', fontWeight: 700, fontSize: 28, letterSpacing: 1, background: "linear-gradient(90deg,#22d3ee,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Smartsolve AI</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button title="Logout" onClick={() => { logout(); navigate("/"); }} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 18px", borderRadius: 10, border: "none",
            background: "linear-gradient(90deg,#a78bfa,#22d3ee)", color: "white",
            fontWeight: 600, fontSize: 16, cursor: "pointer", boxShadow: "0 2px 8px rgba(34,211,238,0.12)"
          }}>
            {/* Removed FaSignOut icon due to import error */} Logout
          </button>
        </div>
      </header>
      <Grid container spacing={2}>
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={4}
          padding={1}
          className="left-grid"
          display={"flex"}
          alignItems={"flex-start"}
        >
          <div className="left-side-container">
            <h2 className="p">Result:</h2>
            <div className="results">
              {result && <Result result={result} />}
              {error && <Error error={error} />}
            </div>
          </div>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={8}
          className="right-grid"
          padding={1}
          display={"flex"}
          alignItems={"flex-end"}
        >
          <div className="chat-container">
            <div className="chat-history" ref={chatContainerRef}>
              {chatHistory.map((chat, index) => (
                <div key={index} className="chat-item">
                  <div className="message self">
                    <p>{chat.question}</p>
                  </div>
                  <br />
                  {chat.image && (
                    <div className="message self">
                      <img
                        src={chat.image}
                        alt="uploaded"
                        className="uploaded-image"
                      />
                    </div>
                  )}
                  <div className="message other">
                    <p>{chat.answer}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="loading">
                  <Load />
                </div>
              )}
            </div>
            <div className="search-option">
              <div>
                <input
                  name="type"
                  type="radio"
                  value="type-images"
                  id="type-images"
                  style={{ display: "none" }}
                />
                <label htmlFor="type-images" onClick={handleImagesClick}>
                  <ImagesIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <input
                  name="type"
                  type="radio"
                  value="type-special"
                  id="type-special"
                  defaultChecked
                />
                <label htmlFor="type-special" onClick={handleVoiceClick}>
                  <VoiceIcon className="icon" />
                </label>
              </div>

              <form className="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  value={query}
                  placeholder="Type a message..."
                  className="search-input"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePage;
