import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/main/";

export default () => {
    useEffect(() => {
        //    alert('load pages')

        fetch("http://localhost:8000/api/page", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                console.log({ res });
                // console.table(res, ["name", "slug"]);

                setPages(res);
            });
    }, []);

    const [pages, setPages] = useState([]);

    return (
        <Layout>
            <h1>Pages</h1>

            <Link
                className="btn btn-primary"
                to="/pages/create/"
                style={{ margin: "15px 0" }}
            >
                Create
            </Link>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {pages.map((page, index) => (
                        <tr key={index}>
                            <td>{page.name}</td>
                            <td>{page.slug}</td>
                            <td>
                                <Link to={`/pages/${page.id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
};
