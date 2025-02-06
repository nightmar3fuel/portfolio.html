function openProject(url) {
    if (url !== "#") {
        window.open(url, "_blank");
    } else {
        alert("Project link not available yet!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".project").forEach(function(project) {
        project.addEventListener("click", function() {
            const url = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            openProject(url);
        });
    });
});