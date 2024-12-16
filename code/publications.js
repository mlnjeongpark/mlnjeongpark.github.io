export async function loadPublications() {
    const response = await fetch('yml/publications.yml');
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);

    const publicationsList = document.getElementById('publications-list');

    data.publications.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <li>
            <div class="publication-item">
               <!-- <img src="${pub.image}" alt="Paper Image" class="paper-image"> --!>
                <div class="publication-content">
                    <p class="title">
                        <a href="${pub.link}" class="link" target="_blank">
                            <strong>${pub.title}</strong>
                        </a>
                    </p>
                    <p class="authors">${pub.authors}</p>
                    <p class="conference">${pub.conference}</p>
                    <!-- <p class="description">${pub.description}</p> !-->
                </div>
            </div>
        </li>
        `;
        publicationsList.appendChild(listItem);
    });
}
