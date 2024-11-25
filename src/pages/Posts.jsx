import { useState, useEffect } from "react";
import PostsList from "../components/MainSections/PostsList";


const api_server = 'http://127.0.0.1:3000'
const api_endpoint = '/posts'

export default function Posts() {

    const [postsData, setPostsData] = useState({})

    function fetchData(url = api_server + api_endpoint) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setPostsData(data)
            })
            .catch(error => {
                console.error('errore nel recuper dati', error);

            })
    }

    function handleRemove(e) {

        const deletePost = e.target.getAttribute("data-slug")

        setPostsData(prevData => ({
            ...prevData,
            data: prevData.data.filter(post => post.slug !== deletePost)
        }))

        fetch(`${api_server}${api_endpoint}/${deletePost}`, {
            method: 'DELETE',
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log('Post eliminato', data);

            })
            .catch(error => {
                console.error('errore nell eliminare il post: ', error);
                fetchData()
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>

            <main className="text-center pt-4 vh-100">
                <h2 className="mt-4 text-primary">Posts List</h2>

                <PostsList postsData={postsData} handleRemove={handleRemove} api_server={api_server} />

            </main>

        </>
    )
}