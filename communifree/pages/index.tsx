import Next from "next";
import Image from 'next/image'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import Feed from "../components/FeedPage/Feed/Feed"
import '../components/Navbar/Navbar.css'
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (

    <div>
    <Navbar/>
    <CreatePostButton/>
    <Feed/>
    </div>
  )
}
