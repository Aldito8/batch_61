console.log(document.getElementById("startDate"))

document.addEventListener("click", function dateChange() {
    startDate.max = new Date().toISOString().split('T')[0];
    endDate.max = new Date().toISOString().split('T')[0];

});

function dateChange() {
    let endDate = document.getElementById("endDate")
    console.log("a")
    if (document.getElementById("startDate").value != '') {
        endDate.min = new Date(document.getElementById("startDate").value).toISOString().split('T')[0]
        endDate.disabled = false
    } else {
        endDate.min = ''
        endDate.value = ''
        endDate.disabled = true
    }

}

// Data Object
let myProject = []

// Get Data Form
function getData(event) {
    event.preventDefault();
    let projectName = document.getElementById("projectName").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;
    let nodeJs = document.getElementById("nodeJs").checked;
    let reactJs = document.getElementById("reactJs").checked;
    let nextJs = document.getElementById("nextJs").checked;
    let typeScript = document.getElementById("typeScript").checked;
    let inputImage = document.getElementById("inputImage");

    let project = { projectName, startDate, endDate, description, nodeJs, reactJs, nextJs, typeScript, inputImage }

    myProject.push(project)

    changeElement()
}

// Change Element My Project
function changeElement() {

    document.getElementById("content").innerHTML = ""

    for (let i = 0; i < myProject.length; i++) {

        // Icon
        let isNodeJs = myProject[i].nodeJs ? `<i class="fa-solid fa-share-nodes" ></i>` : ""
        let isReactJs = myProject[i].reactJs ? `<i class="fa-brands fa-react"></i> ` : ""
        let isNextJs = myProject[i].nextJs ? `<i class="fa-solid fa-n"></i> ` : ""
        let isTypeScript = myProject[i].typeScript ? `<i class="fa-solid fa-subscript"></i> ` : ""

        // Date
        let dateDiff = dateSum(myProject[i].startDate, myProject[i].endDate)
        let [yearDiff, monthDiff, dayDiff, year] = dateDiff
        let yearCount = (yearDiff > 0) ? `${yearDiff} tahun` : ""
        let monthCount = (monthDiff > 0) ? `${monthDiff} bulan` : ""
        let dayCount = (dayDiff > 0) ? `${dayDiff} hari` : ""
        let countif0day = (dayDiff == 0 && monthDiff == 0 && yearDiff == 0) ? `kurang dari 1 hari` : ""

        // Image
        let projectImage = inputImage.files.length > 0 ? URL.createObjectURL(inputImage.files[0]) : ""

        // Card
        document.getElementById("content").innerHTML += `
        <div class="card" style = "width: 19rem; padding: 0;" >
            <img class="card-img-top p-2" src="${projectImage}" style = "object-fit:contain ;"/>
            <div class="card-body">
                <h4 class="card-text p-0 m-0">${myProject[i].projectName} ${year}</h4>
                <p class="card-text p-0 m-0"> durasi ${dayCount} ${monthCount} ${yearCount} ${countif0day}</p>
                <p class="card-text text-description" maxleght="20">${myProject[i].description}</p>
                <div class="icon-group">
                    ${isNodeJs}
                    ${isReactJs}
                    ${isNextJs}
                    ${isTypeScript}
                </div>
                <div class="d-flex gap-2">
                    <a href="#" class="btn btn-dark w-50 p-0">edit</a>
                    <a href="#" class="btn btn-dark w-50 p-0">delete</a>
                </div>
            </div>
        </div>
        `
    }
}

// Date Detail
function dateSum(first, last) {
    const firstDate = new Date(first);
    const lastDate = new Date(last);

    let year = firstDate.getFullYear()
    let yearDiff = lastDate.getFullYear() - firstDate.getFullYear();
    let monthDiff = lastDate.getMonth() - firstDate.getMonth();
    let dayDiff = lastDate.getDate() - firstDate.getDate();
    return [yearDiff, monthDiff, dayDiff, year]
}