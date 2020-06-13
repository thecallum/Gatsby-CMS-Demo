import React, { useEffect, useState } from "react";
import SharedComponents, { schema } from "@components";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import TemplateLayout from "@layout/page";

import PageContent from "../../components/pageContent";

import { useToasts, ToastProvider } from "react-toast-notifications";
const components = Object.keys(schema).map(key => schema[key]);

import { loadNewPage, setFocussedComponent } from "../../redux/actions/page";

import EditLayout from "../../components/editLayout";

const Edit = ({ match, pageState, dispatch }) => {
    const id = match.params.id;
    const { addToast } = useToasts();

    useEffect(() => {
        dispatch.loadNewPage(id);
    }, []);

    if (pageState.id === null) return <div></div>;

    return (
        <EditLayout>
            <TemplateLayout Link={Link} isServer={true}>
                <PageContent />
            </TemplateLayout>
        </EditLayout>
    );
};

const mapStateToProps = ({ page }) => ({
    pageState: {
        loading: page.loading,
        error: page.error,
        name: page.name,
        slug: page.slug,
        jsonContent: page.jsonContent,
        id: page.id
    }
});

const mapDispatchToProps = dispatch => ({
    dispatch: {
        loadNewPage: id => {
            dispatch(loadNewPage(id));
        },
        setFocussedComponent: index => {
            dispatch(setFocussedComponent(index));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
