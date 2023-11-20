import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import axios from "axios";

const CommentInput = () => {
  const textareaRef = useRef(null);
  const [commentKategori, setCommentKategori] = useState("");
  const [isConfirmBtnDisabled, setIsConfirmBtnDisabled] = useState(true);

  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setIsConfirmBtnDisabled(textarea.value.trim() === "");
  };

  const handleConfirmClick = async () => {
    const textarea = textareaRef.current;
    const commentText = textarea.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/submit-comment",
        {
          comment: commentText,
        }
      );

      const data = response.data;

      if (response.status === 200) {
        setCommentKategori(data.response.kategori);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log("Error sending message : ", error.message);
    }
  };

  const handleDoneBtn = () => {
    window.location.href = "/";
  };

  const handleRepeatBtn = () => {
    setCommentKategori("");
  };

  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#FF9209] to-[#FFD200]">
      <Navbar />
      <div className="absolute transform top-1/2 -translate-y-1/2">
        <img src="/icons/like.svg" className="opacity-20 w-56" />
      </div>
      <div className="absolute transform top-1/2 right-0 -translate-y-1/2">
        <img src="/icons/dislike.svg" className="opacity-20 w-56" />
      </div>
      <div className="w-full md:mt-20 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-6">
          <div
            className={`md:w-[800px] md:h-[420px] ${
              commentKategori === "" && "bg-[#610C9F]"
            } ${commentKategori === "Good" && "bg-[#85d560]"} ${
              commentKategori === "Bad" && "bg-[#D83F31]"
            } rounded-[4rem] flex justify-center items-center`}
          >
            {commentKategori === "" && (
              <textarea
                ref={textareaRef}
                onChange={handleTextareaChange}
                className="bg-transparent resize-none border-none outline-none font-poppins text-white font-extrabold text-base text-center"
                placeholder="Type Here"
                rows={1}
                required
              />
            )}
            {commentKategori === "Good" && (
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/goodreview.svg" />
                <div className="font-poppins font-bold text-black text-xl">
                  <h1>Good Review</h1>
                </div>
              </div>
            )}
            {commentKategori === "Bad" && (
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/badreview.svg" />
                <div className="font-poppins font-bold text-black text-xl">
                  <h1>Bad Review</h1>
                </div>
              </div>
            )}
          </div>
          {commentKategori === "" && (
            <div className="flex justify-center">
              <button
                className="px-12 py-2 text-lg text-[#FFD200] font-poppins font-extrabold bg-[#451952] rounded-xl"
                onClick={handleConfirmClick}
                disabled={isConfirmBtnDisabled}
              >
                Confirm
              </button>
            </div>
          )}
          {commentKategori !== "" && (
            <div className="flex justify-between w-full md:px-16">
              <button
                className="px-12 py-2 text-lg text-[#FFD200] font-poppins font-extrabold bg-[#451952] rounded-xl"
                onClick={handleDoneBtn}
              >
                Done
              </button>
              <button
                className="px-12 py-2 text-lg text-[#FFD200] font-poppins font-extrabold bg-[#451952] rounded-xl"
                onClick={handleRepeatBtn}
              >
                Repeat
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentInput;
