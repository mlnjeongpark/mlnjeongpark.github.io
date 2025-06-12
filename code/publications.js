export async function loadPublications() {
    const response = await fetch('yml/publications.yml');
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);

    const publicationsList = document.getElementById('publications-list');

    data.publications.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <li class="publication-hover">
            <div class="publication-item">
                <div class="image-wrapper">
                <img src="${pub.image}" alt="Paper Image" class="paper-image">
                <div class="image-label">${pub.label || ''}</div>
                </div>
                <div class="publication-content">
                    <p class="title">
                        <a href="${pub.link}" class="link" target="_blank">
                            <strong>${pub.title}</strong>
                        </a>
                    </p>
                    <p class="authors">${pub.authors}</p>
                    <p class="conference">${pub.conference}</p>
                    <span style="font-size: 0.9rem;">
                    <a href="${pub.link}" target="_blank"> [Paper] </a> 
                    ${pub.code
                        ? `<a href="${pub.code}" target="_blank" rel="noopener noreferrer">[Code]</a>`
                        : `<span> </span>`}
                    ${pub.project
                        ? `<a href="${pub.project}" target="_blank" rel="noopener noreferrer">[Project Page]</a>`
                        : `<span> </span>`}
                      

                    </span>
                    <!-- <p class="description">${pub.description}</p> !-->
                </div>
            </div>
        </li>
        `;
        publicationsList.appendChild(listItem);
    });
}