import React from 'react'

function Tools() {
  return (
    <section className="bg-gray-900 py-20 text-white">
        <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">  
            Tools I Use
            </h2>
        <div className="mt-8 flex flex-wrap gap-20 justify-center ">
          <img src="/assets/vscode.png" alt="VS Code" className="w-20 h-20" />
          <img src="/assets/ChatGPT.png" alt="ChatGPT" className="w-20 h-20" />
          <img src="/assets/chrome.png" alt="Chrome" className="w-20 h-20" />
          <img src="/assets/canva.svg" alt="Canva" className="w-20 h-20" />
          <img src="/assets/envato.svg" alt="Envato" className="w-20 h-20" />
        </div>
      </div>
    </section>
  )
}

export default Tools
