window.onload = function () {



    let post = [
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
        "./images/background.jpg",
    ]

    // View
    let gridView = document.getElementById("gridView");
    let gridContent = document.getElementById("gridContent");
    let historyView = document.getElementById("historyView");

    for (let i = 0; i < post.length; i++) {

        let divGrid = document.createElement("div");
        divGrid.setAttribute("class", "col-sm-4");
        divGrid.innerHTML = ' <img src="' + post[i] + '" class="img-fluid">';
        gridContent.appendChild(divGrid);

        let divHistory = document.createElement("div");
        divHistory.innerHTML = `
        <div class="card mb-3 mx-auto" style="width: 500px">
            <div class="card-body d-flex justify-content-between align-items-center">
                <h5 class="card-title">My first photo</h5>
                <h5 class="number-card text-secondary">12/14</h5>
            </div>
            <img src=` + post[i] + ` class="img-fluid">
            <div class="card-body">
                <b class="mb-3">32 Likes</b>
                <p class="card-text">
                    This is my first photo of the feed. This is a multi line comment for testing purposes.
                    I'qm learning to code with #BreatheCode.
                </p>
                <div class="text-secondary d-flex justify-content-between align-items-center">

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        <span class="mx-2">Comment...</span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </div>
            </div>
        </div>
        `
        historyView.appendChild(divHistory)
    }


    // Buttons
    let btnGrid = document.getElementById("btnGridView");
    let btnHistory = document.getElementById("btnHistoryView");


    btnGrid.addEventListener("click", function () {
        btnHistory.classList.remove("btn-secondary")
        historyView.style.display = "none";
        gridView.style.display = "block";
        this.classList.add("btn-secondary")
    })

    btnHistory.addEventListener("click", function () {
        btnGrid.classList.remove("btn-secondary")
        gridView.style.display = "none";
        historyView.style.display = "block";
        this.classList.add("btn-secondary")
    })

}