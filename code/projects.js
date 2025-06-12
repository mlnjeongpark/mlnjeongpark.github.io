
export async function loadProjects() {
    const response = await fetch('../yml/projects.yml');
    const yamlText = await response.text();
    const data = jsyaml.load(yamlText);

    const publicationsList = document.getElementById('projects-list');

    data.projects.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <li class="project-hover">
        <a href="${pub.link}" target="_blank" class="project-link">
          <div class="project-item">
            <div class="project-content">
              <p class="title">
                <strong>${pub.title}</strong>
              </p>
              <p class="authors">${pub.authors}</p>
              <p class="conference">${pub.conference}</p>
            </div>
          </div>
        </a>
      </li>
      
        `;
        publicationsList.appendChild(listItem);
    });
}
