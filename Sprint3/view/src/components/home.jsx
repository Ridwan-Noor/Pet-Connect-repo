import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from "../App.jsx"
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {
    const { u, setU } = useContext(UserContext);
    console.log("u:", u)

    const [file, setFile] = useState()
    const [caption, setCaption] = useState()
    const [radio, setRadio] = useState("normalPost")  // radio by default male


    const radioChange = (e) => {
        setRadio(e.target.value);
        //console.log(radio);
    }

    const handleUpload = (e) => {
        console.log(file);
        //console.log(caption);

        const formdata = new FormData()
        formdata.append('file', file)
        formdata.append('caption', caption)
        axios.post('http://localhost:5000/upload', formdata) // uploading image
            .then(res => {
                console.log(res)
                console.log("id:", res.data._id)
                const post_id = res.data._id  //post id
                const userName = u[1]
                axios.post('http://localhost:5000/uploadPost', { post_id, caption, radio, userName })  // uploading post data
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const [img, setImg] = useState()    // dummy post
    useEffect(() => {
        axios.get('http://localhost:5000/getPosts')
            .then(res => {
                setImg(res.data[0].image) //res.data has list of all posts
            })
            .catch(err => console.log(err))
    }, [])
    console.log(img)

    const [allPosts, setAllPosts] = useState(null) // List of all posts
    useEffect(()=> {
        axios.get('http://localhost:5000/getAllPosts')
        .then((res) => {
            console.log("res.data=", res.data);
            setAllPosts(res.data)
        })
        .catch((err) => console.log(err));
    }, [allPosts])


    //const [likes, setLikes] = useState()
    const handleLike = (post_id, likes) => {
        //console.log(typeof likes)
        var newLikes = likes +1;
        console.log(newLikes)
        axios.post("http://localhost:5000/updateLikes", {post_id, newLikes})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err));
    }

    return (

        <div className="body bg-white font-family-karla">

            <div className='topSection z-30 relative'>
                <header className=" bg-sky-400  font-bold font-sans italic tracking-widest text-white">
                    <div className="flex flex-col items-center py-2">
                        <div className=" uppercase text-5xl " >
                            PET CONNECT
                        </div>
                        <p className="text-lg ">
                            Welcome to the Community of Pets!
                        </p>
                    </div>
                </header>

                <nav className="  w-full py-2 border-t border-b bg-gray-100" x-data="{ open: false } ">
                    <div className={`w-full ${open ? 'block' : 'hidden'}  text-orange-400 `}>
                        <div className=" w-full  flex flex-row items-center justify-left text-xl font-bold uppercase pt-2 ">
                            <Link to="/events" className=" border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ml-5">Events</Link>
                            <Link to="/services" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Services</Link>
                            <Link to="/petShop" className="min-w-32 border-r-2 border-gray-400 hover:bg-gray-300  py-2 pl-3 mb-2">Pet Shop</Link>
                            <Link to="/" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Veteranian</Link>
                            <Link to="/" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Adopt</Link>
                            <Link to="/resources" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Resources</Link>
                            <div className='nav-right  w-full flex flex-row justify-end ml-3'>
                                <Link to="/profile" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 ">Profile</Link>
                                <Link to="/login" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Logout</Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

            <nav className="fixed z-20 top-0 w-full py-2 border-t border-b bg-gray-100" x-data="{ open: false }">
                <div className={`w-full ${open ? 'block' : 'hidden'}  text-orange-400 `}>
                    <div className=" w-full  flex flex-row items-center justify-left text-xl font-bold uppercase pt-2 ">
                        <Link to="/events" className=" border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ml-5">Events</Link>
                        <Link to="#" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Services</Link>
                        <Link to="/petShop" className="min-w-32 border-r-2 border-gray-400 hover:bg-gray-300  py-2 pl-3 mb-2">Pet Shop</Link>
                        <Link to="#" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Veteranian</Link>
                        <Link to="#" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Adopt</Link>
                        <Link to="/resources" className="border-r-2 border-gray-400 hover:bg-gray-300  py-2 px-3 mb-2 ">Resources</Link>
                        <div className='nav-right  w-full flex flex-row justify-end ml-3'>
                            <Link to="/Profile" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 ">Profile</Link>
                            <Link to="/Logout" className="text-white bg-sky-500 text-lg font-bold uppercase hover:bg-gray-400 rounded py-2 px-4 mb-2 mx-3">Logout</Link>
                        </div>

                    </div>
                </div>
            </nav>

            <div className='home-cont z-10 relative flex flex-col items-center'>

                <div className="container mx-auto flex flex-wrap py-6">
                    {/* Input Bar */}
                    <div className="w-full bg-gray-200 py-4">

                        <div className="form-check ml-10">
                            <input className="form-check-input" type="radio" name="radio" id="gridRadios1" value="normalPost" checked={radio === 'normalPost'} onChange={radioChange} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Normal Post
                            </label>
                        </div>
                        <div className="form-check ml-10">
                            <input className="form-check-input" type="radio" name="radio" id="gridRadios2" value="adoptionPost" checked={radio === 'adoptionPost'} onChange={radioChange} />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Adoption Post
                            </label>
                        </div>

                        <div className="container mx-auto flex items-center justify-center">
                            <label htmlFor="imageUpload" className="mx-2 text-center">
                                Upload Image
                            </label>
                            <input type="file" id="imageUpload" onChange={e => setFile(e.target.files[0])} />

                            <input type="text" name="caption" onChange={e => setCaption(e.target.value)} placeholder="Write Something..." className="w-full md:w-2/3 px-4 py-2 ml-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2">
                                Post
                            </button>
                        </div>
                    </div>
                </div>

 
                {allPosts && allPosts.length>0 ? (
                    <div>
                        {allPosts.map((post, index) => (

                            <div className='flex flex-col items-center'>

                                <div key={index} className="w-full md:w-2/3 flex flex-col items-center px-3">
                                    {/* Single Post */}
                                    <div className="bg-white w-full my-4 shadow-md rounded-md">
                                        {/* Heading and Description */}
                                        <div className="bg-gray-100 px-4 py-2">
                                            <h2 className="text-lg font-semibold">{post.userName}</h2>
                                            <p className="text-sm text-gray-700">{post.caption}</p>
                                        </div>
                                        {/* Attached Picture */}
                                        <img src={`http://localhost:5000/Images/`+post.image} alt="Post" className="w-full" /> {/* https://source.unsplash.com/random */}
                                        {/* Like Button and Like Count */}
                                        <div className="flex items-center justify-between px-4 py-2">
                                            {/* Like Button */}
                                            <button onClick={()=> handleLike(post._id, post.likes)}>
                                                Like
                                            </button>
                                            {/* Like Count */}
                                            <span className="text-sm font-semibold">{post.likes} Likes</span>
                                        </div>
                                        {/* Comments */}
                                        {/*<div className="px-4 py-2">
                                            {comments.map((comment, index) => (
                                                <div key={index} className="flex items-center mb-2">
                                                    <span className="font-semibold mr-2">John Doe:</span>
                                                    <span>{comment}</span>
                                                </div>
                                            ))}
                                        </div>*/}
                                        {/* Comment Box */}
                                        <div className="px-4 py-2 border-t border-gray-200">
                                            <input type="text" placeholder="Write a comment..." className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500" />
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Comment</button>
                                        </div>
                                    </div>
                                </div>                                

                            </div>


                        ))}                    
                    </div>
                ):(
                    <p className="text-center">No posts available.</p>
                )}                    




                {/*<img src={`http://localhost:5000/Images/`+img} alt="post-image" /> http://localhost:5000/Images/file_1712246807298.jpg*/}


            </div>

        </div>

    );
}

export default Home;
