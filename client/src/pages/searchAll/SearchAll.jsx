import React from 'react'
import SearchInput from '../../components/searchInput/SearchInput'
import { NavLink, Outlet } from 'react-router-dom'
import "./SearchAll.css"

function SearchAll() {
  return (
    <div className='search-all-container'>
        <div>
            <div>
                <div className='search-form'>
                    <SearchInput />
                </div>
            </div>
            <div className='search-all-content'>
                <div className='search-nav'>

                    <ul>
                        <li>
                            <NavLink to="professionals" className={({isActive}) => isActive ? "isactive" : ""}>
                                Green Giggers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="jobs" className={({isActive}) => isActive ? "isactive" : ""}>
                                Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="companies" className={({isActive}) => isActive ? "isactive" : ""}>
                                Climate Tech
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="projects" className={({isActive}) => isActive ? "isactive" : ""}>
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='outlet-container'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchAll