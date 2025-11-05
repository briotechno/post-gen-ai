import { Clock } from 'lucide-react'
import React from 'react'

const HistoryPage = () => {
  return (
    <>
      <div className="backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 h-fit">
        <h2 className="text-lg font-semibold mb-3">Generation History</h2>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Clock className="w-10 h-10 text-gray-500 mb-3" />
          <p className="text-gray-400 font-medium">No generation history yet</p>
          <p className="text-gray-500 text-sm mt-1">
            Start generating posts to see your history here
          </p>
        </div>
      </div>
    </>
  )
}

export default HistoryPage