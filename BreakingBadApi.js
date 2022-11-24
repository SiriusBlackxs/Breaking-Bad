const link = "https://www.breakingbadapi.com/api/characters";
const selector = document.querySelector("select")
fetch(link)
    .then(response => response.json())
    .then(data => {

        /*  console.log(data); */
        for (d of data) {
            let character = JSON.stringify(d)
            character = character.replace("'", "&apos;")

            selector.innerHTML += `
            <option value='${character}'>
            ${d.name}
            </option>
        `

        }
    })


selector.onchange = () => {

    const tables = document.querySelector('table');
    const valore = JSON.parse(selector.value)
    tables.innerHTML =
        `
       
        <tr>
        <th>Name:</th>
        <td>${valore.name}</td>
        </tr>
        <tr>
        <th>Nickname:</th>
        <td>${valore.nickname}</td>
        </tr>
        <tr>
        <th>Occupation:</th>
        <td>${valore.occupation}</td>
        </tr>
        <tr>
        <th>Status:</th>
        <td>${valore.status}</td>
        </tr>
        <tr>
        <th>Img:</th>
        <td><img src=${valore.img}></img></td>
        </tr>
        <tr>
        <th>Birthday:</th>
        <td>${valore.birthday}</td>
        </tr>
        <tr>
        <th>Appearance:</th>
        <td>${valore.appearance}</td>
        </tr>
        <tr>
        <th>Portrayed:</th>
        <td>${valore.portrayed}</td>
        </tr>
        <tr>
        <th>Category:</th>
        <td>${valore.category}</td>
        </tr>
        
        `



}

