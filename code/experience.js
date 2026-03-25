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
                    <p class="award-title" style="color:#2e3971"><strong>${pub.conference}</strong></p>
                    <p class="authors"> ${pub.title}</a>, ${pub.authors}</p>
                    <p class="date">${pub.date}</p>


                </div>
            </div>
        </li>
        `;
        publicationsList.appendChild(listItem);
    });
}
