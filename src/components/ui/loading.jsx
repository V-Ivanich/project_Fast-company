import React from "react";

const Loading = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <div className="d-flex justify-content-center">
                            <span className="mx-4">Loading...</span>
                            <div
                                className="spinner-border text-info"
                                role="status"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
