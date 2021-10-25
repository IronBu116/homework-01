import React from "react";
import PropTypes from "prop-types";
import renderDate from "../../utils/commentDate";

const CommentList = ({ comments, allUsers, onHandleDelete }) => {
    /* console.log(comments, allUsers);
    console.log(new Date().getTime());
    console.log(
        allUsers
            .filter((user) => user._id === "67rdca3eeb7f6fgeed471815")
            .map((u) => u.name)
    ); */
    if (comments.length !== 0) {
        return (
            <div className="card-body">
                <h2>Comments</h2>
                <hr />
                {comments.map((comment) => (
                    <div key={comment._id} className="bg-light card-body mb-3">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex flex-start">
                                    <img
                                        src={`https://avatars.dicebear.com/api/avataaars/${(
                                            Math.random() + 1
                                        )
                                            .toString(36)
                                            .substring(7)}.svg`}
                                        className="rounded-circle shadow-1-strong me-3"
                                        alt="avatar"
                                        width="65"
                                        height="65"
                                    />
                                    <div className="flex-grow-1 flex-shrink-1">
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-1">
                                                    {allUsers
                                                        .filter(
                                                            (user) =>
                                                                user._id ===
                                                                comment.userId
                                                        )
                                                        .map(
                                                            (user) => user.name
                                                        )}
                                                    <span className="small">
                                                        {` - ${renderDate(
                                                            comment.created_at
                                                        )}`}
                                                    </span>
                                                </p>
                                                <button
                                                    className="btn btn-sm text-primary d-flex align-items-center"
                                                    onClick={() =>
                                                        onHandleDelete(
                                                            comment._id
                                                        )
                                                    }
                                                >
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                            <p className="small mb-0">
                                                {comment.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
};

CommentList.propTypes = {
    comments: PropTypes.array,
    allUsers: PropTypes.array,
    onHandleDelete: PropTypes.func
};

export default CommentList;
