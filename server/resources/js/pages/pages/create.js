import React, { useEffect, useState } from "react";
import Layout from "../../layout/main/";
import Error from "../../components/error";

export default ({ match }) => {
    const id = match.params.id;

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [page, setPage] = useState({
        name: "",
        slug: "",
        content: ""
    });

    const inputChange = e => {
        setPage({
            ...page,
            [e.target.name]: e.target.value
        });
    };

    const updatePage = e => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        fetch("http://localhost:8000/api/page/", {
            method: "POST",
            body: JSON.stringify(page),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty("errors")) {
                    // alert('error')
                    console.log(res.errors);
                    setErrors(res.errors);
                } else {
                    console.log({ res });
                    // console.table(res, ["name", "slug", "content"]);
                    setErrors({});
                    setPage(res);
                }
            })
            .catch(err => {
                console.log({ err });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Layout>
            <h1>Create Page</h1>

            <form onSubmit={updatePage}>
                <div className="form-group">
                    <label htmlFor="name_input">Name</label>
                    <Error error={errors.name} />
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name_input"
                        value={page.name}
                        onChange={inputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="slug_input">Slug</label>
                    <Error error={errors.slug} />
                    <input
                        type="text"
                        className="form-control"
                        name="slug"
                        id="slug_input"
                        value={page.slug}
                        onChange={inputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content_input">Content</label>
                    <Error error={errors.content} />
                    <textarea
                        className="form-control"
                        id="content_input"
                        rows="8"
                        name="content"
                        value={page.content}
                        onChange={inputChange}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </Layout>
    );
};
