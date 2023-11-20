import React, { useReducer, useState } from 'react'
import Navbar from '../Components/Navbar'


const AdminDashboard = ({ myNewsData }) => {
    const [author, setAuthor] = useState("")
    const [news, setNews] = useState("")
    const [summary, setSummary] = useState("")
    const [status, setStatus] = useState("")
    const [image, setImage] = useState("")
    const [state, dispatch] = useReducer(reducer, myNewsData)

    console.log(Array.isArray(state))
    console.log({state})



    function reducer(state, action) {
        switch (action.type) {
            case "author":
                return state.push({ Author: authorText })

            // return {...state, author: authorText}
            case "newsDetail":
                return { ...state, newsDetails: newsDetailsText }
            default:
                return {}
        }
        console.log({ state })

    }


    function updateNewsData(e) {

        if (e.target.name == "authorText") {
            setAuthorText(e.target.value)
            console.log(authorText)
            dispatch({ type: "author" })
        } else if (e.target.name == "newsDetail") {
            setNewsDetalsText(e.target.value)
            console.log(newsDetailsText)
            dispatch({ type: "newsDetail" })
        }

    }
    function updateNews(news, author, summary, image, status){
        dispatch({type: "updateNews"})
    }

    console.log({ state })



    // const dummyArray = [
    //     {name: "Ola",
    // data: "This is a dummy text This is a dummy text This is a dummy text This is a dummy text This is a dummy text This is a dummy text This is a dummy text"},
    // {name: "Ayo",
    // data: "2This is a dummy text This is a dummy text This is a dummy text This is a dummy text This is a dummy text This is a dummy text This is a dummy text"}
    // ]


    return (
        <div className='pb-24'>
            <Navbar />

            <div className='flex'>
                <section className='sec--1 pt-28 basis-3/12 text-white bg-black text-xl flex flex-col space-y-5 pl-4'>
                    <div>
                        <h1>Home</h1>
                    </div>
                    <div>
                        <h1>Category</h1>
                    </div>
                    <div>
                        <h1>Posts</h1>
                    </div>
                    <div>
                        <h1>Users</h1>
                    </div>
                    <div>
                        <h1>Stats</h1>
                    </div>
                </section>
                <section className='sec--stats pt-28 px-8 h-[100vh] overflow-scroll'>
                    <div className='categories mb-10 overflow-scroll w-[75vw]'>
                        <h1 className='font-bold text-2xl mb-6'>Categories</h1>
                        <div className='flex space-x-3 px-3 py-3 '>
                            <div className='text-center font-bold text-2xl bg-blue-800 text-white p-6 w-fit hover:scale-105 duration-300 hover:cursor-pointer hover:rounded-lg h-fit '><h1>Politics</h1><h1>100</h1></div>
                            <div className='text-center font-bold text-2xl bg-red-600 text-white p-6 w-fit hover:scale-105 duration-300 hover:cursor-pointer hover:rounded-lg h-fit '><h1>Sport</h1><h1>300</h1></div>
                            <div className='text-center font-bold text-2xl bg-green-800 text-white p-6 w-fit hover:scale-105 duration-300 hover:cursor-pointer hover:rounded-lg h-fit '><h1>Politics</h1><h1>100</h1></div>
                            <div className='text-center font-bold text-2xl bg-purple-800 text-white p-6 w-fit hover:scale-105 duration-300 hover:cursor-pointer hover:rounded-lg h-fit '><h1>Politics</h1><h1>100</h1></div>
                            <div className='text-center font-bold text-2xl bg-purple-800 text-white p-6 w-fit hover:scale-105 duration-300 hover:cursor-pointer hover:rounded-lg h-fit '><h1>Politics</h1><h1>100</h1></div>
                            <div className='text-center font-bold text-2xl bg-purple-800 text-white p-6 w-fit hover:scale-105 hover:rounded-lg duration-300 hover:cursor-pointer'><h1>Politics</h1><h1>100</h1></div>
                        </div>
                    </div>
                    <main className=''>
                        <div className=''>
                            <h1 className='font-bold text-2xl mb-6'>
                                Most viewed posts
                            </h1>
                            <ol className='flex flex-col space-y-3 h-[50vh] overflow-scroll py-4 px-5'>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit fuga fugiat ullam architecto officia.</li>
                                    <div className='bg-red-600 h-full w-fit p-2 font-semibold text-white'>100</div>
                                </div>

                            </ol>
                        </div>

                    </main>
                    <div className='posts mt-10'>
                        <div className='font-bold mb-5 text-2xl flex justify-between'>
                            <h1>Posts</h1>
                            <h1 className='bg-green-600 w-fit text-lg font-semibold text-white px-4 py-1 hover:cursor-pointer hover:brightness-75 duration-300'>Create New</h1>
                        </div>
                        <div className='create--news mb-14'>
                            <div className='border p-4 font-semibold'>
                                <form action="" className='flex flex-col'>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" placeholder='Enter Title' className='border p-3 mb-4' />
                                    <label htmlFor="title">Author</label>
                                    <input type="text" placeholder="Enter Author's name" className='border p-3 mb-4' />
                                    <label htmlFor="Summary">Summary</label>
                                    <input type="text" placeholder='Enter Summary' className='border p-3 h-44 mb-4'/>
                                    <label htmlFor="Summary">News</label>
                                    <input type="text" placeholder='Enter News' className='border p-3 h-44 mb-4'/>
                                    <div>
                                        <h1>Views</h1>
                                        <h1 className='bg-gray-600 w-fit px-4 py-1 text-xl text-white mb-4'>0</h1>
                                    </div>
                                    <div>
                                        <h1>Settings</h1>
                                        <h1 className='bg-red-600 w-fit px-4 py-2 text-white mb-4'>Status</h1>
                                    </div>
                                    <label htmlFor="image">Upload Image</label>
                                    <input type="file"/>
                                </form>
                            </div>
                        </div>
                        <table className='w-full bg-gray-400'>
                            
                                <th>
                                    No.
                                </th>
                                <th>
                                    Title
                                </th>
                                <th>Summary</th>
                                <th>Views</th>
                                <th>Status</th>
                                <th>Image</th>
                                <th>Settings</th>
                            
                            <tr>
                                <td>1</td>
                                <td>
                                    Lorem ipsum dolor sit amet.
                                </td>
                                <td>
                                    psum dolor sit amet.
                                </td>
                                <td>17662</td>
                                <td>
                                    <h1>Headline</h1>
                                    <h1>Editor's</h1>
                                </td>
                                <td>Image</td>
                                <td>
                                    <h1 className='bg-red-600 w-fit font-semibold text-white px-2 hover:cursor-pointer hover:brightness-75 duration-300 text-xs py-1 mb-2'>- Breaking</h1>
                                    <h1 className='bg-red-600 w-fit font-semibold text-white px-2 hover:cursor-pointer hover:brightness-75 duration-300 text-xs py-1'>- Editor</h1>
                                    <br />
                                    <button className='bg-green-700 w-fit font-semibold text-white px-2 hover:cursor-pointer hover:brightness-75 duration-300 text-xs py-1'>Edit</button>
                                    <button className='bg-red-600 w-fit font-semibold text-white px-2 hover:cursor-pointer hover:brightness-75 duration-300 text-xs py-1'>Delete</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>



        </div>
    )
}

export default AdminDashboard