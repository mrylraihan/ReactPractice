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

    // Will render on every re-render meaning when the state changes 
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(blogs);
    // })

    // with the empty dependency array it will only run once on the initial render, meaning on start up
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(blogs);
    // }, [])
    // will run on the first initial start but also when ever the dependency that we specified in this case blog state changes
    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
        console.log(name);
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