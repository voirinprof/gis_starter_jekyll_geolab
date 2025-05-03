# Jekyll Leaflet Map Demo

This project demonstrates a simple website built with [Jekyll](https://jekyllrb.com/) using the **Minima** theme. It includes:

- A custom CSS file
- A dynamic interactive map using [Leaflet.js](https://leafletjs.com/)
- JSON data for geographic points (locations in Montréal)
- Ready-to-deploy setup for GitHub Pages

## 🌐 Live Preview

> Once deployed to GitHub Pages, your site will be available at:
> `https://your-username.github.io/your-repo-name`

## 🗺 Features

- Built with [Jekyll](https://jekyllrb.com/) and the [Minima theme](https://github.com/jekyll/minima)
- Leaflet.js map with markers loaded from a local JSON file
- Custom styling via `custom.css`
- Modular structure with HTML includes and layout templates

## 📁 Project Structure

```
.
├── _config.yml                # Jekyll configuration
├── _includes/
│   └── head.html              # <head> HTML with Leaflet and CSS links
├── _layouts/
│   └── default.html           # Base layout for the site
├── assets/
│   ├── css/
│   │   └── custom.css         # Custom styles
│   ├── js/
│   │   └── main.js            # Leaflet logic loading JSON
│   └── data/
│       └── api-data.json      # JSON file with map markers
├── index.md                   # Main page with the map
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/voirinprof/gis_starter_jekyll_geolab.git
cd gis_starter_jekyll_geolab
```

### 2. Install dependencies (optional, for local development)

If you want to preview the site locally:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser.

### 3. Deploy to GitHub Pages

Push this project to a GitHub repository and enable **GitHub Pages** in the repository settings (choose the main branch and root folder `/`).

Jekyll will automatically build and serve the site via GitHub Pages.

## View in Codespaces

When you open the project in Codespaces, use the command : `bundle exec jekyll serve --port 4000` to view the website.

## 🧩 Customize the Map

To add or edit map markers, open the file:

```
assets/data/api-data.json
```

Example:

```json
{
  "locations": [
    {
      "name": "Old Port",
      "lat": 45.507,
      "lng": -73.554,
      "description": "A historic area by the river."
    }
  ]
}
```

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).