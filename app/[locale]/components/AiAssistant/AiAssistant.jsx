"use client";

import { useEffect, useRef, useState } from "react";

export const AiAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  /*
   * Automatically scroll to the latest message
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    //   messagesEndRef.current?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end",
    //   });
    // }, [messages, isLoading, isOpen]);
    messagesEndRef.current?.scrollIntoView({
      behavior: isLoading ? "auto" : "smooth",
      block: "end",
    });
  }, [messages, isLoading, isOpen]);

  if (!isOpen) {
    return null;
  }

  const sendMessage = async (messageText) => {
    const text = messageText.trim();

    if (!text || isLoading) {
      return;
    }

    setInput("");
    setError("");
    setIsLoading(true);

    const userMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    try {
      /*
       * Convert messages into the format expected by the API.
       */
      const apiMessages = updatedMessages.map((message) => ({
        id: message.id,
        role: message.role,
        parts: [
          {
            type: "text",
            text: message.text,
          },
        ],
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: apiMessages,
        }),
      });

      /*
       * Safely read the API response.
       */
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get AI response.");
      }

      const assistantMessage = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        text: data.text || "I couldn't generate a response.",
        action: data.action || null,
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("AI Assistant Error:", error);

      setError(
        error.message ||
          "Sorry, I couldn't process that request. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  /*
   * Submit typed message
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    await sendMessage(input);
  };

  const clearChat = () => {
    setMessages([]);
    setInput("");
    setError("");
  };

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[100]
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-t-2xl
        border
        border-white/10
        bg-[#151320]
        shadow-2xl
        sm:bottom-6
        sm:left-auto
        sm:right-6
        sm:w-[380px]
        sm:rounded-2xl
      "
    >
      {/* ================= HEADER ================= */}

      {/* <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          bg-[#211b3b]
          px-4
          py-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-yellow-400
              text-lg
              text-black
            "
          >
            ✨
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Nidhi AI</h3>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

              <span className="text-[11px] text-white/50">
                AI Portfolio Assistant
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-xl
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
          aria-label="Close AI assistant"
        >
          ×
        </button>
        <button
          type="button"
          onClick={clearChat}
          className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
          aria-label="Clear chat"
          title="Clear chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v5" />
            <path d="M14 11v5" />
          </svg>
        </button>
      </div> */}

      <div
        className="
    flex
    items-center
    justify-between
    gap-3
    border-b
    border-white/10
    bg-[#211b3b]
    px-4
    py-3.5
  "
      >
        {/* LEFT: AI PROFILE */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-yellow-400
        text-lg
        text-black
        shadow-sm
      "
          >
            ✨
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-5 text-white">Nidhi AI</h3>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />

              <span className="truncate text-[11px] leading-4 text-white/50">
                AI Portfolio Assistant
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: HEADER ACTIONS */}
        <div className="flex shrink-0 items-center gap-1">
          {/* CLEAR CHAT BUTTON */}
          <button
            type="button"
            onClick={clearChat}
            className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        text-white/50
        transition
        hover:bg-white/10
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-400/50
      "
            aria-label="Clear chat"
            title="Clear chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v5" />
              <path d="M14 11v5" />
            </svg>
          </button>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        text-xl
        leading-none
        text-white/50
        transition
        hover:bg-white/10
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-400/50
      "
            aria-label="Close AI assistant"
            title="Close"
          >
            <span className="relative -top-px">×</span>
          </button>
        </div>
      </div>

      {/* ================= MESSAGES ================= */}

      <div className="h-[380px] overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-white/90">Hi 👋</p>

              <p className="mt-1 text-sm leading-6 text-white/60">
                I&apos;m Nidhi&apos;s AI assistant. Ask me about her experience,
                skills, projects, or technical background.
              </p>
            </div>

            <div>
              <p
                className="
                  mb-2
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-white/30
                "
              >
                Try asking
              </p>

              <div className="space-y-2">
                {[
                  "Who is Nidhi?",
                  "What technologies does Nidhi know?",
                  "Tell me about her experience.",
                  "Explain the Pharmacy project.",
                  "Send me Nidhi's resume.",
                ].map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={isLoading}
                    className="
                      w-full
                      rounded-lg
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      text-white/70
                      transition
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/5
                      hover:text-yellow-400
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[85%]
                  rounded-xl
                  px-3
                  py-2
                  text-sm
                  leading-6
                  ${
                    message.role === "user"
                      ? "rounded-br-sm bg-yellow-400 text-black"
                      : "rounded-bl-sm bg-white/10 text-white/80"
                  }
                `}
              >
                <div className="whitespace-pre-wrap">{message.text}</div>

                {/* ================= RESUME ACTION ================= */}

                {message.action?.type === "download-resume" && (
                  <a
                    href={message.action.url}
                    download
                    className="
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-yellow-400
                      px-3
                      py-2
                      text-xs
                      font-bold
                      text-black
                      transition
                      hover:bg-yellow-300
                    "
                  >
                    📄 {message.action.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOADING ================= */}

        {/* {isLoading && (
          <div className="mt-4 flex justify-start">
            <div
              className="
                rounded-2xl
                rounded-bl-md
                bg-white/10
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />

                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:150ms]" />

                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )} */}
        {/* ================= LOADING ================= */}

        {isLoading && (
          <div className="mt-4 flex justify-start">
            <div
              className="
        rounded-2xl
        rounded-bl-md
        bg-white/10
        px-4
        py-3
      "
            >
              <div className="flex items-center gap-2">
                {/* <span className="text-xs text-white/50">Thinking</span> */}

                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:0ms]" />

                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:150ms]" />

                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ================= ERROR ================= */}

      {/* {error && (
        <div
          className="
            mx-3
            mb-2
            rounded-lg
            border
            border-red-400/20
            bg-red-400/10
            px-3
            py-2
          "
        >
          <p className="text-xs text-red-300">{error}</p>
        </div>
      )} */}
      {/* ================= ERROR ================= */}

      {error && (
        <div
          className="
      mx-3
      mb-2
      rounded-lg
      border
      border-red-400/20
      bg-red-400/10
      px-3
      py-2
    "
          role="alert"
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs leading-5 text-red-300">{error}</p>

            <button
              type="button"
              onClick={() => setError("")}
              className="text-xs text-red-300/70 hover:text-red-200"
              aria-label="Dismiss error"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ================= INPUT ================= */}

      <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask something about Nidhi..."
            disabled={isLoading}
            className="
              min-w-0
              flex-1
              rounded-lg
              border
              border-white/10
              bg-white/5
              px-3
              py-2.5
              text-sm
              text-white
              outline-none
              placeholder:text-white/30
              focus:border-yellow-400/50
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="
              rounded-lg
              bg-yellow-400
              px-4
              py-2
              text-sm
              font-bold
              text-black
              transition
              hover:bg-yellow-300
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
            aria-label="Send message"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
};

// "use client";

// import { useEffect, useRef, useState } from "react";

// export const AiAssistant = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!isOpen) {
//       return;
//     }

//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//     });
//   }, [messages, isLoading, isOpen]);

//   if (!isOpen) {
//     return null;
//   }

//   const sendMessage = async (messageText) => {
//     const text = messageText.trim();

//     if (!text || isLoading) {
//       return;
//     }

//     setInput("");
//     setError("");
//     setIsLoading(true);

//     /*
//      * Add user message immediately
//      */

//     const userMessage = {
//       id: Date.now().toString(),
//       role: "user",
//       text,
//     };

//     const updatedMessages = [...messages, userMessage];

//     setMessages(updatedMessages);

//     try {
//       /*
//        * Convert messages into API format
//        */

//       const apiMessages = updatedMessages.map((message) => ({
//         id: message.id,
//         role: message.role,
//         parts: [
//           {
//             type: "text",
//             text: message.text,
//           },
//         ],
//       }));

//       /*
//        * Send request to our Next.js API
//        */

//       const response = await fetch("/api/chat", {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           messages: apiMessages,
//         }),
//       });

//       if (!response.ok) {
//         const data = await response.json();

//         throw new Error(data.error || "Failed to get AI response.");
//       }

//       if (!response.body) {
//         throw new Error("No response body received.");
//       }

//       const reader = response.body.getReader();
//       const decoder = new TextDecoder();

//       /*
//        * Create empty assistant message immediately.
//        * This makes the AI response appear while it is generating.
//        */

//       const assistantId = `${Date.now()}-assistant`;

//       setMessages((previousMessages) => [
//         ...previousMessages,
//         {
//           id: assistantId,
//           role: "assistant",
//           text: "",
//         },
//       ]);

//       let assistantText = "";

//       while (true) {
//         const { value, done } = await reader.read();

//         if (done) {
//           break;
//         }

//         const chunk = decoder.decode(value, {
//           stream: true,
//         });

//         assistantText += chunk;

//         /*
//          * Update assistant message as chunks arrive
//          */

//         setMessages((previousMessages) =>
//           previousMessages.map((message) =>
//             message.id === assistantId
//               ? {
//                   ...message,
//                   text: assistantText,
//                 }
//               : message,
//           ),
//         );
//       }
//     } catch (error) {
//       console.error("AI Assistant Error:", error);

//       setError("Sorry, I couldn't process that request. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     await sendMessage(input);
//   };

//   return (
//     <div
//       className="
//         fixed
//         bottom-0
//         left-0
//         right-0
//         z-[100]
//         flex
//         w-full
//         flex-col
//         overflow-hidden
//         rounded-t-2xl
//         border
//         border-white/10
//         bg-[#151320]
//         shadow-2xl

//         sm:bottom-6
//         sm:left-auto
//         sm:right-6
//         sm:w-[380px]
//         sm:rounded-2xl
//       "
//     >
//       {/* ================= HEADER ================= */}

//       <div
//         className="
//           flex
//           items-center
//           justify-between
//           border-b
//           border-white/10
//           bg-[#211b3b]
//           px-4
//           py-4
//         "
//       >
//         <div className="flex items-center gap-3">
//           <div
//             className="
//               flex
//               h-9
//               w-9
//               items-center
//               justify-center
//               rounded-full
//               bg-yellow-400
//               text-lg
//               text-black
//             "
//           >
//             ✨
//           </div>

//           <div>
//             <h3 className="text-sm font-bold text-white">Nidhi AI</h3>

//             <div className="mt-0.5 flex items-center gap-1.5">
//               <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

//               <span className="text-[11px] text-white/50">
//                 AI Portfolio Assistant
//               </span>
//             </div>
//           </div>
//         </div>

//         <button
//           type="button"
//           onClick={onClose}
//           className="
//             flex
//             h-8
//             w-8
//             items-center
//             justify-center
//             rounded-full
//             text-xl
//             text-white/50
//             transition
//             hover:bg-white/10
//             hover:text-white
//           "
//           aria-label="Close AI assistant"
//         >
//           ×
//         </button>
//       </div>

//       {/* ================= MESSAGES ================= */}

//       <div className="h-[380px] overflow-y-auto p-4">
//         {messages.length === 0 && (
//           <div className="space-y-5">
//             <div>
//               <p className="text-sm font-medium text-white/90">Hi 👋</p>

//               <p className="mt-1 text-sm leading-6 text-white/60">
//                 I&apos;m Nidhi&apos;s AI assistant. Ask me about her experience,
//                 skills, projects, or technical background.
//               </p>
//             </div>

//             <div>
//               <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-white/30">
//                 Try asking
//               </p>

//               <div className="space-y-2">
//                 {[
//                   "Who is Nidhi?",
//                   "What technologies does Nidhi know?",
//                   "Tell me about her experience.",
//                   "Explain the Pharmacy project.",
//                 ].map((question) => (
//                   <button
//                     key={question}
//                     type="button"
//                     onClick={() => sendMessage(question)}
//                     disabled={isLoading}
//                     className="
//                       w-full
//                       rounded-lg
//                       border
//                       border-white/10
//                       bg-white/5
//                       px-3
//                       py-2.5
//                       text-left
//                       text-xs
//                       text-white/70
//                       transition

//                       hover:border-yellow-400/40
//                       hover:bg-yellow-400/5
//                       hover:text-yellow-400

//                       disabled:cursor-not-allowed
//                       disabled:opacity-50
//                     "
//                   >
//                     {question}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="mt-4 space-y-4">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex ${
//                 message.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`
//                   max-w-[85%]
//                   rounded-xl
//                   px-3
//                   py-2
//                   text-sm
//                   leading-6

//                   ${
//                     message.role === "user"
//                       ? "rounded-br-sm bg-yellow-400 text-black"
//                       : "rounded-bl-sm bg-white/10 text-white/80"
//                   }
//                 `}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ================= LOADING ================= */}

//         {isLoading && (
//           <div className="mt-4 flex justify-start">
//             <div
//               className="
//                 rounded-2xl
//                 rounded-bl-md
//                 bg-white/10
//                 px-4
//                 py-3
//               "
//             >
//               <div className="flex items-center gap-1">
//                 <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />

//                 <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:150ms]" />

//                 <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:300ms]" />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Invisible element at bottom */}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* ================= ERROR ================= */}

//       {error && (
//         <div className="mx-3 mb-2 rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2">
//           <p className="text-xs text-red-300">{error}</p>
//         </div>
//       )}

//       {/* ================= INPUT ================= */}

//       <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
//         <div className="flex gap-2">
//           <input
//             value={input}
//             onChange={(event) => setInput(event.target.value)}
//             placeholder="Ask something about Nidhi..."
//             disabled={isLoading}
//             className="
//               min-w-0
//               flex-1
//               rounded-lg
//               border
//               border-white/10
//               bg-white/5
//               px-3
//               py-2.5
//               text-sm
//               text-white
//               outline-none
//               placeholder:text-white/30
//               focus:border-yellow-400/50

//               disabled:cursor-not-allowed
//               disabled:opacity-50
//             "
//           />

//           <button
//             type="submit"
//             disabled={!input.trim() || isLoading}
//             className="
//               rounded-lg
//               bg-yellow-400
//               px-4
//               py-2
//               text-sm
//               font-bold
//               text-black
//               transition
//               hover:bg-yellow-300

//               disabled:cursor-not-allowed
//               disabled:opacity-40
//             "
//             aria-label="Send message"
//           >
//             →
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
