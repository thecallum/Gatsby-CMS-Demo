import React, { useEffect } from "react";
import { connect } from "react-redux";
import TemplateLayout from "@layout/page";
import PageContent from "../../components/pageContent";

import { loadNewPage } from "../../redux/actions/page";

import EditLayout from "../../layout/editPage/";

const Edit = ({ match, dispatch }) => {
    const id = match.params.id;

    useEffect(() => {
        dispatch.loadNewPage(id);
    }, []);

    return (
        <EditLayout>
            <TemplateLayout isServer={true}>
                <PageContent />
            </TemplateLayout>
        </EditLayout>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatch: {
        loadNewPage: id => {
            dispatch(loadNewPage(id));
        }
    }
});

export default connect(null, mapDispatchToProps)(Edit);
