import { useState } from 'react'
import './App.css'
import TaskCard from './TaskCard'
import React from 'react'

function App() {

  return (
    <>
		<div className='wrapper'>
			<div id="pending">
				<h1 className='mb-2'>Pending</h1>
				<TaskCard title="Pay for milk" dueDate="20th August" assigneeName="Kunal Dubey"/>
				<TaskCard title="Pay rent" dueDate="25th August" assigneeName="Kunal Dubey"/>
				<button className='w-full flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
				New Task</button>
			</div>
			<div id="done">
				<h1 className='mb-2'>Done</h1>
				<TaskCard title="pay rent" completedAtDate="25th July" assigneeName="Kunal Dubey"/>
				<TaskCard title="Pay for milk" completedAtDate="20th July" assigneeName="Kunal Dubey"/>
			</div>
		</div>
    </>
  )
}

export default App
