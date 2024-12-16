export async function loadExperience() {
    const response = await fetch('yml/experience.yml');
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);

    const publicationsList = document.getElementById('experience-list');

    data.experience.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <li>
            <div class="publication-item">
                <div class="publication-content">
                    <p class="title">
                            <strong>${pub.title}</strong>
                        </a>
                    </p>
                    <p class="conference">${pub.conference}</p>
                </div>
            </div>
        </li>
        `;
        publicationsList.appendChild(listItem);
    });
}
