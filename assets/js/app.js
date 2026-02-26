// AppConfig object for configuration
const AppConfig = {
    apiUrl: 'data/arcs.json',
    animationDuration: 400,
};

// AppState object for centralized state management
const AppState = {
    view: 'list',
    filter: '',
    searchTerm: '',

    setView(view) {
        this.view = view;
    },
    setFilter(filter) {
        this.filter = filter;
    },
    setSearchTerm(term) {
        this.searchTerm = term;
    },
    getFilteredData(data) {
        return data.filter(item => {
            return item.title.includes(this.searchTerm) &&
                (this.filter ? item.category === this.filter : true);
        });
    },
};

// DataManager for data loading
const DataManager = {
    async loadData() {
        const response = await fetch(AppConfig.apiUrl);
        const data = await response.json();
        return data;
    },
};

// ArcRenderer for creating card and table elements
const ArcRenderer = {
    createCard(arc) {
        const card = document.createElement('div');
        card.className = 'arc-card';
        card.innerHTML = `<h3>${arc.title}</h3><p>${arc.description}</p>`;
        return card;
    },
    createTable(arc) {
        const table = document.createElement('table');
        const row = table.insertRow();
        row.insertCell(0).innerText = arc.title;
        row.insertCell(1).innerText = arc.description;
        return table;
    },
};

// UIController for managing all event listeners and interactions
const UIController = {
    init() {
        // Initialize event listeners
        document.getElementById('viewSelector').addEventListener('change', this.onViewChange);
        document.getElementById('filterSelector').addEventListener('change', this.onFilterChange);
        document.getElementById('searchInput').addEventListener('input', this.onSearch);
    },
    onViewChange(event) {
        AppState.setView(event.target.value);
    },
    onFilterChange(event) {
        AppState.setFilter(event.target.value);
    },
    onSearch(event) {
        AppState.setSearchTerm(event.target.value);
    },
};

// AnimationEngine for starfield and counter animations
const AnimationEngine = {
    startStarfield() {
        // Logic for starfield animation
    },
    startCounterAnimation() {
        // Logic for counter animations
    },
};

// Main initialization function
async function init() {
    UIController.init();
    const data = await DataManager.loadData();
    const filteredData = AppState.getFilteredData(data);
    // Render the data
    filteredData.forEach(arc => {
        document.getElementById('arcContainer').appendChild(ArcRenderer.createCard(arc));
    });
    AnimationEngine.startStarfield();
}

// Bootstrap the application
init();