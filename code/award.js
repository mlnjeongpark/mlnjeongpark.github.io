export async function loadAward() {
    const response = await fetch('yml/award.yml');
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);

    const publicationsList = document.getElementById('award-list');

    data.award.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <li>
            <div class="publication-item">
                <div class="publication-content">
                    
                    <p class="award-title"> <strong>${pub.title}</strong>, ${pub.authors}</p>
                    <p class="date">${pub.date}</p>
                </div>
            </div>
        </li>
        `;
        publicationsList.appendChild(listItem);
    });
}
