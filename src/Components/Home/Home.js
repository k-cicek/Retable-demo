import React from 'react'
import AddProject from '../AddProject/AddProject'
import Navbar from "../Navbar/Navbar"
import Workspace from '../Workspace/Workspace'






function Home() {
    return (
        <div className="Home">
            <Navbar/>
            <Workspace/>
            <AddProject/>
            
            
        </div>
    )
}

export default Home
