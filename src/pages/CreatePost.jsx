import { useState, useEffect } from "react"
import AddPost from "../components/MainSections/AddPostForm"

const api_server = 'http://127.0.0.1:3000'
const api_endpoint = '/posts'

export default function CreatePost() {

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
        category: '',
        published: false,
        tags: []
    })

    const [postsData, setPostsData] = useState({})

    const tagList = ['Torte', 'Ricette vegetariane', 'Ricette al forno', 'Veloce', 'Salato', 'Cioccolato']

    function handleTag(tag) {
        setFormData((prevData) => {
            const updatedTags = prevData.tags.includes(tag)
                ? prevData.tags.filter((t) => t !== tag)
                : [...prevData.tags, tag]

            return {
                ...prevData,
                tags: updatedTags
            }
        })
    }

    function addNewPost(e) {
        e.preventDefault()

        const newArticleData = {
            title: formData.title,
            image: formData.image,
            content: formData.content,
            slug: formData.category,
            published: formData.published,
            tags: formData.tags
        }

        setPostsData(prevData => ({
            ...prevData,
            data: [...prevData.data, newArticleData]
        }))

        fetch(api_server + api_endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newArticleData),
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log('Articolo aggiunto', data);
                setPostsData(data)
                fetchData()

            })
            .catch(error => {
                console.error(error);
            })

        setFormData({
            title: '',
            image: '',
            content: '',
            category: '',
            published: false,
            tags: []
        })

    }

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

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>

            <main className="bg-light py-5">
                <div className="container bg-white p-5 shadow rounded">
                    <h2 className="mb-4 text-primary">Add Post</h2>

                    <AddPost addNewPost={addNewPost} formData={formData} setFormData={setFormData} tagList={tagList} handleTag={handleTag} />

                </div >
            </main>

        </>
    )
}