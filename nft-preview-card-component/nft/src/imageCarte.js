import React from "react";


class ImageCarte extends React.Component {
    render() {
        return (
            <div class="bg d-flex justify-content-center align-items-center">
                <div class="view d-none justify-content-center align-items-center">
                    <img class="oeil" src="./images/icon-view.svg" alt="" />
                </div>
            </div>
        )
    }
}

export default ImageCarte