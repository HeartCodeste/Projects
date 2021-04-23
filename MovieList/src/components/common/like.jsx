const Like = (props) => {

    const likeBtnStyle = {
        background: "none",
        border: "none"
    };
    function getIconClasses() {
        let iconClasses = "fa fa-heart";
        iconClasses += (props.isLiked === true ? "" : "-o");
        return iconClasses;
    };
    return (
        <button onClick={props.onLike} style={likeBtnStyle}>
            <i className={getIconClasses()} aria-hidden="true"></i>
        </button>
    );
}

export default Like;
