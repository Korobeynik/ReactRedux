import React from "react";

export default ({post}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Title here {post}</h4>
            </div>
        </div>
    )
}