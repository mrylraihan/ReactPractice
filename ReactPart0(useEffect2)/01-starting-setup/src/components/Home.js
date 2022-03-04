import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    useEffect(() => {
        // console.log('use effect running');
        const timer = setTimeout(()=>{
            console.log('use effect ran in setTimeout');
            console.log(blogs);
            console.log(name);
            }, 3000)
        return ()=>{
            console.log('clean up!');
            clearTimeout(timer)
        }
    }, [blogs, name])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName(name === 'luigi'?'mario':'luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;