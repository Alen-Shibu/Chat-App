import React from "react";

function ChatPage() {
  return (
    <div className="relative w-full h-full flex">

      {/* Sidebar placeholder */}
      <aside className="hidden md:flex w-72 border-r border-white/10 bg-slate-900/60 backdrop-blur">
        <div className="w-full p-4 space-y-4">
          <div className="h-10 rounded-lg bg-white/10 animate-pulse" />
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-12 rounded-lg bg-white/5 animate-pulse"
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Chat area */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-16 border-b border-white/10 flex items-center px-6">
          <div className="h-8 w-40 rounded bg-white/10 animate-pulse" />
        </header>

        {/* Messages */}
        <section className="flex-1 p-6 space-y-4 overflow-y-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`max-w-xs h-10 rounded-xl animate-pulse ${
                i % 2 === 0
                  ? "bg-indigo-500/20 self-start"
                  : "bg-teal-500/20 self-end ml-auto"
              }`}
            />
          ))}
        </section>

        {/* Input */}
        <footer className="h-16 border-t border-white/10 px-4 flex items-center gap-3">
          <div className="flex-1 h-10 rounded-lg bg-white/10 animate-pulse" />
          <div className="w-12 h-10 rounded-lg bg-indigo-500/40 animate-pulse" />
        </footer>
      </main>
    </div>
  );
}

export default ChatPage;
