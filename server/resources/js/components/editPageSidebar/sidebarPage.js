import React from "react";
import Error from "../../components/error";

export default ({ page, updatePage, deletePage, errors, inputChange }) => {
    return (
        <>
            <h2>{page.name}</h2>

            <hr />

            <button onClick={updatePage} className="btn btn-primary">
                Update
            </button>
            <button onClick={deletePage} className="btn btn-danger">
                Delete
            </button>

            <hr />
            <br />
            <br />

            <div>
                <h1>Properties</h1>
                <hr />
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
            </div>
        </>
    );
};
